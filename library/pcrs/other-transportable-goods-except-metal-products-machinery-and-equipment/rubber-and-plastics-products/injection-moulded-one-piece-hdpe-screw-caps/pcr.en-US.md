---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.injection-moulded-one-piece-hdpe-screw-caps
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Injection-moulded one-piece HDPE screw caps at first quality release

## 1. Scope and Applicability

This PCR covers non-reactive manufacture in China of unpigmented one-piece HDPE screw caps with an integral bore/plug seal and tamper-evident band for cold-filled still-water bottles. Begin with purchased closure-grade HDPE pellet formulation; include receipt/storage, feed handling, screw plasticisation, hot-runner injection/packing, mould cooling, ejection, required band slitting/folding, inspection, and first quality release. Include actual clean in-house pre-release recovery only when validated for this food-contact application. The terminal production gate is first release of new conforming cap units; post-release FG storage, packing, handling and dispatch remain a separately identified cohort service account. It is not the purchase and repacking of finished closures.

Product/route synthesis combines a documented cap geometry, HDPE injection-grade evidence and injection-system engineering. These sources do not establish a single supplier recipe, the equipment used for the cited BERICAP SKU, or a contemporary factory order. Do not transfer compression moulding energy or liner-making operations. Exclude bottles/containers, sacks/bags, film/sheet/profile/pipe manufacture, compression-moulded caps, PP flip-top or multi-piece sports caps, inserted liners, decoration, intentional reactive/foamed routes, and post-consumer-cap remelting. A different neck/tether design requires demonstrated functional and process compatibility, not a second canonical record merely for another diameter.

CPC3.0 36490 is broader than this method: packaging articles and many closure routes remain outside it. The 36410 bags route and 363-series semifinished products do not cover mould-cavity formation of the seal/threads or band finishing and release of these caps. A steel injection-mould tooling PCR supplies a different product. Shared utility/allocation modules may be reused without reusing these incompatible product boundaries.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.injection-moulded-one-piece-hdpe-screw-caps |
| classification_refs | CPC 3.0 36490; narrower |
| covered_products | Unpigmented injection-moulded one-piece HDPE bore-seal screw caps with a declared tamper band for cold-fill still-water bottles in China |
| excluded_products | Bottle/container/bag/film manufacture; compression caps; PP flip-top; separate liners; decorated or post-consumer-remelted caps |
| representative_product | One-piece HDPE cap with bore seal and slit/folded tamper band at declared neck configuration; no invented cap weight |
| production_route | Whole purchased pellet formulation through screw plasticisation/hot-runner injection/cooling/ejection/band finishing to first quality release; separate actual FG services |
| market_state | Newly first-released dry unpigmented empty cap at actual conditioning state in China; observed FG services identified separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a declared screw-closure intermediate for the specified bottle neck and fill conditions |
| How much | 1 kg newly first-quality-released cap net mass excluding packaging |
| How well | Conform to the actual dimensional/seal/torque/tamper-band and hygienic release plan; kg alone is not equal closure function |
| How long or cycle | One identified release cohort and release period; separately disclose observed service closing date and historical FG accounts; no assumed bottle service life |
| reference_flow_link | released_cap |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Primary packaging, plastic closure `0161e346-2ac3-48be-b61d-e94ebb6f4b0f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual China site and accounting/cohort periods; complete HDPE grade and supplier formulation; CAS and comonomer identity; upstream resin route and provider; natural unpigmented construction; one-piece bore seal and band/tether drawing; neck finish and intended cold-fill still-water conditions; dimensional leak torque and tamper-band acceptance plan; first-release Q and unique unit/lot history; measured cap net mass and packaging tare; WIP and FG opening/closing masses and inherited exchange vectors; failed/zero-output/start-stop/idle/cleanup/rework records; electricity voltage and supply geography; actual water supply/return and heat boundaries; actual emission species and receiving media; separate physical packaging forms and return/reuse boundary |

Declare every qualifier in the reference dataset context. The complete native cap/route limits are also part of each adopted cap inventory description below; no bare UUID establishes applicability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the calibrated net mass in kg of new cap units first passing the complete declared release plan during the selected cohort period. Deduplicate unit/lot acceptance history; exclude packaging, previously released FG, repeat tests and returned-unit reinspection. Measure gross/tare and conditioning state. If counts are used, measure configuration-specific accepted cap mass M by traceable calibrated sampling/weighing with defined mould/neck/resin/band scope and uncertainty; Q = accepted new count times measured M. No assumed grams per cap or density from a flow coefficient. |
| single_normalization | all inventory rows |  |  | All collection protocols record raw unnormalised amounts. Convert actual original units/rates, reconcile stock vectors and assign shared exchanges before normalize_once. Cards and protocol aggregation reference that same result, never another division. Keep failed batches and start/stop, idle, cleaning and rework loads. If Q<=0, retain actual loads and uncertainty with no unit result. |
| unit_state | all inventory rows |  |  | Integrated liquid/gas volumes are converted with independently established density of that substance at recorded composition/pressure/temperature; do not multiply an integrated volume by time again. Integrate genuine rates first. Preserve electricity separately from heat: kWh to MJ uses 3.6. Hydraulic fluid has a Volume/m3 identity; obtain an independent actual-fluid density or weighed mass for physical balance, not a water density or secondary-property coefficient. Water volume coefficients likewise do not replace supply-state measurement. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased closure-grade HDPE pellets as complete commercial formulation and actual supply packaging |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 36490; narrower |
| recursive_input_rule | Internal pre-release regrind cancels with inherited burdens retained; finished returned caps stay under original release cohort; no purchased finished-cap manufacturing substitution |
| upstream_dataset_requirement | Each actual external input needs an independently compatible provider at its true supply form/state/boundary; a broad flow UUID does not verify its supplier |
| disclosure | China site; full conversion route; first-release Q; WIP/FG inheritance; separate observed packing/storage/dispatch services; all real utility/species/package pathways |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | all inventory rows | Include complete resin-to-cap conversion and actual inbound supply transport. Supplier resin formulation is one purchased whole mass, not separately purchased polymer plus its already included stabiliser/comonomer. Assays are constituent subledgers. An actual separately dosed formulation needs its own whole supplied-grade row; genuine in-house compounding needs each externally purchased constituent plus real processing energy/losses and renewed scope review. No assumed mixing recipe or polymerisation burden inside the converter. | `borealis-mb5568-2017`; `ifc-plastics-2007` |
| b_q_gate | all inventory rows | The manufacturing product is Q at first quality release. A current-cohort closing FG cap is already in Q and is not another production output. released_cap and fg_in are an internal pair: cancel them when combining manufacturing and the separately reported FG service ledger. Gross outward caps and stock changes are physical movements, not additional manufacture. Delivery, reinspection and returns never generate another Q. Keep historical FG/returns under their original release cohorts; allocate their actual service/rework separately from current production. | `bericap-hdpe-cap`; `jrc-ilcd-2010` |
| b_wip | all inventory rows | Track opening/closing raw stock and WIP including hopper/barrel melt, moulded uninspected caps, band-finishing queues and clean regrind. Each cohort carries a separate inherited vector for every material, utility, packaging, waste and emission exchange. Preserve both physical stocks and burden vectors across periods; no reset at first acceptance or rework. Failed/zero-output campaigns retain all incurred burdens and an explicit future assignment or separate unresolved account, never deletion. Separately held raw, installed-item and equipment-fluid/water/refrigerant reservoirs carry their own opening/closing physical quantities and each inherited exchange vector outside WIP. Reconcile these distinct stores once; an installed stock is not automatically current consumption and no quantity belongs simultaneously to WIP and another store. | `borealis-mb5568-2017`; `jrc-ilcd-2010` |
| b_utilities | all inventory rows | Include actual feed conveying, barrel/hot-runner heating, clamp/injection drive, mould cooling, ventilation, compressed-air production, band finishing, QC and recovery energy. Meter common systems and avoid double-counting purchased compressed air/heat with supplier generation energy. The nominal non-reactive electric route requires no invented steam or boiler. If external heat-exchange water actually enters and is returned, keep supply and Product return separately with composition, temperatures, pressure/enthalpy and supplier water/energy agreement. Internal recirculation cancels; evaporation/blowdown remain real outputs. | `husky-hycap4-2016`; `ifc-plastics-2007` |
| b_atomic | all inventory rows | Each listed card is one exchange. Apply conditional cards only when its named substance/form actually occurs; distinguish measured absence from unknown. Add each actual different raw material, treatment chemical, fuel, purchased heat, refrigerant, package, waste destination and identified emitted species as another atomic row before modelling. Do not hide an actual input/output under zero or an unnamed other stream. The n-butane card is conditional on species identification; IFC high-temperature screening does not prove a factory emission. COD/TOC/VOC indicators cannot be converted to arbitrary chemical masses. | `ifc-plastics-2007` |
| b_physical | all inventory rows | Check total physical mass and independently check C/H/O and any formulation-relevant element using supplier composition/assays or independent analyses. Separate unreacted/free water, evaporation and any independently evidenced reaction water; the nominal route is non-reactive melt shaping and has no assumed reaction water. Any actual bound/structural water remains assigned to its measured host phase until independently evidenced release; do not invent hydration water in HDPE. Do not fit two unknown species with one residual or equate missing polymer to gas. For any actual oxidation/capture/treatment include its genuine reactants, distinct species, air/water transfers and residues with measured states. Service and transport coefficients are not material mass inputs. | `ifc-plastics-2007` |
| b_packaging | all inventory rows | Keep post-release packing/handling/FG storage and dispatch in cp_fg and cp_pack by actual release cohort. For every packaging form reconcile opening empty/attached-to-WIP/attached-to-FG/reusable stocks plus purchases plus external returns received against closing stocks plus gross outward carriage plus returns to external owners plus waste. Internal reuse cancels; include its actual washing/repair/handling burdens without new purchase, new cap Q or automatic coproduct. Separate resin-supply sacks from cap shipping packs. | `sacmi-ccm-2018`; `jrc-ilcd-2010` |
| b_classification | all inventory rows | CPC3.0 36490 provides a broader classification locator only. This one-piece HDPE injection-cap method is narrower; container manufacture, other closure constructions and other forming routes are not covered merely by this code. Classification does not create PCR identity or an accepted mapping. | `un-cpc-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Raw supply through injection finishing and first release | required | All actual operations in the selected manufacturing cohort | foreground | Q kg first release; released_cap is the sole linked reference row |
| fg_service | Actual post-release FG logistics by cohort | required | Retain all actual storage packing handling dispatch and return services through declared observation closing date | foreground_service | Movement/service ledger using original release cohort Q; not additional production |

