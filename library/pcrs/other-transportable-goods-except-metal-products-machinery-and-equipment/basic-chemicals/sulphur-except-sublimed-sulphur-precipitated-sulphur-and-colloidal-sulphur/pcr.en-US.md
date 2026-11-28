---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.sulphur-except-sublimed-sulphur-precipitated-sulphur-and-colloidal-sulphur
language: en-US
sync_with: pcr.zh-CN.md
translation_status: canonical
status: candidate
content_maturity: authored_methodology
---

# Refinery Claus recovery of bulk molten elemental sulphur

## 1. Scope and Applicability

This PCR covers refinery amine-derived H2S-rich acid gas converted by air-fed thermal/catalytic Claus recovery, followed by thermal tailgas incineration, sulfur condensation, additive-free air stripping with steam utilities, heated storage and bulk molten delivery at the recovery-unit gate. It defines production of a declared chemical product, not an interchangeable end-use function. The broad sulfur identity is restricted by these physical route and delivery qualifiers. `sulphur-degassing-1994`; `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`.

Exclude native sulfur mining/Frasch extraction, coke-oven wet oxidation, sulfuric acid manufacture, oxygen enrichment, reductive or scrubber tailgas treatment, additive-assisted degassing, ammonia-rich sour-water-stripper feeds, sublimed/precipitated/colloidal sulfur, sulfur mixtures or solutions, polymeric/insoluble rubber-grade sulfur, and granulation/pastillation/powder milling. Solid forming is a real downstream transformation, not a second production route silently appended to this molten product. The receiving operator documents separate molten, prilled and granulated market states; it does not supply an energy, yield or purity default here. `un-cpc-3-2025`; `mmlp-sulfur-services-2025`.

The producer identifies molten sulfur as a refining byproduct; this supports product/state identity only, without certifying this site, Claus configuration, assay or acceptance limits. `tesoro-molten-sulfur-2018`.

Neighbouring wood charcoal (34510) and roasted iron pyrites (34530) are outside this elemental-sulfur product boundary. `un-cpc-3-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.sulphur-except-sublimed-sulphur-precipitated-sulphur-and-colloidal-sulphur |
| classification_refs | CPC 3.0:34520, accepted narrower association for the specified bulk molten refinery-recovered elemental sulfur |
| covered_products | Bulk molten refinery-recovered elemental sulfur, air-degassed without additives as required |
| excluded_products | All exclusions in section 1; no entire-leaf claim |
| representative_product | Accepted bulk molten elemental sulfur |
| production_route | Air-fed Claus furnace, catalytic converters and condensers, thermal incineration; additive-free air degassing and heated delivery |
| market_state | Molten bulk, declared temperature, purity, moisture and dissolved H2S |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared elemental sulfur product for further chemical manufacture |
| How much | 1 kg accepted net molten product |
| How well | The actual contract acceptance specification; purity and impurity tests, not a universal assumed concentration |
| How long or cycle | One gate-delivery event within a declared representative reporting period |
| reference_flow_link | `sulfur_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bulk molten refinery-recovered elemental sulfur |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and refinery feed origin; acid-gas composition; Claus stage count; incinerator configuration; catalyst grade; additive-free air degassing route; product purity and moisture; dissolved H2S/polysulfides; delivery temperature; acceptance specification; utility supply/return conditions; allocation and upstream burden boundary |

