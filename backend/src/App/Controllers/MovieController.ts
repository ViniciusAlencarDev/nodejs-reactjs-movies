import Movie from "../Models/Movie";
import { ResponseModelType } from "../../types/global";
import { Request, Response } from "express";

const responseModel: ResponseModelType = {
    success: false,
    data: {},
    error: []
}

export default {

    async list(req: Request, res: Response): Promise<Response> {
        const response = { ...responseModel }
        const { page } = req.query;
        let pageTratative = page ? parseInt(page?.toString()) : 1;
        pageTratative = pageTratative <= 0 ? 1 : pageTratative;

        const limit = 10;
        const offset = limit * (pageTratative - 1);

        try {
            const total: number = (await Movie.find()).length;
            const data: Array<any> = await Movie.find().skip(offset).limit(limit);

            response.success = !!data;
            response.data = {
                page: pageTratative,
                totalPages: Math.ceil(total / limit),
                limitPerPage: limit,
                data
            };
        } catch (error: any) {
            response.error = [error];
            return res.status(500).json(response);
        }

        return res.status(200).json(response);
    }

}
