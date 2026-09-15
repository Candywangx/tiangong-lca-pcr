---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.films-and-other-video-content-on-discs-tape-or-other-physical-media
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Films and other video content on discs, tape or other physical media

## 1. Scope and Applicability

This PCR governs foreground data production for physical carriers containing recorded films or other video content, including music videos, supplied as goods. It excludes blank reference products, audio-only media, software, playback equipment, online video, retail services, reproduction services sold without ownership of the resulting goods, and originals sold with all property rights. Manufacturing operations needed to produce the covered goods remain included. The official scope follows `un-cpc-3-0-structure-2025` and `un-cpc-3-0-explanatory-notes-2025`.

The representative route is single-sided, single-layer DVD-Video replication from purchased polycarbonate and a purchased finished nickel stamper. Recording onto purchased DVD-R is a conditional alternative. NIST distinguishes molded ROM from dye-based recordable discs and shows bonded DVD construction (`nist-sp-500-252-2003`, sections 3.1–3.4). EPA supports molding, metallization, printing and packaging process decomposition (`us-epa-life-cycle-cd-dvd`).

For videotape, Blu-ray, Video-CD or another carrier, retain the category rules but instantiate the actual reference exchange, component bill, recording process, quality tests and waste streams before dataset use. DVD amounts and layer structures cannot be transferred to these media. A dataset covers one homogeneous carrier, edition and route; mixed portfolios require separate products and explicit aggregation weights.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.films-and-other-video-content-on-discs-tape-or-other-physical-media |
| classification_refs | CPC 3.0: 47620; classification context only |
| covered_products | Physical carriers containing recorded films or other video content, supplied as goods |
| excluded_products | Blank media; audio-only media; software; players; online video; retail/reproduction services; originals sold with all property rights |
| representative_product | Saleable single-sided, single-layer DVD-Video of one declared edition |
| production_route | Physical-edition preparation; replication with a purchased stamper or conditional DVD-R recording; verification; packing |
| market_state | Finished readable recorded carrier at producer dispatch gate; packaging separately measured |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared video edition on a readable physical carrier at the producer gate |
| How much | 1 kg net recorded carrier; also report corresponding copy count and playable content duration |
| How well | Correct complete edition and language; declared format, compatibility and quality acceptance tests passed |
| How long or cycle | One production and release cycle; no assumed viewing count or archival lifetime |
| reference_flow_link | `reference_video_dvd` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Prerecorded video DVD |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Carrier/recording format; edition identifier; duration per copy; language; sides/layers; read-only or recordable state; compatibility and region restrictions; acceptance test and sampling plan; net mass per carrier; copies per sale unit; packaging bill and mass; route; master/stamper handover boundaries; site/geography/reporting period; yield/rejects; electricity delivery conditions; upstream coverage and exclusions |