Each card below is a complete atomic exchange with its own physical state and protocol. Conditional occurrences require actual evidence, not an assumed zero. Product outputs in the FG account are physical carriage/returns; the single reference link remains released_cap. Preserve all stock and service conditions in sections5/7/8 when consuming a card.

### Process: Raw supply through injection finishing and first release (`manufacture`)

#### Inputs

##### Product flows

###### Whole purchased HDPE pellet formulation (`hdpe_pellets`)

Record net pellet withdrawals with raw-stock changes and supplier grade/assay/supply form. This is the full formulation as received; no additional slip/antistatic agent is presumed.

Native Product identity is high-density polyethylene granulate from slurry or gas-phase processing at plant; all native properties are Mass only and CAS/grade/comonomer is absent. Its CPC34170 classification is inconsistent with the coherent granulate name/route and is disclosed, not silently repaired. Use one complete purchased closure-grade pellet formulation; verify the actual upstream route and composition independently. MB5568 PDS CAS25087-34-7 is source-specific evidence, not a CAS reported by this UUID and not proof of grade/provider equivalence. No duplicate purchase of constituents already contained in the pellets.

- Selected flow: polyethylene high density granulate (PE-HD) `4f19f115-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `borealis-mb5568-2017`

###### Manufacturing electricity (`electricity_mfg`)

Submeter feed/heating/drive/cooling/air production/ventilation/finishing/QC and recovery; retain all start-stop, failure, idle and cleaning readings. Count purchased utilities only at the correct supplier boundary.

Native Product is CN grid-average consumption mix supplied to the user at <1kV. Its reference property is Net calorific value with energy reference unit MJ; this is the database electricity identity convention, not combustion of an electricity fuel. Apply only to that metered boundary/voltage/geography and a compatible temporal provider. Record other actual voltages/generation under independently verified identities; do not transplant this flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `husky-hycap4-2016`; `ifc-plastics-2007`

###### Cooling-loop make-up (`cooling_makeup`)

Measure actual treated tap-water make-up and opening/closing loop inventory. No repeatedly purchased internal circulation volume; disclose any actual biocide/antifoulant separately.

Native Product is treated municipal/public potable supply to industry at plant; it is not raw abstraction, deionised water or a cooling-water return. Reference Mass/kg; the native secondary Volume factor0.001 does not establish actual supply-state density. Determine density independently if converting volume. Use only the actual treated tap-water portion and keep recycled/external heat-exchange water distinct.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-2007`

###### Equipment and floor washing water (`wash_water`)

Measure the actual treated tap-water portion for equipment/housekeeping washes separately from cooling make-up and from whole supplied aqueous cleaner. Record wash liquid and residues by their real outgoing paths.

Native Product is treated municipal/public potable supply to industry at plant; it is not raw abstraction, deionised water or a cooling-water return. Reference Mass/kg; the native secondary Volume factor0.001 does not establish actual supply-state density. Determine density independently if converting volume. Use only the actual treated tap-water portion and keep recycled/external heat-exchange water distinct.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-2007`

###### Whole hydraulic circuit fluid (`hydraulic_fluid`)

Conditional on actual hydraulic equipment; record fill, top-up, drained liquid, losses and opening/closing circuit stock. Do not prescribe a hydraulic press where the actual machine is electric.

Native Product is one complete engineered hydraulic-fluid formulation containing mineral or synthetic base oil with additives, with no fixed grade/route/geography and Volume as its sole property. Collect actual whole formulation in m3; component assays are subledgers, not extra purchases. Resolve fluid-specific density or weighed mass independently for kg closure. This identity does not establish compatibility with the particular hydraulic circuit or substitute for gear lubricant.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `husky-hycap4-2016`

###### Externally supplied compressed air (`purchased_air`)

Only actual external supply for conveying/finishing/air tests. Record delivered gas composition, integrated volume or mass, pressure/temperature and supplier compressor boundary; on-site compressor electricity belongs to electricity_mfg, without a second purchased-air load.

- Selected flow: Compressed air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `sacmi-ccm-2018`

###### External heat-exchange water supply (`external_cooling_supply`)

Only when a real external cooling-water service crosses the gate. Record water quality, gross physical inflow and heat state; agree supplier water and cooling-energy burdens and pair the genuine return. Do not invent this service for an on-site closed loop.

- Selected flow: Heat-exchange water supplied as liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-2007`

###### Replacement melt-filter screen (`filter_screen`)

Conditional on the actual filtration assembly. Weigh the single replacement article and record installed/spare stock and actual spent-screen destination; do not assume disposable filters or add an entire mould for each batch.

- Selected flow: Stainless-steel melt-filter screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `husky-hycap4-2016`

###### Neat isopropanol for cleaning (`cleaning_ipa`)

Only if neat isopropanol CAS67-63-0 is actually used; collect the whole supplied solvent and remaining stock. A purchased aqueous cleaner needs its own complete-formulation row, with carrier/active assays only as subaccounts.

- Selected flow: Isopropanol, unformulated
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-2007`

###### R134a chiller charge (`r134a_charge`)

Only for an actual R134a CAS811-97-2 circuit; meter or weigh charge, recovered gas and circuit stock. Every other actual refrigerant has a separate identity/card; no generic refrigerant bundle. Pair any genuine external recovered R134a return with recovered_r134a, without assuming that a recharge is an equal atmospheric loss.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### Inbound road freight service (`freight`)

Record actual payload, distance, vehicle/load condition, returns and supplier boundary; use kg-to-tonne conversion and t.km. It is a service, not polymer mass or foreground tailpipe emissions added again to a complete transport provider.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t.km
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `jrc-ilcd-2010`

###### Clean internal pre-release HDPE regrind (`regrind_in`)

Internal recovery sub-operation transfer only; weigh paired flow and separate opening/closing stock, loss and actual recovery energy. Verify hygienic/material compatibility before reuse in water caps. Cancel paired circulation in the manufacturing control volume and never treat it as another virgin purchase or a coproduct credit.

- Selected flow: Clean in-house HDPE regrind
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wip`
- Sources: `borealis-mb5568-2017`; `jrc-ilcd-2010`

