import React from 'react';
import DateDisplay from '../date-display';
import BucketlistModal from './bucketlist-modal';
import ConfirmDelete from '../confirm-delete';

export default function Bucketlist(props) {
  return (
    <a
      href=""
      onClick=""
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-2 hidden-sm-down">
            <DateDisplay date={props.bucketlist.created_at} />
          </div>
          <div className="col-md-10 col-sm-12">
            <div className="d-flex w-100 justify-content-between">
              <div>
                {props.bucketlist.updated_at &&
                <small className="text-muted">
                  <strong>Updated: </strong>
                  {props.bucketlist.updated_at.substring(4)}
                </small>
                }
              </div>
              <div>
                <div
                  className="fa fa-lg fa-pencil-square-o mr-2"
                  data-toggle="modal"
                  data-target={`#${props.bucketlist.id}`}
                />
                <div
                  className="fa fa-lg fa-trash-o ml-2"
                  data-toggle="modal"
                  data-target={`#deleteBucketModel${props.bucketlist.id}`}
                />
              </div>
            </div>
            <br />
            <h4 className="mb-1">{props.bucketlist.title}</h4>
            <h6>{props.bucketlist.description}</h6>
          </div>
        </div>
      </div>
      <BucketlistModal
        title="Edit a bucketlist"
        action="Submit"
        theId={props.bucketlist.id}
        bucketlist={props.bucketlist}
        bucketlistTransaction={props.bucketlistTransaction}
      />
      <ConfirmDelete
        theId={`deleteBucketModel${props.bucketlist.id}`}
        bucketlist={props.bucketlist}
        bucketlistTransaction={props.bucketlistTransaction}
      />
    </a>
  );
}