Required qualifiers shall be supplied in dataset metadata or linked production records. This mass-based declared unit supports manufacturing exchange; equal mass does not establish equivalent viewing service. A viewing-hour comparison requires compatible content quality, viewing counts, devices, distribution and end-of-life modules (`shehabi-video-streaming-2014`, Approach and DVD system assumptions).

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_net_mass | Reference and intermediates | Mass | kg | Weigh bare recorded carriers. Exclude cases, inserts, wrap and shipping boxes from the denominator; retain their masses as inputs. |
| mu_count_mass | Count records | Mass | kg | Multiply accepted copy count by measured representative bare-carrier mass; retain sampling/calibration records. Count each carrier in a multi-disc set. |
| mu_electricity | Electricity | Net calorific value | MJ | Preserve the audited energy property; exact conversion is 1 kWh = 3.6 MJ. Record grid, voltage, losses and handover boundary; purchased electricity is distinct from primary energy. |
| mu_water | Make-up and discharge | Mass | kg | Convert volume only with a documented density and measurement conditions; never count circulating water repeatedly as external supply. |
| mu_formulations | Ink, adhesive and gas | Mass | kg | Separate purchased formulation from active or cured solids. Record chemistry and curing state. Gas-volume conversion requires density at recorded temperature and pressure. |
| mu_tools | Stamper and target service | Mass | kg | Reconcile weighed receipts, retirement and stock changes with service allocation. Raw metal alone does not represent a manufactured tool. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing authorized edited video master; purchased materials and finished stampers for replication, or complete purchased blank DVD-R for duplication |
| starting_condition_role | Foreground handover for physical-copy production; not proof of zero upstream burden |
| product_classification_scope | Recorded-video physical goods; a separate service identity does not exclude that service's manufacturing operations from producing the good |
| recursive_input_rule | Expand purchased inputs through matching upstream datasets. Do not recursively treat the finished edition as its own input. Link internal transfers once and cancel only on aggregation. |
| upstream_dataset_requirement | Link material, finished-stamper, blank-media, packaging, energy and offsite-treatment supply chains at their actual handover states; disclose time, geography, technology and completeness. Purchased blanks replace embedded carrier manufacturing, not recording. |
| disclosure | Distinguish foreground and upstream coverage. Film origination, casting, shooting, creative editing and rights acquisition are outside this physical-copy module; complete content-product claims require a separately justified contribution. Post-dispatch distribution, playback and postconsumer treatment require additional modules. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_identity | product_scope | Apply the goods boundary and exclusions in sections 1–2; originals with all rights and reproduction services have distinct category identities. | `un-cpc-3-0-explanatory-notes-2025` |
| sb_routes | disc_production | Include molding, metallization and bonding for replication. Complete blank DVD-R supply instead requires writing/finalization and upstream blank-media manufacture; do not duplicate its embedded resin, metal or adhesive as foreground inputs. | `nist-sp-500-252-2003` |
| sb_operations | site_operations | Include attributable edition preparation, test runs, rejects, rework, standby, line support and packing according to section 8 protocols. | |
| sb_stamper | purchased_tools | Include the purchased finished stamper's upstream manufacture. Onsite mastering/electroforming instead requires a measured extension covering the actual glass-master, photoresist, plating, rinse and species-specific discharge exchanges, replacing the purchased-stamper operation. | |
| sb_complete | route_instantiation | Confirm every inclusion_condition by recipe, meter or waste record. Add separate atomic exchanges for actual additional chemicals, fuels, refrigerant losses, transport and treatment; absence from this representative list never proves zero use. | |
| sb_supply | upstream_links | Include inbound transport and offsite treatment through matched supplier/route datasets and check overlap. Onsite treatment needs its own measured inventory; a waste transfer is not an elementary emission. | `us-epa-life-cycle-cd-dvd` |
| sb_claims | downstream_use | Label results as physical-copy production data. Do not infer total video-service impacts, comparative streaming benefits or viewing lifetime without compatible additional modules. | `shehabi-video-streaming-2014` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| edition_preparation | Edition preparation and file verification | required | | foreground production | Work apportioned to 1 kg final accepted carrier |
| disc_production | Disc production and quality control | required | Lot route selects replication or DVD-R recording through individual exchange conditions | foreground production | Accepted unpackaged DVD mass transferred to packing |
| packing | Packing and dispatch release | required | | conditioning | 1 kg net saleable recorded DVD, packaging separately measured |

Each card identifies one exchange. Its inclusion_condition must be evaluated for the declared lot. Document absence of conditional exchanges, reconcile internal DVD transfers by lot, and match supplier datasets to the stated physical product state. Internal transfers are bookkeeping links, not additional external outputs.

### Process: Edition preparation and file verification (`edition_preparation`)

#### Inputs

##### Product flows

###### Electricity (`edition_electricity`)

inclusion_condition: Always; attributable physical-edition preparation only

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered preparation electricity allocated over documented released copies, converted to MJ and divided by final net carrier mass M.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edition`

### Process: Disc production and quality control (`disc_production`)

#### Inputs

##### Product flows

###### Polycarbonate granulate (`polycarbonate`)

inclusion_condition: Replication route using a purchased finished stamper

- Selected flow: Polycarbonate granulate `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchased granulate consumption from stock balance / M; declare optical grade and recycled fraction; exclude internal regrind recirculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_disc`
- Sources: `nist-sp-500-252-2003`

###### Aluminium sputtering target (`aluminium_target`)

inclusion_condition: Replication route using a purchased finished stamper

- Selected flow: Aluminium sputtering target
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Lot-attributable finished-target mass from tool and stock records / M; retain unused stock and separately record retired aluminium.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tools`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Finished nickel DVD stamper (`nickel_stamper`)

inclusion_condition: Replication route using a purchased finished stamper

- Selected flow: Finished nickel DVD stamper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Manufactured stamper mass apportioned by its recorded service shots / M; supplier boundary includes mastering and electroforming.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tools`
- Sources: `us-epa-life-cycle-cd-dvd`

###### UV-curable acrylic DVD bonding adhesive (`bonding_adhesive`)

inclusion_condition: Replication with this documented bonding formulation

- Selected flow: UV-curable acrylic DVD bonding adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Wet purchased formulation consumed / M; record solids, curing process, cured retention and uncured waste separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_disc`
- Sources: `nist-sp-500-252-2003`

