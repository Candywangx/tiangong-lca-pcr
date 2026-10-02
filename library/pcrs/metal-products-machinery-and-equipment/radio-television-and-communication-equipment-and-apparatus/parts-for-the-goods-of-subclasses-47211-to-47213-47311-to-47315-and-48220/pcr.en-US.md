---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47211-to-47213-47311-to-47315-and-48220
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dedicated parts for broadcast, television, display and radar apparatus

## 1. Scope and Applicability

This methodology covers accepted dedicated parts for broadcast/television transmission apparatus with or without reception, television cameras, general or vehicle radio receivers, television receivers, ADP or non-ADP monitors/projectors, and radar/radio navigation/remote-control apparatus. Housings, populated boards and RF/display subassemblies are not admitted by name: drawing, dedicated host fit, delivered functionality and remaining assembly must establish part status. Complete apparatus, including functioning bare apparatus without a housing, is not the reference output.

The current CPC3 note gives 47403 a title but no detailed inclusion/exclusion text. Adjacent categories separately name capacitors, resistors, bare printed circuits, valves, semiconductors and ICs. Those and generic metal/polymer stock do not become the reference product merely because a host manufacturer purchases them. Separately classified display cells, general fasteners, complete antennas and independently functional display/radar modules need separate review. Telephone/network equipment, audio/video recording/reproduction, still-camera and camcorder parts are not automatically included. Historical customs cases show a television main board can be a part, an LCD subassembly can be separately classified, and a decoder-equipped LCD module can be a complete monitor; they are not universal current CPC mappings. Sources: `un-cpc3-notes`; `cbp-n059857`; `cbp-h325872`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47211-to-47213-47311-to-47315-and-48220 |
| classification_refs | CPC 3.0:47403 |
| covered_products | Drawing- and delivered-state-reviewed dedicated parts for the stated hosts |
| excluded_products | Complete apparatus; separately named components or generic stock; modules without host evidence; parts for other hosts |
| representative_product | Host-fit accepted television main control circuit assembly |
| production_route | Actual mechanical, polymer, circuit, microwave or display route under make/buy matrix |
| market_state | Accepted dedicated part at declared plant gate, before host installation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a dedicated apparatus part meeting declared drawing/interface |
| How much | 1 kg |
| How well | part number and drawing revision; actual host family/model and dedicated fit; delivered functional state and remaining assembly; material grades/formulations; make/buy and supplier completed operations; electrical/RF/optical/mechanical interface and acceptance tests; configuration and net mass; site, period, supplier geography, test and packaging boundary |
| How long or cycle | One supply at factory gate; no host service-life claim |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted dedicated apparatus part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number and drawing revision; actual host family/model and dedicated fit; delivered functional state and remaining assembly; material grades/formulations; make/buy and supplier completed operations; electrical/RF/optical/mechanical interface and acceptance tests; configuration and net mass; site, period, supplier geography, test and packaging boundary |

