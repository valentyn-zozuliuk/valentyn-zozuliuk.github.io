export interface Article {
    title: string;
    description: string;
    type: ArticleTypes;
    createdBy: {
        image: string,
        name: string
    };
    updatedDate: Date;
}

export interface ArticleTypeFilter {
    name: string;
    code: ArticleTypes | string;
    selected: boolean;
}

export interface ArticleOrderFilter {
    name: string;
    code: ArticleOrders;
    selected: boolean;
}

export enum ArticleTypes {
    PRODUCTIVITY = 'PRODUCTIVITY',
    MEDIA = 'MEDIA',
    BUSINESS = 'BUSINESS'
}

export enum ArticleOrders {
    DESC = 'DESC',
    ASC = 'ASC'
}
