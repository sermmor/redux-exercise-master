import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'

interface Props {
  members: Array<MemberEntity>;
  nameOrganization: string;
  nameOrganization22: string;

  loadMembers: (nameOrganization : string) => any;
  onChangeNameOrganization: (nameOrganization: string) => void;
}

export const MemberAreaComponent = (props : Props) => {
  return (
  <div>
      <input type="text" 
          value={props.nameOrganization} 
          onChange={(e) => props.onChangeNameOrganization(e.target.value)}
      />
      <input type="submit"
              value="load"
              className="btn btn-default"
              onClick={() => props.loadMembers(props.nameOrganization)}
      />
      <br/>
      <MemberTableComponent members={props.members}/>
  </div>
  );
}