###### Ink (`printing_ink`)

inclusion_condition: Onsite disc printing using the declared ink formulation

- Selected flow: Ink `7627af63-d2c2-4245-906f-023847c7739f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchased ink formulation consumption / M; retain the recipe, cure state and printing method; separate different formulations in the instantiated dataset.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_disc`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Argon gas (`argon_gas`)

inclusion_condition: Argon sputtering is operated and gaseous argon crosses the handover boundary

- Selected flow: Argon gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered gas mass / M; volume conversion requires supplier density at recorded temperature and pressure.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### Process Water (`process_water`)

inclusion_condition: Purchased process water is supplied as make-up

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured fresh make-up / M; exclude circulating loop volume and disclose water quality.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Electricity (`production_electricity`)

inclusion_condition: Always; declared replication or recording route

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered line, test, standby and attributable cooling/compressed-air electricity converted to MJ / M; avoid overlapping meters.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### Unrecorded DVD-R disc (`blank_dvd_r`)

inclusion_condition: DVD-R duplication replaces replication materials for the same carrier

- Selected flow: Unrecorded DVD-R disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count of purchased blank discs consumed multiplied by measured bare-disc mass / M; link the complete blank-media supply chain.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_disc`
- Sources: `nist-sp-500-252-2003`

#### Outputs

##### Product flows

###### Unpackaged prerecorded video DVD (`unpackaged_dvd_out`)

inclusion_condition: Always; accepted carriers transferred to packing

- Selected flow: Unpackaged prerecorded video DVD
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured accepted transfer mass / M; reconcile by lot with unpackaged_dvd_in and work-in-progress stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_disc`

##### Waste flows

###### Waste polycarbonate molding sprues (`polycarbonate_sprue_waste`)

inclusion_condition: Segregated clean sprues leave the replication boundary

- Selected flow: Waste polycarbonate molding sprues
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed external polycarbonate sprue scrap / M; internal regrind remains internal.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Rejected composite DVD discs (`dvd_reject_waste`)

inclusion_condition: Irrecoverable recorded or partly processed discs are discarded, including packing rejects returned to this ledger

- Selected flow: Rejected composite DVD discs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed composite disc rejects / M; record constituent bill, cure state and receiver; exclude recovered rework.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Retired nickel DVD stamper (`nickel_stamper_waste`)

inclusion_condition: A finished nickel stamper retires and leaves the site

- Selected flow: Retired nickel DVD stamper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed retired stamper mass apportioned consistently with its actual service / M.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tools`

###### Aluminium Scrap (`aluminium_target_scrap`)

inclusion_condition: Separated aluminium from a retired target leaves the site; no backing plate or mixed waste included

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed segregated aluminium scrap / M; reconcile target erosion, remaining stock and scrap.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tools`

###### Waste uncured acrylic bonding adhesive (`uncured_adhesive_waste`)

inclusion_condition: Uncured bonding adhesive is separately discarded

- Selected flow: Waste uncured acrylic bonding adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed uncured adhesive sent to treatment / M; exclude cured adhesive retained on discarded discs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Noncontact cooling-water blowdown (`cooling_blowdown`)

inclusion_condition: Noncontact cooling blowdown crosses the boundary for offsite treatment

- Selected flow: Noncontact cooling-water blowdown
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured blowdown mass / M, with chemistry and receiving treatment recorded; direct discharge requires separate elementary species.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

##### Elementary flows

###### Argon emitted to air (`argon_to_air`)

inclusion_condition: Verified argon release from the sputtering system to ambient air

- Selected flow: Argon emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Verified supplied argon less stock increase and recovered gas / M; declare receiving compartment and balance evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

###### water vapour (`water_vapour`)

inclusion_condition: Evaporative water release occurs; receiving air subcompartment is unspecified

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured or justified evaporative loss / M; unexplained water-balance residual is not automatically assigned to vapour.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`

### Process: Packing and dispatch release (`packing`)

#### Inputs

##### Product flows

###### Unpackaged prerecorded video DVD (`unpackaged_dvd_in`)

inclusion_condition: Always; internal transfer from disc_production

- Selected flow: Unpackaged prerecorded video DVD
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured internal transfer mass / M; reconcile with unpackaged_dvd_out and inventory movements.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`