D is the positive accepted net mass for the same part, drawing and configuration in the matched period. Weigh accepted lots on a calibrated balance, excluding transport packaging, test fixtures, rejects and free residual liquid. Small parts may use lot net mass and matched lot count; never invent unit weight. Convert count to mass only using measured net mass divided by measured accepted count of the same-configuration matched lot; packaging or another model cannot substitute. Each foreground exchange divides its attributable period quantity by D; net reference output is 1 kg.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_mass measures D; every row divides attributable period quantity by D. |
| units | all inventory rows | Row-specific property | kg; kWh; MJ; t km | Retain raw units and conversion evidence; electricity 1 kWh=3.6 MJ; gas retains temperature, pressure, composition and net calorific value. |
| balances | production | Mass | kg | Reconcile external inputs, stocks, products, waste and releases separately for each alloy, resin, paste and solvent; contained metal/element terms use their own measured composition, never gross mass as element mass. Include reactions, oxygen uptake, moisture and stocks; cancel paired internal transfers but retain rework energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared received blank, bare board, die, display cell or completed component with already completed operations |
| starting_condition_role | Supplier intermediate product |
| product_classification_scope | Reviewed dedicated parts for broadcast, television, display and radar hosts |
| recursive_input_rule | Purchased same-category parts retain distinct supplier burdens; internal returns cancel transfers and receive no substitution credit. |
| upstream_dataset_requirement | Link actual grade, fabrication stage, geography, supplier process, utility, transport and waste receiver; unknown never means zero. |
| disclosure | part number and drawing revision; actual host family/model and dedicated fit; delivered functional state and remaining assembly; material grades/formulations; make/buy and supplier completed operations; electrical/RF/optical/mechanical interface and acceptance tests; configuration and net mass; site, period, supplier geography, test and packaging boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_routes | all processes | Build a drawing-based stage-by-stage make/buy/subcontract matrix. Purchased chassis, PCBA, microwave assembly or display cell carries supplier burden once; in-house routes include actual fabrication, assembly, tests, rework and controls. Never count both a purchased component and its embedded raw inputs. | `cbp-n353432`; `rogers-materials` |
| boundary_extensions | all processes | Not every part manufacturer makes wafers, bare boards or LCD glass. If actually in-house, add the applicable lithography, deposition/etching, plating, cleaning, lamination and packaging stages with individual chemicals, materials, utilities, wastes and species releases. Missing special-recipe evidence is a package gap, not automatic exclusion of the part family. | `cbp-n353432`; `rogers-materials` |
| boundary_gate | all processes | Include actual factory test electricity, destructive samples, cleaning, maintenance and control-equipment service. Host installation, whole-apparatus commissioning, user use and end of life are outside this factory-gate package and need downstream models. Justify and assess sensitivity of capital/infrastructure exclusions. | `cbp-n353432` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Supplier receipt and make/buy reconciliation | required | Trace the actual part drawing and delivered input state; record inbound transport and supplier operations. | Foreground manufacturing | per 1 kg reference flow |
| mechanical | Mechanical or polymer part manufacture | conditional | Actual sheet/extrusion cutting, machining, casting, polymer drying/moulding or dielectric shaping at the site; purchased finished housings bypass only these upstream operations. | Foreground manufacturing | per 1 kg reference flow |
| electronics | Host-specific circuit assembly | conditional | Actual printing/placement/reflow or insertion/soldering, optical inspection, electrical test and rework; purchased populated boards carry supplier fabrication once. | Foreground manufacturing | per 1 kg reference flow |
| rf_display | RF or display subassembly integration | conditional | Actual microwave substrate/die/interconnect assembly, antenna/waveguide/radome assembly, or display/backlight/optical integration; delivered part must first pass the scope gate. | Foreground manufacturing | per 1 kg reference flow |
| surface | Surface finishing and chemical controls | conditional | Actual degreasing, coating/cure, bonding, encapsulation or plating; include each actual formulation, reaction, rinse and control process. | Foreground manufacturing | per 1 kg reference flow |
| acceptance | Part acceptance, packing and dispatch | required | Part-specific drawing acceptance, functional/electrical/RF/optical tests where relevant, rejection and final net weighing. | Foreground manufacturing | per 1 kg reference flow |
| utilities | Attributable utilities and pollution treatment | required | Meter shared energy/water, local combustion if present, air capture and effluent treatment; no duplication of utilities already in process rows. | Foreground manufacturing | per 1 kg reference flow |

Part-family qualifiers must match tests: mechanical/polymer parts use dimensional, tolerance, material and fit acceptance; boards use BOM, SPI/AOI, electrical and host-function checks; RF parts use actual frequency band, connectors and configuration for loss, gain, matching or antenna performance; display subassemblies use supplier pixel, luminance, optical and signal-interface criteria. Run only applicable tests; retain acceptance, rework, reject and test-energy records without universal thresholds. Sources: `cbp-n353432`; `rogers-materials`; `keysight-radar-tests`. The rows below are conditional concrete interface examples, not a universal BOM for all parts. Record not_applicable with evidence when absent, unknown when present but unmeasured, never zero by assumption.

### Process: Supplier receipt and make/buy reconciliation (`receipt`)

#### Inputs

##### Product flows

###### Television main control printed circuit assembly (`purchased_board`)