###### Whole woven PP resin supply sack (`resin_sack`)

Only the actual complete PP supply sack received with resin; no assumed sack for bulk deliveries. Record its empty/attached stocks and external receipts independently of net resin, without double-counting an upstream packaging service.

- Selected flow: Woven polypropylene resin supply sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_supply_pack`
- Sources: `borealis-mb5568-2017`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Clean internal pre-release HDPE regrind (`regrind_out`)

Internal recovery sub-operation transfer only; weigh paired flow and separate opening/closing stock, loss and actual recovery energy. Verify hygienic/material compatibility before reuse in water caps. Cancel paired circulation in the manufacturing control volume and never treat it as another virgin purchase or a coproduct credit.

- Selected flow: Clean in-house HDPE regrind
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wip`
- Sources: `borealis-mb5568-2017`; `jrc-ilcd-2010`

###### New cap first quality release (`released_cap`)

Only newly conforming units counted once by cp_release; destructive-test samples and pre-release rejects are not released cap mass. This is the internal handoff to fg_in when the service account is combined. Preserve the complete native and product restrictions below.

Native identity is the cap subset of CN at-plant production mix for cap/pump/sprayer closures; not an unspecified global market. Use here only the unpigmented one-piece HDPE bore-seal screw cap with declared band/neck, cold-fill still-water test plan and first-release/cohort state. No native HDPE grade, item mass or supplier process is certified. This physical family match does not make a pump/sprayer interchangeable.

- Selected flow: Primary packaging, plastic closure `0161e346-2ac3-48be-b61d-e94ebb6f4b0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_release`
- Sources: `bericap-hdpe-cap`; `borealis-mb5568-2017`

###### External cooling-water Product return (`external_cooling_return`)

Only actual liquid returned to an external water/utility supplier, with measured mass, quality and enthalpy/temperature. This is a Product return under the actual supply agreement, not wastewater or a second credited heat product. No assumed condensate or steam loop.

- Selected flow: Returned liquid heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-2007`

###### Returned woven PP resin supply sack (`out_resin_sack`)

Only genuine empty sacks returned to an external supplier/owner; keep receipt, reuse and scrap events distinct in the supply-pack ledger. No automatic coproduct or avoided-sack credit.

- Selected flow: Woven polypropylene resin supply sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_supply_pack`
- Sources: `jrc-ilcd-2010`

###### Actual externally recovered R134a return (`recovered_r134a`)

Only genuine recovered R134a CAS811-97-2 transferred to an external supplier/recovery operator as a Product return at its actual condition. Weigh the recovered gas and container tare independently, retain circuit stock/charge history and actual receiver agreement. If its real legal/economic state is waste, record that exact stream as Waste instead; no invented condensate, avoided refrigerant credit or atmospheric release equal to recovery.

- Selected flow: Recovered 1,1,1,2-tetrafluoroethane refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

##### Waste flows

###### Rejected HDPE cap bodies (`waste_caps`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: HDPE rejected cap bodies
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### HDPE start-up and purge solid (`waste_purge`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: Solid HDPE purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### HDPE band-cutting fragments (`waste_slit`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: HDPE slitting fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Captured HDPE granulation dust (`waste_dust`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: Captured HDPE dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Spent melt-filter screen (`waste_screen`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: Spent stainless-steel melt-filter screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Drained hydraulic fluid (`waste_oil`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: Spent hydraulic fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Spent isopropanol cleaning liquid (`waste_ipa`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: Spent isopropanol cleaning liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Empty resin supply sack (`waste_resin_sack`)

Only actual woven-PP sack packaging accompanying resin; bulk silo delivery has no assumed sack. Measure empty sacks and any adhering resin independently; adhering resin is a constituent subaccount and must be reconciled with pellet loss, not another purchase. Different actual sack construction needs its own named row.

- Selected flow: Empty woven polypropylene resin sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_supply_pack`
- Sources: `ifc-plastics-2007`

###### Cooling-loop blowdown (`cooling_blowdown`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: Cooling-loop blowdown liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Equipment wash effluent (`wash_effluent`)

Record this specific stream only where actually generated and sent outside this process, with separate form/composition, net mass, receiver, treatment and period. Split different destinations when burdens differ. Keep internal recoverable stock distinct; actual unmeasured waste is not zero. Include measured contamination/water in a constituent subledger without duplicating the whole stream.

- Selected flow: Equipment wash effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

##### Elementary flows

###### Manufacturing water evaporation (`water_vapour`)

Quantify net actual vapour from the cooling/washing subsystem at measured conditions independently of blowdown and liquid drift. Do not infer both evaporation and an unknown leak from a single water residual.

Native Elementary flow is ordinary H2O vapour CAS7732-18-5 to unspecified air with reference Mass/kg. Isotope/heavy-water and unrelated noisy synonyms do not change this adopted ordinary-water identity. Do not apply the stratospheric, urban, non-urban/high-stack or long-term alternatives unless their actual media match; obtain a more specific identity when justified. Measure net water transferred to air; do not label liquid drift, aerosols or reaction water as this vapour without independent phase/species evidence.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### Escaped HDPE dust to air (`hdpe_dust_air`)

Only actual polymer particles escaping after capture, identified by polymer/size and receiving medium. Separate from collected dust waste; unrelated mixed particulates need their own identities.

- Selected flow: HDPE particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### Confirmed n-butane to air (`n_butane_air`)

Conditional on actual identification of n-butane CAS106-97-8; a generic butane/alkane/VOC signal does not establish this species. Record concentration, true gas-volume basis, duration only for rates, capture and medium. Add each other real identified molecule individually. Native identity: n-butane, CAS106-97-8, Elementary flow, emissions to air unspecified (not indoor or long-term), Mass/kg. No fixed production geography or supply route is specified. Use only independently identified actual ordinary molecular species in that receiving medium; noisy mixture/isotope/ion/strong-acid-route synonyms do not extend this identity to those different substances or establish a production route.

- Selected flow: n-butane `4d9a8790-3ddd-11dd-94c2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### Isopropanol to air (`ipa_air`)

Only actual isopropanol CAS67-63-0 escaping the cleaning/recovery boundary; quantify independently of collected spent solvent and stock. Do not make solvent purchase equal air release. Native identity: isopropanol, CAS67-63-0, Elementary flow, emissions to air unspecified (not indoor or long-term), Mass/kg. No fixed production geography or supply route is specified. Use only independently identified actual ordinary molecular species in that receiving medium; noisy mixture/isotope/ion/strong-acid-route synonyms do not extend this identity to those different substances or establish a production route.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### R134a leakage to air (`r134a_air`)

Only actual identified R134a CAS811-97-2 losses; reconcile independently weighed charge/recovery and opening/closing circuit stocks. Refrigerant recharge is not automatically an equal release when stocks change. Native identity: HFC-134a, CAS811-97-2, Elementary flow, emissions to air unspecified (not indoor or long-term), Mass/kg. No fixed production geography or supply route is specified. Use only independently identified actual ordinary molecular species in that receiving medium; noisy mixture/isotope/ion/strong-acid-route synonyms do not extend this identity to those different substances or establish a production route. The native record has no official Chinese baseName; retain HFC-134a in both selected-flow displays rather than relabel a synonym as an official name.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### Actual nitrogen to air (`nitrogen_air`)