Qualifiers must accompany every foreground dataset. Reference mass is the accepted whole chemical product; dry elemental-S content is a separately reported property, not a silent change of denominator. The declared reference is one concrete whole-product mass interface; its product UUID remains unresolved. Mass support does not certify phase, Claus origin, purity or geography. Record molten delivery and actual refinery route separately; neither a crude-sulfur grade nor a mineral/pyrite or rubber-compounding route can be inferred from the category label.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net product mass excluding transport equipment and tare; purity and moisture are measured attributes, not allocation shares. |
| `same_denominator` | all inventory rows | measured row reference property | row unit | Every row is per 1 kg reference flow; collect all attributable exchanges over the same reporting period and divide by accepted net sulfur-product output. |
| `gas_volume` | `natural_gas` | Volume | m3 | Supplier volume basis, T/P, wet/dry composition and Z must match actual meter conversions before background linkage; never infer density from a secondary property coefficient. |
| `steam_basis` | `steam_import`; `steam_export` | Mass | kg | Preserve steam mass and actual supply/return enthalpy ledger separately. Unknown delivered usable heat remains unresolved; no mass-to-MJ default. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Measured H2S-rich refinery amine-regenerator acid gas at the SRU inlet and declared utility interfaces |
| starting_condition_role | foreground recovery input, not burden-free natural resource |
| product_classification_scope | CPC 3.0 34520, refinery Claus molten subset |
| recursive_input_rule | Purchased sulfur is outside this recovery-only route; internal sulfur recirculation is not a new product input. Independently purchased same-category sulfur requires separate upstream dataset and conditioning scope. |
| upstream_dataset_requirement | Connect actual acid-gas preparation, utilities, catalyst manufacture and waste treatment; declare inherited refinery allocation. Do not recreate refinery throughput or credit desulfurisation twice. |
| disclosure | Gate-to-gate recovery plus identified upstream/background links; report missing links, period, physical route, utility returns and co-product functions |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_complete` | Include reaction, reheating, condensation, waste-heat boilers, additive-free air degassing, heated storage/loading, tailgas incineration, fugitive losses and attributable utility/waste interfaces. Consolidate these stages into sru; retain separate stage meters and internal links with identical endpoint amounts. | `sulphur-degassing-1994`; `ec-ref-bref-2015`; `epa-ap42-sulfur-2015` |
| `boundary_route` | Tailgas is incinerated without reductive or scrubber TGTU in this route. Incineration changes sulfur species, not total sulfur removal. If actual abatement, oxygen enrichment, additives, onsite wastewater treatment or another fuel is present, expand the physical map and atomic rows before using this PCR. | `ec-ref-bref-2015`; `epa-ap42-sulfur-2015` |

| `boundary_first_release` | Fix the reference gate at the first externally accepted bulk molten refinery-product handoff after the declared recovery, degassing, heated holding and loading stages. Record first saleable production release R separately from accepted net gate delivery Q. Internal tank movements, trading, title transfers and resale are not new production. Identify the actual refiner, recovery operator, outsourced degassing/storage/loading provider and physical receiver, their locations, timestamps, meters and responsibility cutoffs. Include pre-gate provider heat, losses, stocks, transport and services once, reconciling any supplier dataset already covering them. Post-gate receiving terminal storage, transport and forming are outside this product gate. Public producer and receiver documents do not establish a trading link between them. Unknown handoff, service scope or supplier coverage prevents a complete unit result. | `tesoro-molten-sulfur-2018`; `mmlp-sulfur-services-2025` |
| `boundary_bulk_equipment` | Bulk molten delivery uses no disposable product packaging or pallet pool. Tanker tare is excluded from product kg; attributable equipment/transport service burdens within the gate remain included once. If the actual system uses drums, bags or pallets, this bulk-only inventory is insufficient: define each component as an atomic exchange and reconcile purchases, first non-purchased external receipts (including incoming goods, loans and free transfers regardless of supplier coverage), genuine returns traced to the same item previously dispatched from this site, outward movements and opening/closing stock. Assign each physical movement and each actually incurred purchase/transport/service burden once; absent supplier coverage stays unresolved. | `mmlp-sulfur-services-2025`; `jrc-ilcd-lci-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sru` | Claus recovery, tailgas incineration and molten delivery | required | Route limited by section 1 | foreground production | 1 kg accepted product |

Stage map: inlet metering/knockout → furnace and waste-heat boiler → catalytic converters/reheaters/condensers → sulfur pit/additive-free air degassing → heated molten loading. Final tailgas and routed degassing gas → thermal incinerator → stack. Utility steam/condensate/cooling interfaces and offsite wastes are external exchanges. Original gross mass, elemental S/C/H/O/N, water, energy and stock balances precede any burden allocation. Air stripping removes dissolved H2S while hydrogen polysulfides decompose; record any oxidation by air separately, with its oxygen consumption, water and sulfur fate. Steam used by an ejector or air preheater is a utility, not assumed direct steam stripping. No stripping efficiency or oxidation fraction is prescribed. `sulphur-degassing-1994`; `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`.

### Process: Claus recovery and molten delivery (`sru`)

#### Inputs

##### Product flows

###### Refinery H2S-rich acid gas mixture (`acid_gas`)

Record the whole amine-regenerator acid-gas mixture, its water and all gas components. The H2S component is not a second feed exchange. A component-mass H2S identity cannot represent the whole H2S/CO2/H2O/N2 mixture; retain measured component masses and their wet/dry analytical basis, including identified hydrocarbons and other carriers. Exclude ammonia-rich sour-water-stripper gas.

- Selected flow: Refinery H2S-rich acid gas mixture
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Alternating current (`electricity`)

Meter imported electricity for blowers, pumps, controls and handling, recording voltage, geography, supplier and generation mix. Use the technical Energy property `f6811440-ee37-11de-8a39-0800200c9a66` and Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` for the meter ledger: 1 kWh = 3.6 MJ. The actual supplier flow and its native reference property remain unresolved; a shared energy unit group does not establish net calorific value.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### natural gas in the gaseous state (`natural_gas`)