Only if a dedicated main board is purchased; identify supplier part number, populated state and missing host integration. Do not add its embedded bare board or chips again.

- Selected flow: Television main control printed circuit assembly
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_receipt, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources: `cbp-n059857`; `cbp-n353432`

###### Host-specific finished aluminium chassis (`purchased_housing`)

Only a purchased finished chassis with host drawing and alloy/finish declared; do not model its aluminium stock or machining again.

- Selected flow: Host-specific finished aluminium chassis
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_receipt, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources: `jrc-metal-bemp`

###### Road freight transport service (`freight`)

Actual inbound leg; mass, distance, mode, loading and provider basis must match.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t km
- Amount rule: Attributable period quantity collected by cp_receipt, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Sources:

### Process: Mechanical or polymer part manufacture (`mechanical`)

#### Inputs

##### Product flows

###### Aluminium alloy EN AW-6061 extrusion, T6 (`aluminium_stock`)

Conditional example for an actual drawing specifying this alloy/temper; another grade needs a separate atomic row. Casting stock is not this extrusion.

- Selected flow: Aluminium alloy EN AW-6061 extrusion, T6
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_mechanical, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical`
- Sources: `jrc-metal-bemp`

###### Polycarbonate granulate (`polycarbonate`)

Only actual polycarbonate moulding; record resin grade, additives and drying. PC/ABS blend, thermoset or dielectric composite needs its own row, not this proxy.

- Selected flow: Polycarbonate granulate
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_mechanical, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical`
- Sources:

###### PTFE dielectric composite blank (`ptfe_dielectric`)

Only the declared PTFE-based dielectric machining/shaping route; record filler and supplier grade, not a universal radome material.

- Selected flow: PTFE dielectric composite blank
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_mechanical, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical`
- Sources: `rogers-materials`

###### Mineral-oil straight cutting fluid (`cutting_oil`)

Only when used; retain actual formulation/SDS and stock. Water-soluble concentrate and dilution water must be separate exchanges if that route is used.

- Selected flow: Mineral-oil straight cutting fluid
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_mechanical, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical`
- Sources: `jrc-metal-bemp`

#### Outputs

##### Waste flows

###### Aluminium alloy EN AW-6061 machining swarf (`aluminium_swarf`)

External swarf only; assay oil/moisture and alloy fraction. Internal returns cancel transfers but repeated energy remains.

- Selected flow: Aluminium alloy EN AW-6061 machining swarf
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_mechanical, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical`
- Sources: `jrc-metal-bemp`

###### Polycarbonate moulding reject (`polycarbonate_reject`)

External reject/purge; distinguish internal regrind and record resin composition and destination.

- Selected flow: Polycarbonate moulding reject
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_mechanical, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical`
- Sources:

### Process: Host-specific circuit assembly (`electronics`)

#### Inputs

##### Product flows

###### Printed Wire Board (`bare_board`)

Only received bare FR4 glass-fibre/epoxy/copper board for site assembly; this verified identity is not populated PCBA, flexible circuit or microwave laminate. Supplier copper etching/plating burden occurs once.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_electronics, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics`
- Sources: `cbp-n353432`

###### Silicon television tuner integrated circuit, packaged (`tuner_ic`)

Only actual television tuner BOM item; record manufacturer part number and package. Purchased wafer fabrication/packaging is upstream; do not replace the whole board with this chip.

- Selected flow: Silicon television tuner integrated circuit, packaged
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_electronics, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics`
- Sources: `cbp-n059857`

###### CMOS television-camera image sensor, packaged (`camera_sensor`)

Only actual professional television-camera dedicated assembly; document active area, package and host interface; still-camera/webcam parts are outside this host set unless separate reviewed applicability exists.

- Selected flow: CMOS television-camera image sensor, packaged
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_electronics, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics`
- Sources: `un-cpc3-notes`

###### SAC305 no-clean solder paste (`solder_paste`)

Only actual SAC305 no-clean formulation; retain paste alloy fraction and flux SDS separately for fate accounting. Other alloys/flux systems require distinct rows; no universal recipe or loss factor.

- Selected flow: SAC305 no-clean solder paste
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_electronics, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics`
- Sources: `kester-solder-paste`

