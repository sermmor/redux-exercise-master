import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/member';

export const memberRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBER_REQUEST_COMPLETED,
    payload: members
  }
}

export const updateNameOrganization = (nameOrganization: string) => {
  return {
    type: actionsEnums.UPDATE_MEMBER_ORGANIZATION,
    payload: nameOrganization
  }
}

export const memberRequest = (nameOrganization: string) => (dispatcher) => {
  const promise = memberAPI.getAllMembers(nameOrganization);

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}