Record gaseous pipeline natural gas separately for pilot flames, reheating and incineration. Use supplier-compatible m3 with temperature, pressure, wet/dry composition and compressibility; the database secondary mass coefficient is not a density. Require the actual supplier mixture and native property/unit before linkage. A mass-based high-pressure gas record cannot be used as a volume-based interface without a verified state/composition conversion.

- Selected flow: natural gas in the gaseous state
- Flow property / unit: Volume / m3
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Refinery fuel gas mixture (`refinery_fuel_gas`)

Conditional on actual refinery fuel gas supply. Record the whole mixture and composition; do not substitute pure methane or generic liquid fuel. Keep combustion emissions in this foreground when burning occurs here.

- Selected flow: Refinery fuel gas mixture
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### de-ionised water (`boiler_feed_water`)

Record actual de-ionised boiler makeup water; imported condensate is separate. No default purity or treatment yield is assumed.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Cooling water (`cooling_water`)

Record cooling water crossing the unit boundary, its supply quality, temperature and actual mass; document utility return separately. Internal circulating throughput is not fresh consumption.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Steam, in chemical industry (`steam_import`)

Record imported steam for reheating, sulfur tracing or additive-free air degassing. Mass identity does not establish usable heat: record actual pressure, temperature, dryness and condensate-return enthalpy and match the provider.

- Selected flow: Steam, in chemical industry
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Returned steam condensate for boiler feed (`condensate_import`)

Include only condensate imported across this unit boundary; measure quality and mass. Internal steam condensation is an internal link, not a second imported input.

- Selected flow: Returned steam condensate for boiler feed
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Shaped activated-alumina Claus catalyst (`claus_catalyst`)

Scope is an activated-alumina catalyst grade. Record manufacturer, SKU, support, binders, activation state and replacement mass over its campaign. Pure Al2O3 is not the complete catalyst; titania or other catalyst routes require a separately supported adaptation.

- Selected flow: Shaped activated-alumina Claus catalyst
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

##### Waste flows

##### Elementary flows

###### air (`combustion_air`)

Measure air drawn from the atmosphere for reaction, incineration and air degassing. Use dry/wet air mass reconciled with actual flow, composition and density; exclude purchased oxygen enrichment.

- Selected flow: air `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

#### Outputs

##### Product flows

###### Bulk molten refinery-recovered elemental sulfur (`sulfur_product`)

One bulk molten accepted product leaves this integrated unit after required additive-free air degassing. Exclude tanker tare and downstream forming. Declare sulfur purity, moisture, dissolved H2S/polysulfides, delivery temperature and acceptance specification; no universal grade limit is imposed.

Qualifiers must accompany every foreground dataset. Reference mass is the accepted whole chemical product; dry elemental-S content is a separately reported property, not a silent change of denominator. The declared reference is one concrete whole-product mass interface; its product UUID remains unresolved. Mass support does not certify phase, Claus origin, purity or geography. Record molten delivery and actual refinery route separately; neither a crude-sulfur grade nor a mineral/pyrite or rubber-compounding route can be inferred from the category label.

- Selected flow: Bulk molten refinery-recovered elemental sulfur
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `sulphur-degassing-1994`; `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Steam, in chemical industry (`steam_export`)

Record recovered steam delivered to a named external utility user, separately from imported steam. Only usable exported enthalpy at the receiving conditions can support a co-product function; internal use or venting earns no export credit.

- Selected flow: Steam, in chemical industry
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Steam condensate returned to utility supplier (`condensate_return`)

Measure supplier return separately; retain mass and return enthalpy. Do not count return again as fresh-water discharge.

- Selected flow: Steam condensate returned to utility supplier
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Cooling water (`cooling_return`)

Record uncontaminated cooling-water return to the utility supplier with temperature and mass. Purge sent for treatment is a separate waste row; direct environmental discharge requires its own receiving-medium exchanges.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

##### Waste flows

###### Spent activated-alumina Claus catalyst (`spent_claus_catalyst`)

Measure the removed catalyst with retained sulfur, moisture and contamination; record destination, hazard classification and treatment. No metal recovery yield or substitute catalyst is assumed.

- Selected flow: Spent activated-alumina Claus catalyst
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Sulfur-recovery boiler blowdown water (`boiler_blowdown`)

Record blowdown mass, dissolved solids and treatment destination; retain wet mass and dry dissolved material separately, without treating pollutant components as duplicate wastewater shipments.

