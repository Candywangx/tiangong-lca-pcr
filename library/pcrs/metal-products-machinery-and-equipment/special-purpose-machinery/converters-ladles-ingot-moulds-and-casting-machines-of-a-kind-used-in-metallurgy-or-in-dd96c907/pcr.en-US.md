---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.converters-ladles-ingot-moulds-and-casting-machines-of-a-kind-used-in-metallurgy-or-in-dd96c907
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of metallurgical converters, ladles, ingot moulds, casting machines and metal-rolling mills

## 1. Scope and Applicability

This PCR creates foreground manufacture data for converters, ladles, ingot moulds, casting machines and metal-rolling mills as five separately qualified equipment families. It does not pool them into a representative casting-machine average. Reference per kg is a declared production basis, not equivalent operating performance across families. Each dataset represents one accepted model/configuration and actual supplied gate scope.

Separate manufacture of the equipment from later converter refining, molten-metal transfer/casting and rolling production. Customer charge metal, blow gases, production fuel/water, recurrent liner/roll replacement and civil installation do not become factory inputs. Actual manufacturer loaded tests, initial liner dryout, retained fill or supplied auxiliary manufacture are included only when documented in the contract and factory records. Standalone spare rolls and dedicated parts require their own category review; an incorporated component is not the reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.converters-ladles-ingot-moulds-and-casting-machines-of-a-kind-used-in-metallurgy-or-in-dd96c907 |
| classification_refs | CPC 3.0:44310 |
| covered_products | Metallurgical converters including BOF/AOD/nonferrous declared technology; foundry/metallurgical ladles; metal ingot moulds; declared casting-machine architecture; hot/cold metal-rolling mills |
| excluded_products | Separately supplied parts/spare rolls; stand-alone refractory material; customer metal-production output; rebuilding service; infrastructure and general-purpose machine tools |
| representative_product | One actual family/model/configuration at declared supplied state; no category-wide average machine |
| production_route | Contract-specific make/buy paths: plate fabrication, cast/forged component manufacture, machining, conditional lining/coating, assembly and actual factory test |
| market_state | Accepted net configured equipment at manufacturer gate, including bare vessel or documented modular delivery; supplied liner/drive/ancillaries explicitly qualified |

Apply this family-specific make/buy matrix to the actual BOM; each cell is conditional, not a mandatory recipe.

| Family | Supplied architecture | Actual route and supplier boundary |
| --- | --- | --- |
| Converter | Vessel, trunnion/support/suspension, tilt drive; liner/tuyere/damper/control only when supplied | Fabricated shell plus cast/forged/machined supports; own route or purchased completed assemblies; BOF/AOD/nonferrous technology separated. primetals-converter; primetals-converter-manufacture |
| Ladle | Bare shell or supplied precast/drop-in/cast-in-place liner, lid, insulation and handling/tilt mechanism | Shell fabricate or buy; purchased liner versus mixing/place/cure/dryout on site for each actual layer. Do not derive proprietary RFM recipe. pyrotek-ladle |
| Ingot mould | Specified cast-iron steel-ingot mould OR mild-steel nonferrous mould; handles/base only supplied | Actual foundry route or purchased casting; mild-steel route separate, actual forming/weld records required. Historical steel-ingot example does not override MIFCO aluminium/brass scope. ingot-design; mifco-mould |
| Casting machine | Declared caster type; mould/copper, frame, roll/segment/withdrawal, hydraulic/electric/control and cooling hardware only actual supplied | Body/part fabrication and machining; supplied new coated copper or own verified plating/HVOF; supplier completed treatment once. Other casting technologies require actual architecture/recipe, not forced continuous-caster scope. primetals-copper |
| Metal-rolling mill | Single/multi-piece stand housing, work/backup roll, bearing/chock, spindle/drive and gap-control; line ancillaries only supplied | Actual cast/forged/fabricated parts or buy completed parts, heat-treatment/machine and assemble; hot/cold/flat/long configuration separately qualified. primetals-mill |

