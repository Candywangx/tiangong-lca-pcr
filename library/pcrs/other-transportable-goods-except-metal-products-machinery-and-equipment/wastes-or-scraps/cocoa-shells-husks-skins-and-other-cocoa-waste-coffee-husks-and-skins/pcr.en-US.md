---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.cocoa-shells-husks-skins-and-other-cocoa-waste-coffee-husks-and-skins
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Preheated cocoa bean shells for biomass boiler supply


## 1. Scope and Applicability

This PCR specifies a single whole cocoa-bean shell fraction collected after dry-bean preheating and winnowing, before the separated nibs are alkalised and roasted, for one declared biomass-boiler feedstock receiving function. The complete supplied fraction includes measured moisture and adherent nib/germ; it is not an isolated fibre, nutrient or fuel-energy service. The representative route is documented by the historical industrial manufacturer description in jb-foods-2012. It is explicitly different from whole-bean roasting followed by cracking/winnowing.

The default foreground starts at the separated-shell take-off and includes dedicated collection, actual screening, storage, measurement and supply to the first complete quality-release gate. A compatible upstream shell dataset must carry dry-bean production and pre-separation joint burdens once. If the foreground actually starts with merchantable dried beans, include the complete conditional joint process instead. Do not model a cocoa factory as a factory dedicated to shell production.

This restricted material-supply method includes the source-supported same-site handover of useful shell feedstock to an actual biomass boiler; external sale is not required. JB Foods printed pp. 67, 93–95 documents the route and use but also calls shells low/no-value waste and distinguishes sale as waste from own-boiler use. This supports a useful material function, not legal by-product/end-of-waste status or qualified external Product sales. For each actual data package, verify the same fraction and treatment trace, intended receiving use/specification, first release, actual lawful disposition and compatible upstream/provider method; unknowns remain incomplete and do not pass. Genuine nonfunctional/discarded material or an incompatible legal state belongs in a separately compatible Waste/treatment branch with all actual loads, never a renamed Product, automatic zero burden or credit. Exclude cocoa pods/placenta/pulp, wet beans, cocoa paste/butter/cake/powder, coffee cherry husk/parchment/roasting silverskin/spent grounds, whole-bean-roasted shell as the same state, chemically treated/extracted/carbonised shells and activated carbon. Food, feed, paper, mulch and soil-amendment functions are not alternative reference functions here.


CPC 39150 also includes coffee husks and skins, but excludes coffee-containing substitutes (23912). Neighbouring 39120 covers animal-feed vegetable residues n.e.c., 39130 starch residues, 39141 bagasse, 39149 other sugar-manufacture waste and 39160 brewing/distilling residues; none expands this cocoa-bean-shell method. These are classification distinctions, not a legal waste decision.

The manufacturer reports two distinct destinations: its own biomass boiler and sale as waste material. Own-boiler use is evidence of that historical internal use only; it is not evidence of sale to an external boiler, positive gate value, or an external receiver specification. Any external boiler supply, gate price or legal Product status requires independent actual records. The packaging receipt classes and ledgers below are modelling/foreground collection requirements, not a claim that this factory used any specified sack or pallet configuration.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.cocoa-shells-husks-skins-and-other-cocoa-waste-coffee-husks-and-skins |
| classification_refs | CPC 3.0:39150; narrower |
| covered_products | One complete preheated cocoa-bean shell separation fraction for useful material handover to one declared biomass boiler, including evidenced same-site use; actual package acceptance and legal/provider compatibility must be verified. |
| excluded_products | Pod husk; coffee residues; cocoa main products; whole-bean-roasted shells under this state; extracted or carbonised shells; activated carbon; mixed biomass recipes; food/feed and other receiver functions. |
| representative_product | Preheated cocoa bean shells for biomass boiler supply |
| production_route | Fermented dried bean supply -> cleaning -> microniser preheating -> winnowing and shell take-off before nib alkalising/roasting -> dedicated collection and actual conditioning -> measured first quality release to boiler-feedstock supply. |
| market_state | Whole preheated shell fraction as supplied; actual moisture, nib/germ carryover, impurities, receiving limits and physical handling state declared. No fixed dry-matter, energy or bulk-density equivalence. |

The neighbouring cocoa-bean method uses fresh wet beans at farm gate; it is not a ready supplier dataset for fermented dried beans. Preserve actual post-harvest drying and mass/moisture conversion upstream. Cocoa paste, butter and powder methods describe downstream main-product gates and cannot replace the pre-roast shell separation boundary.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One qualifying whole shell supply for one declared biomass boiler receiver. |
| How much | 1 kg |
| How well | Matches the declared receiving specification and actual supplied wet-mass state; lot traceability, moisture, nib/germ, contaminants and legal/method status disclosed. |
| How long or cycle | One complete first quality release during H; no assumed shelf-life or repeated service. Storage and later handling are separately attributed services. |
| reference_flow_link | finished_shell |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Preheated cocoa bean shells for biomass boiler supply |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical identity Theobroma cacao and bean-shell origin; dry-bean supplier and lot genealogy; actual preheater and separation route; shell removed before nib alkalising and roasting; whole supplied fraction including measured nib and germ carryover; moisture and dry matter with measurement method and wet basis; foreign material and contamination acceptance criteria; no extraction or carbonisation or undeclared chemical treatment; actual additional drying or grinding and resulting state if present; one biomass boiler receiver and its material specification; legal status and attributional provider method for Product or Waste; first whole-lot release gate Q and release identifier; net supplied mass excluding packaging tare; site geography technology reference period H; storage condition and residence time; upstream dataset boundary and inherited per-flow burden vectors; opening and closing raw material WIP failed lots and FG; packaging and reusable return configuration |