- Selected flow: Sulfur-recovery boiler blowdown water
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Refinery acid-gas knockout aqueous condensate (`acidgas_knockout`)

When liquid is separated at the declared inlet, record water, H2S and hydrocarbon contamination, measured mass and sour-water treatment interface. It is not clean steam condensate.

- Selected flow: Refinery acid-gas knockout aqueous condensate
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Sulfur-recovery cooling-water purge (`cooling_purge`)

Include actual utility purge sent for treatment; record chemistry, temperature, wet mass and destination; exclude cooling return already recorded.

- Selected flow: Sulfur-recovery cooling-water purge
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Sulfur-pit contaminated solid residue (`sulfur_residue`)

Include unrecovered pit cleanout material sent off site; record sulfur, catalyst fines, water and receiver. Recovered sulfur reused internally is not an external waste or second saleable output.

- Selected flow: Sulfur-pit contaminated solid residue
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

##### Elementary flows

###### sulfur dioxide (`so2_air`)

Measure actual SO2 after final oxidation; the sulfur-oxides aggregate is not this species. Do not use recovery factors as default emissions or assume complete oxidation without evidence.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-method-6-2017`; `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### hydrogen sulfide (`h2s_air`)

Measure H2S escaping final stack, pit, degassing and loading; routed pit off-gas is counted only at its final release. Product-dissolved H2S is not an atmospheric release.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-method-15-2017`; `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Carbonyl sulfide (`cos_air`)

Record carbonyl sulfide CAS 463-58-1 actually released after controls; unrelated COS-like compounds are rejected.

- Selected flow: Carbonyl sulfide `cb28e592-6d08-4cfc-8696-74d788f55175`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-method-15-2017`; `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### carbon disulphide (`cs2_air`)

Record carbon disulfide CAS 75-15-0 actually released after controls, separately from COS and H2S.

- Selected flow: carbon disulphide `08a91e70-3ddc-11dd-9245-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-method-15-2017`; `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### carbon monoxide (fossil) (`co_air`)

Record carbon monoxide mass of fossil origin from combustion and process gas, not CO2-equivalent mass.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### carbon dioxide (fossil) (`co2_air`)

Include fossil CO2 entering with acid gas and released plus newly formed combustion/process CO2; avoid counting gas carbon twice. No biogenic input is within this route. If detected, expand the inventory with a separate biogenic CO2 row instead of deleting it.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### nitrogen monoxide (`no_air`)

Record measured nitrogen monoxide species mass. If only NOx as NO2-equivalent is available, retain the original observation and unresolved speciation; do not enter it as NO mass.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### nitrogen dioxide (`no2_air`)

Record measured nitrogen dioxide species mass; do not duplicate NOx aggregate, or include N2O as NOx.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### methane (fossil) (`methane_air`)

Record fossil methane measured in stack gas, fuel leaks or loading fugitive gas. Total hydrocarbon as propane is not methane mass; other identified hydrocarbons require their own atomic rows.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### water vapour (`water_vapour_air`)

Record water vapor actually crossing to outdoor air from final stack and declared utilities, including reaction water. Distinguish feed humidity, evaporation and returned liquid water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### Particulate matter, particle size unspecified (`pm_air`)

Conditional on measured residual particulate emissions; this row is total mass with size unspecified. If size-resolved data exist replace this total by disjoint PM2.5, PM2.5–PM10 and >PM10 rows with verified identities. Never add overlapping fractions or include collected fines.

- Selected flow: Particulate matter, particle size unspecified
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### sulfur (`sulfur_vapour_air`)

Conditional on residual elemental sulfur vapor after the final control or handling point. Restrict this row to vapor; sulfur-bearing particles stay in PM and their composition is a balance attribute, not a second counted mass.

- Selected flow: sulfur `2905c658-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### dinitrogen (`n2_air`)

Record molecular N2 actually leaving final stack and declared vents from feed and air. Preserve its measured dry/wet gas basis and gross mass even when it has no impact factor; never substitute NOx or a default air fraction.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

###### oxygen (`o2_air`)