Casting machines also include hot- and cold-chamber die-casting configurations. Qualify hot-chamber supplied furnace/casting-system interfaces separately from cold-chamber three-platen clamping, hydraulic and control interfaces; other gravity/low-pressure/centrifugal or nonferrous continuous-casting architectures require actual drawings and the same manufacture-route review. All are equipment-component manufacture: customer molten metal, injection cycles and furnace operation are not default factory exchanges. Metal-rolling mills retain steel and nonferrous, hot/cold routes; user rolled-metal grade does not establish equipment housing grade. frech-hot; frech-cold.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and deliver one declared configured equipment family meeting the actual purchase drawing and acceptance specification |
| How much | 1 kg accepted net equipment, normalized from actual same-configuration accepted production |
| How well | Declared capacity, alloy duty, geometry, drive/control, supplied liner/fill and signed factory acceptance; no cross-family performance equivalence |
| How long or cycle | Manufacturer-gate production period; no operating lifetime or tonnes of user-produced metal prescribed |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted configured metallurgical equipment |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | family and technology (BOF/AOD/nonferrous converter; ladle alloy duty; ingot mould metal duty; caster type; hot/cold rolling mill); model/drawing; capacity and geometry; alloy/grade certificates; bare vessel versus supplied liner and insulation; support/drive/roll/copper/hydraulic/electric/automation configuration; supplied auxiliary list; make/buy matrix and upstream completed operations; initial retained fill; acceptance tests; net mass and module reconciliation; site, period, geography and supplier interfaces |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| normalize_basis | all inventory rows | Row-specific property preserved | per 1 kg reference flow | Apply normalize_mass to each attributable per-machine exchange; numerator units remain kg, m3, kWh or MJ as declared. |
| physical_species | physical material, chemical, waste and elementary species records | Own gross mass and matched contained-species assay | kg | For each contained element/species independently (Fe, Cu, Ni, Cr, W and actual refractory carbon/alumina as applicable): sum external input mass times its own matched assay + opening species stock + actual reaction generation = accepted equipment/components times their own assay + external scrap/chips/slag/dust/sludge/wastewater/releases times each term's own assay + closing species stock + actual reaction consumption. Retain wet/dry and dissolved/particulate bases; paired internal runners, chips, plating returns and rework cancel without removing reprocessing burden. Gross alloy, hydrated salt, oxide scale and wet sludge never equal contained metal. At elemental level reactions change chemical form, not create/destroy the element; retain species stoichiometry only when verified. Review closure with combined weighing, sampling, assay, detection-limit and allocation uncertainty, not forced yield or clipping. |
| water_basis | physical water, moisture and water-stock records | Volume and measured mass conversion | m3; kg | For actual physical water terms: fresh purchased/abstracted makeup + input moisture + opening water stock + reaction-produced water = exported liquid water + water in exported wet waste/sludge + treated discharge + evaporation + retained equipment moisture + closing stock + reaction-consumed water. Measure each loop and test drain separately. Every wet/slurry/sludge/wastewater/product/stock term uses its own measured moisture or density, temperature where relevant and stated wet/dry basis; no shared moisture assumption across terms. Paired internal recirculation/return transfers cancel at factory boundary but pumping and treatment remain; never treat total recirculating flow as withdrawal. Investigate residual against combined flowmeter, scale, moisture-sampling, evaporation-estimation and allocation uncertainty; no universal tolerance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased plate, stock, casting, forging, shell, coated copper, liner or assembly at its delivered completed-processing state |
| starting_condition_role | foreground_start |
| product_classification_scope | Full reviewed five-family scope, one family/configuration per dataset; classification code is not production recipe |
| recursive_input_rule | Purchased same-category equipment/module carries upstream manufacture once; model only remaining transformation/assembly, not recursively repeat its embedded material/utility inventory |
| upstream_dataset_requirement | Match actual grade, coating/lining/fill, completed operations, physical state, provider geography/technology and delivered interface; unsupported proxy remains disclosed gap |
| disclosure | BOM make/buy matrix, supplier burden scope, factory boundary and supplied auxiliary list; one count per actual component/path |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| factory_gate | all processes | Include actual upstream inputs and manufacturer operations, rejected/reworked production burdens, actual acceptance and gate packaging; exclude customer metal production and infrastructure unless separately declared scenario. | primetals-converter-manufacture |
| make_buy_once | purchased components | Supplier completed casting/forging/plating/motor/liner manufacture is upstream once; do not count both incorporated bought assembly and its embedded metal, oil or factory energy. Retain local remaining operations and external transport at actual mode/mass/distance. |  |
| actual_route | conditional routes | BOM, route sheet and contract decide applicability; not applicable differs from measured zero and unknown. Record factory test loads and any supplied retained refractory/fluid only actually provided; no user molten-feed default. | pyrotek-ladle; primetals-copper |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Receipt and configuration tracing | required | Identify one supplied family, order scope and component make/buy state. | foreground | 1 kg reference flow |
| body_fabrication | Vessel shell and fabricated frame manufacture | conditional | Cut/form plate and weld converter/ladle shells or fabricated mould/frame when made here; purchased shells bypass only completed supplier operations. Record weld procedure, gas, wire and NDT. | foreground | 1 kg reference flow |
| foundry | Equipment casting and finishing | conditional | Only on-site cast ingot mould or housing/roll: actual furnace charge, alloy treatment, mould/core making, pouring, cooling, shakeout, removal of runners and finishing. This makes equipment, not the customer ingot. | foreground | 1 kg reference flow |
| forge_heat | Forging and heat treatment | conditional | Actual on-site forging of shaft/roll/trunnion and specified stress relief, anneal, quench/temper; purchased forgings link supplier heat-treatment state and only remaining work. | foreground | 1 kg reference flow |
| machining | Machining and dimensional finishing | conditional | Actual drilling/boring/turning/milling/grinding of bodies, roll journals, bearing seats or copper mould; trace each alloy and fluid separately. | foreground | 1 kg reference flow |
| lining | Initial refractory and insulation installation | conditional | Only retained initial lining/insulation supplied by manufacturer: install actual purchased brick/precast/drop-in liner OR actual castable, mix/place/cure/dry it here. Bare vessel remains valid; customer relining/preheating excluded. | foreground | 1 kg reference flow |
| surface | Conditional protective coating and copper treatment | conditional | Actual blast/clean/paint/cure; new caster copper may have a specified electrolytic Ni/NiB/Cr route or HVOF hard coating. Purchased coated copper embeds supplier plating once; no default all-coatings recipe. | foreground | 1 kg reference flow |
| assembly | Configured assembly and factory acceptance | required | Assemble supplied shell/support/tilt system, ladle handling, mould, caster modules or mill stands/drives to actual contract; inspect alignment/NDT and perform actual dry or loaded factory tests. Declare test-fluid drain/retention. | foreground | 1 kg reference flow |
| services | Residual shared utilities and pollution control | required | Only unassigned residual site loads after fabrication, machining, lining, coating, assembly and dispatch meters. Treat water and actual emission/waste controls; never add whole-factory electricity again. | foreground | 1 kg reference flow |
| dispatch | Gate packaging and dispatch | required | Protect and package accepted configured equipment. Supply as shipped modules may form one documented accepted set; reconcile all serials and masses. | foreground | 1 kg reference flow |

