import { DataSource } from "typeorm";
import { Topic } from "./entities/topic.entity";
import { constants } from "src/constants/constants";

export const topicProviders = [
{
    provide: constants.topicsRepository,

    useFactory:(dataSource: DataSource) => dataSource.getRepository(Topic),

    inject: [constants.dataSource]

},
];