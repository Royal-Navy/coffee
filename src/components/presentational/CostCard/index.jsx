import React from 'react'
import { Field, Formik, Form } from 'formik'
import { formatCurrency } from '../../../helpers'

import {
  Badge,
  Button,
  Formik as FormikComponents,
} from '@royalnavy/react-component-library'

import { IconCreditCard } from '@royalnavy/icon-library'

import { HeadingIcon } from '../HeadingIcon'

export const CostCard = ({ total, nextMonth, handleCreate }) => {
  const { TextInput, Select } = FormikComponents

  const purchaseOptions = [
    { label: 'Coffee', value: 'Coffee' },
    { label: 'Biscuits', value: 'Biscuits' },
  ]

  return (
    <article className="costcard">
      <header className="costcard__header">
        <span className="costcard__label">
          <Badge color="neutral" colorVariant="faded">
            Overview
          </Badge>
        </span>
        <div>
          <span>Current Kitty</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <div>
          <span>Subs Next Month</span>
          <span className="is-positive">+{formatCurrency(nextMonth)}</span>
        </div>
      </header>
      <div className="costcard__body">
        <span className="costcard__title">
          <HeadingIcon>
            <IconCreditCard />
          </HeadingIcon>
          Add Costs
        </span>
        <Formik onSubmit={handleCreate}>
          <Form className="costcard__form">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <Field
                  component={Select}
                  name="purchase"
                  label="Purchase"
                  options={purchaseOptions}
                />
              </div>
              <div style={{ paddingLeft: '.5rem' }}>
                <Field
                  style={{ paddingLeft: '.5rem' }}
                  component={TextInput}
                  name="price"
                  label="Price"
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="submit" variant="primary" className="costcard__btn">
                Add Cost
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </article>
  )
}