Cards identify conditional atomic exchanges, not a universal BOM/recipe. Only use a named grade/formulation if it matches actual evidence. Add each other actual alloy, refractory layer/binder, mould/core resin/catalyst, plating salt/additive (including actual NiB or chromium chemistry), cleaning chemical, fuel, gas, transport service, component, waste and species/compartment as its own card before claiming dataset completeness. Different suppliers/states require separate interfaces. Do not narrow family scope because these identities or recipes remain unresolved.

### Process: Receipt and configuration tracing (`receipt`)

#### Inputs

##### Product flows

###### S355JR hot-rolled steel plate (`plate`)

Specific plate example only when certified S355JR is actually used; converter high-temperature plate or other specified grade requires its own atomic card and certificate, not this substitution. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: S355JR hot-rolled steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

###### Purchased unlined fabricated steel ladle shell (`purchased_ladle_shell`)

Only externally manufactured unlined shell at delivered drawing/specification; shell steel and supplier fabrication burden included upstream, not re-added here. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased unlined fabricated steel ladle shell
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

###### Purchased unlined steel converter vessel (`purchased_converter_vessel`)

Declare BOF/AOD/nonferrous converter technology, shell grade, supports and supplied liner state; purchased shell boundary includes already completed manufacture. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased unlined steel converter vessel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

###### Purchased cast-iron ingot mould (`purchased_cast_mould`)

Actual specified cast-iron mould; supplier alloy/furnace/casting/finishing evidence. Does not imply mild-steel nonferrous moulds follow this route. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased cast-iron ingot mould
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

###### Purchased forged alloy-steel work roll (`purchased_roll`)

Only incorporated actual forged work roll at declared alloy, hardness and heat-treatment state; cast roll needs separate card; standalone spare roll excluded. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased forged alloy-steel work roll
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

###### Purchased cast-steel rolling-mill housing (`purchased_housing`)

Actual supplied cast-steel housing; fabricated or multi-piece housing is a separate declared make/buy path. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased cast-steel rolling-mill housing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

###### Purchased nickel-plated copper-alloy caster mould plate (`purchased_copper`)

Only actual new mould plate with matched copper alloy and nickel coating; supplier machining/plating embedded once. Bare copper or NiB/chrome/HVOF coating has its own card and provider. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased nickel-plated copper-alloy caster mould plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

###### Purchased electricity delivered to factory (`receipt_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Vessel shell and fabricated frame manufacture (`body_fabrication`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`body_fabrication_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_fabrication`
- Sources:

###### ER70S-6 carbon-steel welding wire (`weld_wire`)

Only actual qualified ER70S-6 procedure; other alloy wire/electrode/flux separate. Measure consumed wire and stubs, do not infer from weld length alone. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: ER70S-6 carbon-steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_fabrication`
- Sources:

###### Argon welding shielding gas (`argon`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_fabrication`
- Sources:

###### Carbon dioxide welding shielding gas (`shield_co2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Carbon dioxide welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_fabrication`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated carbon-steel fabrication offcut (`steel_scrap`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Segregated carbon-steel fabrication offcut
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_fabrication`
- Sources:

##### Elementary flows

### Process: Equipment casting and finishing (`foundry`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`foundry_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources:

###### Foundry pig iron charge (`pigiron`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Foundry pig iron charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: jrc-foundry-2024

###### Grade-segregated carbon-steel foundry scrap charge (`scrap_charge`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Grade-segregated carbon-steel foundry scrap charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: jrc-foundry-2024

###### Ferrosilicon alloy addition (`ferrosilicon`)

Only actual foundry chemistry; measured grade/Si assay, not a prescribed recipe. Internal runners are paired transfers, not newly purchased scrap. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Ferrosilicon alloy addition
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: jrc-foundry-2024

###### Silica moulding sand (`silica_sand`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Silica moulding sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: jrc-foundry-2024

###### Bentonite sand binder (`bentonite`)

Only actual green-sand route; resin-bonded sand requires separately specified binder and curing agent, not substitution. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Bentonite sand binder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: jrc-foundry-2024

###### Foundry coke for cupola combustion (`coke`)

Only actual cupola; induction electricity does not imply coke. Measure coke grade/carbon/ash and actual furnace exhaust species. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Foundry coke for cupola combustion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: jrc-foundry-2024

###### Natural gas for factory combustion (`foundry_natural_gas`)

Only actual furnace/dryer/HVOF burner fuel at factory, with measured composition and calorific value; other fuel own row. Customer converter blow gases and ladle preheat excluded. Meter actual gas at documented pressure/temperature, convert with measured net calorific value; retain operating period and stock where applicable.

