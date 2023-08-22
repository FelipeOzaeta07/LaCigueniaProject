export abstract class Mapper <I, O>{
    abstract converterEntityToModel(params: I): O;
    abstract converterModelToEntity(params: O): I;
}