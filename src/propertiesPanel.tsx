import { createForm } from '@formily/core'
import { FormProvider, Field, FormConsumer } from '@formily/react'
import { FormButtonGroup, FormItem, FormLayout, Input, Submit } from '@formily/antd'
import '@formily/antd/dist/antd.css';
import 'antd/dist/antd.css';
import { useMemo } from 'react';
import React from 'react';
import Color from "./components/color"
import { InputNumber } from 'antd';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group

const Components: any = {
    Input, Color, InputNumber, CheckboxGroup, Checkbox
}
const getComponentByName = (name: string) => {
    let component = null
    for (const key in Components) {
        if (key === name) {
            component = Components[key]
        }
    }
    return component
}

const PropertiesPanel = ({ id, type, fields, update }: any) => {
    const form = useMemo(
        () =>
            createForm(),
        [fields],
    );
    return (
        <div className="PropertiesPanel">

            <FormProvider form={form}>
                <h2>{type}</h2>
                <FormLayout layout="vertical">
                    {
                        fields.map((field: any) => {
                            return (
                                <div key={field.key}>
                                    <Field
                                        name={field.name}
                                        title={field.title}
                                        required
                                        initialValue={field.value}
                                        decorator={[FormItem]}
                                        component={[getComponentByName(field.component)]}
                                    /></div>
                            )
                        })
                    }
                </FormLayout>
                <FormButtonGroup>
                    <Submit hidden={fields.length < 1} onSubmit={(values) => {
                        update(id, type, values)
                    }}>应用</Submit>
                </FormButtonGroup>
            </FormProvider>
        </div>
    )
}
export default PropertiesPanel