The supplied whole fraction is weighed net of packaging. Whole means the complete supplied shell separation stream, not individually unbroken anatomical shells; actual breakage, adherent nib/germ and water remain measured, non-additive composition subaccounts. Composition assays and a separately measured fuel-quality bridge do not create extra reference flows or an energy-service denominator. Missing qualifiers make the data-package reference incomplete.


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg of net whole shells in the exact supply state and gate. Keep measured Q and packaging tare separate. Never replace it with sales, dry matter, nutrient or energy content. |
| measurement_raw | all inventory rows | actual exchange property | raw unit then conversion | Collect raw amounts before attribution or division; use raw_conversion and inventory_once. Integrated quantities are not rates. Every count-to-mass conversion requires actual article mass and configuration; no assumed single-item kg. |
| measurement_water | whole supplied fraction and water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep the whole wet mass as one physical ledger and assays as non-additive subaccounts. Independently measure relevant water/species; no mass-residual shortcut. |

Mass metrology uses Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, reference kg. Energy metrology uses Energy `f6811440-ee37-11de-8a39-0800200c9a66`, Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, reference MJ; 1 kWh = 3.6 MJ. Metered electricity is electrical energy, not a calorific-value assumption. These verified support records do not identify any electricity supplier or selected product flow; a later provider binding must independently verify its native property and conversion compatibility. All mass cards use the mass unit group; energy cards use the energy unit group. Fuel-specific gross/net calorific values require separate measured fuel evidence and native-property verification.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Preheated shell at winnower take-off; alternatively actual merchantable dry beans with joint activated. |
| starting_condition_role | secondary_input |
| product_classification_scope | Narrower single cocoa-bean shell state within CPC 39150; coffee and pod residues not merged. |
| recursive_input_rule | Purchased same-state shell inherits its provider burden once; a paired internal transfer cancels only at the combined gate. No duplicate dry-bean or shell procurement; explicitly solve any real return-heat loop in the wider model. |
| upstream_dataset_requirement | Traceable dry-bean or already allocated same-state shell dataset with real separation route, Product/Waste method, location, time and stock burden vectors. |
| disclosure | botanical identity Theobroma cacao and bean-shell origin; dry-bean supplier and lot genealogy; actual preheater and separation route; shell removed before nib alkalising and roasting; whole supplied fraction including measured nib and germ carryover; moisture and dry matter with measurement method and wet basis; foreign material and contamination acceptance criteria; no extraction or carbonisation or undeclared chemical treatment; actual additional drying or grinding and resulting state if present; one biomass boiler receiver and its material specification; legal status and attributional provider method for Product or Waste; first whole-lot release gate Q and release identifier; net supplied mass excluding packaging tare; site geography technology reference period H; storage condition and residence time; upstream dataset boundary and inherited per-flow burden vectors; opening and closing raw material WIP failed lots and FG; packaging and reusable return configuration |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_chain` | upstream and receiving gate | The default foreground begins at the shell take-off with a traceable upstream shell dataset that already carries bean production and joint cleaning/preheating/winnowing burdens once. When dry beans are the actual foreground start, activate joint and keep the complete beans-to-nib/shell physical ledger. Never combine both as new purchases for the same lot. | jb-foods-2012 |
| `boundary_upstream` | agriculture and cocoa main products | Cultivation, pod harvest/opening, fermentation and bean drying are upstream to dry-bean supply. Bean-shell and pod-husk flows are distinct. After shell separation, nib-specific alkalising, roasting, grinding and subsequent liquor, butter and powder operations remain outside the shell supply burden except a separately evidenced real service supplied back to it. | jb-foods-2012; icco-cocoa-processing |
| `boundary_complete` | actual operations and omissions | Include dedicated collection, conveyance, actual screening, holding, weighing, failed lots, all startup/shutdown/idle/cleanup/rework and gate-side handling. Additional drying, sterilisation, milling, wetting or chemical treatment that actually occurred remains in the inventory and triggers state/applicability review; a scope condition never deletes a physical flow. Add every actually present atomic input or exit absent from the cards. | jb-foods-2012 |
| `boundary_gate` | Q and boiler boundary | Q is first quality release of the complete qualifying shell fraction to the declared boiler-feedstock supply gate, including same-site useful handover; it includes qualifying closing FG and excludes opening already released FG, repeated inspection, internal transfers, packaging and failed lots. Combustion and generation of steam/electricity are downstream and are not the reference function. If actual boiler heat returns to the upstream microniser/preheater, explicitly couple and solve that feedback in the wider linked model with actual paired internal material/heat quantities and one environmental burden accounting. Do not assume such a loop from boiler use alone, make shell free fuel, repurchase an internal transfer, or claim duplicate energy or avoided-fuel credits. | jb-foods-2012; ilcd-allocation-2010 |
| `boundary_status` | product versus waste | The source-supported useful same-site boiler-material handover permits this conditional method branch without an exact SKU or external-sale certificate. Each actual data package must establish receiver specification, intended useful function, acceptance/disposal, lawful state and provider method. Unknown is not accepted; genuine discard/nonfunctionality or legally incompatible material requires a separately compatible Waste/treatment branch. Preserve rejects and actual treatment loads. | un-cpc3-2025; jb-foods-2012; ilcd-allocation-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| joint | Dry-bean cleaning preheating and winnowing | conditional | Actual foreground starts with dry beans; otherwise upstream shell dataset already contains it. | complete joint physical gate before nib-specific operations | Measured joint gate; link shell take-off to final Q without a second normalisation. |
| shell | Dedicated shell collection conditioning and supply | required | One verified shell state and one receiver | shell production release and separately accounted handling service | per 1 kg reference flow; raw Q retained separately |

These cards define separate conditional exchanges, not a claimed factory recipe. Demonstrate absence rather than entering invented zeros. Add any actual fuel, formulation constituent, liner, repair part, rejection stream or measured emitted species not listed. Keep all operations even when a receiving condition fails.

### Process: Dry-bean cleaning preheating and winnowing (`joint`)

#### Inputs

##### Product flows

###### Fermented dried cocoa beans (`dried_beans`)

Whole received beans include shell and nib in one purchase; moisture, adherent pulp, germ and foreign matter are measured subaccounts, never additional purchased ingredients. Farm production, pod opening, fermentation and drying are inherited once through the actual dry-bean supplier dataset. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Fermented dried cocoa beans
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Electricity (`joint_electricity`)

Meter cleaning, separation and actual preheater drives independently of dedicated shell handling. Preserve voltage, grid location, period and provider; an electricity identity would not establish provider compatibility. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Useful process heat (`joint_heat`)

Only actual externally supplied or separately modelled preheating heat crosses this row. Measure useful enthalpy delivery, carrier state, mass, supply/return temperature and pressure and condensate convention. Do not infer a boiler, steam purchase or fuel input from the word preheating. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Useful process heat
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Natural gas fuel (`joint_gas`)

Conditional on actual on-site gas combustion; use whole supplied fuel composition and measured conditions. Purchased heat and the fuel that produced that same purchased heat are not two foreground inputs. This source does not establish gas use at the described factory. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only. This native Product is natural gas burned in an industrial furnace, production mix at plant GLO, on Gross calorific value/MJ, not an unspecified gas mass. Bind only when that actual furnace-fuel role is established; it does not prove the described cocoa factory uses gas. Retain full carrier mass/volume, measured gas state, composition and supplier gross heating value independently; LHV/HHV conversion requires real fuel evidence and no default mass or density factor. It is neither purchased useful heat, LNG preparation, ethylene-cracker gas nor biomass gas.

- Selected flow: Natural gas
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Diesel fuel (`joint_diesel`)

Only actual handling equipment or dedicated preheater fuel, with grade, consumption and stock reconciliation. New fuels require new atomic cards before a dataset is considered complete. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Supplied cleaning water (`joint_water`)

Conditional cleaning intake, measured as the supplied water at its actual quality; not a default bean-washing recipe. Raw-water abstraction, if real, requires its own elementary intake. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preheated cocoa nibs before alkalising and roasting (`nibs`)

Record the complete physical nib output at this separation gate. Subsequent nib alkalising, roasting, grinding, liquor pressing, butter and powder operations are nib-specific downstream processes and are not allocated indiscriminately to separated shells. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Preheated cocoa nibs before alkalising and roasting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Preheated cocoa bean shell separation fraction (`shell_takeoff`)

Whole shell fraction at the winnower take-off before nib roasting, including measured adherent nib/germ and moisture; not a purified shell-fibre ingredient. Internal transfer is paired to separated_shells and cancels only in the combined physical gate; no reference production Q here. This is a pre-release intermediate at shell take-off, not an assertion that a receiver-accepted Product already exists. Its useful-supply route, whole measured fraction and paired event must be traced; actual receiving/legal/provider status remains to be verified. No final Product UUID is imposed on this intermediate. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Preheated cocoa bean shell separation fraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Separated cocoa bean germ (`recovered_germ`)

Only a separately recovered and intentionally supplied germ stream, weighed independently; germ left attached to the whole shell is a non-additive composition subaccount. Unintended discarded germ requires a separate waste card. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Separated cocoa bean germ
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

##### Waste flows

###### Cocoa bean cleaning stones (`stones`)

Measured de-stoner discharge with destination, not shell product; do not use a shell yield to infer its amount. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Cocoa bean cleaning stones
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Separated ferrous metal contamination (`ferrous`)

Record the magnet-drum metal discharge independently of stones and organic rejects; any legally supplied recovered-metal product requires an explicit status decision and separate record. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Separated ferrous metal contamination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Rejected cocoa beans (`rejected_beans`)

Failed beans and excluded lots remain physical outputs with actual treatment and inherited burdens; rejection is not zero consumption. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Rejected cocoa beans
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Collected cocoa bean cleaning dust (`bean_dust`)

Collector catch is a transferred solid waste; it is not automatically an air emission. Sample composition and determine actual destination; a saleable fraction requires a distinct verified product decision. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Collected cocoa bean cleaning dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Cocoa bean preparation cleaning wastewater (`joint_wastewater`)

Only actual cleaning effluent, with measured mass/volume and destination. COD, TOC and total nitrogen are analytical descriptors and cannot be substituted for a named chemical emission or summed as extra wastewater mass. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Cocoa bean preparation cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

##### Elementary flows

###### Water vapour to air from bean preparation (`joint_vapour`)

Water actually released by preheating or drying is measured or independently constrained using inlet/output moisture and gas monitoring. It is not the unexplained total mass deficit, and excludes liquid wastewater and entrained particles. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Carbon dioxide, fossil, to air (`joint_fossil_co2`)

Conditional on a real on-site combustion or process source and species-specific measurement or supported factor for that device, fuel and control state. Retain measurement origin and air compartment. No presumed emission or generic NOx/VOC/total-dust substitution; an actual additional species needs its own card. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: carbon dioxide (fossil)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Carbon dioxide, biogenic, to air (`joint_biogenic_co2`)

Conditional on a real on-site combustion or process source and species-specific measurement or supported factor for that device, fuel and control state. Retain measurement origin and air compartment. No presumed emission or generic NOx/VOC/total-dust substitution; an actual additional species needs its own card. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: carbon dioxide (biogenic)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Carbon monoxide to air (`joint_co`)

Conditional on a real on-site combustion or process source and species-specific measurement or supported factor for that device, fuel and control state. Retain measurement origin and air compartment. No presumed emission or generic NOx/VOC/total-dust substitution; an actual additional species needs its own card. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Methane to air (`joint_methane`)

Conditional on a real on-site combustion or process source and species-specific measurement or supported factor for that device, fuel and control state. Retain measurement origin and air compartment. No presumed emission or generic NOx/VOC/total-dust substitution; an actual additional species needs its own card. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Methane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Nitrogen monoxide to air (`joint_no`)

Conditional on a real on-site combustion or process source and species-specific measurement or supported factor for that device, fuel and control state. Retain measurement origin and air compartment. No presumed emission or generic NOx/VOC/total-dust substitution; an actual additional species needs its own card. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Nitrogen dioxide to air (`joint_no2`)

Conditional on a real on-site combustion or process source and species-specific measurement or supported factor for that device, fuel and control state. Retain measurement origin and air compartment. No presumed emission or generic NOx/VOC/total-dust substitution; an actual additional species needs its own card. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Sulfur dioxide to air (`joint_so2`)

Conditional on a real on-site combustion or process source and species-specific measurement or supported factor for that device, fuel and control state. Retain measurement origin and air compartment. No presumed emission or generic NOx/VOC/total-dust substitution; an actual additional species needs its own card. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_joint_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joint_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

### Process: Dedicated shell collection conditioning and supply (`shell`)

#### Inputs

##### Product flows

###### Preheated cocoa bean shell separation fraction (`separated_shells`)

Same whole take-off state as shell_takeoff: dried-bean source, microniser preheating, then winnowing, before nib alkalising/roasting; no pod husk, coffee residue, extraction, carbonisation or chemical shell treatment. External purchases carry supplier-allocated shell burdens once; same-site transfer carries its paired vector and cannot be repurchased. This input is the same pre-release intermediate as shell_takeoff, not automatically the final receiving Product. Trace the complete fraction, treatment and paired transfer; actual receiving/legal/provider status remains to be verified before quantitative package use. Keep its identity unresolved rather than binding a different state or Waste as Product. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Preheated cocoa bean shell separation fraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Electricity (`shell_electricity`)

Meter dedicated shell conveyance, actual screening, ventilation, weighing, storage and delivery handling. Include failed lots, idle intervals, start/stop and cleanup, with actual causal service attribution. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Useful process heat (`shell_heat`)

Only if actual additional drying or temperature conditioning occurs before the selected gate. Preserve this physical operation even if it invalidates the proposed state; verify the modified product and endpoint before use. Record carrier mass, enthalpy, state, return and provider convention; no default sterilisation or energy intensity. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Useful process heat
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Supplied cleaning water (`shell_water`)

Record actual dedicated cleaning water independently of shell moisture. Washwater or dust suppression that changes shell state requires explicit wet/dry state reconciliation and renewed applicability assessment; do not erase it to retain a dry label. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Sodium hydroxide cleaning solution (`cleaning_naoh`)

Conditional actual purchased whole cleaning formulation: declare supplier concentration and carriers; purchase it once. Water and NaOH assay are subaccounts, not extra purchases; actual on-site formulation instead records each separately purchased constituent and real mixing energy/loss. No alkali treatment of shell is presumed. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Woven polypropylene sack purchased (`pp_sack_in`)

Actual purchase of this article, including used articles bought for reuse. Keep invoices, ownership, composition and measured tare. Do not put first non-purchase receipts or linked returns here. Separately purchased liners, coatings supplied as separate articles and repair parts need separate material cards. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Kraft paper sack purchased (`paper_sack_in`)

Actual purchase of this article, including used articles bought for reuse. Keep invoices, ownership, composition and measured tare. Do not put first non-purchase receipts or linked returns here. Separately purchased liners, coatings supplied as separate articles and repair parts need separate material cards. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Reusable wooden pallet purchased (`pallet_in`)

Actual purchase of this article, including used articles bought for reuse. Keep invoices, ownership, composition and measured tare. Do not put first non-purchase receipts or linked returns here. Separately purchased liners, coatings supplied as separate articles and repair parts need separate material cards. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Reusable wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Reusable wooden pallet received as proven return (`pallet_received_return`)

A true return requires evidence that this same physical article previously left this site: link the individual article identity (with its pool membership where applicable), outward document, sender and return document. Unlinked loan/free/with-material receipts belong to first non-purchase receipt, not return. Carry existing service burdens and record actual additional transport, cleaning and repair once; no automatic replacement purchase. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Reusable wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Woven polypropylene sack first non-purchase receipt (`pp_sack_first_receipt`)

First external non-purchase receipt, accompanying incoming material or received independently on loan or free of charge. First means not a return linked to a prior outward crossing by this site. Record article identity, source, ownership and whether upstream material already includes its burden; include the physical receipt regardless. Inherit verified burdens once; unknown coverage remains unresolved, never zero or a new purchase. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Kraft paper sack first non-purchase receipt (`paper_sack_first_receipt`)

First external non-purchase receipt, accompanying incoming material or received independently on loan or free of charge. First means not a return linked to a prior outward crossing by this site. Record article identity, source, ownership and whether upstream material already includes its burden; include the physical receipt regardless. Inherit verified burdens once; unknown coverage remains unresolved, never zero or a new purchase. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Reusable wooden pallet first non-purchase receipt (`pallet_first_receipt`)

First external non-purchase receipt, accompanying incoming material or received independently on loan or free of charge. First means not a return linked to a prior outward crossing by this site. Record article identity, source, ownership and whether upstream material already includes its burden; include the physical receipt regardless. Inherit verified burdens once; unknown coverage remains unresolved, never zero or a new purchase. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Reusable wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Woven polypropylene sack received as proven return (`pp_sack_received_return`)

A true return requires evidence that this same physical article previously left this site: link the individual article identity (with its pool membership where applicable), outward document, sender and return document. Unlinked loan/free/with-material receipts belong to first non-purchase receipt, not return. Carry existing service burdens and record actual additional transport, cleaning and repair once; no automatic replacement purchase. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Kraft paper sack received as proven return (`paper_sack_received_return`)

A true return requires evidence that this same physical article previously left this site: link the individual article identity (with its pool membership where applicable), outward document, sender and return document. Unlinked loan/free/with-material receipts belong to first non-purchase receipt, not return. Carry existing service burdens and record actual additional transport, cleaning and repair once; no automatic replacement purchase. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preheated cocoa bean shells for biomass boiler receiving (`finished_shell`)

Sole reference output: whole preheated separation fraction before nib roasting, as supplied with measured moisture and adherent nib/germ, free from undeclared blending, extraction or carbonisation. Q is first whole-lot quality release at the defined boiler-feedstock supply gate, excluding packaging tare. Boiler combustion, steam and electricity are downstream functions. Useful material release may be to the same-site boiler; no external sale is required.

- Selected flow: Preheated cocoa bean shells for biomass boiler supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Recovered cocoa nib fragments (`recovered_nib`)

Conditional separately screened nib particles with intended recipient and valid Product status; physically weigh all of them before any common-burden allocation. Nib still adhering to delivered shells remains part of the whole reference, not another output. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Recovered cocoa nib fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Woven polypropylene sack dispatched (`attached_pp_sack`)

Gross article mass accompanying actual shell shipments, including opening finished goods. Exclude any independent return-to-owner counted in its separate card. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Kraft paper sack dispatched (`attached_paper_sack`)

Gross article mass accompanying actual shell shipments, including opening finished goods. Exclude any independent return-to-owner counted in its separate card. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Reusable wooden pallet dispatched (`pallet_out`)

Gross pallet mass leaving with shipments or independently returned to its owner; tag these destinations separately and count each crossing once. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Reusable wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Woven polypropylene sack independently returned to owner (`pp_sack_out_to_owner`)

Actual independent outward return of this article to its owner, not attached to a shell shipment already counted elsewhere. Link ownership and receipt documents, even if its original inbound crossing was a first non-purchase receipt. Returning to an owner does not prove this site received it as a return. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

###### Kraft paper sack independently returned to owner (`paper_sack_out_to_owner`)

Actual independent outward return of this article to its owner, not attached to a shell shipment already counted elsewhere. Link ownership and receipt documents, even if its original inbound crossing was a first non-purchase receipt. Returning to an owner does not prove this site received it as a return. Include only if physically present; bulk supply does not imply this article. Record raw count, measured article tare/configuration and gross kg by receipt/exit class under cp_packaging. Physical quantities never receive an environmental allocation share and are excluded from shell Q. Retain the raw physical ledger; any per-unit display uses that gross quantity divided by Q once. Attribute service burdens to the correct release cohort separately, then apply inventory_once once; preserve post-release or other-cohort services separately. Do not infer zero burden from free receipt or count the same inherited production burden again.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical kg of this one article and crossing class; retain gross quantity and independent service-burden ledger under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation-2010`

