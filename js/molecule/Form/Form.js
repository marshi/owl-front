import * as React from "react";
import {InputFormRow} from "../InputFormRow/InputFormRow";
import {owlApiDomain} from "../../../env/dev"
import {FormSubmit} from "../../atom/FormSubmit/FormSubmit";

export class Form extends React.Component {

  render() {
    console.log("props");
    console.log(this.props);
    return (
      <form>
        <InputFormRow label="タイトル" name="title"/>
        <FormSubmit value="登録" path="/aa" params='{"p": "aiueo"}'
                    onSubmit={()=>this.props.post(
                      owlApiDomain + "/tickets",
                      {
                        "title": "タイトル",
                        "content": "content",
                        "projectId": "1"
                      }
                    )}
        />
      </form>
    );
  }

}