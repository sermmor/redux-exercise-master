import { connect } from 'react-redux';
import { memberRequest, updateNameOrganization } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer.members,
      nameOrganization: state.memberReducer.nameOrganization,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (nameOrganization : string) => {return dispatch(memberRequest(nameOrganization))},
    onChangeNameOrganization: (nameOrganization: string) => {dispatch(updateNameOrganization(nameOrganization))},
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
