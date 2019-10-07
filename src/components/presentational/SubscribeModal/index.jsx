import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { Field, Formik, Form } from 'formik'

import { HeadingIcon } from '../HeadingIcon'

import { Modal } from '@royalnavy/react-component-library'
import { Formik as FormikComponents } from '@royalnavy/react-component-library'
import { IconPerson, IconCreditCard } from '@royalnavy/icon-library'

import './SubscribeModal.scss'

export const SubscribeModal = withRouter(
  ({
    history,
    id,
    initialValues,
    handleDelete,
    handleCreate,
    handleUpdate,
  }) => {
    const [formValues, setFormValues] = useState(initialValues)

    const primaryButton = {
      onClick: _ => {
        id ? handleUpdate(formValues) : handleCreate(formValues)
        history.push(`/subscriptions/${id}`)
      },
      children: `${id ? 'Update' : 'Add'} Subscriber`,
    }

    const secondaryButton = {
      onClick: _ => history.push('/subscriptions'),
      children: 'Cancel',
    }

    const tertiaryButton = id
      ? {
          onClick: _ => {
            handleDelete()
            history.push('/subscriptions')
          },
          children: 'Delete Subscriber',
          variant: 'tertiary',
          color: 'danger',
        }
      : null

    const { TextInput, Select, NumberInput, Switch } = FormikComponents

    const frequencyOptions = [
      { label: 'Daily', value: 'daily' },
      { label: 'Weekly', value: 'weekly' },
      { label: 'Bi-weekly', value: 'bi-weekly' },
      { label: 'Monthly', value: 'monthly' },
    ]

    const paymentTypeOptions = [
      { label: 'Direct Debit', value: 'Direct Debit' },
      { label: 'Cash', value: 'Cash' },
    ]

    return (
      <Modal
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        tertiaryButton={tertiaryButton}
        isOpen={true}
        className="subscribe-modal"
      >
        <header className="subscribe-modal__header">
          <div>
            <HeadingIcon>
              <IconPerson />
            </HeadingIcon>
            <span>Personal Information</span>
            <p>Enter the Subscriber's name and contact information.</p>
          </div>
          <div>
            <HeadingIcon>
              <IconCreditCard />
            </HeadingIcon>
            <span>Subscription Details</span>
            <p>Manage the size and frequency of the Subscriber's payments.</p>
          </div>
        </header>
        <div className="subscribe-modal__body">
          <Formik
            initialValues={initialValues}
            render={({ setFieldValue }) => {
              const onChange = e => {
                const {
                  target: { name, value },
                } = e

                setFieldValue(name, value)

                setFormValues({
                  ...formValues,
                  [name]: value,
                })
              }

              return (
                <Form
                  style={{ display: 'flex' }}
                  className="subscribe-modal__form"
                >
                  <div style={{ width: '50%', marginRight: '1rem' }}>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Field
                          component={TextInput}
                          name="firstName"
                          label="First Name"
                          onChange={onChange}
                        />
                      </div>
                      <div style={{ paddingLeft: '.5rem' }}>
                        <Field
                          style={{ paddingLeft: '.5rem' }}
                          component={TextInput}
                          name="lastName"
                          label="Last Name"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <Field
                      component={TextInput}
                      name="email"
                      label="Email"
                      onChange={onChange}
                    />
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Field
                          component={TextInput}
                          name="contactNumber"
                          label="Contact Number"
                          onChange={onChange}
                        />
                      </div>
                      <div style={{ paddingLeft: '.5rem' }}>
                        <Field
                          component={TextInput}
                          name="handle"
                          label="Slack Username"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      width: '50%',
                    }}
                  >
                    <Field
                      component={NumberInput}
                      min={1}
                      max={10}
                      name="amount"
                      label="Subscription"
                      onChange={onChange}
                    />
                    <Field
                      name="frequency"
                      component={Switch}
                      options={frequencyOptions}
                      onChange={onChange}
                    />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div>
                        <Field
                          component={Select}
                          options={paymentTypeOptions}
                          name="paymentType"
                          label="Payment Type"
                          onChange={onChange}
                        />
                      </div>
                      <div style={{ paddingLeft: '.5rem' }}>
                        <Field
                          component={TextInput}
                          name="startDate"
                          label="Start Date"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              )
            }}
          />
        </div>
      </Modal>
    )
  }
)
