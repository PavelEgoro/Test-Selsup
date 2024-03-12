import { ChangeEvent, Component } from 'react';

export interface Param {
  id: number;
  name: string;
  type: 'string';
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  model: Model;
}

class ParamEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      model: props.model,
    };
  }

  handleChange = (paramId: number, value: string) => {
    const newParamValues = this.state.model.paramValues.map(paramValue =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue,
    );
    this.setState({ model: { ...this.state.model, paramValues: newParamValues } });
  };

  getModel = (): Model => {
    return this.state.model;
  };

  renderParamInput = (param: Param) => {
    const paramValue = this.state.model.paramValues.find(pv => pv.paramId === param.id)?.value || '';
    return (
      <div key={param.id}>
        <label>
          {param.name}:
          <input
            type="text"
            value={paramValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange(param.id, e.target.value)}
          />
        </label>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.params.map(param => this.renderParamInput(param))}
      </div>
    );
  }
}


export default ParamEditor;


