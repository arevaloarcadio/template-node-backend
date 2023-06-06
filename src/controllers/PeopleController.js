import { People } from '../models'
import { validateRequest, paginatedQueryResponse } from '../utils'

export const index = async (req, res) => {
    const { filter } = req.query

    const query = People.query()

    if (filter) {
        if (filter.dni) {
            query.where('dni', 'like', `%${filter.dni}%`)
        }
        if (filter.name) {
            query.where('name', 'like', `%${filter.name}%`)
        }
        if (filter.last_name) {
            query.where('last_name', 'like', `%${filter.last_name}%`)
        }
    }

    return paginatedQueryResponse(query, req, res)
}

export const store = async (req, res) => {
    const reqErrors = await validateRequest(req, res);
    console.log(req.body)
    if (!reqErrors) {
        const model = await People.query().insert({
            ...req.body,
        });

        return res.status(201).json(model)
    }
}

export const show = async (req, res) => {
    const { id } = req.params

    const model = await People.query().findById(id)

    return res.status(201).json(model)
}

export const update = async (req, res) => {
    const reqErrors = await validateRequest(req, res);

    if (!reqErrors) {
        const { id } = req.params

        const model = await People.query().updateAndFetchById(id, req.body)

        return res.status(201).json(model)
    }
}

export const destroy = async (req, res) => {
    let id = parseInt(req.params.id)
    const model = await People.query().findById(id).delete();

    return res.json(model);
}