###### Nitrogen gas, supplied (`reflow_nitrogen`)

Only nitrogen-atmosphere reflow or purge; air reflow does not imply this input. Document purity and cylinder/bulk/on-site generation interface.

- Selected flow: Nitrogen gas, supplied
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_electronics, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics`
- Sources:

#### Outputs

##### Waste flows

###### Scrap, printed wiring board (`pcba_scrap`)

External rejected populated boards from SMT/reflow only; weigh actual rejects and retain composition and receiving treatment. Direct identity provides no quantity or recovery rate.

- Selected flow: Scrap, printed wiring board `fe1d2a9b-bdb0-498a-9b5f-4836ec35f883`
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_electronics, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics`
- Sources: `cbp-n353432`

###### SAC305 solder-paste waste (`solder_waste`)

Actual discarded paste/stencil residue, kept separate from retained solder, captured fume and board scrap; record alloy/flux and destination.

- Selected flow: SAC305 solder-paste waste
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_electronics, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics`
- Sources:

### Process: RF or display subassembly integration (`rf_display`)

#### Inputs

##### Product flows

###### PTFE-based copper-clad microwave circuit board (`microwave_board`)

Only actual RF laminate circuit input; identify laminate grade, filler, cladding and completed patterning; do not use bare FR4 UUID as a microwave-board surrogate.

- Selected flow: PTFE-based copper-clad microwave circuit board
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_rf_display, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rf_display`
- Sources: `rogers-materials`

###### Gallium-arsenide microwave amplifier MMIC die (`rf_die`)

Only actual GaAs die integration; identify die part number and attachment/interconnect route; purchased fab is upstream, silicon/GaN die requires a separate row.

- Selected flow: Gallium-arsenide microwave amplifier MMIC die
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_rf_display, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rf_display`
- Sources:

###### Gold bonding wire (`gold_wire`)

Only actual gold-wire bonding; record purity, diameter and consumption. Flip-chip, copper wire or ribbon is a different declared route.

- Selected flow: Gold bonding wire
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_rf_display, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rf_display`
- Sources:

###### Liquid-crystal display cell (`lcd_cell`)

Only actual cell input to a reviewed dedicated host subassembly. Raw cell, complete monitor and a separately classified display module are not automatically dedicated parts; record drivers, decoder, backlight and remaining assembly.

- Selected flow: Liquid-crystal display cell
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_rf_display, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rf_display`
- Sources: `cbp-h325872`; `cbp-n059857`

###### LED backlight bar assembly (`backlight`)

Only actual purchased backlight bar; record LED type, optics and electrical state; embedded LEDs/board are not repeated when supplier assembly is linked.

- Selected flow: LED backlight bar assembly
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_rf_display, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rf_display`
- Sources: `cbp-n353432`

###### Aluminium microwave waveguide section (`waveguide`)

Only actual waveguide assembly; specify alloy, aperture, length, surface treatment and host fit. Complete radar/transceiver is excluded as reference output.