Conditional on actual residual molecular O2 leaving final stack and declared vents. Use measured oxygen fraction and corresponding gas quantity; retain consumed oxygen through the elemental O balance, without adding a second oxygen input to the air exchange.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure through the collection protocol and divide by accepted net product mass for the same period; document evidence of absence rather than entering zero for missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_hierarchy` | Keep recovery-stage direct burdens separate from shared refinery services; first investigate subdivision or system expansion, then a justified relevant physical relationship, finally another justified relationship such as period-specific economic value. Record rejected alternatives, function/basis and sensitivity. Do not use sulfur/steam mass ratio as an unexamined physical relationship. | `ec-pef-2021` |
| `allocation_ledger` | Preserve physical outputs at their measured amounts. Allocate only shared environmental burdens in a separate ledger; fractions close to one within declared precision. Do not multiply physical sulfur/steam/waste outputs by shares, or both allocate and subtract the same steam substitution credit. No credit for hypothetical avoided sulfur emissions or assumed refinery desulfurisation service. | `ec-pef-2021`; `ec-ref-bref-2015` |
| `allocation_upstream` | An acid gas by-product or waste designation alone never establishes zero upstream burden. State the refinery boundary and inherited allocation decision; retain treatment responsibility and background consistency. Export steam requires a real receiver and compatible useful-energy definition before claiming a function. | `ec-pef-2021`; `ec-ref-bref-2015` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product` | `sru` | accepted product | measured_record | SKU; lot; delivery temperature; gross/tare; accepted net product mass; dry elemental-S assay and method; moisture and method; dissolved H2S and hydrogen polysulfides separately; sample point/time; seal and sample mass; elapsed time to analysis; inventory opening/closing; rejected lots ; matched route/grade/state period and unique lot history; first production release R; outward molten product D_gross before return netting; actual received returns U; original dispatch/burden reversal; unique accepted net delivery Q; opening/closing raw/WIP/FG mass and original-unit per-exchange carried burden vectors; failed/zero-output/idle/cleaning/rework records; row_id; current-activity basis (gross receipts or stock-reconciled issues/consumption); linked raw receipt/issue/return reconciliation IDs; raw-stock adjustment already applied flag; original-unit same-exchange vector/lot/stage provenance; physical return U versus original delivery/burden reversal IDs; refiner and physical receiver; first accepted handoff location/time/meter; outsourced pre-gate supplier scope, stocks, heat, loss and covered service exchanges | Use calibrated loading mass meters or traceable calibrated weighbridge records and lot acceptance tests; reconcile tanks, dispatch and stock change. For dissolved H2S/H2Sx use promptly sealed, weighed sulfur samples and separately calibrated liquid-sulfur FTIR responses described in sulphur-degassing-1994, p.44; preserve raw spectra and sampling/analysis delay. This is not an elemental-S purity or moisture assay, nor a gas-space H2S measurement. Supply the applicable matrix-specific elemental-S and moisture procedures before asserting analytical completeness. Preserve all raw mass/acceptance/carried-burden records undivided, distinguish actual accepted net delivery Q from first release R and retain complete failed/zero-output campaign records. period_normalization owns the sole reporting division. | kg | each delivery and lot | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | calibration; laboratory method; acceptance and dispatch records; first release and physical handoff; outsourced supplier coverage and once-only burden ledger |
| `cp_feed` | `sru` | acid gas mixture | measured_record | volume; T/P; Z; wet/dry composition; H2S; CO2; H2O; N2; identified hydrocarbons and other gases; composition closure; molecular basis; analytical method and calibration; density; period; refinery origin | Continuously meter inlet gas and sample actual composition with a validated gas analysis; convert to mixture mass from measured state/composition, preserving separate component masses. Establish an actual analytical procedure for the complete inlet matrix, including H2O and N2; reduced-sulfur GC alone does not establish complete feed composition. | kg | continuous plus representative composition sampling | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | calibration; sampling plan; gas chromatograms; upstream allocation statement |
| `cp_utilities` | `sru` | electricity and each fuel separately | measured_record | meter id; stage; electricity kWh; gas actual and standard m3; T/P; Z; composition; NCV/GCV; supplier reference basis; stock and leaks | Use calibrated submetering and delivery reconciliation; keep each fuel separate and preserve supplier unit/conversion definitions; reconcile shared utilities with a documented attribution. | MJ; m3; kg | continuous meter totals and each delivery | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | meters; supplier basis; conversion and attribution records |
| `cp_water` | `sru` | each supply and return separately | measured_record | source; supply quality; mass; volume; density; temperature; return; purge; inventory | Meter each boundary inlet and return separately; reconcile water inventory and steam ledger. Circulation flow and makeup are distinct; classify receiving utility versus environmental release. | kg | continuous totals and sample campaigns | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | meter calibration; water analysis; utility receiving record |
| `cp_steam` | `sru` | imported and exported steam separately | measured_record | mass; P; T; dryness; enthalpy; inlet/return conditions; condensate mass; external receiver; internal use; vents | Meter both directions independently; derive enthalpy from traceable actual state and reconcile condensate return. Declare receiver-compatible net delivered heat; unknown states remain missing. | kg | continuous totals and operating-state records | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | meter calibration; actual state; receiver and property basis |
| `cp_catalyst` | `sru` | activated-alumina catalyst | measured_record | manufacturer; SKU; formulation; support; binder; charge; replacement; operating campaign; grade; stage | Weigh actual new charges and removed material; prorate campaign replacement against the documented sulfur production covered by that campaign, rather than a recipe default. | kg | each charge/replacement | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | purchase; grade certificate; replacement and campaign attribution |
| `cp_air` | `sru` | atmospheric air | measured_record | blower flow; P; T; humidity; composition; density; degassing air; period | Meter ambient air at actual state and convert volume to mass with actual density, including process and degassing air; retain carrier N2/O2 in the physical gas balance. | kg | continuous/representative operating measurements | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | blower meter; actual state and conversion |
| `cp_waste` | `sru` | each waste separately | measured_record | waste id; wet mass; dry solids; sulfur; water; contamination; hazardous status; receiver; treatment; campaign | Weigh each segregated shipment and sample actual composition; reconcile stock changes and campaign waste; do not duplicate constituents as shipments or assume generic treatment. | kg | each shipment and representative sampling | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | weighing; analysis; waste transfer and treatment evidence |
| `cp_emissions` | `sru` | each atmospheric species separately | measured_record | release point; species/CAS; phase; size fraction; concentration; detection limit; dry/wet gas flow; T/P; O2 correction; duration; bypass; uncertainty | For final stack H2S/COS/CS2 use EPA Method 15 GC/FPD with its sample-line recovery, CO/CO2 interference, moisture and calibration checks; for SO2 use Method 6 separated absorption/titration with its interference controls or a documented matrix-validated equivalent. These methods do not quantify elemental sulfur vapor or prove gas/particle separation. Use actual validated stack/fugitive measurements with matched gas-flow basis and operating coverage; document a separate applicable method for each remaining species and release point. Convert species concentration and flow to actual mass; preserve raw total NOx/THC data without pretending they resolve species. Include startup, shutdown and bypass. | kg | continuous SO2/gas-flow where available; representative tests and fugitive assessment | declared representative period and same product coverage | recovery unit and declared utility interfaces | per 1 kg reference flow | method; instrument calibration; sampling coverage; detection limits; speciation and uncertainty |

