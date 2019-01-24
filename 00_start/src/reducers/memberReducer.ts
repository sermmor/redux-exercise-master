import {actionsEnums} from '../common/actionsEnums';
import {MemberEntity} from '../model/member';

export interface MemberState {
  members:  MemberEntity[],
  nameOrganization: string,
}

const defaultMemberState = () : MemberState => ({
  members: [],
  nameOrganization: "lemoncode",
})

export const memberReducer =  (state : MemberState = defaultMemberState(), action) => {
  switch (action.type) {
    case actionsEnums.MEMBER_REQUEST_COMPLETED:
      return handleMemberRequestCompletedAction(state, action.payload);
    case actionsEnums.UPDATE_MEMBER_ORGANIZATION:
      return handleUpdateMemberOrganizationAction(state, action.payload);
  }

  return state;
};

const handleMemberRequestCompletedAction = (state : MemberState, members: MemberEntity[]) => ({
  ...state,
  members,
})

const handleUpdateMemberOrganizationAction = (state: MemberState, nameOrganization: string) => ({
  ...state,
  nameOrganization,
})