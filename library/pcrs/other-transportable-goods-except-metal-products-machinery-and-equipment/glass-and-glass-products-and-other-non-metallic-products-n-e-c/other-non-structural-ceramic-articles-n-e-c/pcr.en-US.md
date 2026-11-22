---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.other-non-structural-ceramic-articles-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Glazed porcelain cabinet knob bodies from plastic forming

## 1. Scope and Applicability

This attributional PCR covers one declared SKU of fired glazed porcelain cabinet knob body, supplied without metal base, screw, spindle or adhesive. Receipt of whole purchased plastic porcelain body and whole aqueous clear glaze starts the foreground. Include plastic moulding, turning/trimming, attachment-hole formation, drying, actual biscuit and glaze firing cycles, cooling, actual finishing, inspection and packaging at the factory gate. The dedicated production campaign includes start/stop, idle, failed ware, rework, cleaning, effluent and dust controls. No plant result or process efficiency is asserted.

Exclude ceramic technical grinding media and laboratory/chemical/agricultural/packing receptacles (37291), electrical insulation (37292), sanitaryware (37210), table/kitchen/toilet articles (37221), ornamental statuettes (37222), refractory and structural ceramics (373), glass, metal knobs, finished locksets and cookware handles. Decorative colouring does not change the declared furniture fitting function; on-glaze decals, lustres, casting, dry pressing and on-site body formulation require a separate applicability assessment. A knob body cannot represent the complete installed handle. The narrow residual scope is defined by the cabinet fitting function and the exclusions above. Sources: `unsd-cpc3-2025`; `cbp-n014163-2007`; `us2197a-knobs-1841`; `jrc-ceramics-2007`.

CBP N014163 describes several cabinet hardware samples: one ceramic knob has a zinc base/cap and ceramic pulls have zinc ends; its porcelain sample is described as a decorated knob without a complete mounting bill of materials. This PCR covers the ceramic body alone. It excludes those metal parts and any later attachment, and does not claim the samples share its clear-glaze formulation or forming route. Determine Q by actual net weighing of the accepted ceramic bodies, not sample gross weight, dimensions, component value or a residual inferred from metal mass. `cbp-n014163-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.other-non-structural-ceramic-articles-n-e-c |
| classification_refs | CPC:3.0:37299; narrower |
| covered_products | Glazed porcelain cabinet knob bodies from plastic forming |
| excluded_products | Other uses, objects and routes excluded in Section 1 |
| representative_product | One accepted glazed porcelain cabinet knob body SKU |
| production_route | Purchased plastic body; moulding/trimming; drying; biscuit firing; clear glazing; glaze firing; finishing/testing/packing |
| market_state | Unassembled fired ceramic body, packed ex factory |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a ceramic cabinet gripping body for later attachment |
| How much | 1 kg |
| How well | Declared drawing, hole geometry, fired dimensions, glaze coverage, crack/warpage and strength acceptance; thresholds supplied by actual specification |
| How long or cycle | One manufacturing campaign; no installed service-life claim |
| reference_flow_link | finished_knob |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Glazed porcelain cabinet knob body |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU and drawing; porcelain body and glaze supplier/formulation/moisture; forming route; each firing and atmosphere; measured accepted net mass Q; quality specification and tests; campaign and site/period; energy provider; stocks and losses; packaging; boundary exclusions and unresolved identities |

Declare every qualifier. This mass declared unit does not establish equal gripping service, an item mass or a service life. UUID identities require direct confirmation before dataset binding.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted ceramic bodies with calibrated scales; Q excludes packaging and metal fittings and counts unique first acceptance once. Record moisture and grade; no count-to-mass assumption. |
| native_energy | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | Meter electricity separately from the supplier product identity. Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` uses MJ as reference and kWh factor 3.6: MJ = kWh × 3.6. Confirm actual supplier flow and its native property/unit before binding; mass-based supplier records do not change metered electricity into kg. |
| gas_volume | gas | Volume | m3 | Retain measured gas volume with temperature/pressure convention; native volume-property identity remains unconfirmed. Energy conversion requires matching supplier heating value and reference conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole purchased plastic porcelain body and aqueous clear glaze at receipt |
| starting_condition_role | foreground_material_receipt |
| product_classification_scope | CPC:3.0:37299; narrower |
| recursive_input_rule | Internal unfired scrap return is a transfer, not a new purchase or credit; purchased finished knob bodies cannot substitute for manufacturing |
| upstream_dataset_requirement | Match whole body/glaze supplied state, moisture, supplier and preparation boundary; do not also purchase constituent minerals already included |
| disclosure | Foreground receipt-to-packed-body gate; cradle-to-gate only after compatible upstream material, utility, transport and treatment links |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | manufacture | Include every actual operation and failure through first acceptance and packing. Retain opening/closing raw and WIP stock with inherited burdens; closing accepted finished stock stays in Q. Reconcile campaign stock corrections once. | `jrc-ceramics-2007` |
| b_extend | all exchanges | Screen actual chemistry, safety sheets and discharge monitoring; add each actual unlisted reagent, fuel, packaging component, waste and species as its own card before dataset use. Absence needs evidence; missing measurement is not zero. Transport links retain actual supplier distance, mode and load. | `jrc-ceramics-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Glazed porcelain cabinet knob bodies from plastic forming | required | Dedicated one-SKU campaign | Preparation through packing, including controls | finished_knob; Q |

Cards below are candidate atomic exchanges, conditional on actual presence except the reference output. Purchased glaze is one whole formulation; constituent assays are subaccounts. All quantities remain foreground requirements. Shared kilns or joint saleable outputs require independently reviewed allocation before use; this one-SKU method does not silently assign other products to Q.

### Process: Manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Plastic porcelain body (`body`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Plastic porcelain body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_material.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramics-2007`