Conditional on actual identified nitrogen to air CAS7727-37-9 in the supplied-air/ventilation subsystem. Retain independently measured gross molecular inlet and outward masses for physical closure; never use a fixed air composition. The modelled net environmental transfer is the measured species-resolved difference after a matched ambient-carrier accounting boundary is established. An unchanged carrier cancels only with real paired evidence; unknown is not zero. Whole purchased compressed air is purchased once, with constituent masses only as subledgers. Coordinate upstream air abstraction with the supplier boundary and do not double-count it. Atmospheric-origin CO2 is not fossil process-generated CO2 or a sequestration/avoided-emission credit; separately identify any real process-generated molecules and their origin/media. Native identity: dinitrogen, CAS7727-37-9, Elementary flow, emissions to air unspecified (not indoor or long-term), Mass/kg. No fixed production geography or supply route is specified. Use only independently identified actual ordinary molecular species in that receiving medium; noisy mixture/isotope/ion/strong-acid-route synonyms do not extend this identity to those different substances or establish a production route. Cancellation must cover the matching actual elementary air/resource withdrawals and emissions across the declared foreground/supplier boundary. A Product compressed-air constituent inlet alone is not an elementary withdrawal and cannot justify netting an elementary outlet while the supplier withdrawal remains. If no such matched accounting is evidenced, retain the actual gross environmental outlet and disclose unresolved supplier matching rather than invent cancellation. Actual net uptake needs its own compatible Resource identity and physical input, not a negative emissions-to-air row.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### Actual oxygen to air (`oxygen_air`)

Conditional on actual identified oxygen to air CAS7782-44-7 in the supplied-air/ventilation subsystem. Retain independently measured gross molecular inlet and outward masses for physical closure; never use a fixed air composition. The modelled net environmental transfer is the measured species-resolved difference after a matched ambient-carrier accounting boundary is established. An unchanged carrier cancels only with real paired evidence; unknown is not zero. Whole purchased compressed air is purchased once, with constituent masses only as subledgers. Coordinate upstream air abstraction with the supplier boundary and do not double-count it. Atmospheric-origin CO2 is not fossil process-generated CO2 or a sequestration/avoided-emission credit; separately identify any real process-generated molecules and their origin/media. Native identity: oxygen, CAS7782-44-7, Elementary flow, emissions to air unspecified (not indoor or long-term), Mass/kg. No fixed production geography or supply route is specified. Use only independently identified actual ordinary molecular species in that receiving medium; noisy mixture/isotope/ion/strong-acid-route synonyms do not extend this identity to those different substances or establish a production route. Cancellation must cover the matching actual elementary air/resource withdrawals and emissions across the declared foreground/supplier boundary. A Product compressed-air constituent inlet alone is not an elementary withdrawal and cannot justify netting an elementary outlet while the supplier withdrawal remains. If no such matched accounting is evidenced, retain the actual gross environmental outlet and disclose unresolved supplier matching rather than invent cancellation. Actual net uptake needs its own compatible Resource identity and physical input, not a negative emissions-to-air row.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### Actual argon to air (`argon_air`)

Conditional on actual identified argon to air CAS7440-37-1 in the supplied-air/ventilation subsystem. Retain independently measured gross molecular inlet and outward masses for physical closure; never use a fixed air composition. The modelled net environmental transfer is the measured species-resolved difference after a matched ambient-carrier accounting boundary is established. An unchanged carrier cancels only with real paired evidence; unknown is not zero. Whole purchased compressed air is purchased once, with constituent masses only as subledgers. Coordinate upstream air abstraction with the supplier boundary and do not double-count it. Atmospheric-origin CO2 is not fossil process-generated CO2 or a sequestration/avoided-emission credit; separately identify any real process-generated molecules and their origin/media. Native identity: argon, CAS7440-37-1, Elementary flow, emissions to air unspecified (not indoor or long-term), Mass/kg. No fixed production geography or supply route is specified. Use only independently identified actual ordinary molecular species in that receiving medium; noisy mixture/isotope/ion/strong-acid-route synonyms do not extend this identity to those different substances or establish a production route. Cancellation must cover the matching actual elementary air/resource withdrawals and emissions across the declared foreground/supplier boundary. A Product compressed-air constituent inlet alone is not an elementary withdrawal and cannot justify netting an elementary outlet while the supplier withdrawal remains. If no such matched accounting is evidenced, retain the actual gross environmental outlet and disclose unresolved supplier matching rather than invent cancellation. Actual net uptake needs its own compatible Resource identity and physical input, not a negative emissions-to-air row.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

###### Actual atmospheric-origin carbon dioxide to air (`atmospheric_co2_air`)

Conditional on actual identified atmospheric-origin carbon dioxide to air CAS124-38-9 in the supplied-air/ventilation subsystem. Retain independently measured gross molecular inlet and outward masses for physical closure; never use a fixed air composition. The modelled net environmental transfer is the measured species-resolved difference after a matched ambient-carrier accounting boundary is established. An unchanged carrier cancels only with real paired evidence; unknown is not zero. Whole purchased compressed air is purchased once, with constituent masses only as subledgers. Coordinate upstream air abstraction with the supplier boundary and do not double-count it. Atmospheric-origin CO2 is not fossil process-generated CO2 or a sequestration/avoided-emission credit; separately identify any real process-generated molecules and their origin/media. Cancellation must cover the matching actual elementary air/resource withdrawals and emissions across the declared foreground/supplier boundary. A Product compressed-air constituent inlet alone is not an elementary withdrawal and cannot justify netting an elementary outlet while the supplier withdrawal remains. If no such matched accounting is evidenced, retain the actual gross environmental outlet and disclose unresolved supplier matching rather than invent cancellation. Actual net uptake needs its own compatible Resource identity and physical input, not a negative emissions-to-air row.

- Selected flow: Atmospheric-origin carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-2007`

### Process: Actual post-release FG logistics by cohort (`fg_service`)

#### Inputs

##### Product flows

###### Internal newly released cap receipt (`fg_in`)

Pair exactly with released_cap for the same cohort Q and inherited vector; internal transfer cancels in consolidation. No second external purchased-finished-cap provider.

Native identity is the cap subset of CN at-plant production mix for cap/pump/sprayer closures; not an unspecified global market. Use here only the unpigmented one-piece HDPE bore-seal screw cap with declared band/neck, cold-fill still-water test plan and first-release/cohort state. No native HDPE grade, item mass or supplier process is certified. This physical family match does not make a pump/sprayer interchangeable.

- Selected flow: Primary packaging, plastic closure `0161e346-2ac3-48be-b61d-e94ebb6f4b0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `bericap-hdpe-cap`; `jrc-ilcd-2010`

###### Physical returned released caps (`fg_return`)

Record current physical returned mass and original release/delivery/cohort reference separately. Preserve inherited burdens and signed original delivery reversals if a delivery report is prepared; return or reinspection is never new Q. No post-consumer remelting within this virgin cap route.

Native identity is the cap subset of CN at-plant production mix for cap/pump/sprayer closures; not an unspecified global market. Use here only the unpigmented one-piece HDPE bore-seal screw cap with declared band/neck, cold-fill still-water test plan and first-release/cohort state. No native HDPE grade, item mass or supplier process is certified. This physical family match does not make a pump/sprayer interchangeable.

- Selected flow: Primary packaging, plastic closure `0161e346-2ac3-48be-b61d-e94ebb6f4b0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `bericap-hdpe-cap`; `jrc-ilcd-2010`

###### FG storage packing and handling electricity (`electricity_fg`)

Record actual packing/conveying/warehouse/handling electricity, allocated separately to the release cohorts served, including opening historical FG. Do not assign all warehouse energy to current Q or double-count the manufacturing meter.

Native Product is CN grid-average consumption mix supplied to the user at <1kV. Its reference property is Net calorific value with energy reference unit MJ; this is the database electricity identity convention, not combustion of an electricity fuel. Apply only to that metered boundary/voltage/geography and a compatible temporal provider. Record other actual voltages/generation under independently verified identities; do not transplant this flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `sacmi-ccm-2018`; `jrc-ilcd-2010`

###### Corrugated shipping carton (`carton`)

This card is one whole supplied corrugated shipping carton. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. The input is actual external acquisition/receipt, not repeated internal reuse. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### LDPE cap-liner bag (`liner`)

This card is one whole supplied low-density polyethylene liner bag. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. The input is actual external acquisition/receipt, not repeated internal reuse. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Low-density polyethylene liner bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### LLDPE pallet stretch film (`wrap`)

This card is one whole supplied linear low-density polyethylene stretch film. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. The input is actual external acquisition/receipt, not repeated internal reuse. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Softwood shipping pallet (`pallet`)

This card is one whole supplied softwood shipping pallet. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. The input is actual external acquisition/receipt, not repeated internal reuse. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Softwood shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Whole pressure-sensitive PP sealing tape (`tape`)

This card is one whole supplied pressure-sensitive polypropylene carton sealing tape. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. The input is actual external acquisition/receipt, not repeated internal reuse. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Pressure-sensitive polypropylene carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Whole paper shipping label (`label`)

This card is one whole supplied self-adhesive paper shipping label. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. The input is actual external acquisition/receipt, not repeated internal reuse. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Self-adhesive paper shipping label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross outward cap carriage (`gross_shipped_cap`)

Record all physical outward cap mass excluding packaging, cohort and actual dispatch state; do not net against returns for physical transport/packaging accounting. It is a service-account movement, not another manufactured reference output.

Native identity is the cap subset of CN at-plant production mix for cap/pump/sprayer closures; not an unspecified global market. Use here only the unpigmented one-piece HDPE bore-seal screw cap with declared band/neck, cold-fill still-water test plan and first-release/cohort state. No native HDPE grade, item mass or supplier process is certified. This physical family match does not make a pump/sprayer interchangeable.

- Selected flow: Primary packaging, plastic closure `0161e346-2ac3-48be-b61d-e94ebb6f4b0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `bericap-hdpe-cap`; `jrc-ilcd-2010`