- Selected flow: Natural gas for factory combustion
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Iron-foundry slag (`slag`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Iron-foundry slag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: jrc-foundry-2024

###### Spent silica foundry sand (`spent_sand`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Spent silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: jrc-foundry-2024

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`foundry_fossil_co2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Fossil carbon dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources:

###### Carbon monoxide emitted to air (`foundry_co`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Carbon monoxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources:

###### Nitrogen dioxide emitted to air (`foundry_no2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Nitrogen dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources:

### Process: Forging and heat treatment (`forge_heat`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`forge_heat_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forge_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forge_heat`
- Sources:

###### 42CrMo4 steel forging stock (`forging_stock`)

Only actual specified 42CrMo4 shaft/trunnion path; alternative steel or cast component separate. Record upstream melt/stock state, furnace cycles and retained hardness requirement. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: 42CrMo4 steel forging stock
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forge_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forge_heat`
- Sources:

###### Mineral-oil heat-treatment quench fluid (`quench_oil`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Mineral-oil heat-treatment quench fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forge_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forge_heat`
- Sources:

###### Natural gas for factory combustion (`forge_heat_natural_gas`)

Only actual furnace/dryer/HVOF burner fuel at factory, with measured composition and calorific value; other fuel own row. Customer converter blow gases and ladle preheat excluded. Meter actual gas at documented pressure/temperature, convert with measured net calorific value; retain operating period and stock where applicable.

- Selected flow: Natural gas for factory combustion
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forge_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forge_heat`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Iron-oxide forging scale (`scale`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Iron-oxide forging scale
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forge_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forge_heat`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`forge_heat_fossil_co2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Fossil carbon dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forge_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forge_heat`
- Sources:

###### Carbon monoxide emitted to air (`forge_heat_co`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Carbon monoxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forge_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forge_heat`
- Sources:

###### Nitrogen dioxide emitted to air (`forge_heat_no2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Nitrogen dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forge_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forge_heat`
- Sources:

### Process: Machining and dimensional finishing (`machining`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`machining_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining`
- Sources:

###### CuCrZr copper-alloy caster mould blank (`copper_blank`)

Only actual certified CuCrZr machined on site; another alloy gets separate card. A purchased finished coated plate bypasses this incorporated blank. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: CuCrZr copper-alloy caster mould blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining`
- Sources: primetals-copper

###### Mineral-oil straight cutting fluid (`straight_oil`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Mineral-oil straight cutting fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining`
- Sources: jrc-metalworking-2020

###### Water-emulsifiable mineral-oil cutting-fluid concentrate (`emulsion_concentrate`)

Only actual supplier formulation, distinct from dilution water and straight oil; record SDS/specification and retained fluid fractions. Synthetic route gets its own identity. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Water-emulsifiable mineral-oil cutting-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining`
- Sources: jrc-metalworking-2020

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated alloy-steel machining chips (`steel_chips`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Segregated alloy-steel machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining`
- Sources:

###### Segregated CuCrZr machining chips (`copper_chips`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Segregated CuCrZr machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining`
- Sources:

###### Spent mineral-oil cutting emulsion (`spent_emulsion`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Spent mineral-oil cutting emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining`
- Sources:

##### Elementary flows

### Process: Initial refractory and insulation installation (`lining`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`lining_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources:

###### Alumina-based refractory castable (`alumina_castable`)

Only actual alumina castable order formulation for supplied lining; not universal converter/ladle chemistry. Trace dry recipe, water addition, cure losses and retained mass. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Alumina-based refractory castable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources: pyrotek-ladle

###### Magnesia-carbon refractory brick (`magcarbon_brick`)

Only actual specified converter/steel-ladle lining installed in supplied equipment; document brick grade, binder and retained carbon. No default replacement campaign. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Magnesia-carbon refractory brick
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources:

###### Purchased precast alumina refractory ladle liner (`precast_liner`)

Actual supplied precast liner alternative to on-site castable for the same lining layer; supplier drying burden embedded once. Backup layer separately specified if supplied. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased precast alumina refractory ladle liner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources: pyrotek-ladle

###### Natural gas for factory combustion (`lining_natural_gas`)

Only actual furnace/dryer/HVOF burner fuel at factory, with measured composition and calorific value; other fuel own row. Customer converter blow gases and ladle preheat excluded. Meter actual gas at documented pressure/temperature, convert with measured net calorific value; retain operating period and stock where applicable.

- Selected flow: Natural gas for factory combustion
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Uninstalled alumina-castable residue (`refractory_waste`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Uninstalled alumina-castable residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`lining_fossil_co2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Fossil carbon dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources:

###### Carbon monoxide emitted to air (`lining_co`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Carbon monoxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources:

###### Nitrogen dioxide emitted to air (`lining_no2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Nitrogen dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_lining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lining`
- Sources:

### Process: Conditional protective coating and copper treatment (`surface`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`surface_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Steel grit blast abrasive (`steel_grit`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Steel grit blast abrasive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Epoxy coating resin (`epoxy`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Epoxy coating resin
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Amine coating hardener (`amine`)

Actual single supplied hardener formulation identified by SDS; other curing agents own card, no mixture recipe assumed. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Amine coating hardener
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Xylene coating solvent (`xylene`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Xylene coating solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Nickel sulfamate plating salt (`nickel_sulfamate`)

Only actual in-house new caster-copper nickel-sulfamate bath; salt hydration/assay and all actual separate bath chemicals measured. Supplier-plated copper bypasses bath feed. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Nickel sulfamate plating salt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: primetals-copper

###### Nickel plating anode (`nickel_anode`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Nickel plating anode
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: primetals-copper

###### Tungsten-carbide HVOF coating powder (`wc_powder`)

Only actual specified carbide powder with measured binder alloy; NiB electroplating and chrome plating are distinct alternative actual recipes, not inferred from this powder. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Tungsten-carbide HVOF coating powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: primetals-copper

###### Oxygen for HVOF or thermal cutting (`oxygen`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Oxygen for HVOF or thermal cutting
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Natural gas for factory combustion (`surface_natural_gas`)

Only actual furnace/dryer/HVOF burner fuel at factory, with measured composition and calorific value; other fuel own row. Customer converter blow gases and ladle preheat excluded. Meter actual gas at documented pressure/temperature, convert with measured net calorific value; retain operating period and stock where applicable.

- Selected flow: Natural gas for factory combustion
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste uncured epoxy coating (`waste_epoxy`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Waste uncured epoxy coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Spent nickel-sulfamate plating bath (`spent_bath`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Spent nickel-sulfamate plating bath
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: primetals-copper

##### Elementary flows

###### Xylene emitted to air (`xylene_air`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Species-specific input assay and stock/recovery/retention/control balance reconciled with stack/fugitive measurements, after actual controls; no generic VOC factor.

- Selected flow: Xylene emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Fossil carbon dioxide emitted to air (`surface_fossil_co2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Fossil carbon dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Carbon monoxide emitted to air (`surface_co`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Carbon monoxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Nitrogen dioxide emitted to air (`surface_no2`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Measure this named species using matched gas flow/concentration/time after controls; fossil CO2 may use a verified carbon/oxidation balance. Carbon balance alone cannot determine CO or NO2; NO reported separately from NO2 and NOx-as-NO2 equivalents.

- Selected flow: Nitrogen dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

### Process: Configured assembly and factory acceptance (`assembly`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`assembly_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Purchased cold-chamber die-casting three-platen clamping unit (`die_clamp`)

Only the specified assembly actually supplied and incorporated; record specification, supplier-completed processing and embedded initial fill. Expand an internally made mechanism through actual cast/forged/fabricated, machining and assembly routes. Supplied furnace hardware includes only retained body/liner/control, not default user operating fuel or molten metal.

- Selected flow: Purchased cold-chamber die-casting three-platen clamping unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: frech-cold

###### Purchased die-casting hydraulic control manifold (`die_control`)

Only the specified assembly actually supplied and incorporated; record specification, supplier-completed processing and embedded initial fill. Expand an internally made mechanism through actual cast/forged/fabricated, machining and assembly routes. Supplied furnace hardware includes only retained body/liner/control, not default user operating fuel or molten metal.

- Selected flow: Purchased die-casting hydraulic control manifold
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: frech-cold

###### Purchased hot-chamber die-casting holding furnace (`hot_furnace`)

Only the specified assembly actually supplied and incorporated; record specification, supplier-completed processing and embedded initial fill. Expand an internally made mechanism through actual cast/forged/fabricated, machining and assembly routes. Supplied furnace hardware includes only retained body/liner/control, not default user operating fuel or molten metal.

- Selected flow: Purchased hot-chamber die-casting holding furnace
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: frech-hot

###### Purchased AC induction motor (`motor`)

Only installed or retained in actual supplied configuration; specification/rating and delivered state required. Purchased assembly embeds its materials and supplier tests; do not add embedded motor copper/steel/oil again. Test-only drained fluid is separate. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased AC induction motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Purchased converter reduction-gear tilt drive (`tilt_drive`)

Only installed or retained in actual supplied configuration; specification/rating and delivered state required. Purchased assembly embeds its materials and supplier tests; do not add embedded motor copper/steel/oil again. Test-only drained fluid is separate. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased converter reduction-gear tilt drive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Purchased hydraulic pump (`pump`)

Only installed or retained in actual supplied configuration; specification/rating and delivered state required. Purchased assembly embeds its materials and supplier tests; do not add embedded motor copper/steel/oil again. Test-only drained fluid is separate. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased hydraulic pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Purchased rolling-mill backup-roll bearing (`bearing`)

Only installed or retained in actual supplied configuration; specification/rating and delivered state required. Purchased assembly embeds its materials and supplier tests; do not add embedded motor copper/steel/oil again. Test-only drained fluid is separate. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased rolling-mill backup-roll bearing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Purchased caster control cabinet (`control`)

Only installed or retained in actual supplied configuration; specification/rating and delivered state required. Purchased assembly embeds its materials and supplier tests; do not add embedded motor copper/steel/oil again. Test-only drained fluid is separate. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased caster control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### ISO VG46 hydraulic-oil initial fill (`hydraulic_oil`)

Only installed or retained in actual supplied configuration; specification/rating and delivered state required. Purchased assembly embeds its materials and supplier tests; do not add embedded motor copper/steel/oil again. Test-only drained fluid is separate. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: ISO VG46 hydraulic-oil initial fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### ISO VG220 gear-oil initial fill (`gear_oil`)

Only installed or retained in actual supplied configuration; specification/rating and delivered state required. Purchased assembly embeds its materials and supplier tests; do not add embedded motor copper/steel/oil again. Test-only drained fluid is separate. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: ISO VG220 gear-oil initial fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Lithium-soap lubricating grease (`grease`)

Only installed or retained in actual supplied configuration; specification/rating and delivered state required. Purchased assembly embeds its materials and supplier tests; do not add embedded motor copper/steel/oil again. Test-only drained fluid is separate. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Lithium-soap lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Purchased water for factory pressure test (`test_water`)

Only actual manufacturer pressure/leak test; declare makeup, internal reuse, drains and retained volume. No continuous caster use-phase cooling assumed. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Purchased water for factory pressure test
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: primetals-copper

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Drained mineral hydraulic test oil (`drained_test_oil`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Drained mineral hydraulic test oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

##### Elementary flows

### Process: Residual shared utilities and pollution control (`services`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`services_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources:

###### Purchased industrial process makeup water (`process_water`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Calibrated makeup meters by actual loop; subtract already assigned test/lining/machining/surface water from shared imports before residual allocation; moisture and liquid stocks reconciled.

- Selected flow: Purchased industrial process makeup water
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources:

###### Calcium hydroxide wastewater neutralizer (`lime`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Calcium hydroxide wastewater neutralizer
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Nickel-bearing wastewater-treatment sludge (`sludge`)

Only actual nickel-bearing treatment waste; wet mass, dry solids and own nickel assay required, not bath salt mass or iron assay. Other sludge species have separate cards. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Nickel-bearing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources:

###### Industrial wastewater transferred to external treatment (`wastewater`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Industrial wastewater transferred to external treatment
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources:

##### Elementary flows

###### Treated water discharged to river (`river_water`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Treated water discharged to river
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources:

###### Dissolved nickel discharged to river (`nickel_water`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Matched post-treatment effluent volume and nickel concentration, compartment/detection limit/speciation retained; do not equate wet sludge or total wastewater with nickel.

- Selected flow: Dissolved nickel discharged to river
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources:

### Process: Gate packaging and dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Purchased electricity delivered to factory (`dispatch_electricity`)

Measured supply at actual voltage/grid region/year; exclude source-specific generation or delivery-service proxies. Services row is only unassigned residual after the other process meters. Calibrated interval submeter and causal allocation; reconcile all rows to the same site-period imports, generation, exports and storage changes.

- Selected flow: Purchased electricity delivered to factory
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Sources:

###### Wooden transport skid (`wood_pack`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Wooden transport skid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Sources:

###### Steel packaging strap (`steel_strap`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Steel packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Sources:

###### Polyethylene transport film (`pe_film`)

Only when this exact exchange crosses the process boundary for the declared route; actual grade/specification, supplier interface and absence evidence are required. Weigh issues/receipts, matched returns and opening/closing stocks; trace lot, specification and actual process destination.

- Selected flow: Polyethylene transport film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted configured metallurgical equipment (`finished`)

The reference is exactly one declared family/configuration and accepted supplied set. Net mass includes only supplied body, supports, drives, retained initial liner/coating/fill and contract-qualified ancillaries; no customer molten charge, packaging or rejected units. Calibrated weighing of accepted net equipment of the same configuration; reconcile shipped modules and acceptance record.

- Selected flow: Accepted configured metallurgical equipment
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | shared processes | First trace order/serial/lot and subdivide material issues and process meters. | ef-allocation-2021 |
| causal_residual | unassigned shared burdens | Allocate only remaining burden using measured causal machine-time/load, weld-time, treated area or furnace load as appropriate. Document denominator and uncertainty; do not default all utilities to equipment mass. Other relationship needs justified sensitivity. | ef-allocation-2021 |
| scrap_returns | scrap and internal returns | Pair and cancel internal transfers at aggregate boundary; retain rework energy and losses. External scrap/recovered solvent remains named output with actual receiving route; no automatic avoided-primary-material credit. |  |
| services_once | utilities | Reconcile site-period purchased imports + actual on-site generation + opening energy storage = assigned fabrication/foundry/heat/machining/lining/surface/assembly/dispatch use + remaining shared-services use + exports + closing storage + documented distribution losses. Services carries only the measured unassigned residual and measured causal allocation; same intervals/units, no whole-site total added to submeters. Investigate negative residual against timing, units and meter/allocation uncertainty; do not clip it to zero. Purchased steam/heat, individual fuels and generation inputs require separate actual cards if present, not duplicate purchased electricity and generation output. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection period: Q is the attributable exchange total including reject/rework burden for one family/model/configuration; N is its accepted complete units; D is the sum of calibrated accepted net equipment masses for that same period/configuration. M = D/N, q_item = Q/N, hence the declared q_ref = q_item/M = Q/D. Exclude reject, work-in-progress and packaging mass from D; retain their attributable burden in Q and reconcile WIP opening/closing. Never average masses across unlike configurations. A modular accepted set sums only its supplied modules without duplicate components; mass scope matches BOM, factory tests and accepted output.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference mass | calibrated weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | same production period | declared manufacturing site | accepted net mass per machine | scale calibration; module/BOM/acceptance reconciliation |
| cp_receipt | receipt | individual atomic exchanges | meter; weighing; assay; route/order ledger | supplier; lot; grade/state; upstream completed operations; delivered BOM; transport mode/mass/distance | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_body_fabrication | body_fabrication | individual atomic exchanges | meter; weighing; assay; route/order ledger | grade/formulation; issue/return; calibrated quantity; each species assay; opening/closing stocks; process meter; wastes and internal transfers | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_foundry | foundry | individual atomic exchanges | meter; weighing; assay; route/order ledger | furnace; charge grade/assay; mould/core recipe; runner returns; slag/dust/sand moisture; stocks | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_forge_heat | forge_heat | individual atomic exchanges | meter; weighing; assay; route/order ledger | grade/formulation; issue/return; calibrated quantity; each species assay; opening/closing stocks; process meter; wastes and internal transfers | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_machining | machining | individual atomic exchanges | meter; weighing; assay; route/order ledger | grade/formulation; issue/return; calibrated quantity; each species assay; opening/closing stocks; process meter; wastes and internal transfers | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_lining | lining | individual atomic exchanges | meter; weighing; assay; route/order ledger | layer; actual refractory recipe/assay; water; cure/dryout fuel; installed dry mass; moisture; rejected residue | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_surface | surface | individual atomic exchanges | meter; weighing; assay; route/order ledger | actual bath/paint/solvent/HVOF recipe; species assay; plated/retained mass; controls; capture media; recovered/destructed species; stocks | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_assembly | assembly | individual atomic exchanges | meter; weighing; assay; route/order ledger | installed assembly specification; embedded initial fill; test load/time; drain/retention; acceptance; configuration | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_services | services | individual atomic exchanges | meter; weighing; assay; route/order ledger | site meter totals; all assigned submeter quantities; generation/import/export/storage; residual driver; water stocks; effluent volume/concentration; sludge own assays | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |
| cp_dispatch | dispatch | individual atomic exchanges | meter; weighing; assay; route/order ledger | grade/formulation; issue/return; calibrated quantity; each species assay; opening/closing stocks; process meter; wastes and internal transfers | Collect each card using its stated method, same configuration/period, individual original unit and allocation record; count accepted units, trace reject/rework burdens and quantify uncertainty. | kg; m3; kWh; MJ | each batch/test/shift; period reconcile | representative actual reporting period | selected actual process and supplied scope | attributable quantity / accepted machines | calibration; raw records; own matched assays; route applicability; reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_identity | all supplied interfaces | One family/configuration, actual make/buy matrix and supplier completed-state; expand every actual recipe/species before complete foreground release. | contract; drawings; BOM; route sheets; provider data |
| water_closure | physical water records | For actual physical water terms: fresh purchased/abstracted makeup + input moisture + opening water stock + reaction-produced water = exported liquid water + water in exported wet waste/sludge + treated discharge + evaporation + retained equipment moisture + closing stock + reaction-consumed water. Measure each loop and test drain separately. Every wet/slurry/sludge/wastewater/product/stock term uses its own measured moisture or density, temperature where relevant and stated wet/dry basis; no shared moisture assumption across terms. Paired internal recirculation/return transfers cancel at factory boundary but pumping and treatment remain; never treat total recirculating flow as withdrawal. Investigate residual against combined flowmeter, scale, moisture-sampling, evaporation-estimation and allocation uncertainty; no universal tolerance. | loop meter, moisture, stocks, reaction and sampling records |
| species_closure | physical material/species records | For each contained element/species independently (Fe, Cu, Ni, Cr, W and actual refractory carbon/alumina as applicable): sum external input mass times its own matched assay + opening species stock + actual reaction generation = accepted equipment/components times their own assay + external scrap/chips/slag/dust/sludge/wastewater/releases times each term's own assay + closing species stock + actual reaction consumption. Retain wet/dry and dissolved/particulate bases; paired internal runners, chips, plating returns and rework cancel without removing reprocessing burden. Gross alloy, hydrated salt, oxide scale and wet sludge never equal contained metal. At elemental level reactions change chemical form, not create/destroy the element; retain species stoichiometry only when verified. Review closure with combined weighing, sampling, assay, detection-limit and allocation uncertainty, not forced yield or clipping. | each term own assay; mass/stocks; paired return records |
| solvent_closure | solvent records | For each actual solvent such as xylene: external solvent in resin/thinner/cleaner + opening stock = product-retained solvent + closing stock + exported recovered solvent + solvent in uncured coating/other waste + solvent retained on capture media + measured destruction + post-control stack/fugitive air releases. Account for solvent in wastewater and other non-air residues, reaction products and internal recovery returns. Capture alone is not destruction: distinguish solvent transferred to capture media from measured destruction or verified chemical conversion, with their own retained stocks and products; do not subtract capture and destruction twice. Never assign an unexplained balance residual automatically to air. Total VOC is not automatically one named species. Examine balance residual with actual formulation assay, sampling, metering, controls and allocation uncertainty; no assumed evaporation fraction. | SDS/formulation assays; recovery/destruction; post-control monitoring |
| utility_closure | utility records | Reconcile site-period purchased imports + actual on-site generation + opening energy storage = assigned fabrication/foundry/heat/machining/lining/surface/assembly/dispatch use + remaining shared-services use + exports + closing storage + documented distribution losses. Services carries only the measured unassigned residual and measured causal allocation; same intervals/units, no whole-site total added to submeters. Investigate negative residual against timing, units and meter/allocation uncertainty; do not clip it to zero. Purchased steam/heat, individual fuels and generation inputs require separate actual cards if present, not duplicate purchased electricity and generation output. | same site-period reconciliation and measured causal allocation |
| uncertainty | all records | Disclose period, calibration, sampling, measurement/conversion/allocation uncertainty, unresolved provider/UUID/recipe/range evidence and material exclusions. Not applicable, zero, below detection and unknown are distinct. | raw records; uncertainty budget; gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_scope | reference product | Confirm measured M and accepted mass/count, supplied modules, lining/fill and test denominator match one configuration; no packaging/reject or user molten-metal mass. |  |
| route_completeness | all inventory rows | Validate family architecture, grade and each conditional make/buy route; unsupported recipe/UUID remains a gap, not exclusion or a positive zero. Reject combined exchanges and duplicate embedded burdens. |  |
| balance_validation | physical balances | Require own matched assays and unit/basis, water/solvent stocks and actual reactions, paired internal transfers, measured external residues/releases. Investigate residual under combined actual uncertainty and disclose unresolved closure. |  |
| utility_validation | utility rows | Reconcile site-period purchased imports + actual on-site generation + opening energy storage = assigned fabrication/foundry/heat/machining/lining/surface/assembly/dispatch use + remaining shared-services use + exports + closing storage + documented distribution losses. Services carries only the measured unassigned residual and measured causal allocation; same intervals/units, no whole-site total added to submeters. Investigate negative residual against timing, units and meter/allocation uncertainty; do not clip it to zero. Purchased steam/heat, individual fuels and generation inputs require separate actual cards if present, not duplicate purchased electricity and generation output. |  |
| emission_validation | elementary releases | Verify named species, physical state, destination compartment and after-control measurements. No CO/NOx from fuel carbon alone, no Ni from total sludge, no automatic VOC-to-xylene mapping. |  |
| uuid_validation | all adopted identities | Before actual dataset release/publication require direct-read public type/state, bilingual official name, property/unit linkage, state/interface and provider conditions; resolve present gaps without substituting a narrower reference family. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturer-gate equipment production data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same declared equipment family/configuration/supplied scope and representative manufacture; process/lifecyclemodel downstream projection with upstream provider links |
| excluded_use | Cross-family performance comparison, user metal output inventory, automatic cradle-to-grave lifetime, standalone spare part, refurbishment or universal average machine |
| required_metadata | family and technology (BOF/AOD/nonferrous converter; ladle alloy duty; ingot mould metal duty; caster type; hot/cold rolling mill); model/drawing; capacity and geometry; alloy/grade certificates; bare vessel versus supplied liner and insulation; support/drive/roll/copper/hydraulic/electric/automation configuration; supplied auxiliary list; make/buy matrix and upstream completed operations; initial retained fill; acceptance tests; net mass and module reconciliation; site, period, geography and supplier interfaces |
| required_quality_disclosure | Primary coverage, calibration, sampling, uncertainty, balance residuals, allocations, supplier state, conditional applicability, missing UUIDs/recipes/provider links/ranges and exclusions |
| update_trigger | Family/configuration, supplied liner/fill/drive/copper/roll, make/buy, metallurgy/coating recipe, factory test, provider, energy supply or allocation changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| pyrotek-ladle | extension_guidance | Pyrotek, Ladles and Crucibles, undated publisher page. https://www.pyrotek.com/primary-solutions/aluminium/casthouse/metal-transfer-casthouse/ladles-and-crucibles | Ladle shell, precast or cast-in-place liner and conditional lid/backup insulation; aluminium example, no default refractory recipe. |
| mifco-mould | extension_guidance | MIFCO, Ingot Molds / Charging Tongs, undated publisher page. https://mifco.com/foundry-accessories/ingot-molds-charging-tongs/ | Mild-steel ingot mould for aluminium/brass, explicitly not bronze; counterexample to all-moulds-cast-iron assumption. No catalogue weight adopted. |
| ingot-design | literature | Ingot Metallurgy Forum technical library, Design of Ingot Moulds, Ingot Technology-11, printed page43. Historical undated chapter; edition/date not established. https://virteomdevcdn.blob.core.windows.net/site-ingotmetallurgyforum-com/uploaded_media/ingotmetallurgyforum_com/Technical_Library/Chapter_11_-_Design_of_Ingot_Molds.pdf | Historical cast-iron steel-ingot mould example and handling/shape distinction only; no contemporary material mandate, geometry, lifetime or yield adopted. |
| primetals-converter | extension_guidance | Primetals Technologies, Stainless Steelmaking with the AOD Converter, undated publisher page. https://www.primetals.com/en/portfolio/solutions/steelmaking/aod-converter/ | Converter suspension, drive/damper and tuyere interfaces; these supplied systems differ from operating gas and molten feed. |
| primetals-converter-manufacture | extension_guidance | Primetals Technologies and ArcelorMittal Complete Converter Revamp in Eisenhuettenstadt, 28 April 2026. https://www.primetals.com/en/news/primetals-technologies-and-arcelormittal-complete-converter-revamp-in-eisenhuettenstadt/ | Distinct equipment manufacture/supply and later construction/commissioning interfaces; revamp example does not mandate a new-equipment configuration. |
| primetals-copper | extension_guidance | Primetals Technologies, Continuous Caster Mold Copper Repair & Coatings, undated publisher page. https://www.primetals.com/en/portfolio/solutions/continuous-casting/continuous-caster-mold-copper-repair-and-coatings/ | New/used copper machining; separate nickel-sulfamate, nickel-boron, chrome and HVOF tungsten-carbide alternatives; mould water/grease/hydraulic testing. Refurbishment excluded from new-equipment reference. |
| primetals-mill | extension_guidance | Primetals Technologies, Plate Mills, Plate Mill Stand section, undated publisher page. https://www.primetals.com/en/portfolio/solutions/hot-rolling/plate-mill/ | Single/multi-piece housing, work/backup rolls, hydraulic gap control and drive spindle; wider line ancillaries conditional on supplied equipment contract. |
| jrc-foundry-2024 | official_guidance | JRC, Smitheries and Foundries Industry BAT Reference Document, EUR40127, 2024, DOI10.2760/4805267, section2.2.1.1, printed67-68. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | Equipment component foundry route: melt/treat, prepare mould, pour/cool/shakeout and finish; purchased casting bypasses supplier operations. No empirical factors adopted. |
| jrc-metalworking-2020 | official_guidance | JRC, Best Environmental Management Practice in the Fabricated Metal Products manufacturing sector, EUR30025EN, 2020, DOI10.2760/894966, printed190 section4.1. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | Separate straight cutting oil and water-soluble concentrate with dilution water, actual forming/cutting/grinding applicability. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU)2021/2279, AnnexI section4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Subdivision and physical-causality allocation hierarchy; no complete environmental-footprint conformance claim. |
| frech-cold | extension_guidance | FRECH, Cold Chamber Die Casting Machines, undated publisher page. https://www.frech.com/en/cold-chamber.html | Cold-chamber three-platen clamping and hydraulic/control architecture, no clamping force or operating-performance data adopted. |
| frech-hot | extension_guidance | FRECH, Hot Chamber Die Casting Machines, undated publisher page. https://www.frech.com/en/hot-chamber.html | Hot-chamber supplied furnace-to-casting-system interface, no customer melting energy or cycle parameters adopted. |