##### Waste flows

###### Rejected cocoa bean shells (`shell_reject`)

Whole failed or off-spec shell lot leaving for actual treatment, including water and adherent solids once. Rework that remains internal is stock/transfer, while extra rework material and energy are new burdens. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Rejected cocoa bean shells
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Collected cocoa bean shell dust (`shell_dust`)

Physical dust collector discharge and shell-only sweepings after a documented common waste route. Keep differently contaminated cleanup material separate. Collected dust is not emitted dust and is not automatically saleable fuel. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Collected cocoa bean shell dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Cocoa shell handling cleaning wastewater (`shell_wastewater`)

Measured actual effluent sent to one named treatment. Dissolved/particulate species are composition subaccounts unless genuinely emitted to the environment; total COD/TOC is not a molecule and must not become extra mass. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Cocoa shell handling cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Waste polypropylene sack (`pp_sack_waste`)

Actual discarded sack measured separately from delivered sacks, reuse and shells; retain liner composition and treatment. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Waste polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Waste kraft paper sack (`paper_sack_waste`)

Actual paper sack waste only; do not infer recycling or grant a fibre substitution credit. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Packaging waste, paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

###### Waste wooden pallet (`pallet_waste`)

Retired pallet material with actual treatment; retained reusable pallets are stocks, and repair components need their own physical exchange cards when purchased. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