###### Aqueous clear porcelain glaze (`glaze`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Aqueous clear porcelain glaze
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_material.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramics-2007`

###### Liquid tap water (`water`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Liquid tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_material.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramics-2007`

###### Electricity at plant meter (`electricity`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Electricity at plant meter
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_energy.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramics-2007`

###### Natural gas at plant meter (`gas`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Natural gas at plant meter
- Flow property / unit: Volume / m3
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_energy.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramics-2007`

###### Gypsum forming mould (`mould`)

Record attributable service from actual purchase/stock/use/retirement records, not one whole new asset per kg. No fixed lifetime is assigned.

- Selected flow: Gypsum forming mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_asset.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramics-2007`

###### Alumina kiln setter plate (`setter`)

Record attributable service from actual purchase/stock/use/retirement records, not one whole new asset per kg. No fixed lifetime is assigned.

- Selected flow: Alumina kiln setter plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_asset.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramics-2007`

###### Corrugated cardboard box (`carton`)

Record actual purchased corrugated cardboard boxes only; retain new-purchase mass separately from first non-purchase receipts and verified returns. Attribute actual consumption/service burden once using the complete stock/provenance bridge in cp_pack.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_pack.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### Polyethylene wrapping film (`film`)

Record actual purchased polyethylene film only; retain new-purchase mass separately from first non-purchase receipts and verified returns. Attribute actual consumption/service burden once using the complete stock/provenance bridge in cp_pack.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_pack.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### First non-purchase external receipt — Corrugated cardboard box (`carton_first_receipt`)

Actual first non-purchase receipt, including incoming-material packaging, independent borrowing and gifts, whether or not the upstream provider included its burden. Record incoming provenance, ownership, state and inherited burden evidence; do not mislabel as a return.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### Verified return of this site’s earlier dispatch — Corrugated cardboard box (`carton_return_received`)

Only an actual return traceable by item or documented cohort to this site’s earlier external dispatch. Match original shipment, quantity/state and new damage or additions. An unrelated loan or gift is a first receipt.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### First non-purchase external receipt — Polyethylene wrapping film (`film_first_receipt`)

Actual first non-purchase receipt, including incoming-material packaging, independent borrowing and gifts, whether or not the upstream provider included its burden. Record incoming provenance, ownership, state and inherited burden evidence; do not mislabel as a return.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### Verified return of this site’s earlier dispatch — Polyethylene wrapping film (`film_return_received`)

