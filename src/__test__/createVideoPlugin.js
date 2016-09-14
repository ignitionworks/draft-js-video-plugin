import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { EditorState, DefaultDraftBlockRenderMap } from 'draft-js';
import { Map } from 'immutable';
import sinon from 'sinon';

describe('CreateVideoPlugin',() => {
  it('with an empty plugins list provided', () => {
       expect(true).to.eq(true);
  });
});