###### Corrugated shipping carton (`out_carton`)

This card is one whole supplied corrugated shipping carton. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is the gross outward-carried/externally returned packaging article, paired to real dispatch/return records, not cap production. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### LDPE cap-liner bag (`out_liner`)

This card is one whole supplied low-density polyethylene liner bag. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is the gross outward-carried/externally returned packaging article, paired to real dispatch/return records, not cap production. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Low-density polyethylene liner bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### LLDPE pallet stretch film (`out_wrap`)

This card is one whole supplied linear low-density polyethylene stretch film. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is the gross outward-carried/externally returned packaging article, paired to real dispatch/return records, not cap production. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Softwood shipping pallet (`out_pallet`)

This card is one whole supplied softwood shipping pallet. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is the gross outward-carried/externally returned packaging article, paired to real dispatch/return records, not cap production. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Softwood shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Whole pressure-sensitive PP sealing tape (`out_tape`)

This card is one whole supplied pressure-sensitive polypropylene carton sealing tape. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is the gross outward-carried/externally returned packaging article, paired to real dispatch/return records, not cap production. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Pressure-sensitive polypropylene carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Whole paper shipping label (`out_label`)

This card is one whole supplied self-adhesive paper shipping label. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is the gross outward-carried/externally returned packaging article, paired to real dispatch/return records, not cap production. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Self-adhesive paper shipping label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

##### Waste flows

###### Corrugated shipping carton (`waste_carton`)

This card is one whole supplied corrugated shipping carton. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is this package alone as discarded waste, with destination and contamination subledger; no bundle with other packages. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### LDPE cap-liner bag (`waste_liner`)

This card is one whole supplied low-density polyethylene liner bag. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is this package alone as discarded waste, with destination and contamination subledger; no bundle with other packages. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Low-density polyethylene liner bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### LLDPE pallet stretch film (`waste_wrap`)

This card is one whole supplied linear low-density polyethylene stretch film. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is this package alone as discarded waste, with destination and contamination subledger; no bundle with other packages. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Softwood shipping pallet (`waste_pallet`)

This card is one whole supplied softwood shipping pallet. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is this package alone as discarded waste, with destination and contamination subledger; no bundle with other packages. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Softwood shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Whole pressure-sensitive PP sealing tape (`waste_tape`)

This card is one whole supplied pressure-sensitive polypropylene carton sealing tape. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is this package alone as discarded waste, with destination and contamination subledger; no bundle with other packages. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Pressure-sensitive polypropylene carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Whole paper shipping label (`waste_label`)

This card is one whole supplied self-adhesive paper shipping label. Use only if this exact physical form actually occurs; collect empty/attached/reusable stocks, acquisitions, external returns and this movement separately under cp_pack. This is this package alone as discarded waste, with destination and contamination subledger; no bundle with other packages. Whole tape/label/article constituents already included are not additional purchases. Different real compositions must be separately named.