Final gas composition records include N2, O2, CO2, H2O, the measured sulfur/carbon/nitrogen species and every other identified carrier, such as argon or H2. Preserve composition closure and gross gas mass with uncertainty; an unmeasured remainder is unresolved, not assigned to nitrogen. Add a distinct atomic exchange for any further identified species actually released. Product-dissolved sulfur, offsite wastes and gas routed to the incinerator retain their distinct fates; internal transfers are counted only at the final boundary.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `period_normalization` | all inventory rows | Q is unique positive actual accepted net molten-product delivery kg at the declared recovery-unit gate, excluding tare; first production release R is a separate record. Use the complete matched route/grade/state period, including failed/zero-output, startup/shutdown, idle, turnaround, rejected, cleaning and rework activity. Reconcile physical molten/WIP/FG stocks, outward dispatch D_gross before return netting, actual received returns U and losses/removals separately; derive net accepted Q once without double returns. Construct each original-unit attributable burden numerator from the once-reconciled current-activity contribution plus separately evidenced opening WIP/FG carried vectors and traced return carry after original reversal, minus independently evidenced closing WIP/FG carry and justified other-cofunction assignments. Preserve full physical sulfur/steam/waste/gas outputs independently of burden shares; physical stock kg is not an energy/burden vector. period_normalization alone reports numerator / Q after conversion/carry attribution; all cards/protocol aggregation labels denote that same operation, never collection division. For Q<=0 or unresolved cohort/carry attribution retain all raw burdens/stocks and report no unit result; do not erase failed campaigns or borrow another cohort denominator. This accounting clarification supplies none of the still-missing product-assay, inlet-mixture or vapor/particle analytical methods. For each material/feed row affected by raw stocks, record whether current activity is gross external receipts at the chosen raw-material gate or an already stock-reconciled issued/charged/consumed quantity under its linked protocol. Reconcile receipts, external returns and opening/closing raw stock exactly once. If current activity is already that reconciled issue/consumption, do not again add opening raw-stock carry or subtract closing raw-stock carry; attach the original source/lot burden represented by that issue once rather than creating another purchase. If a row instead starts from gross receipts, use its raw-stock reconciliation once to derive the issued contribution, and do not also treat the resulting issues as another addition. Apply the separately evidenced WIP/FG cohort bridge at the unchanged declared product gate only after this raw-material step. Complete carried vectors contain each original exchange in its own unit and lot/stage provenance, not physical stock kg or an impact score. Physical return receipt U and its inherited stock vector are distinct from the signed correction of the original delivery and original burden vector: identify both events and apply each once; do not reverse again if already included in the reported net correction. Unresolved activity basis, stock/transfer linkage or original return vector makes the normalized result incomplete; retain raw records without a finite unit result. Other metered inputs and physical outputs retain their own verified raw measurement basis; do not invent raw-stock adjustments for them. | period exchange totals; accepted net sulfur-product mass | row amount per 1 kg reference flow | `ec-ref-bref-2015`; `jrc-ilcd-lci-2010` |
| `physical_balances` | `sru` | For gross mass and each elemental S/C/H/O/N ledger, inputs minus outputs minus closing-minus-opening stock equal the closure residual. Convert each identified component to element mass using its actual chemical formula and measured component mass; whole-product mass is not elemental-S mass. Retain reaction water in the H/O and water ledgers; include feed CO2/H2O/N2, fuel composition, all air components, final N2/O2 and other carriers, sulfur vapor, particles, dissolved sulfur species, waste moisture and catalyst stock. Keep component attributes separate from whole-mixture exchanges to prevent duplicate mass. Report every fate, measurement uncertainty and unresolved component; do not force closure or assume recovery yield. | cp_feed; cp_product; cp_steam; cp_water; cp_waste; cp_emissions; cp_air; cp_utilities | unallocated physical ledger and residual | `epa-ap42-sulfur-2015`; `ec-ref-bref-2015` |
| `usable_steam` | `steam_import`; `steam_export` | Compute actual usable heat from delivered steam mass and actual supply/receiver/return enthalpy with explicit reference conditions; disclose vents, condensate and loss. Missing state/provider definitions block a heat claim. | cp_steam; cp_water | separate actual heat ledger | `ec-ref-bref-2015` |
| `energy_stock_ledger` | `sru` | Reconcile electricity, each fuel on its measured NCV/GCV basis, material and steam/condensate enthalpy inflows/outflows, chemical conversion energy, rejected heat and changes in stored material/thermal energy on explicit common reference states. Keep gross imports/exports and losses separately; internal heat recovery is not another external energy output. Missing thermodynamic/composition evidence remains unresolved; never use a fixed heat-recovery credit or steam enthalpy. | cp_utilities; cp_feed; cp_product; cp_steam; cp_water; cp_emissions; cp_waste | unallocated energy/stock ledger and residual | `ec-ref-bref-2015`; `epa-ap42-sulfur-2015` |
| `species_release` | `sru` | Integrate measured species concentration times matching actual gas flow over represented operation; undo reporting oxygen correction and reconcile dry/wet conditions explicitly before mass conversion. Do not replace species by total NOx, THC or SOx observations. | cp_emissions | actual species mass and uncertainty | `epa-ap42-sulfur-2015` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | all inventory rows | Verify physical identity separately from supplier/background quantity basis; blank UUID or unknown pressure/composition cannot establish a complete linked dataset. | specification; provider definition |
| `q_period` | `sru` | Use a documented representative period covering steady operation, startup, shutdown, turnaround and exceptional releases; align product, waste and utility attribution, disclose missing modes. | operating log; meter coverage |
| `q_no_defaults` | `sru` | BREF illustrative utility/yield/CO2 cases, EPA recovery/emission tables and producer market statements are not this site’s activity quantities or default factors; retain real tests, uncertainty and detection limits. | original method limits and actual collection |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Require exactly one accepted sulfur output reference, declared net mass/purity/market state and route qualifiers. Intermediate sulfur movements remain internal measured links, never duplicate reference outputs. | `ec-ref-bref-2015` |
| `validate_completeness` | Every atomic row needs measured quantity, compatible property/unit/basis, collection coverage, applicability and destination/medium; blanks, unresolved NOx/THC speciation, missing provider bases or unsupported treatment are incomplete, not zero. Add real identified exchanges when present before modelling. | `epa-ap42-sulfur-2015`; `ec-ref-bref-2015` |
| `validate_balances` | Check gross mass, elemental S/C/H/O/N, water, energy and stock closure, carrier quantities and all recorded fates, utility directions and unchanged internal-link endpoint amounts before allocation; disclose uncertainty and unresolved residuals. Check burden allocation separately. Particle fractions and routed gases must not be counted twice. | `ec-ref-bref-2015`; `epa-ap42-sulfur-2015`; `ec-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | site-specific recovery production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Explicitly qualified refinery Claus bulk molten sulfur at declared gate; only after applicable foreground collection and background linkage are complete |
| excluded_use | Full CPC-leaf proxy; mined sulfur; solid formed sulfur; rubber formulation; unspecified sulfur production mix; regulatory or BAT compliance declaration |
| required_metadata | all section 3 qualifiers; period; site; gate; input and supplier definitions; measured quantities; upstream and co-product decisions |
| required_quality_disclosure | coverage, unresolved identities/provider bases, blank quantities, detection limits, uncertainty, balances, allocation sensitivity and limitations |
| update_trigger | feed origin/composition, catalyst/Claus stages, tailgas control, degassing, market state, utility pressure or upstream allocation changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF p.163; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 34520 label and explicit exclusions; classification does not prescribe production method |
| `ec-ref-bref-2015` | official_guidance | European Commission JRC, Refining of Mineral Oil and Gas BREF (2015), §4.23.5.2.1, pp.482–485 and §4.23.5.2.4 p.496; Figure 4.53; https://eippcb.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf | Claus process, sulfur pit, side species, utility/waste interfaces and stored-sulfur degassing need with oxidation/additive alternatives; no specific additive-free stripping protocol or numerical examples adopted |
| `epa-ap42-sulfur-2015` | official_guidance | US EPA, AP-42 §8.13 Sulfur Recovery, April 2015, §§8.13.1–8.13.4, Figure 8.13-1 and Tables 8.13-1/2 footnotes; https://www.epa.gov/sites/default/files/2020-09/documents/8.13_sulfur_recovery.pdf | Reaction and process map, sulfur species, oxidative controls and limitations of SO2/NOx/THC factors; no generic factor adopted |
| `ec-pef-2021` | official_guidance | European Commission C(2021) 9332 final, Annexes 1 to 2, Annex I §4.5 pp.63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Multifunctionality hierarchy and justification; methodological reference, no claim of complete PEF conformity |
| `epa-method-15-2017` | official_guidance | US EPA, Method 15, 2 August 2017, §§1–4, 6–8, 10–13; https://www.epa.gov/sites/default/files/2017-08/documents/method_15.pdf | H2S/COS/CS2 GC/FPD sampling, calibration, line loss and matrix interference; excludes SO2 and elemental sulfur vapor measurement; technical method reference, not regulatory acceptance |
| `epa-method-6-2017` | official_guidance | US EPA, Method 6, 3 August 2017, §§1–4, 6–12; https://www.epa.gov/sites/default/files/2017-08/documents/method_6.pdf | Separated SO2 absorption/titration and interference controls; not total sulfur, vapor sulfur or sulfuric-acid-mist mass; technical method reference, not regulatory acceptance |
| `sulphur-degassing-1994` | literature | Liquid Sulphur Degassing, Sulphur No.233, July–August 1994, pp.38, 40 and 44–45, publisher-authorized AMETEK reprint; https://www.ametekpi.com/-/media/ametekpi/files/products/western-research/model-881/liquid-sulfur-degassing.pdf | Additive-free air stripping with steam ejector/preheater utilities; closed weighed samples and liquid-sulfur FTIR for separate dissolved H2S/H2Sx; no copied operating defaults, purity/moisture assay or zinc-absorption chemistry |
| jrc-ilcd-lci-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March2010, sections7.4.2.6–7 and7.4.2.9, printed pp.200–204 / PDF pp.220–224. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Complete operational/service cycle and matching-period reference scaling only. Historical stock/cohort burden vectors, once-only raw-stock reconciliation and nonpositive-output hold are this PCR consistency implementation, not a literal handbook ledger or formula. No site quantity, recipe, emission factor, gate choice or default allocation. |
| `tesoro-molten-sulfur-2018` | literature | Tesoro Refining & Marketing Co., Sulfur, Molten SDS 888100004468, revision 2.02, 24 July 2018, §1 p.1; https://www.marathonpetroleum.com/content/documents/Operations/Tesoro_SDS/Sulfur__Molten_SDS_Tesoro.pdf | Producer product/state identity as refining byproduct only; no site quantities, universal assay, acceptance threshold or actual receiver link |
| `mmlp-sulfur-services-2025` | literature | Martin Midstream Partners L.P., 2025 Form 10-K, Sulfur Services Segment pp.9–10 and revenue recognition; https://www.sec.gov/Archives/edgar/data/1176334/000117633426000012/mmlp-20251231.htm | Independent receiving-operator context: refinery molten collection, transport/storage service contracts and separate formed states. Boundary implementation requires actual site handoff and supplier coverage; no operating defaults or producer/receiver link inferred |
