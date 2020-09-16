import { Address } from '@graphprotocol/graph-ts'

/*
 * Called when an app proxy is detected.
 *
 * Return the name of a data source template if you would like to create it for a given appId.
 * Return null otherwise.
 *
 * The returned name is used to instantiate a template declared in the subgraph manifest file,
 * which must have the same name.
 */
export function getTemplateForApp(appId: string): string | null {
  const AGREEMENT_OPEN = '0x34c62f3aec3073826f39c2c35e9a1297d9dbf3cc77472283106f09eee9cf47bf'
  const AGREEMENT_PRECEDENCE_CAMPAIGN = '0x15a969a0e134d745b604fb43f699bb5c146424792084c198d53050c4d08126d1'
  const AGREEMENT_1HIVE = '0x41dd0b999b443a19321f2f34fe8078d1af95a1487b49af4c2ca57fb9e3e5331e'

  const DELAY_OPEN = '0x770ca1460333b5cf9399ad6cec51fe75652c4de94e54bd50297a06c85445175e'

  if (appId == AGREEMENT_OPEN || appId == AGREEMENT_PRECEDENCE_CAMPAIGN || appId == AGREEMENT_1HIVE) {
    return 'Agreement'
  } else if (appId == DELAY_OPEN) {
    return 'DisputableDelay'
  } else {
    return null
  }
}

export function onOrgTemplateCreated(orgAddress: Address): void {}
export function onAppTemplateCreated(appAddress: Address, appId: string): void {}
export function onTokenTemplateCreated(tokenAddress: Address): void {}
