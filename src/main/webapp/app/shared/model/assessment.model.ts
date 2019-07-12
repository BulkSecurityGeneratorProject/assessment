import { IAssessmentResponse } from 'app/shared/model/assessment-response.model';

export interface IAssessment {
  id?: number;
  applicationName?: string;
  assetOwner?: string;
  techDivisionManager?: string;
  applicationVersion?: string;
  assessment?: IAssessmentResponse;
}

export class Assessment implements IAssessment {
  constructor(
    public id?: number,
    public applicationName?: string,
    public assetOwner?: string,
    public techDivisionManager?: string,
    public applicationVersion?: string,
    public assessment?: IAssessmentResponse
  ) {}
}