###### Polypropylene DVD case (`dvd_case`)

inclusion_condition: The actual edition uses a purchased polypropylene case

- Selected flow: Polypropylene DVD case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured finished-case mass consumed / M; supplier link includes case molding, not just resin production.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Packaging, paper insert (`paper_insert`)

inclusion_condition: A purchased printed paper information leaflet is included

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured finished printed-insert mass / M; include upstream printing and paper production.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Low-density polyethylene foil (PE-LD) (`ldpe_wrap`)

inclusion_condition: The edition uses LDPE wrapping film

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured film stock consumption / M; distinguish retained wrap and segregated trim.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Sources: `us-epa-life-cycle-cd-dvd`

###### corrugated board boxes (`corrugated_box`)

inclusion_condition: Corrugated shipping boxes are used

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured finished-box mass allocated by actual contents / M; record board construction and reuse if applicable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Electricity (`packing_electricity`)

inclusion_condition: Always where electricity is used for packing and wrapping

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered packing electricity including attributable standby, converted to MJ / M.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_energy`

#### Outputs

##### Product flows

###### Prerecorded video DVD (`reference_video_dvd`)

inclusion_condition: Always; final saleable recorded DVD at dispatch

- Selected flow: Prerecorded video DVD
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: M / M = 1 kg net accepted recorded carrier; retain released counts and component-wise packaging masses separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`

##### Waste flows

###### Waste polyethylene (`polyethylene_film_waste`)

