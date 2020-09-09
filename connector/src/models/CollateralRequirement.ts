import { SubscriptionHandler } from '../helpers/connect-types'

import ERC20 from './ERC20'
import { formatBn } from '../helpers'
import { CollateralRequirementData, IDisputableDelayConnector } from '../types'

export default class CollateralRequirement {
  #connector: IDisputableDelayConnector

  readonly id: string
  readonly delayedScriptId: string
  readonly tokenId: string
  readonly tokenDecimals: string
  readonly actionAmount: string
  readonly challengeAmount: string
  readonly challengeDuration: string

  constructor(
    data: CollateralRequirementData,
    connector: IDisputableDelayConnector
  ) {
    this.#connector = connector

    this.id = data.id
    this.delayedScriptId = data.delayedScriptId
    this.tokenId = data.tokenId
    this.tokenDecimals = data.tokenDecimals
    this.actionAmount = data.actionAmount
    this.challengeAmount = data.challengeAmount
    this.challengeDuration = data.challengeDuration
  }

  get formattedActionAmount(): string {
    return formatBn(this.actionAmount, this.tokenDecimals)
  }

  get formattedChallengeAmount(): string {
    return formatBn(this.challengeAmount, this.tokenDecimals)
  }

  async token(): Promise<ERC20> {
    return this.#connector.ERC20(this.tokenId)
  }

  onToken(callback: Function): SubscriptionHandler {
    return this.#connector.onERC20(this.tokenId, callback)
  }
}