##### Elementary flows

###### Water vapour to air from shell handling (`shell_vapour`)

Actual moisture release in handling or extra drying, with independent water balance. Distinguish free/bound moisture, added water, liquid effluent and reaction water if any; no drying reaction or fixed moisture fraction is assumed. When this physical exchange occurs; absence must be demonstrated from the actual route. The amount field is the physical exchange on the same reference mass basis while full raw grossV remains retained. Section 8 inventory_once is the sole A/Q computation for environmental vectors; this card references that same result without re-division. Physical exits and co-products never receive an environmental allocation share; any unit physical display divides the unscaled grossV by the same Q once only.

- Selected flow: water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete physical quantity of this exchange presented on the declared reference basis; environmental burden is attributed separately under cp_shell_inventory.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shell_inventory`
- Sources: `jb-foods-2012`; `ilcd-allocation-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | joint and shell-specific operations | Use attributional modelling only. Isolate dedicated shell operations and real or virtual subdivision before allocating a remaining joint operation. Preserve the full original joint inventory and explain any inseparable remainder. Nib-only downstream processes are assigned to nibs. | ilcd-allocation-2010 |
| `allocation_causality` | each remaining common environmental exchange | Identify the determining physical cause for that exchange and quantify it using evidence appropriate to its service or embodied material. A correlation with mass, heating value, protein or sales is not by itself determining causality; do not apply one blanket physical ratio to all exchanges. Directly attributable burden stays with its recipient. | ilcd-allocation-2010 |
| `allocation_residual` | only truly residual joint burden | Where subdivision and exchange-specific determining causality cannot resolve a joint remainder, use documented contemporaneous co-function market values at the same joint exit and physical/quality condition. Remove downstream transport, packing, conditioning and processing costs when deriving that gate value. Record quantities and prices for every real co-function and test uncertainty; missing price is unknown, not zero or permission to select another arbitrary key. No fixed share is prescribed. A negative price or treatment fee requires an explicit compatible waste/treatment system-boundary decision before allocation; never insert a negative co-product share or extrapolate a useful-product formula across that boundary. | ilcd-allocation-2010 |
| `allocation_ledgers` | grossV A and Q | Keep grossV as complete actual physical transfers without economic or service shares. Maintain inherited environmental burden vectors A independently for each lot and stock. Assign new dedicated burden and justified residual common burden to A; allocate each environmental exchange once. Resolve supplier-allocated shell burdens once at receipt, without allocating the cocoa main product again. Divide A by the sole matching Q only under inventory_once. | ilcd-allocation-2010 |
| `allocation_no_credit` | residues energy and packaging | No default displaced wood, fossil fuel, feed, soil amendment, avoided disposal or carbon-storage credit. Packaging service, returned pallets and recovered dust are not automatic co-products. Any real treatment burden is represented according to actual status and provider method; fuel/heat recovery requires its own explicit wider model. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | shell | finished shell and FG | weighing and release genealogy | lot id; gross mass; tare; net shell mass; first release id; first release time; receiver; specification; opening FG; closing FG; shipments; returns; failed/rework state | Calibrated scales and signed whole-lot receiving/release records; match the complete supply state and lot identity. Separate original production release from dispatch or repeat inspection. Raw collection remains unnormalised; the aggregation field declares only the output presentation basis produced by the sole section 8 rule, not another collection-stage division. | kg | each lot and each stock boundary | Complete H and boundary stocks; all zero-output intervals | one declared supply gate and its boiler receiver | per 1 kg reference flow | calibration; tare samples; release authorisation; receiver specification; return links |
| cp_joint_inventory | joint | every atomic inventory row and its burden vector | lot stock meter and destination ledger | row_id; lot; process; date; raw amount; raw unit; actual rate duration; state; density evidence; grossV; inherited A vector; opening raw/WIP; closing raw/WIP; failed lot; new rework additions; matched duplicate-entry audit; meter; destination; uncertainty | Reconcile calibrated mass/carrier meters and receipts to equipment logs, stocktakes and destination records. Keep full raw unallocated quantities and each inherited vector. For heat retain supply/return mass, state, enthalpy, provider water convention and actual boiler loop linkage. For emissions retain actual device and species-specific source records. Raw collection remains unnormalised; the aggregation field declares only the output presentation basis produced by the sole section 8 rule, not another collection-stage division. | kg; MJ; m3; h | each batch and metering interval | Full H including failure idle cleanup startup shutdown and maintenance | all controlled joint and shell supply operations | per 1 kg reference flow | calibration; invoices; batch trace; stocktakes; treatment tickets; actual monitoring; uncertainty |
| cp_shell_inventory | shell | every atomic inventory row and its burden vector | lot stock meter and destination ledger | row_id; lot; process; date; raw amount; raw unit; actual rate duration; state; density evidence; grossV; inherited A vector; opening raw/WIP; closing raw/WIP; failed lot; new rework additions; matched duplicate-entry audit; meter; destination; uncertainty | Reconcile calibrated mass/carrier meters and receipts to equipment logs, stocktakes and destination records. Keep full raw unallocated quantities and each inherited vector. For heat retain supply/return mass, state, enthalpy, provider water convention and actual boiler loop linkage. For emissions retain actual device and species-specific source records. Raw collection remains unnormalised; the aggregation field declares only the output presentation basis produced by the sole section 8 rule, not another collection-stage division. | kg; MJ; m3; h | each batch and metering interval | Full H including failure idle cleanup startup shutdown and maintenance | all controlled joint and shell supply operations | per 1 kg reference flow | calibration; invoices; batch trace; stocktakes; treatment tickets; actual monitoring; uncertainty |
| cp_joint_composition | joint | whole shell state and independent balances | representative sampling and laboratory records | sample lot; moisture wet basis; dry matter; adherent nib; germ; foreign matter; lipid; ash; relevant element; measurement method; temperature; phase; water addition; water exit; uncertainty | Sample the complete supplied fraction and independently analyse relevant water, solids and elements. Do not infer assay from a generic industry range or infer two unknowns from one mass deficit. Lower heating value and state are measured only for a separately declared non-additive fuel-quality bridge. Raw collection remains unnormalised; the aggregation field declares only the output presentation basis produced by the sole section 8 rule, not another collection-stage division. | kg; %; MJ/kg | each qualified lot and state change | same lots and H as mass records | take-off storage and receiving conditions | per 1 kg reference flow | sampling plan; test method; laboratory report; uncertainty; chain of custody |
| cp_shell_composition | shell | whole shell state and independent balances | representative sampling and laboratory records | sample lot; moisture wet basis; dry matter; adherent nib; germ; foreign matter; lipid; ash; relevant element; measurement method; temperature; phase; water addition; water exit; uncertainty | Sample the complete supplied fraction and independently analyse relevant water, solids and elements. Do not infer assay from a generic industry range or infer two unknowns from one mass deficit. Lower heating value and state are measured only for a separately declared non-additive fuel-quality bridge. Raw collection remains unnormalised; the aggregation field declares only the output presentation basis produced by the sole section 8 rule, not another collection-stage division. | kg; %; MJ/kg | each qualified lot and state change | same lots and H as mass records | take-off storage and receiving conditions | per 1 kg reference flow | sampling plan; test method; laboratory report; uncertainty; chain of custody |
| cp_joint_allocation | joint | dedicated joint and residual burdens | engineering allocation workpaper | joint exit; co-function; complete joint quantity; dedicated amount; subdivision; causal relation; causal evidence; remaining exchange; gate price; price date; market; currency; downstream adjustments; sensitivity | First meter or virtually subdivide dedicated operations. Justify determining causality exchange by exchange. Only then document market value for the unresolved joint remainder in its actual exit state, including meaningful low/negative price and missing-value limits. Raw collection remains unnormalised; the aggregation field declares only the output presentation basis produced by the sole section 8 rule, not another collection-stage division. | kg; MJ; currency | each route and representative pricing period | same H or justified temporally matched period | one common separation exit and real co-functions | per 1 kg reference flow | subdivision diagram; meter data; causal assessment; gate invoices; price adjustments; sensitivity |
| cp_shell_allocation | shell | dedicated joint and residual burdens | engineering allocation workpaper | joint exit; co-function; complete joint quantity; dedicated amount; subdivision; causal relation; causal evidence; remaining exchange; gate price; price date; market; currency; downstream adjustments; sensitivity | First meter or virtually subdivide dedicated operations. Justify determining causality exchange by exchange. Only then document market value for the unresolved joint remainder in its actual exit state, including meaningful low/negative price and missing-value limits. Raw collection remains unnormalised; the aggregation field declares only the output presentation basis produced by the sole section 8 rule, not another collection-stage division. | kg; MJ; currency | each route and representative pricing period | same H or justified temporally matched period | one common separation exit and real co-functions | per 1 kg reference flow | subdivision diagram; meter data; causal assessment; gate invoices; price adjustments; sensitivity |
| cp_packaging | shell | each physical packaging material and crossing class | article physical and burden ledger | article/material; configuration; measured tare; raw count; gross kg; purchase invoice; first non-purchase receipt; accompanying-material or independent loan/free receipt; owner; source; prior outward article/pool id and document; proven return receipt; upstream burden coverage and vector; opening/closing empty; attached WIP; attached FG; reusable stock; gross shipments; independent return-to-owner; waste; actual transport cleaning repair; service cohort | Reconcile procurement invoices and all external receipt/dispatch documents with article identity, ownership and stocktakes. Purchase, first non-purchase receipt and proven return are mutually exclusive inbound classes for each crossing. Return requires the same physical article previously sent out by this site; a pool total alone does not establish this link; unknown history is not return. Include first non-purchase receipts physically even if upstream material includes their burden. Check inherited coverage before adding production burden; unknown remains unresolved. Weigh each material/article separately; item-to-kg conversion requires measured article mass and configuration. | kg; item | each receipt dispatch return and stocktake | complete H with opening/closing attached stocks | actual packaging configuration and release/service cohort | per 1 kg reference flow | invoices; incoming material packaging list; loan/free-transfer document; owner and article/pool ledger; paired outward/return slips; measured tare; stocktake; upstream burden coverage; service/repair records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_q | finished_shell | Q = sum of measured net mass of qualifying complete lots first released in H. Count one release identifier once; retain qualifying closing FG inside Q. Opening released FG, repeat release, sales of that opening FG, internal transfer, failed lots, packaging and composition subaccounts do not create Q. | net lot mass; first release identifier; cp_release | Q | jb-foods-2012 |
| physical_balance | all inventory rows | For each material gate: opening raw material/WIP + actual external receipts + true new additions = closing raw material/WIP + complete physical outputs + independently constrained species/water changes. Reconcile released-FG storage separately using opening FG + Q + actual external returns = closing FG + gross shipments + real rejects + measured losses, with return and rework genealogy. Paired internal transfers cancel only in a combined gate. Shares never reduce grossV. | cp_joint_inventory; cp_shell_inventory; cp_release; cp_joint_composition; cp_shell_composition | grossV balance | jb-foods-2012 |
| water_elements | all inventory rows | Close total physical mass and water and relevant element balances independently using measured composition and state. Whole wet shell mass is the main ledger; moisture, dry matter, nib, germ, lipid, protein and ash are non-additive subaccounts. Never solve two unknowns from one residual. Reaction/free/bound/structural water and phase changes require actual evidence; COD, TOC or total dust are not molecular masses. | cp_joint_composition; cp_shell_composition; cp_joint_inventory; cp_shell_inventory | independent physical closure | jb-foods-2012 |
| raw_conversion | all inventory rows | Convert raw units before attribution. Integrate only true measured rates over their actual duration; integrated volume is not multiplied by time again. Use measured substance/state density for mass-volume conversion. For heat, use measured delivered/returned enthalpy and carrier mass under one consistent provider water/energy convention; a mass coefficient is not density and an MJ label alone does not prove useful heat. H is the observation period and is never an additional denominator. | cp_joint_inventory; cp_shell_inventory; cp_joint_composition; cp_shell_composition | converted raw quantities | ilcd-allocation-2010 |
| burden_inventory | all inventory rows | For each environmental exchange j, A_j = inherited burden released from tracked raw/WIP stocks + new directly attributable burden + justified common burden assigned once to the current first-release cohort. Maintain separate opening/closing raw, WIP, failed-lot and FG burden vectors. Previously released opening FG keeps its historical production burden; post-release storage/packing/handling services have separate cohort accounts. Retain new rework burdens and remove only a demonstrated duplicate entry with a matched audit trail. | cp_joint_inventory; cp_shell_inventory; cp_joint_allocation; cp_shell_allocation; cp_release | A_j | ilcd-allocation-2010 |
| inventory_once | all inventory rows | r_j = A_j / Q; apply once only after raw conversion and real attribution. Cards and collection aggregation reference this same result and do not divide again. For finished_shell report the declared reference amount 1 kg when Q is positive; preserve raw Q separately. Q = 0 retains all gross flows and burden stocks with documented future cohort/treatment disposition and yields no per-unit result. | A_j; Q; cp_joint_inventory; cp_shell_inventory; cp_release | r_j | ilcd-allocation-2010 |
| packaging_balance | pp_sack_in; paper_sack_in; pallet_in; pp_sack_first_receipt; paper_sack_first_receipt; pallet_first_receipt; pp_sack_received_return; paper_sack_received_return; pallet_received_return; attached_pp_sack; attached_paper_sack; pallet_out; pp_sack_out_to_owner; paper_sack_out_to_owner; pp_sack_waste; paper_sack_waste; pallet_waste | For each article/material separately: opening empty + opening attached WIP/FG + opening reusable stock + actual purchases + first non-purchase external receipts + proven returns received = closing empty + closing attached WIP/FG + closing reusable stock + packaging on gross physical shipments + independent return-to-owner + waste. The three inbound classes are mutually exclusive; evidence of a previous outward crossing by this site of the same physical article is required for return; a pool total alone is insufficient. Include with-material, borrowed and free first receipts regardless of upstream burden inclusion. Each exit belongs to exactly one destination; owner returns accompanying shipments must not be added again as independent returns. Cancel only paired internal movements. Opening and closing stock buckets must be mutually exclusive physical states: do not count a reusable article both as empty and again as reusable stock. Physical closure uses raw kg, not Q or economic shares. For the burden ledger inherit covered production/service vectors once, add evidenced uncovered and actual transport/cleaning/repair burdens, track closing stock, and assign only the matching cohort contribution to A_j/Q once. A receipt, loan, free transfer or return alone creates no zero-burden, replacement purchase or co-product assumption. | cp_packaging; cp_release | per-article physical and service balances | ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and starting shell | For each actual data package, verify bean versus pod origin, preheater trace, removal before nib alkalising/roasting, complete fraction and sole useful boiler-feedstock endpoint, including same-site handover. Verify real receiver limits/acceptance, first release, lawful disposition and Product/Waste modelling/provider compatibility before quantitative use; unknown is incomplete. The method branch does not certify any batch, legal status or external sale. No food/feed or nutritional-equivalence claim. | supplier process diagram; receiver specification; legal/method decision; lot certificates |
| dq_complete | all operations and all periods | Include true failed, zero-output, startup/shutdown, idle, cleaning, repair and rework loads. Record every actual input/output separately and track opening/closing raw, WIP, FG and burden vectors. Unknown is not zero and a failed identity does not delete physical activity. | full campaign ledger; stocktakes; maintenance logs; reconciliation |
| dq_sources | method quantity and provider | Historical industrial observations support their described route only. Obtain representative current quantities, state, geography, technology and provider methods separately; report uncertainty and incompatible cases. No numeric yield, moisture, recipe, heating value, emission factor, price or substitution factor is prescribed. | primary original; measured raw records; provider boundary; independent method |
| dq_uuid | each adopted identity and unit | Before adopting any UUID, verify the complete direct identity record, physical meaning and restrictions, plus its referenced property, unit group and reference unit. A generic identity never establishes a suitable provider. Unconfirmed UUIDs remain absent; kg or MJ labels do not establish these chains. | direct native identity evidence; exact property/unitgroup chain; provider assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | Severity | source_ids |
| --- | --- | --- | --- | --- |
| `validate_identity` | reference product and gate | Check each actual data package for the same complete shell fraction/state and trace, one actual useful biomass-boiler receiving use/specification, first release, documented lawful disposition and compatible provider/background year/geography and scientific method, all required qualifiers and verified reference identity. Unknowns fail completeness; native Product is not legal, scientific or batch certification. Source-supported same-site handover needs no exact SKU or external-sale prerequisite. Genuine discard or incompatible legal state stays in a compatible Waste/treatment branch. A name-only match is insufficient; preheated-before-nib-roasting and whole-bean-roasted states are not interchangeable. | error | jb-foods-2012; icco-cocoa-processing; un-cpc3-2025 |
| `validate_physical` | joint shell and combined gates | Close full physical mass, moisture and relevant elements independently; keep nibs, shells, germ, stones, ferrous contamination, dust, water and actual species distinct. Never use an environmental allocation share to reduce physical mass. A residual alone cannot identify two unknown exits. | error | jb-foods-2012 |
| `validate_denominator` | all inventory and release records | Confirm same physical state and gate in both languages, Q from first complete release only, closing FG already within Q, correct inherited stocks and separate post-release services. Check raw conversion and allocation precede exactly one A/Q. No units result at Q = 0; no hidden time, sales, dry-matter or heating-value denominator. | error | ilcd-allocation-2010 |
| `validate_allocation` | each environmental exchange | Check dedicated/virtual subdivision, determining physical causality per exchange and only then residual same-gate contemporaneous economic value. Reconcile complete joint and co-function ledgers, provider-allocated shells once, missing/negative values and sensitivity. Reject blanket ratios and automatic credits. | error | ilcd-allocation-2010 |
| `validate_packaging_emissions` | packaging and environmental exits | Reconcile every packaging material with purchases, first non-purchase receipts and proven returns kept distinct; require a prior same-physical-article outward record for return. Confirm physical receipts regardless of upstream burden inclusion and no doubled inherited burden. Check mutually exclusive exit destinations, attached stocks and separate service-cohort burdens; exclude packaging from Q. Separate collected dust from air release, wastewater from environmental release and indicators from molecules. Enumerate all actually present atomic exchanges before claiming completeness. | error | ilcd-allocation-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Conditional same-state complete shell material supply for one declared useful biomass-boiler receiving function, including source-supported same-site handover; each actual package must separately verify acceptance, lawful status, provider/background and scientific method. No qualified external sale or completed batch is implied. |
| excluded_use | Automatic fuel substitution; useful heat/steam/electricity output; waste treatment service; food/feed/nutrition equivalence; pod or coffee residues; extracted/carbonised shell; unsupported same-name provider. |
| required_metadata | botanical identity Theobroma cacao and bean-shell origin; dry-bean supplier and lot genealogy; actual preheater and separation route; shell removed before nib alkalising and roasting; whole supplied fraction including measured nib and germ carryover; moisture and dry matter with measurement method and wet basis; foreign material and contamination acceptance criteria; no extraction or carbonisation or undeclared chemical treatment; actual additional drying or grinding and resulting state if present; one biomass boiler receiver and its material specification; legal status and attributional provider method for Product or Waste; first whole-lot release gate Q and release identifier; net supplied mass excluding packaging tare; site geography technology reference period H; storage condition and residence time; upstream dataset boundary and inherited per-flow burden vectors; opening and closing raw material WIP failed lots and FG; packaging and reusable return configuration |
| required_quality_disclosure | Receiver qualification and status evidence; actual route and provider limits; primary versus inferred evidence; missing identities; full physical/stock closure; allocation sensitivity; actual period; unmeasured quantities and Q=0 handling. |
| update_trigger | Changed source, preheat/removal order, supplied state, receiver function/specification, legal/provider method, packaging, heat-return configuration or material allocation evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | United Nations Statistics Division. CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF pp. 199–200; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full 39150 inclusion and exclusion context; category scope only, not LCA waste status. |
| `jb-foods-2012` | literature | JB Foods Limited, Final Prospectus, 13 July 2012, printed pp. 67, 93–95 / PDF pp. 71, 97–99; https://jbcocoa.com/wp-content/uploads/2019/04/5894007451JB-Foods-Limited_Final-Prospectus_13July2012.pdf | Manufacturer dry-bean cleaning, microniser preheating and winnowing before nib alkalising/roasting; collected shells used in biomass boilers; low/no-value waste counterevidence. Historical industrial observation, not a qualified current Product specification, yield, shell assay or universal fuel/utility inventory. |
| `icco-cocoa-processing` | official_guidance | International Cocoa Organization, Processing Cocoa, undated official industry overview; https://www.icco.org/processing-cocoa/ | Roasting whole beans versus nibs and shell/nib separation distinguish alternative states. No shell specification, destination or quantity is inferred from bean drying or cocoa main-product values. |
| `ilcd-allocation-2010` | official_guidance | European Commission Joint Research Centre. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, §7.9.2–7.9.3, printed pp. 255–272 / PDF pp. 275–292; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Independent attributional hierarchy: real/virtual subdivision, exchange-specific determining physical causality and residual common-process gate market value. This PCR imposes explicit raw/stock/normalisation protocols as modelling requirements, not measured factory facts or a source-given default shell allocation share. |