inclusion_condition: Segregated polyethylene film trim leaves the site

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed polyethylene film trim / M; record receiver and exclude mixed-polymer waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net final saleable recorded carrier, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`


## 7. Allocation and Co-product Handling

These PCR bookkeeping rules use measured production records from section 8.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_subdivide | shared_operations | Prefer separate lot meters. Allocate residual shared electricity by measured machine time multiplied by representative power and reconcile to the meter; sales revenue is not the default driver. |  |
| al_edition | edition_preparation | Spread physical-edition preparation over documented released copies in the actual campaign; reconcile repeat runs and revise the denominator. Do not assume unlimited future copies. |  |
| al_tools | stamper_service | Allocate finished-stamper manufacture and retirement by identified tool and actual service shots, including failed copies. Their burden remains with accepted output. Disclose provisional remaining service for tools still in use. |  |
| al_rework | internal_transfers | Keep rework energy and losses. Cancel internal DVD and clean-polycarbonate recirculation only in aggregate models, retaining reconciliation records. Only outgoing material is external waste. |  |
| al_scrap | recovered_material | Record actual waste transfers and treatment without automatic avoided-virgin-material credit. Any separate recycling-credit scenario requires explicit boundaries and no overlap with upstream credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_edition | edition_preparation | Edition electricity | Meter and job log | edition_id; job_id; meter_start; meter_end; preparation_hours; released_copies; campaign_id | Meter preparation workstation/server and attributable support energy; link jobs to the physical edition. | kWh; h; copy | Each job and campaign close | Complete preparation campaign including revisions | Preparation site and contracted preparation supplier | Sum attributable energy; apportion by documented released copies; normalize by M. | Meter calibration; job reports; denominator reconciliation |
| cp_disc | disc_production | Material, blank and intermediate records | Lot bill, scales and QA log | lot_id; route; recipe; grade; opening_stock; receipts; returns; closing_stock; accepted_count; rejected_count; sample_mass; rework_mass; transferred_mass | Weigh stock/consumption; count and sample-weigh carriers; identify formulations and supplied states. | kg; copy | Each lot and stock reconciliation | All production including startup, rejects and rework in the declared period | Production line and supplier handovers | Reconcile material use and accepted transfer by lot; normalize by final released net mass M. | Scale checks; supplier specifications/SDS; test results; stock ledger |
| cp_tools | disc_production | Stamper and target service | Serialized tool ledger | tool_id; material; received_mass; retired_mass; remaining_mass; shots_by_lot; recovered_mass; supplier | Weigh tools and identify lot service shots and target erosion. | kg; shot | Installation, service and retirement | Actual tool campaign with remaining-service disclosure | Replication line and tool supplier | Allocate stamper input/retirement consistently by service; reconcile target supply, retention and scrap. | Tool identity; upstream boundary; scale and shot records |
| cp_utilities | disc_production | Electricity, argon and water balances | Meter, supplier and balance records | meter_id; start; end; line_hours; gas_mass; temperature; pressure; density; water_makeup; blowdown; evaporative_loss; stock_change | Meter line electricity and fresh make-up; weigh gas or convert volume at documented conditions; close separate balances. | kWh; kg; m3; h | Each metered lot; period reconciliation | Production, idle and auxiliaries throughout the period | Line including attributable cooling and compressed-air electricity | Assign shared demand by measured drivers; exclude circulation; normalize each exchange separately. | Calibrations; bills; balance residual explanation; reference conditions |
| cp_waste | disc_production | Specific solid/liquid waste | Segregated waste ledger | stream_id; chemistry; contamination; mass; stock_change; receiver; treatment_route; transport_boundary | Weigh each distinct stream and reconcile transfers/storage; sample liquid composition as needed. | kg | Each transfer and period end | Same production period adjusted for waste stocks | Site boundary and identified receiver | Normalize each stream independently by M; distinguish waste treatment from direct releases. | Transfer records; scale calibration; waste analysis; acceptance by receiver |
| cp_packing | packing | Discs, packaging, dispatch and film trim | Packing bill and release QA | lot_id; incoming_disc_mass; released_count; net_mass_per_disc; component_mass; damaged_disc_mass; film_trim; stock_change; package_design | Weigh each component; count released carriers; reconcile transfers, rework and dispatch. | kg; copy | Each packing lot and dispatch release | All attributable packing and rejects in the period | Packing line and dispatch gate | Normalize components by bare-carrier M; route damaged discs to the disc reject/rework ledger once. | Packaging specifications; calibrated samples; dispatch/stock reconciliation |
| cp_pack_energy | packing | Packing electricity | Submeter and line log | meter_start; meter_end; runtime; standby; lot_id | Meter wrapping, sealing and packing including attributable standby. | kWh; h | Each lot or allocated meter interval | Same packing period | Packing line | Sum or allocate by measured energy drivers; divide by M. | Calibration; line logs; reconciliation to purchased electricity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_net_output | All rows | M = accepted released copy count × measured bare-carrier mass for one homogeneous edition; require M > 0. | cp_disc; cp_packing | Final net carrier mass M in kg |  |
| calc_normalize | External exchanges | q_i = attributable period quantity Q_i / M. Apply allocation before normalization. Reference product is exactly 1 kg by definition. | Relevant protocol; M | Exchange per 1 kg net carrier |  |
| calc_stocks | Material consumption | Q = opening stock + receipts - closing stock - unused supplier returns. Reconcile retained material, losses and waste; track internal recirculation separately. | cp_disc; cp_tools; cp_packing; cp_waste | Net input and material balance |  |
| calc_transfer | Internal DVD transfers | Transfer out = transfer in after documented inter-period inventory adjustment; count returned rework once. | cp_disc; cp_packing | Linked intermediate mass |  |
| calc_energy | Electricity | E_MJ = 3.6 × E_kWh; sum preparation, production and packing after checking meter-boundary overlap. | cp_edition; cp_utilities; cp_pack_energy | Purchased electricity MJ |  |
| calc_tool_share | Stamper | Lot tool share = tool burden × lot shots / documented total service shots. Disclose and update provisional remaining-service estimates. | cp_tools | Lot-attributable tool input/waste |  |
| calc_water_balance | Water and vapour | Make-up + opening stock = blowdown + evaporation + other measured departures + closing stock. Explain residuals with measurement uncertainty; do not assign them automatically to evaporation. | cp_utilities; cp_waste | Verified water balance and vapour |  |
| calc_argon_balance | Argon release | Purchased gas + opening stock - closing stock - unused returns = recovered gas + verified air release. | cp_utilities | Argon release by mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | Dataset identity | Declare carrier, edition, route, handover states, period and original-content/downstream exclusions. | BOM; supplier boundaries; reference qualifiers |
| dq_measurement | All rows | Separate measured, allocated and calculated quantities with uncertainty, calibration and missing-data treatment. | Protocol-linked records and calculation workbook |
| dq_coverage | Reporting period | Cover the complete campaign or reporting period including startup and rejects; explain representativeness and extrapolation. | Campaign and meter coverage logs |
| dq_readability | Finished carriers | Retain content-integrity, readability, compatibility and defect acceptance evidence; handling guidance does not establish a guaranteed lifetime. | Site QA; nist-sp-500-252-2003 sections 4–5 |
| dq_waste | Waste and emissions | Distinguish waste transfers from environmental releases; identify chemistry, receiver and compartment. Missing identity is not zero quantity. | Transfers; analyses; balances; release records |
| dq_other_media | Non-DVD routes | Provide a complete carrier-specific exchange list and quality basis before applying these rules to tape, Blu-ray or Video-CD. | Actual carrier bill, recording route and acceptance tests |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_identity | reference_flow | Require all qualifiers, positive accepted net mass and a recorded-video good; blank and software media cannot be the final reference. | `un-cpc-3-0-explanatory-notes-2025` |
| val_route | inventory | Check one route per lot; replication materials and complete blank supply cannot both represent the same carrier manufacture. | `nist-sp-500-252-2003` |
| val_rows | flow_identity | Each row is one atomic exchange with correct type, physical state, property, unit and compartment. Keep blank UUIDs explicitly unresolved; no silent proxy substitution. |  |
| val_records | amounts | Require protocol-linked records, drivers, conversions and calculations. Reject unexplained negative quantities, missing conditional evidence and unsourced replacement defaults. |  |
| val_balances | balances | Reconcile copy counts, carrier and packaging mass, wastes, tool stocks, water/argon balances, transfers and meters against documented uncertainty; no universal percentage tolerance is prescribed. |  |
| val_quality | final_product | Require traceable content/readability tests and handling-damage records. Rejects and destroyed copies are excluded from saleable output. | `nist-sp-500-252-2003` |
| val_claims | dataset_use | Disclose upstream coverage and excluded creative-production, distribution, use and end-of-life stages; prohibit viewing-service comparisons without compatible added modules. | `shehabi-video-streaming-2014` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` for a documented site, edition and route; `background_dataset` only after independent representativeness and upstream-completeness review |
| downstream_use | Physical-media supply modelling and separately assembled video-service lifecycle models |
| allowed_use | Scaling for matching carrier, quality, route and supply boundary; explicit contribution to wider lifecycle models |
| excluded_use | Undisclosed transfer to other carriers; complete film-production claims; comparisons per viewing hour without use data; blank/software substitution |
| required_metadata | Reference qualifiers; supplier/site geography; dates; route; BOM; mass/count; boundaries; protocols; allocation; waste destinations; background links |
| required_quality_disclosure | Uncertainty, extrapolation, missing records, unresolved identities, absent external ranges, test acceptance, balance residuals and upstream completeness |
| update_trigger | Carrier/layer or packaging redesign; new chemistry; route/supplier/grid changes; campaign-denominator revision; material QA or yield change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC 3.0 structure, 30 June 2025, row 47620. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; accessed 2026-09-09 | Original CSV title/hierarchy verified; SHA-256 matches supplied cache receipt. |
| un-cpc-3-0-explanatory-notes-2025 | official_guidance | United Nations Statistics Division, CPC 3.0 explanatory notes, 30 June 2025, printed p. 261, subclass 47620. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; accessed 2026-09-09 | Original page verified: recorded-video goods, audio-only, service and original-rights distinctions. |
| us-epa-life-cycle-cd-dvd | official_guidance | US EPA, Life Cycle of a CD or DVD, poster P1001UU0, Materials Acquisition, Manufacturing and Packaging panels. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1001UU0.TXT; accessed 2026-09-09 | Original official text verified for qualitative process decomposition; no numerical defaults or lifetime ranges adopted. |
| nist-sp-500-252-2003 | official_guidance | Fred R. Byers, Care and Handling of CDs and DVDs: A Guide for Librarians and Archivists, NIST SP 500-252 / CLIR, 2003, sections 3–5, especially pp. 5–11. https://nvlpubs.nist.gov/nistpubs/legacy/sp/NISTspecialpublication500-252.pdf ; https://doi.org/10.6028/NIST.SP.500-252; accessed 2026-09-09 | Original structure text and layer diagram verified: replicated/recordable distinction, bonding and handling/readability. Guidance is not a conformance standard. |
| shehabi-video-streaming-2014 | literature | Arman Shehabi, Ben Walker and Eric Masanet, The energy and greenhouse-gas implications of internet video streaming in the United States, Environmental Research Letters 9 (2014) 054007. https://doi.org/10.1088/1748-9326/9/5/054007 ; full text https://files.ifi.uzh.ch/hilty/t/Literature_by_RQs/RQ%20100/2014_Shehabi_Walker_Masanet_Energy_and_greenhouse-gas_implications_of_internet_video_streaming_in_US.pdf; accessed 2026-09-09 | Original Approach, DVD system assumptions and Figure 1 verified; separates production, transport, viewing and devices. Historical US scenarios do not establish transferable empirical ranges. |