Only an actual return traceable by item or documented cohort to this site’s earlier external dispatch. Match original shipment, quantity/state and new damage or additions. An unrelated loan or gift is a first receipt.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Glazed porcelain cabinet knob body (`finished_knob`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Glazed porcelain cabinet knob body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `jrc-ceramics-2007`

###### Gross external dispatch — Corrugated cardboard box (`carton_dispatch`)

Record the full actual outgoing material mass, including repeat shipments, separately from ceramic Q and purchase/service burdens.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### Return to external owner or supplier — Corrugated cardboard box (`carton_return_out`)

Record the full actual physical material returned to the external owner or supplier; no automatic credit or reversal of an earlier dispatch amount.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### Gross external dispatch — Polyethylene wrapping film (`film_dispatch`)

Record the full actual outgoing material mass, including repeat shipments, separately from ceramic Q and purchase/service burdens.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### Return to external owner or supplier — Polyethylene wrapping film (`film_return_out`)

Record the full actual physical material returned to the external owner or supplier; no automatic credit or reversal of an earlier dispatch amount.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

##### Waste flows

###### Unfired porcelain body scrap (`green_scrap`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Unfired porcelain body scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_waste.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramics-2007`

###### Fired glazed porcelain rejects (`fired_scrap`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Fired glazed porcelain rejects
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_waste.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramics-2007`

###### Porcelain glaze treatment sludge (`sludge`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Porcelain glaze treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_waste.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramics-2007`

###### Porcelain processing wastewater (`wastewater`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Porcelain processing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_waste.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramics-2007`

###### Spent gypsum mould (`spent_mould`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Spent gypsum mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_waste.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramics-2007`

###### Spent alumina kiln setter plate (`spent_setter`)

Record this exchange only when present; preserve actual grade, state and destination.

- Selected flow: Spent alumina kiln setter plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_waste.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramics-2007`

###### Waste packaging transfer — Waste corrugated cardboard box (`carton_waste`)

Weigh this material separately at its actual waste destination; retain wet/dry state and treatment evidence.

- Selected flow: Waste corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

###### Waste packaging transfer — Waste polyethylene wrapping film (`film_waste`)

Weigh this material separately at its actual waste destination; retain wet/dry state and treatment evidence.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross quantity of this physical leg / Q; ledger-only, separate from attributed purchase/service burden.
- Value mode: Calculated (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramics-2007`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2_fuel`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Carbon dioxide, mineral origin, to air (`co2_body`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Carbon dioxide, mineral origin, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Water vapour to air (`water_air`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Hydrogen fluoride to air (`hf`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Hydrogen fluoride to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Hydrogen chloride to air (`hcl`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Hydrogen chloride to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Nitrogen monoxide to air (`no`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Nitrogen dioxide to air (`no2`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Carbon monoxide to air (`co`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Sulfur dioxide to air (`so2`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

###### Particulate matter below 2.5 micrometres to air (`pm`)

Require independent species/origin and air-compartment evidence. Total NOx, total dust or a mass residual cannot identify this flow. Do not assert absence from a non-detect without its detection limit.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final normalized result from Section 8; raw totals are retained by cp_emission.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-ceramics-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_campaign | manufacture | Use a dedicated single-SKU campaign with all attributable drying/firing, rejects, idle and controls. Submeter and segregate other production before assigning loads. Unresolved shared kiln causality blocks a unit dataset; neither mass nor price is a default allocation key. | `jrc-ceramics-2007` |
| a_recycle | scrap | Internal recycle carries its real collection and reprocessing burdens; cancel internal transfers once. External rejects remain waste unless an independently documented product function and allocation decision exist. No avoided virgin-body credit. | `jrc-ceramics-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | accepted output | foreground_record | release_id; SKU; accepted net mass Q; moisture; rejects; opening and closing stocks | Calibrated net weighing and signed first-release inspection; exclude packing/fittings | kg | Each batch/cycle | Complete declared campaign, including failures and idle | One site, one SKU | per 1 kg reference flow | Calibration; source records; stock reconciliation; uncertainty |
| cp_material | manufacture | materials | foreground_record | receipt; issue; return; wet mass; moisture; assay; raw/WIP stocks; inherited burdens | Weigh each whole purchased formulation; reconcile issues, returns, stocks and internal recycling | kg | Each batch/cycle | Complete declared campaign, including failures and idle | One site, one SKU | per 1 kg reference flow | Calibration; source records; stock reconciliation; uncertainty |
| cp_energy | manufacture | energy | foreground_record | meter start/end; cycles; idle; temperature; pressure; supplier; heating value | Dedicated meter readings for all actual cycles and auxiliaries; preserve native units | kWh; m3 | Each batch/cycle | Complete declared campaign, including failures and idle | One site, one SKU | per 1 kg reference flow | Calibration; source records; stock reconciliation; uncertainty |
| cp_asset | manufacture | asset service | foreground_record | asset id; opening/closing stock; additions; uses; retirement; service evidence | Trace mould/setter actual cohort service without a default life; physical stock separate from attributed service | kg | Each batch/cycle | Complete declared campaign, including failures and idle | One site, one SKU | per 1 kg reference flow | Calibration; source records; stock reconciliation; uncertainty |
| cp_pack | manufacture | packaging | foreground_record | material; item/cohort; ownership; true purchases; first non-purchase receipts with origin; traceable returned items and original outbound IDs; opening/closing empty/WIP/finished/reusable stocks; dispatch; owner/supplier returns; waste; inherited burden coverage; repair and water changes | Weigh each material/leg. Opening stock + purchases + all first non-purchase external receipts + verified returns + measured actual additions = closing stock + gross dispatch + owner/supplier returns + waste + separately measured actual removals. First receipts include incoming supplies, independent loans and gifts regardless of upstream burden coverage. Internal reuse cancels once. Record repair additions/removals and water changes separately when present; avoid double counting wet mass. Gross physical legs are ledger-only. Attribute actual purchase/service and inherited burdens once by provenance; upstream-uncovered receipts are not automatically burden-free, and upstream-included supply is not purchased twice. Missing provenance or attribution evidence blocks its dataset use. | kg | Each batch/cycle | Complete declared campaign, including failures and idle | One site, one SKU | per 1 kg reference flow | Calibration; source records; stock reconciliation; uncertainty |
| cp_waste | manufacture | waste | foreground_record | stream; wet mass; moisture; composition; destination; transfer receipt | Weigh each segregated waste and wastewater shipment or metered discharge; treatment burdens linked once | kg | Each batch/cycle | Complete declared campaign, including failures and idle | One site, one SKU | per 1 kg reference flow | Calibration; source records; stock reconciliation; uncertainty |
| cp_emission | manufacture | species | foreground_record | species; origin; compartment; concentration; gas flow; time; state; detection limit; uncertainty | Integrate representative independent stack assays and matched gas-flow/time records; identify dust size and sources; analyse body/glaze volatile releases | kg | Each batch/cycle | Complete declared campaign, including failures and idle | One site, one SKU | per 1 kg reference flow | Calibration; source records; stock reconciliation; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_campaign | all inventory rows | For each non-reference exchange i, q_i = A_i / Q. A_i is its campaign-attributable extensive quantity after one documented raw/WIP inherited-burden stock adjustment; do not repeat a correction already in consumption records. Q is measured unique accepted net kg. Keep Q = 0 loads in investigation records and issue no quotient. Reference output is 1 kg. For packaging ledger-only physical legs, A_i is instead the full measured gross mass of that leg, without inherited-burden stock adjustment, economic allocation, duplicate purchase or automatic credit; report A_i/Q separately from attributed purchase/service burdens. | A_i; Q; cp_release | q_i | `jrc-ceramics-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Confirm each UUID, supplied state and unit independently; blank UUIDs cannot be substituted by generic ceramic, pure oxide or aggregate gas flows. | Direct identity record; supplier specification |
| dq_balance | campaign | Reconcile physical dry solids and water separately through raw/WIP/finished stocks, scrap, effluent and actual air emissions. Firing shrinkage does not determine gas species or reaction loss. | Independent assays and measured uncertainty |
| dq_quality | accepted output | Retain drawing-based dimensional/hole, glaze coverage, crack/warpage and mechanical acceptance results; no invented universal threshold. Disclose gaps and failed batches. | Specification; signed quality release |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference | Require cabinet fitting use, porcelain body and specified forming/firing route, no included metal assembly; technical or refractory products fail applicability. | `unsd-cpc3-2025`; `us2197a-knobs-1841` |
| v_basis | all rows | Check identical per-kg basis, positive Q, undivided raw totals, stock adjustments once, actual quality release and actual energy cycles. Missing species or identities remain explicit; a successful engineering check proves no plant data or scientific approval. | `jrc-ceramics-2007` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Grade-specific ceramic-body input to later furniture fitting assembly |
| allowed_use | Only after identity confirmation, actual campaign collection and independent applicability review |
| excluded_use | Installed locksets, service equivalence, complete CPC leaf, technical ceramics or claims of safety/compliance |
| required_metadata | SKU and drawing; porcelain body and glaze supplier/formulation/moisture; forming route; each firing and atmosphere; measured accepted net mass Q; quality specification and tests; campaign and site/period; energy provider; stocks and losses; packaging; boundary exclusions and unresolved identities |
| required_quality_disclosure | All missing identities, data gaps, proxy/upstream boundaries, uncertainty, campaign coverage and review status |
| update_trigger | Body/glaze, use, forming/firing, energy provider, quality or boundary change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC 3.0 explanatory notes, 30 June 2025, pp. 182–183; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Residual category and neighbouring positive categories; no itemized CPC3–HS concordance claimed. |
| us2197a-knobs-1841 | literature | US2197A, 29 July 1841, description and drawing; https://patents.google.com/patent/US2197A/en | Historical primary evidence of clay/porcelain furniture knobs and moulding, turning, burning, glazing; not a modern recipe or measured inventory. Metal attachment is downstream of this ceramic-body boundary. |
| jrc-ceramics-2007 | official_guidance | European Commission, Ceramic Manufacturing Industry BREF, August 2007, sections 2.2 and 2.3.6.3–2.3.6.5; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | Qualitative plastic shaping, drying, glazing, firing, finishing and environmental exchange screening. Household-sector examples transfer as process analogues only; no temperature, yield, mould life, intensity or emission range adopted. |
| cbp-n014163-2007 | official_guidance | US CBP, NY N014163, 20 July 2007; https://rulings.cbp.gov/ruling/N014163 ; original text https://rulings.cbp.gov/api/ruling/N014163 | Independent product/category countercheck: porcelain cabinet knobs classified under other ceramic articles. Historical US tariff decision is not current CPC acceptance or a ruling on this unassembled body. No tariff rate or sample dimension adopted. |