- Selected flow: Aluminium microwave waveguide section
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_rf_display, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rf_display`
- Sources: `rogers-materials`

### Process: Surface finishing and chemical controls (`surface`)

#### Inputs

##### Product flows

###### Isopropyl alcohol (`isopropanol`)

Only actual cleaning solvent; record purity, formulation constituents and recovery. Do not substitute generic VOC or assume complete evaporation.

- Selected flow: Isopropyl alcohol
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_surface, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `epa-metal-coating`

###### Xylene (`xylene`)

Only actual xylene use with isomer composition and coating/cleaning interface declared; isopropanol is an alternative, not mandatory simultaneous consumption.

- Selected flow: Xylene
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_surface, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `epa-metal-coating`

###### Silver-filled epoxy die-attach adhesive (`epoxy_adhesive`)

Only actual conductive epoxy attachment; specify formulation, silver fraction, hardener and cure records. Solder attachment is a separate route, not this adhesive.

- Selected flow: Silver-filled epoxy die-attach adhesive
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_surface, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

#### Outputs

##### Waste flows

###### Spent isopropyl-alcohol cleaning liquid (`ipa_waste`)

External spent liquid only; record solvent/water/solid assay and licensed treatment. Internal recovered solvent is a cancelling internal transfer.

- Selected flow: Spent isopropyl-alcohol cleaning liquid
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_surface, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `epa-metal-coating`

##### Elementary flows

###### Isopropyl alcohol, air (`ipa_air`)

Only actual species-specific residual release after capture/recovery, on matched formulation stock and fate records or measured exhaust concentration/flow.

- Selected flow: Isopropyl alcohol, air
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_surface, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `epa-metal-coating`

###### Xylene, air (`xylene_air`)

Actual residual xylene species/isomer mixture to air; distinguish retained film, waste, captured solvent and destruction. Add other measured constituents individually.

- Selected flow: Xylene, air
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_surface, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `epa-metal-coating`

### Process: Part acceptance, packing and dispatch (`acceptance`)

#### Inputs

##### Product flows

###### Corrugated fibreboard carton (`corrugated`)

Actual carton input; excluded from accepted net part mass; include supplier burden and outgoing packaging once.

- Selected flow: Corrugated fibreboard carton
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_acceptance, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources:

###### Metallized polyethylene ESD shielding bag (`esd_bag`)

Only actual bag use; declare multilayer composition and disposal interface, separately from carton.

- Selected flow: Metallized polyethylene ESD shielding bag
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_acceptance, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources:

#### Outputs

##### Product flows

###### Accepted dedicated apparatus part (`final_product`)

1 kg accepted net output of the same declared part/configuration. Retain drawing, mass and acceptance records; never pool unrelated part families under one reference identity.

- Selected flow: Accepted dedicated apparatus part
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc3-notes`

### Process: Attributable utilities and pollution treatment (`utilities`)

#### Inputs

##### Product flows

###### Purchased grid electricity (`electricity`)

Actual imported electricity; record geography, voltage, reporting period, contract/grid provider and metered burden. Source-specific incineration electricity is not a generic factory grid proxy.

- Selected flow: Purchased grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable period quantity collected by cp_utilities, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Municipal supplied water (`water`)

Only actual supplied water; retain meter and temperature/density for volume conversion; direct abstraction requires separate elementary withdrawal and treatment.

- Selected flow: Municipal supplied water
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_utilities, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Natural gas, supplied (`natural_gas`)

Only actual local burner/oven/generator; retain volume conditions, composition and net calorific value. Purchased heat does not imply a site gas input.

- Selected flow: Natural gas, supplied
- Flow property / unit: Energy / MJ
- Amount rule: Attributable period quantity collected by cp_utilities, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

#### Outputs

##### Waste flows

###### Process wastewater to external treatment (`wastewater`)

Only actual external liquid transfer; characterize solids, pH, dissolved metals, solvent and receiving treatment; do not also report the receiver's emissions as site releases.

- Selected flow: Process wastewater to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_utilities, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, air (`fossil_co2`)

Only actual local fossil combustion; reconcile measured fuel carbon, unburned carbon and other carbon species. Grid electricity does not create local combustion emissions.

- Selected flow: Carbon dioxide, fossil, air
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_utilities, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Carbon monoxide, air (`carbon_monoxide`)

Only measured or applicable species-specific factor for actual combustion equipment/abatement; a total carbon balance alone cannot establish CO.

- Selected flow: Carbon monoxide, air
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_utilities, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Nitrogen dioxide, air (`nitrogen_dioxide`)

Only species-resolved NO2 release; measured total NOx as NO2 equivalent needs declared speciation/conversion and separate NO row where applicable; no derivation from fuel carbon alone.

