import { Logger } from '@nestjs/common';
import * as client from 'cloud-config-client';
import { FILE_PROPS } from './constants.config';
export const getSpringConfig = async () => {
  const logger = new Logger(getSpringConfig.name);

  const springCloudConfPromises: Array<Promise<client.Config>> = FILE_PROPS.

  map(
    (fileName: string) =>
      client.load({
        name: fileName,
        endpoint: process.env.SPRING_CONFIG_URI,
        context: process.env,
      }),
  );

  try {
    const resultsConfig = await Promise.all(springCloudConfPromises);

    resultsConfig.forEach((resultConf, index) => {
      const configName = FILE_PROPS[index];
      logger.log(`Configuration loaded for: ${configName}`);

      const properties = resultConf.properties;
      logger.log(`Properties for ${configName}: ${JSON.stringify(properties)}`);

      Object.keys(properties).forEach((key) => {
        process.env[key] = properties[key];
      });
    });
  } catch (error) {
    logger.error(
      'Failed to load configurations from Spring Cloud Config Server:',
      error,
    );
  }
};