- Selected flow: Self-adhesive paper shipping label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sacmi-ccm-2018`

###### Post-release discarded HDPE caps (`waste_fg_caps`)

Measure storage-damaged or returned rejected caps by original release cohort with inherited burdens and actual treatment; retain physical returned mass and any original-delivery correction separately. This is not a negative or new manufacturing Q and receives no automatic virgin-displacement credit.

- Selected flow: Discarded previously released HDPE cap bodies
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ifc-plastics-2007`; `jrc-ilcd-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all inventory rows | Use this hierarchy only after the study justifies an attributional scenario requiring allocation rather than substitution. Industrial brochures do not establish an LCA allocation choice. Identify distinct products/services and true joint process boundaries; product-specific recipe/operation data are not shared merely because one press or warehouse is used. | `jrc-ilcd-2010` |
| a_subdivide | all inventory rows | First collect separate dedicated operations and use actual or virtual subdivision to assign independently attributable resin, machine intervals, band finishing, testing, rejects and rework to their own cap configuration/cohort. Assess infeasibility and distortion explicitly before retaining a shared pool. Separate pre-release recovery from post-release return inspection and historical FG services. | `jrc-ilcd-2010` |
| a_causality | all inventory rows | For each residual exchange identify and substantiate the determining physical causal relationship. Metered variable drive/heating demand, cooling duty, actual use-time and capacity-limiting storage/transport occupancy can differ by exchange. Demonstrate which factor determines that exchange and relevant intensity variation. A convenient mass, cycle or cavity ratio is not sufficient; do not impose one physical criterion on all exchanges. | `jrc-ilcd-2010` |
| a_market | all inventory rows | Only for truly residual exchanges without a supported determining physical relationship use representative contemporaneous market values at the same actual joint-process exit gate and physical state/quality/quantity. Remove later packing/transport/processing value when deriving gate prices; document zero/negative values and unresolved price evidence rather than force a positive ratio. Keep exclusive later burdens exclusive. Preserve sensitivity and ensure all assigned exchange vectors sum to the original pool. No fixed fractions or automatic recovery credit. | `jrc-ilcd-2010` |
| a_recovery | all inventory rows | Internal clean regrind is an internal loop, not another purchase or valuable coproduct by declaration. Assign real recovery energy/losses and inherited burdens without multiplying virgin input. Outgoing scrap requires documented waste/product status, treatment and downstream boundary; do not infer a recycling rate, zero burden, avoided virgin credit or annex14 recycling allocation from this bounded production hierarchy. Separate evidence and review are necessary before applying any such model. | `jrc-ilcd-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every raw_fields cell requests unnormalised readings. aggregation_rule only points to the final reference basis and the single normalize_once operation; it does not collect pre-divided amounts. These are this PCR collection protocols and operational conservation requirements, not claims of observed factory results or formulas quoted from an industrial source.

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | Unique first-release mass | acceptance_and_weighing | cohort_id; lot_id; unit_history; mould_neck_resin_band_configuration; release_date; gross_mass; packaging_tare; new_accepted_net_mass; accepted_new_count; sampled_cap_net_mass; sampled_count; calibration; test_plan; destructive_samples; rejects | Calibrated net weighing with representative same-configuration counts/mass samples where used. Deduplicate first acceptance; exclude destructive samples, already released stock and reinspection. Check drawing dimensions/neck fit, leak and torque under stated fill/use conditions, tamper bridges/band and hygienic/food-contact suitability against the actual approved control plan; disclose tests and uncertainty without invented thresholds. | kg | Each lot and release event | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | Raw unique accepted net mass Q; released_cap represents 1 kg reference flow without another calculation | Calibration certificates; signed release sheets; configuration-specific weighing and test records |
| cp_material | manufacture | Each whole purchased formulation or article | stock_and_withdrawal | row_id; supplier; grade; CAS; comonomer; formulation_assay; supply_form; route; batch; original_unit; gross_tare; opening_stock; receipts; withdrawals; external_returns; closing_stock; composition_density_state separately_held_stock_id; opening_closing_quantity; each_inherited_non_WIP_exchange_vector; new_receipt_vector; transfer_and_consumption_history; stock_WIP_disjoint_scope | Weigh whole supplies and withdrawals or use traceable calibrated original-unit records; preserve formulation constituent subledgers. Hydraulic oil volume remains actual m3 until independent density/weighing is available for mass balance. Reconcile raw/installed/fluid stocks before attribution; no invented factory amounts. For separately held raw/installed/fluid stocks retain each opening and closing inherited exchange vector, current receipt and actual withdrawal/consumption evidence with its cohort and original units; include historical charge consumed without current makeup. Distinguish unused retained charge from actual use/leakage. A receipt and its later internal withdrawal are not two external purchases. Reconcile with cp_wip and wip_vector without duplicated stock terms. | kg; m3 | Each receipt/withdrawal and stock boundary | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Invoice/SDS/PDS; scale and stock reconciliation; independent actual-fluid density if used |
| cp_energy | manufacture | Electricity and actual purchased compressed air | meter_and_supply | row_id; cohort; meter_id; voltage; supply_mix; start_end_readings; raw_unit; true_power_rate; time_intervals; integrated_volume; gas_composition; pressure; temperature; mode; shared_load; supplier_boundary | Calibrated submeter/counter plus operating logs; retain startup, stopped/idle, rejects, cleanup and recovery. Distinguish an integrated reading from a rate before conversion. Determine shared-system causality per exchange before one normalisation; do not infer kWh from nameplate or brochure throughput. | raw kWh; kW; kg; m3 | Continuous readings and each mode transition | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Meter calibration; time series; load tests; common-system reconciliation |
| cp_water | manufacture | Each water supply/return and stored water | water_and_heat_balance | row_id; source_quality; liquid_mass; integrated_volume; true_flow_rate; density_measurement; composition; pressure; temperature; enthalpy; opening_closing_loop_stock; return_receiver; supplier_water_energy_agreement; evaporation; blowdown; drift; leakage separately_held_stock_id; opening_closing_quantity; each_inherited_non_WIP_exchange_vector; new_receipt_vector; transfer_and_consumption_history; stock_WIP_disjoint_scope | Meter/weight each external supply and actual return independently; loop circulation is internal. Independently measure net evaporation, blowdown, drift/leak or constrain known terms before solving at most one remainder. Record thermal state and agree whether the provider includes cooling energy/water. Any actual different water chemistry has its own row. For separately held raw/installed/fluid stocks retain each opening and closing inherited exchange vector, current receipt and actual withdrawal/consumption evidence with its cohort and original units; include historical charge consumed without current makeup. Distinguish unused retained charge from actual use/leakage. A receipt and its later internal withdrawal are not two external purchases. Reconcile with cp_wip and wip_vector without duplicated stock terms. | kg; m3; rate with actual time unit; temperature; pressure; enthalpy | Continuous/each event and loop-stock boundary | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Meter/scale and density-state records; thermal readings; supplier agreement; water closure |
| cp_wip | manufacture | WIP and internal regrind exchange vectors | cohort_stock_vector | cohort; raw_stock; hopper_melt; moulded_uninspected_caps; finishing_queue; clean_regrind; opening_closing_mass; paired_transfers; failed_batches; each_inherited_exchange_vector; current_raw_loads; scrap_and_treatment; rework | Physical stocktake and traceable batch/transfer records at both period boundaries; retain each exchange vector at real inherited burden, including prior failure/cleanup. Link actual new-unit production versus existing-unit reinspection; do not reset burden on recycling or carryover. | kg and separate original units of every exchange vector | Each transfer/rework and period boundary | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Signed stocktake; lot genealogy; inherited vector reconciliations; hygienic recovery validation |
| cp_waste | manufacture | Each named manufacturing waste | waste_manifest | row_id; physical_stream; dry_wet_form; gross_tare; actual_net_mass; water_and_contaminant_assay; destination; treatment; receipt_date; retained_stock; internal_recovery; receiver_boundary | Weigh each distinct stream and retain receiver/treatment evidence; split actual different destinations. Reconcile captured powder with collection/waste stocks and escaped particles; do not equate solids loss to unmeasured VOC. No theoretical zero-waste yield. | kg | Every waste movement and stock boundary | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Calibrated waste weights; assays; receiver manifests and treatment boundary |
| cp_species | manufacture | Each confirmed molecule/particle/phase | species_and_media_measurement | row_id; species_CAS_polymer; carrier_species_gross_in_out; supplier_air_boundary; actual_carbon_origin; phase_size; receiving_medium; concentration; blank; detection_limit; measured_integrated_volume; true_flow_rate; actual_duration_if_rate; gas_pressure_temperature_moisture; capture_in_out; refrigerant_open_close_charge_recovery; uncertainty; elemental_assays | Use species-resolved actual measurement/independently supported material balance with correct wet/dry reference conditions; subtract measured carrier/background transfers only with measured paired species boundaries, retaining both gross physical inlet/outlet subledgers; coordinate the purchased-air upstream boundary. Rate-times-duration and already integrated volume are mutually distinct bases. One mass residual cannot determine several species. Preserve non-detect versus unknown and distinct liquid/vapour/reacted water. | kg; measured concentration and volume/rate states | Representative complete campaigns and each charge/recovery event | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Analytical reports; calibrated sampling/flow records; species/CAS/media evidence; independent mass and elemental checks |
| cp_transport | manufacture | Inbound freight | transport_activity | shipment; cargo_mass; packaging_mass; origin_destination; route_distance; vehicle; load_capacity; return_leg; supplier_inclusions; period; cohort | Use actual logistics/load records; choose mass/volume-capacity causality for shared transport where necessary. Link inbound cargo to procurement and avoid an upstream included transport duplication. | kg; km; t.km | Each shipment | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Freight documents; distances; supplier boundary and load evidence |
| cp_fg | fg_service | FG movement and actual cohort services | stock_service_history | cohort; original_release_Q; historical_release_and_delivery_links; opening_closing_FG_mass; Q_internal_receipt; gross_outward_mass; physical_returned_mass; original_delivery_reversal; rejected_FG_mass; each_inherited_exchange_vector; actual_service_raw_loads; storage_time_space; handling_cycles | Stocktake/dispatch/return genealogy with service submeter and cause-specific handling/storage records. Keep old cohort burden vectors and its original Q; do not assign opening FG services to unrelated current Q. Repeat acceptance is a service. Define observed closing date; future unobserved services stay disclosed rather than invented. | kg; raw MJ; original exchange-vector units | Each move/service and stock boundary | Release cohort through observed service closing date; historical cohorts separately | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Cohort reconciliation; signed dispatch/return links; service meters and complete FG history |
| cp_pack | fg_service | Each cap shipping package form | package_form_balance | row_id; physical_form_grade; cohort; opening_empty_stock; opening_attached_WIP; opening_attached_FG; opening_reusable_stock; external_purchase; external_return_received; closing_empty_stock; closing_attached_WIP; closing_attached_FG; closing_reusable_stock; gross_carried_outward; returned_to_external_owner; waste; internal_reuse; cleaning_repair_service; article_mass; constituent_subledger | Weigh each complete package form or use validated configuration-specific counts/mass. Reconcile all empty/attached/reusable states separately. External return receipts and outward returns are not internal reuse; internal reuse is a paired transfer, with real service loads. No default new pallet per reuse and no double purchase of tape adhesive or carton constituents. | kg; count with independently measured article mass | Every receipt/move/reuse and stock boundary | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Article specifications; tare/count weights; purchase/return records; state-wise package closure |
| cp_supply_pack | manufacture | Each resin supply package form | package_form_balance | row_id; physical_form_grade; cohort; opening_empty_stock; opening_attached_WIP; opening_attached_FG; opening_reusable_stock; external_purchase; external_return_received; closing_empty_stock; closing_attached_WIP; closing_attached_FG; closing_reusable_stock; gross_carried_outward; returned_to_external_owner; waste; internal_reuse; cleaning_repair_service; article_mass; constituent_subledger | Weigh each complete package form or use validated configuration-specific counts/mass. Reconcile all empty/attached/reusable states separately. External return receipts and outward returns are not internal reuse; internal reuse is a paired transfer, with real service loads. No default new pallet per reuse and no double purchase of tape adhesive or carton constituents. | kg; count with independently measured article mass | Every receipt/move/reuse and stock boundary | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Article specifications; tare/count weights; purchase/return records; state-wise package closure |
| cp_allocation | manufacture | Each residual shared exchange | allocation_evidence | exchange_id; exclusive_assignment; subdivision_feasibility; virtual_subdivision; physical_driver; intensity_evidence; true_joint_gate; actual_exit_state_quality_quantity; contemporaneous_prices; later_processing_costs; allocation_weights; full_pool; sensitivity; uncertainty | Apply the justified attributional hierarchy exchange by exchange; document failed earlier steps before market-value fallback and reconcile assigned vectors to each original pool. Raw records remain unnormalised. | each exchange original unit; contemporaneous currency | Each shared pool and material change | Entire selected release cohort and declared periods; include failed and zero-output intervals | Actual China converter and declared supplier boundaries | per 1 kg reference flow | Meter studies; causal justification; actual same-gate price evidence; 100% pool reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | hdpe_pellets; electricity_mfg; cooling_makeup; wash_water; hydraulic_fluid; purchased_air; external_cooling_supply; filter_screen; cleaning_ipa; r134a_charge; freight; regrind_in; regrind_out; external_cooling_return; waste_caps; waste_purge; waste_slit; waste_dust; waste_screen; waste_oil; waste_ipa; waste_resin_sack; cooling_blowdown; wash_effluent; water_vapour; hdpe_dust_air; n_butane_air; ipa_air; r134a_air; fg_in; fg_return; gross_shipped_cap; electricity_fg; carton; out_carton; waste_carton; liner; out_liner; waste_liner; wrap; out_wrap; waste_wrap; pallet; out_pallet; waste_pallet; tape; out_tape; waste_tape; label; out_label; waste_label; waste_fg_caps; resin_sack; out_resin_sack; recovered_r134a; nitrogen_air; oxygen_air; argon_air; atmospheric_co2_air | a_i = A_i / Q. A_i is the raw exchange numerator after actual unit/rate conversion, attribution and inherited WIP/cohort corrections; Q is kg of newly first-released caps in the selected release cohort. Execute once only for Q>0. Manufacturing and observed service contributions are identified separately; every card and aggregation references this same result. released_cap is the 1 kg identity, not another division. | A_i; Q; cp_release | a_i | `jrc-ilcd-2010` |
| release_gate | released_cap | Q = sum of unique first-released new-unit net mass in kg under cp_release. Where counts are used, configuration-specific measured cap mass converts count to kg; preserve its sampling scope and uncertainty. Already released FG, repeat tests, physical returns and dispatch are not new Q. | first_release_net_mass; accepted_new_count; measured_cap_mass; cp_release | Q | `bericap-hdpe-cap` |
| raw_conversion | all inventory rows | U_i = raw readings converted to the row unit before attribution. Weighed kg needs no density. Integrated volume times independently measured same-substance/state density yields kg; genuine volume rates are integrated first. Hydraulic m3 retains its volume identity; physical kg subledger is separate. Electricity E_MJ = 3.6 times metered E_kWh; heat and electricity stay separate. No time multiplier on integrated readings and no implicit item mass. | raw_reading; raw_unit; actual_rate_intervals; actual_density_state; cp_material; cp_energy; cp_water; cp_species | U_i | `ifc-plastics-2007` |
| wip_vector | manufacture | For each exchange i, A_i_manufacture = opening_WIP_i + opening_separately_held_i + current_new_assigned_U_i - closing_WIP_i - closing_separately_held_i - independently_evidenced_distinct_assignments_i. Separately held vectors cover raw supplies, installed items, cooling/other water, hydraulic fluid, solvent and refrigerant charges where actually present, with physical quantities reconciled independently. current_new_assigned_U_i includes only newly incurred external-receipt and process-load vectors before these stock corrections; internal withdrawal is not an additional purchase. If a directly measured consumption vector already includes a particular stock correction, prove equivalence and apply that correction once only. Keep actual manufacturing losses and waste-treatment burdens in the intended cap cohort, not subtraction credits. Disjoint WIP/non-WIP ownership prevents duplicate stock terms; historical charge depletion without makeup retains its inherited burden. Failed/zero-output pools and later assignment history remain; mass alone cannot invent an exchange vector. | opening_WIP_vector; opening_separately_held_vector; current_new_assigned_U; closing_WIP_vector; closing_separately_held_vector; distinct_assignments; cp_material; cp_water; cp_wip; cp_allocation | A_i_manufacture | `jrc-ilcd-2010` |
| fg_vectors | fg_service | For each release cohort preserve its original released exchange vector and original Q. Opening inherited FG vector plus internal Q receipt vector plus actual returned vector plus current attributable service vector equals closing FG vector plus gross outward vector plus discarded/treatment vector plus any independently evidenced emissions. Physical returns and original-delivery reversals are distinct signed records. Service burdens for historical cohorts use their own original cohort, never unrelated current Q; observed services do not reset manufacturing burden. | opening_FG_vector; Q_receipt_vector; returned_vector; current_service_vector; closing_FG_vector; gross_outward_vector; discarded_vector; cp_fg | A_i_service and reconciled cohort vectors | `jrc-ilcd-2010` |
| physical_gates | all inventory rows | Manufacturing mass: opening material/WIP/auxiliary-fluid stocks + external material inputs = closing stocks + Q + external return/waste/emission masses. Internal regrind cancels. Cap-only FG mass: opening FG + Q + physical cap returns = closing FG + gross cap departures + discarded caps + any confirmed cap-derived emissions. The combined gate cancels the internal Q pair: opening manufacturing+FG stocks plus external material inputs and cap returns = closing manufacturing+FG stocks plus gross cap departures and real external return/waste/emission masses. Package balances are checked separately then included once in the combined all-material gate. Q is not added again beside its closing FG. | opening_material_WIP_FG_stock; external_material_inputs; Q; cap_returns; closing_material_WIP_FG_stock; gross_cap_departures; external_mass_exits; cp_wip; cp_fg; cp_water; cp_waste | independent manufacturing FG and combined mass closures | `ifc-plastics-2007`; `jrc-ilcd-2010` |
| package_balance | cp_pack; cp_supply_pack | For each physical packaging form k: opening_empty_k + opening_attached_WIP_k + opening_attached_FG_k + opening_reusable_k + purchased_k + external_returns_received_k = closing_empty_k + closing_attached_WIP_k + closing_attached_FG_k + closing_reusable_k + gross_carried_outward_k + returned_to_external_owner_k + waste_k. Internal reuse transfers cancel, and its real service loads remain. Split different forms/materials; exclude package mass from cap Q and never net gross package carriage against returned cap mass. | opening_package_states; purchased_packages; external_returns_received; closing_package_states; gross_carried_outward; returned_to_external_owner; package_waste; cp_pack; cp_supply_pack | each package-form physical closure | `sacmi-ccm-2018`; `jrc-ilcd-2010` |
| species_and_elements | cp_species; cp_water | Quantify each real species/phase independently and retain gross physical transfer separately from net environmental transfer after matched measured ambient-carrier cancellation; evaluate elemental input/output vectors from actual composition/analysis separately from total mass. Measured water supply/storage/return/blowdown/drift/leak/vapour terms share one coherent water gate. At most one unidentified scalar can be constrained by one independent residual; more unknowns require more measurement and remain incomplete. No deliberate reaction water in this non-reactive nominal route. | species_measurements; composition_assays; independent_elemental_data; water_path_measurements; cp_species; cp_water | species phase and elemental reconciliations | `ifc-plastics-2007` |
| exchange_allocation | all inventory rows | For exchange i first assign exclusive/subdivided/virtually subdivided U_i. Apply supported determining physical drivers only to its residual shared pool. Only its truly remaining pool uses contemporaneous actual same-gate market values after documented earlier-step infeasibility. Sum all cohort/product/service assigned exchange vectors to the original pool before normalize_once; no fixed allocation fraction. | U_i; exclusive_assignments; residual_shared_pool; physical_drivers; actual_gate_values; cp_allocation | A_i | `jrc-ilcd-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify full actual supplier/form/state and all adopted native restrictions; preserve missing auxiliary identity/provider as a data gap rather than a new generic bundle. | Direct identity context plus current supplier PDS/SDS/composition and exact support chain |
| dq_measurement | all inventory rows | Preserve raw originals, original units/rates, calibration, independent substance-state densities where needed, detection limits and uncertainty; do not substitute an indicative brochure coefficient for measurement. | Instrument files; laboratory and mass/energy/water reconciliations |
| dq_scope | all inventory rows | Cover the entire selected cohort and time/geographic scope, including failure, start-stop, idle, cleaning and rework. Report measured absence versus unknown and the observed service closing date; future service loads are not fabricated. | Mode logs; cohort/period genealogy; completeness and exclusions register |
| dq_stocks | cp_wip; cp_fg; cp_pack; cp_supply_pack | Retain per-exchange inherited vectors as well as mass for all opening/closing stocks and returns; reconcile all three physical gates and each packaging form independently of allocation. | Signed physical stocktakes; vector ledgers; package-form closure |
| dq_sources | all inventory rows | Maintain source id/type/reference/used_for and rule source links with complete applicability/countercontext. Qualitative primary facts are not quantitative site records or scientific/translation approval. | Full primary context; protocol records; unresolved-method and supplier-data disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | Check every scope/qualifier and full native name, route, state, geography, CAS where present, type, receiving medium and reference-property support. Cap UUID is CN at-plant production mix for a cap/pump/sprayer family: use only the one-piece cap subset, never proof of HDPE grade, compliance or a provider. HDPE granulate UUID is slurry/gas-phase at-plant mass identity with no CAS/grade; disclose its inconsistent CPC34170 label without treating that label as physical evidence. Reject any real contradictory CAS, particle form or route. | `ifc-plastics-2007` |
| v_q | all inventory rows | Verify cp_release, one explicit reference link released_cap, Q deduplication and one normalize_once operation. Reconcile WIP exchange vectors, failed/zero-output loads and all actual unit conversions before normalisation. Repeat release/dispatch cannot increase Q. Q<=0 or missing critical measured relations prevent a defensible unit result and remain explicit incomplete data. | `jrc-ilcd-2010` |
| v_gates | all inventory rows | Reconcile manufacturing, FG and combined physical control volumes independently of allocation. Cancel internal release/regrind transfers. Current closing FG is contained in Q, not Q plus another product. Every physical and inherited burden remainder must have an identified stock, discharge, waste or independently assigned service destination. Actual return-repair load belongs to its original released cohort/service; no new production from reinspection. | `jrc-ilcd-2010` |
| v_species | all inventory rows | Compare total mass and relevant elemental closure with independently quantified species/water pathways. No residual-fitted chemical emissions; no COD/VOC-to-species invention. Retain unknowns, detection limits, uncertainty and unresolved sinks separately. Confirm actual environmental medium; water-vapour UUID means ordinary unspecified-air emission, not stratospheric or long-term release. | `ifc-plastics-2007` |
| v_packaging | all inventory rows | Check each packaging identity/form/stock balance in cp_pack including empty, attached and reusable stocks; gross outward packages follow actual gross carriage, not net cap delivery. No internal reuse repurchase or packaging mass in cap Q. Distinguish one whole commercial tape/carton article from duplicate backing/adhesive/constituent purchases. | `jrc-ilcd-2010` |
| v_applicability | all inventory rows | Check resin use conditions and cap test plan independently of broad identities. MB5568 historical PDS supports a water-cap injection route, but typical values and its customer-test disclaimer do not certify a current final cap. MB5569 explicitly not recommended for bottled water cannot be substituted by name similarity. BERICAP geometry, Husky injection architecture and SACMI downstream operations are a transparent synthesis, not a proven same-SKU line. Missing ordinary provider/auxiliary data are disclosed; a genuine core product/terminal/method gap holds methodology as draft. | `bericap-hdpe-cap`; `borealis-mb5568-2017`; `borealis-mb5569-counter`; `husky-hycap4-2016`; `sacmi-ccm-2018` |
| v_data | all inventory rows | Require source-specific primary context, raw readings, calibration, coverage, all reported source fields and uncertainty. No missing exchange is zero; unavailable auxiliary identity is not permission for a collection row. Preserve distinct foreground measurement, author protocol, external process fact and identity evidence. Confirm bilingual rules and generated projection retain all conditions and ancestors; engineering success is not science, translation, mapping or publication approval. | `jrc-ilcd-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A declared cap manufacturing intermediate with separately identified observed cohort logistics; link to a bottle-filling model with matched neck/function and boundary |
| allowed_use | Attributional cap supply modelling within documented product/route/geography and measured reference basis; keep the service account separately addressable |
| excluded_use | Whole CPC leaf coverage; purchased-cap repacking as manufacture; injection/compression interchangeability; equal function from kg; unverified food-contact or science approval; duplicate Q/FG output |
| required_metadata | Every required qualifier; actual supplier/provider/state; source-specific support and native restrictions; raw measurements; original cohort and service periods; explicit allocation/stock boundaries |
| required_quality_disclosure | Measurement/identity/provider completeness; failed and zero-output data; density/species uncertainty; stock vectors; source age and synthesis limits; actual service observation endpoint; excluded future services |
| update_trigger | Material grade/formulation or forming route change; neck/seal/tether change affecting process; release/Q or stock-boundary change; utility/species/packaging change; improved primary evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | dataset | UN Statistics Division; CPC3.0 Structure 30June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 36490 wording and adjacent 36410/363 boundaries only; no accepted mapping or whole-leaf methodology claim. |
| borealis-mb5568-2017 | handbook | Borealis; BorPure MB5568 PDS; 20.12.2017 Ed.2; pp1–3; https://www.borealisgroup.com/storage/Datasheets/borpure/mb5568/MB5568-PDS-REG_EUROPE-EN-V2-PDS-EUR-49764-10046836.pdf | Historical HDPE water-cap resin and injection/storage/regrind context; CAS25087-34-7; typical properties are not specifications or measured foreground amounts. No grade-to-flow or food-contact approval implied. |
| husky-hycap4-2016 | handbook | Husky; HyCAP4 Beverage Closure Manufacturing System; July2016; pp2–7; https://www.husky.co/siteassets/documents/hycap-4-flyer-2016-07-21_final-en.pdf | Integrated injection machine/mould/hot-runner controls and maintenance; optional metal separator. No advertised productivity or energy-saving percentage used. |
| sacmi-ccm-2018 | handbook | SACMI; CCM Compression Technology for plastic closures; SI10/2018; pp2/18–21; https://sharedcontent.sacmi.com/sharedcontent/media/documents/plastic/catalogue/ccm_sfm_pmv_pmd.pdf | Post-mould slit-band/folding and distinct packing/handling steps; adjacent liner and compression routes are counterexamples. No compression-cycle energy, lining materials or catalogue rates transferred to injection. |
| bericap-hdpe-cap | handbook | BERICAP; HEXALITE26/11,3 7242 SFB3T CA; publisher page snapshot16October2026; https://bericap.com/product/hexalite-26-113-7242-sfb-3t-ca/ | One-piece HDPE screw cap with bore seal and slit tamper band for still-water bottle interface; source product can be tethered. No inference of its forming machine or resin grade. |
| borealis-mb5569-counter | handbook | Borealis; BorPure MB5569 product page; snapshot16October2026; https://www.borealisgroup.com/products/product-catalogue/borpure-mb5569 | Counterexample: slip-containing MB5569 explicitly not recommended for bottled-water caps. Prevent blanket transfer between HDPE grades. |
| ifc-plastics-2007 | official_guidance | IFC/World Bank Group; EHS Guidelines for Metal Plastic and Rubber Products Manufacturing; 30April2007; §1.1.2 pp9–11 and AnnexA pp22–23; https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf | Non-reactive resin-to-shaped-part process and screening for actual water/waste/emission pathways. Table4 is potential high-temperature release evidence; not a universal species factor. No metals/rubber substances, legal limits or IFC conformance imported. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC; ILCD Handbook General guide for LCA Detailed guidance; March2010; §§7.9.2–7.9.3 printed255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Allocation hierarchy in a justified attributional allocation scenario; specific exchange causality before residual common-gate market values and total conservation. Collection/stock equations are this PCR operational protocols; no ILCD-derived recycling credit or whole-programme compliance. |