- Selected flow: Nitrogen dioxide, air
- Flow property / unit: Mass / kg
- Amount rule: Attributable period quantity collected by cp_utilities, divided by D after stocks, internal transfers and allocation are reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared activities | Submeter or trace batches first; if not separable, allocate by verified labour/test time or machine time and measured load, documenting sum, rationale and sensitivity. Do not force mass allocation across different parts. |  |
| allocation_residues | scrap and rework | This candidate uses a cut-off convention: production carries input and site processing burdens; connect actual waste-receiver interfaces without default avoided-product credits. Saleable co-products require declared function, boundary and consistent method without double credit. Internal rework gains no new-product credit and retains energy/material use. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | final_product | weighing and acceptance | part number; drawing; configuration; lot; accepted net mass D; accepted count; tare; balance calibration | Weigh same-configuration accepted parts on a calibrated balance, excluding transport packaging; reconcile BOM, acceptance and matched lot count. | kg | each accepted lot | matched reporting period | declared plant gate | accepted net mass D in period for the same reference flow | calibration, tare and acceptance records |
| cp_receipt | receipt | individual atomic exchanges | meters, ledgers and tests | individual row identity; part/formulation; raw quantity; stocks; internal transfers; rejects; route; allocation; D; species and receiver; water temperature/density and waste moisture; element-specific assay; species fractions; opening/closing stocks; paired return IDs; reaction generation/consumption; capture/destruction fate; term uncertainty | Weigh/meter each exchange against batch BOM, receipts/dispatch, SDS, run time and tests; species releases use measured concentration/flow or applicable factors with period, control and uncertainty retained. | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | per 1 kg reference flow | raw meter, batch, SDS, assay, receiver and allocation evidence |
| cp_mechanical | mechanical | individual atomic exchanges | meters, ledgers and tests | individual row identity; part/formulation; raw quantity; stocks; internal transfers; rejects; route; allocation; D; species and receiver; water temperature/density and waste moisture; element-specific assay; species fractions; opening/closing stocks; paired return IDs; reaction generation/consumption; capture/destruction fate; term uncertainty | Weigh/meter each exchange against batch BOM, receipts/dispatch, SDS, run time and tests; species releases use measured concentration/flow or applicable factors with period, control and uncertainty retained. | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | per 1 kg reference flow | raw meter, batch, SDS, assay, receiver and allocation evidence |
| cp_electronics | electronics | individual atomic exchanges | meters, ledgers and tests | individual row identity; part/formulation; raw quantity; stocks; internal transfers; rejects; route; allocation; D; species and receiver; water temperature/density and waste moisture; element-specific assay; species fractions; opening/closing stocks; paired return IDs; reaction generation/consumption; capture/destruction fate; term uncertainty | Weigh/meter each exchange against batch BOM, receipts/dispatch, SDS, run time and tests; species releases use measured concentration/flow or applicable factors with period, control and uncertainty retained. | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | per 1 kg reference flow | raw meter, batch, SDS, assay, receiver and allocation evidence |
| cp_rf_display | rf_display | individual atomic exchanges | meters, ledgers and tests | individual row identity; part/formulation; raw quantity; stocks; internal transfers; rejects; route; allocation; D; species and receiver; water temperature/density and waste moisture; element-specific assay; species fractions; opening/closing stocks; paired return IDs; reaction generation/consumption; capture/destruction fate; term uncertainty | Weigh/meter each exchange against batch BOM, receipts/dispatch, SDS, run time and tests; species releases use measured concentration/flow or applicable factors with period, control and uncertainty retained. | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | per 1 kg reference flow | raw meter, batch, SDS, assay, receiver and allocation evidence |
| cp_surface | surface | individual atomic exchanges | meters, ledgers and tests | individual row identity; part/formulation; raw quantity; stocks; internal transfers; rejects; route; allocation; D; species and receiver; water temperature/density and waste moisture; element-specific assay; species fractions; opening/closing stocks; paired return IDs; reaction generation/consumption; capture/destruction fate; term uncertainty | Weigh/meter each exchange against batch BOM, receipts/dispatch, SDS, run time and tests; species releases use measured concentration/flow or applicable factors with period, control and uncertainty retained. | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | per 1 kg reference flow | raw meter, batch, SDS, assay, receiver and allocation evidence |
| cp_acceptance | acceptance | individual atomic exchanges | meters, ledgers and tests | individual row identity; part/formulation; raw quantity; stocks; internal transfers; rejects; route; allocation; D; species and receiver; water temperature/density and waste moisture; element-specific assay; species fractions; opening/closing stocks; paired return IDs; reaction generation/consumption; capture/destruction fate; term uncertainty | Weigh/meter each exchange against batch BOM, receipts/dispatch, SDS, run time and tests; species releases use measured concentration/flow or applicable factors with period, control and uncertainty retained. | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | per 1 kg reference flow | raw meter, batch, SDS, assay, receiver and allocation evidence |
| cp_utilities | utilities | individual atomic exchanges | meters, ledgers and tests | individual row identity; part/formulation; raw quantity; stocks; internal transfers; rejects; route; allocation; D; species and receiver; water temperature/density and waste moisture; element-specific assay; species fractions; opening/closing stocks; paired return IDs; reaction generation/consumption; capture/destruction fate; term uncertainty | Weigh/meter each exchange against batch BOM, receipts/dispatch, SDS, run time and tests; species releases use measured concentration/flow or applicable factors with period, control and uncertainty retained. | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | per 1 kg reference flow | raw meter, batch, SDS, assay, receiver and allocation evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Divide each attributable period exchange by D from cp_mass; final_product is 1 kg. Convert count inputs to mass using measured net lot mass and accepted count of the same configuration and lot, never invented unit mass. | period exchange; D; cp_mass | exchange per 1 kg reference flow |  |
| species_fate | ipa_air; xylene_air; fossil_co2; carbon_monoxide; nitrogen_dioxide | Use matched species concentration and exhaust volume with applicable background correction or an applicable equipment factor; reconcile solvent purchases/stocks, retention, waste, recovery, reaction and species release. Fuel carbon alone cannot calculate CO or NOx. | species data; exhaust flow; formulation and fuel records | individual species amount | `epa-metal-coating` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | Verify physical/chemical identity, state, unit, provider geography/stage and Chinese name row by row; reference classification cannot substitute for actual identity. | direct flow record and supplier specification |
| coverage | all processes | Each actual step and atomic exchange has a quantity, unknown, or evidenced not_applicable state; citations support routes without empirical defaults. | site audit; make/buy matrix; source applicability |
| measurement | all rows | Match D to inputs, tests, waste, period and configuration; retain calibration, stock adjustments, elemental assays and uncertainty. | cp_mass and individual process protocols |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | final_product | Review drawing, host fit, delivered function and remaining assembly first; complete-apparatus function or a separately more specific category cannot pass this scope based on module name. | `un-cpc3-notes`; `cbp-h325872`; `cbp-n059857` |
| validate_denominator | all inventory rows | Every row uses the same positive D and accepted configuration; packaging/rejects are outside D; check raw units, count conversion and allocation individually. |  |
| validate_completeness | all processes | Reconcile make/buy, stages and physical flows; disclose missing UUID, recipe or species evidence and prevent that package claiming completeness, without excluding a part family merely for absent UUID. Count upstream burdens, embedded components and internal transfers once; unknown is neither zero nor not_applicable. |  |
| validate_water_closure | utilities; all water-bearing processes | For the same period on water mass basis, external supplied water and actual withdrawals plus opening stocks plus reaction-generated water equal water carried in product, water in external wastewater, moisture in each waste, evaporation/other water release, reaction-consumed water and closing stocks. Flow meters retain temperature/density conversions; sample waste moisture separately and determine evaporation by measurement or a transparent water balance with uncertainty. Cancel recirculation, wash returns and interprocess water transfers in matched pairs; they are neither new withdrawals nor unsupported losses. |  |
| validate_contained_metal | mechanical; electronics; rf_display; surface | For each actual metal element, use each external material's measured gross mass multiplied by its own matching elemental assay. External elemental input plus opening elemental stocks equal that element in accepted product, external swarf, rejected boards, solder residues, sludge, spent liquid, releases and closing stocks; include elemental inputs and outputs of metallization/reaction materials. Record oxidation oxygen uptake and moisture separately; alloy, paste or oxide gross mass is never elemental mass. Cancel internal metal returns/rework transfers in matched pairs without cancelling repeated processing burdens. |  |
| validate_solvent_closure | surface; electronics; rf_display | For each solvent species use measured formulation mass and that species fraction: external input, opening stock and reaction generation equal retention in product/film, content in external waste liquid/solids, externally recovered solvent, species release after controls, reaction destruction and closing stock. Cancel internal recovery/return pairs; externally recovered solvent is not also an air release. Retain capture/control fate and actual reaction evidence without assuming complete evaporation or fixed loss. |  |
| validate_balance_uncertainty | all material and water balances | Retain actual balance, meter, sampling/assay, stock and allocation uncertainty for each term; calculate and explain each closure residual. Investigate residuals outside combined measured uncertainty for omissions, period mismatch or double counting. Unknown assay, reaction fate or evaporation evidence remains unresolved rather than forcing closure with invented yield, zero or a universal tolerance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified dedicated-part dataset production and downstream process/lifecyclemodel projections |
| excluded_use | Unjustified cross-family comparisons; whole-apparatus lifetime or system environmental claims |
| required_metadata | part number and drawing revision; actual host family/model and dedicated fit; delivered functional state and remaining assembly; material grades/formulations; make/buy and supplier completed operations; electrical/RF/optical/mechanical interface and acceptance tests; configuration and net mass; site, period, supplier geography, test and packaging boundary |
| required_quality_disclosure | Boundary, make/buy, upstream stages, allocation, measurement/identity gaps, not_applicable evidence and source limits |
| update_trigger | Drawing, host, delivered state, material, supplier, manufacturing or test change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| keysight-radar-tests | handbook | Keysight Portable RADAR Testing Saves Time on the Assembly Line, publisher asset page, snapshot 2026-10-02; https://www.keysight.com/us/en/assets/7018-06239/case-studies/5992-3124.pdf | Configuration-specific radar tests and early test/rework; OEM installation case only, no universal factory thresholds |
| kester-solder-paste | handbook | Kester NP505-HR Technical Data Sheet, publisher public copy, pp1–3; https://www.kester.com/downloads?Command=Core_Download&EntryId=1623 | Concrete conditional SAC305 no-clean paste; actual formulation/flux and manufacturing profile must be collected; no generic recipe or amount |
| un-cpc3-notes | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, pp255–259 and 267; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Host/category identity; blank leaf note and separately named components; classification evidence, not manufacturing intensity |
| cbp-n059857 | official_guidance | CBP N059857, 1 June 2009; https://rulings.cbp.gov/api/getdoc/ny/2009/N059857.pdf | Historical TV main-board part and distinct LCD subassembly counterexample; no current tariff/default CPC mapping |
| cbp-h325872 | official_guidance | CBP H325872, 27 March 2023; https://rulings.cbp.gov/api/getdoc/hq/2023/H325872.pdf | Delivered-state counterexample: decoder-equipped LCD module can be a monitor; case-specific, no automatic scope |
| cbp-n353432 | official_guidance | CBP N353432, 6 October 2025, pp1–2; https://rulings.cbp.gov/api/getdoc/ny/2025/N353432.pdf | Purchased versus in-house PCBA, SMT/reflow/SPI/AOI and downstream assembly; no universal BOM or energy range |
| rogers-materials | handbook | Rogers Engineered Material Solutions capabilities brochure, p2, public snapshot 2026-10-02; https://rogerscorp.com/-/media/project/rogerscorp/documents/advanced-electronics-solutions/english/brochures/engineered-material-solutions---capabilities-brochure.pdf | Conditional PTFE/thermoset/copper-clad RF materials, radome shaping and metallization alternatives; manufacturer qualitative evidence, not required grade |
| jrc-metal-bemp | official_guidance | JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR30025EN (2020), pp190 and 226; DOI 10.2760/894966; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | Conditional machining fluids and segregated metal residues; no apparatus-part intensity adopted |
| epa-metal-coating | official_guidance | EPA Miscellaneous Metal Parts and Products Surface Coating Operations Technical Support Document (EPA-453/R-02-006, February 2002), pp7-4 and 8-14; https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | Actual formulation-specific cleaning/coating and xylene/IPA alternatives; no generic VOC factor or solvent quantity |
