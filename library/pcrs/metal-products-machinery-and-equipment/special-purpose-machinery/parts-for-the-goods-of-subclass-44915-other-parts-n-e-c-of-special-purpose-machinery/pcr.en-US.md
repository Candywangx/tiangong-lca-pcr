---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44915-other-parts-n-e-c-of-special-purpose-machinery
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Parts for rubber and plastics machinery; other parts n.e.c. of special-purpose machinery

## 1. Scope and Applicability

This methodology covers manufacture of NEW accepted completed dedicated parts/subassemblies for the full rubber/plastics machinery44915 family and other n.e.c special-purpose machinery under44949. Rubber/plastics hosts include injection/extrusion/blow moulding, forming, tyre/retread, calendering and other eligible working architectures. Other eligible interfaces include glass-forming plunger/neckring/feed mechanisms, glass-envelope electric-lamp assembly indexed cams/turrets and rope OR cable-making flyer bows/guides. These examples do not close the residual category: other special-purpose host functions remain conditional on actual principal function and no more specific part PCR. Full CPC scope and actual supplied dedicated interface govern; HS8475.90/8477.90/8479.90 only supplement it. Parts explicitly classified elsewhere, independent moulds44916, cutting tools, raw glass/ceramic articles, ordinary bearings/motors/pumps/fasteners and complete hosts are not automatically reference products. A dedicated completed metal/composite mechanism may contain such components without excluding every ingredient.44930 includes isotopic machines8401.20 but44949 lists no8401.40 parts; do not automatically import all44930 parts. Verify order/drawing/BOM/finished supply and acceptance. Replacement listings prove availability only. New manufacture differs from repairing/relining returned screws/barrels or rebuilding used mechanisms; disclose starting state and remaining work, without treating repair as new production. Customer resin/glass/lamp/rope recipes, line throughput/energy savings and lifetime maintenance are excluded from part-manufacturing defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44915-other-parts-n-e-c-of-special-purpose-machinery |
| classification_refs | CPC3.0:44949 |
| covered_products | NEW completed dedicated rubber/plastics machinery parts and other eligible n.e.c special-purpose parts, including glass/lamp/rope OR cable interfaces |
| excluded_products | Whole hosts; other explicitly classified parts; independent moulds/tools/glass/ceramic articles; generic components; undeclared repair |
| representative_product | Actual configured screw/barrel/calender roll, glass mechanism, lamp-indexing cam or composite flyer-bow assembly; no shared mass |
| production_route | Actual stock/blank machining and grade-specific heat/nitriding/hardface/bimetal/composite routes or bought completed parts; local assembly/acceptance/dispatch |
| market_state | NEW accepted part at declared factory gate; returned repair/remanufacture and extra spare stock separately identified |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted NEW completed dedicated part for full rubber/plastics machinery or another eligible residual special-purpose host |
| How much | 1 kg |
| How well | Declared host principal function, dedicated part drawing/interface, new finished supply state, order/BOM, actual process-media/thermal/electrical-contact compatibility where applicable and actual acceptance criteria |
| How long or cycle | One declared completed manufacture/acceptance period; no lifetime customer production throughput |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts for the goods of subclass 44915, other parts n.e.c. of special-purpose machinery `bd8fd574-8540-4331-add0-6ab53069fc54` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual rubber/plastics or eligible residual special-purpose host principal function and mechanism; dedicated part drawing/interface and new-versus-returned state; model/serial/order/configuration; actual included hardware/options/spares/fills and actual chemical/thermal contact scope; same-period accepted quantity/calibrated net mass; stock/alloy/purity/phase/chemical formula; make/buy/completion/local operations/acceptance media/rejects/rework; suppliers/geography/transport/receiver routes; native units/assays/state/returns/stocks/allocation/uncertainty and identity gaps |

Required qualifiers must be disclosed in the foreground package. Missing qualifiers make its reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect accepted configured net mass through cp_mass; exclude packaging, extra spare stock, rejects and consumed trial media. Retain actual included first fill. |
| native_amount | all inventory rows | actual native property | native unit | Retain each native numerator: cable Length/m, hydraulic fluid/compressed air/tap water Volume/m3 and Energy/kWh or MJ. Conversion requires own same-interface density/T/P/humidity/assay or cable kg/m; electricity3.6MJ/kWh. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified received stock/blank/chemical or completed compatible dedicated part |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Full rubber/plastics machinery parts and other eligible residual special-purpose parts |
| recursive_input_rule | Bought complete parts embed upstream once; local manufacture measures each ingredient/operation; internal transfers pair/cancel |
| upstream_dataset_requirement | Actual completion/grade/form/phase/provider/geography/native quantity; powder/blank differs from finished insert/assembly |
| disclosure | Host/function/drawing/order/new-versus-returned state; accepted net part mass; makebuy/local route/test/retained fill |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| host_and_state | Actual principal function, dedicated interface and completed-item review control full44949. Supplementary HS robot/publicworks/woodpress/metal-treatment or other residual listings do not automatically override other specific CPC part classes. Rope OR cable-making eligibility depends on host function, not vendor label. Independent moulds/tools/ceramic/glass and isotopic parts require separate classification review. | cpc; census |
| stock_and_treatment | Reiloy distinguishes4000-series/Nitralloy/tool and PM stock, gas nitriding versus ion nitriding, cobalt/nickel hardfacing, and nitrided/bimetal/tool-lined barrels. Measure actual supplied form and local operations; bought PM stock embeds atomization/HIP upstream once. Catalogue temperatures/cycles/thickness and named alloy examples establish no default recipe. | reiloy-handbook; reiloy-stock |
| mechanism_and_composite | Troester roll/nip/tempering-media variants, Emhart aluminium-bronze bearing/seal/PPC/dummy-plate/neckring cap and split-gear options, and carbon-fibre/epoxy flyer bows follow actual drawings and orders. Guides may be ceramic/WC/zirconia; raw powder differs from finished insert. A seal trade name does not define a polyurethane recipe. Historic Falma cam/turret/chain/burner architecture is not current BOM or factory fuel proof. | troester-calender; emhart-plunger; emhart-neckring; wire-bows; falma-lamp |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Local blank and composite part fabrication | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| assembly | Configured dedicated-part assembly | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| finish | Actual local hardfacing nitriding cleaning and finishing | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| test | Actual factory inspection and acceptance trials | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| services | Unassigned common-period factory services | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| dispatch | Accepted new part dispatch and packaging | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| residues | Measured waste transfers and direct emissions | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |

### Process: Local blank and composite part fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Local AISI4140 alloy-steel bar (`alloy4140`)

Actual supplied aisi4140 alloy-steel bar on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local AISI4140 alloy-steel bar
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local Nitralloy135M steel stock (`nitralloy`)

Actual supplied nitralloy135m steel stock on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local Nitralloy135M steel stock
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local PM M4 tool-steel stock (`pmtool`)

Actual supplied pm m4 tool-steel stock on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local PM M4 tool-steel stock
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local Inconel718 alloy stock (`ni718`)

Actual supplied inconel718 alloy stock on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local Inconel718 alloy stock
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local HastelloyC276 alloy stock (`c276`)

Actual supplied hastelloyc276 alloy stock on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local HastelloyC276 alloy stock
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local304 stainless-steel sheet (`ss304`)

Actual supplied local304 stainless-steel sheet on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local304 stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local cast-iron casting blank (`castiron`)

Actual supplied cast-iron casting blank on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local cast-iron casting blank
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local aluminium sheet (`aluminium`)

Actual sheet thicker than0.2mm with own alloy/temper/finish/provider and local cut/form stock and returns; contact compatibility is not inferred from sheet identity.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local T2 copper rod (`copper`)

Actual T2 copper rod, own grade/assay/dimensions/provider for local conductors; weigh receipts/cuts/retained rod and returns, excluding embedded complete-motor copper.

- Selected flow: copper rod `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local DGEBA epoxy prepolymer (`epoxy`)

Only actual DGEBA reactive epoxy prepolymer at-plant supply for an evidenced local composite route. Weigh physical resin, own grade/CAS/assay/water/density/provider/formulation, cure reaction/retention/stocks/returns; independently query and measure each actual hardener/additive/solvent. Completed bought bows embed their resin upstream once; no fixed resin fraction or generic finished-composite proxy.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: wire-bows

###### Local PAN-based carbon fibre (`carbonfiber`)

Only actual PAN-based manufactured carbon fibre matching provider/form/sizing/assay/moisture and supplied reinforcement state, not PAN precursor, recycled fibre or cured CFRP. Weigh own lay-up/cut/retained/recovery/stocks/returns. The bow source establishes carbon-fibre architecture without proving PAN grade or fixed fibre/resin ratio.

- Selected flow: Polyacrylonitrile-based carbon fiber `1289c769-931c-4746-9ae6-b8294d9bc1c9`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: wire-bows

###### Local E-glass reinforcement fibre (`glassfiber`)

Actual supplied e-glass reinforcement fibre on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Fresh E-glass candidate12515acc combines fibre-reinforced-plastic and glass-fibre wording; do not establish the specified uncured supplied fibre interface from an ambiguous mixed comment. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local E-glass reinforcement fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local para-aramid reinforcement fibre (`aramid`)

Actual supplied para-aramid reinforcement fibre on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Fresh Kevlar candidate391c9205 has English polyaramid versus official Chinese polyimide identity conflict; meta-aramid/tyre-cord fabric is not para-aramid reinforcement. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local para-aramid reinforcement fibre
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local uncured polyurethane casting resin (`pu`)

Actual supplied uncured polyurethane casting resin on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Fresh TPU film has Area reference and different completed form; polyester/filler and the Adiprene brand label do not establish casting-resin formulation. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local uncured polyurethane casting resin
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local silicone mould-release preparation (`release`)

Actual supplied silicone mould-release preparation on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local silicone mould-release preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local aluminium-bronze bearing-alloy blank (`albronze`)

Actual supplied aluminium-bronze bearing-alloy blank on an evidenced compatible local route, with own grade/form/dimensions/CAS or alloy/formulation/assay/moisture/provider. Measure receipts/cuts/retained part/reactions/recovery/stocks/returns and actual local work separately. Fresh copper-alloy candidates classify41511 copper powder or41413 unwrought metal, not the specified aluminium-bronze bearing blank; completed steel bearings and T2 copper are different interfaces. Complete bought assemblies embed these ingredients upstream once; catalogue examples give no fixed recipe.

- Selected flow: Local aluminium-bronze bearing-alloy blank
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: emhart-plunger

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Configured dedicated-part assembly (`assembly`)

#### Inputs

##### Product flows

###### Bought complete dedicated part for further integration (`boughtpart`)

Actually finished compatible dedicated part received for further integration, with own host/drawing/order/completion/provider/net hardware/remaining local work. Embed upstream materials and work once; do not relabel an already finished reference or add its embedded ingredients again.

- Selected flow: Parts for the goods of subclass 44915, other parts n.e.c. of special-purpose machinery `bd8fd574-8540-4331-add0-6ab53069fc54`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; emhart-parts

###### Bought complete extruder screw (`screwpart`)

Actual supplied complete extruder screw with its own completed drawing/order/host/interface/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream once; local ingredients and factory trials are independent. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy.

- Selected flow: Bought complete extruder screw
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: reiloy-handbook

###### Bought complete injection-moulding barrel (`barrelpart`)

Actual supplied complete injection-moulding barrel with its own completed drawing/order/host/interface/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream once; local ingredients and factory trials are independent. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy.

- Selected flow: Bought complete injection-moulding barrel
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: reiloy-handbook

###### Bought complete rubber-calender roll (`calenderpart`)

Actual supplied complete rubber-calender roll with its own completed drawing/order/host/interface/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream once; local ingredients and factory trials are independent. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy.

- Selected flow: Bought complete rubber-calender roll
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: troester-calender

###### Bought glass-forming plunger mechanism (`glassmechanism`)

Actual supplied glass-forming plunger mechanism with its own completed drawing/order/host/interface/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream once; local ingredients and factory trials are independent. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy.

- Selected flow: Bought glass-forming plunger mechanism
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: emhart-plunger; emhart-neckring

###### Bought lamp-assembly indexing cam (`lampcam`)

Actual supplied lamp-assembly indexing cam with its own completed drawing/order/host/interface/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream once; local ingredients and factory trials are independent. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy.

- Selected flow: Bought lamp-assembly indexing cam
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: falma-lamp

###### Bought rope-stranding flyer bow (`ropebow`)

Actual supplied rope-stranding flyer bow with its own completed drawing/order/host/interface/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream once; local ingredients and factory trials are independent. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy.

- Selected flow: Bought rope-stranding flyer bow
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: wire-bows; census

###### Bought tungsten-carbide wear-guide insert (`wcinsert`)

Actual supplied tungsten-carbide wear-guide insert with its own completed drawing/order/host/interface/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream once; local ingredients and factory trials are independent. Fresh carbide cutting-tool insert is not a dedicated supplied wear-guide insert; tungsten steel does not establish WC/binder/guide completion.

- Selected flow: Bought tungsten-carbide wear-guide insert
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: wire-bows

###### Bought completed roller bearing (`steelbearing`)

Actual completed roller-bearing subtype/size/material/provider, measured receipts/installed/returned stock; not aluminium-bronze bearing-alloy stock. Bearings already embedded in a complete bought mechanism stay upstream once.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: emhart-neckring

###### Bought steel assembly fastener (`screw`)

Actual completed steel assembly screw with own size/grade/finish/provider and installed/returned stock, not a default screw count or stainless special supplied grade.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

###### Bought completed linear hydraulic cylinder (`actuator`)

Actual completed linear hydraulic cylinder under its own stroke/bore/seal/provider interface; weigh supplied module and distinguish local charging and factory stroke-test utilities.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

###### Bought completed steel isolation valve (`valve`)

Actual bought completed steel isolation valve and supplier/alloy/pressure/supplied finish; this generic identity does not certify a special solvent-contact or special metering valve.

- Selected flow: Steel valve `3cb88a81-618f-4fa5-814e-46399b121622`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

###### Installed power-cable length (`cable`)

Actual <=1000V power cable compatible with its construction/provider and supply standard; retain native Length/m receipts, installed lengths/cuts/returns. Physical reconciliation alone uses own same-construction kg/m.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

###### Bought completed AC servo motor (`servomotor`)

Only actual compatible completed AC servo-motor subsystem matching CN at-plant supply and46112 AC/universal interface; measure received installed hardware mass and remaining local work. DC motors, separate converters and embedded motor metals are not this exchange.

- Selected flow: Electric drive, servo motor `89a4fdf2-5cce-4df3-b372-14407f92dd28`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

###### Bought completed NBR seal (`seal`)

Actual supplied completed nbr seal with its own completed drawing/order/host/interface/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream once; local ingredients and factory trials are independent. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy.

- Selected flow: Bought completed NBR seal
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

###### Retained first-supply deionized water (`retained_di`)

Actual DI supply through compatible ion-exchange/RO interface, own conductivity/water fraction/temperature/density and measured supply-charge receipts/stocks/returns; the equipment customer water rate is not a factory default. Record only measured charge actually retained in the accepted shipped assembly, independently from consumed trials, drained/reused fluids and returns. Empty circuits/catalogue options do not prove supplied fill.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

###### Retained first-supply Local petroleum hydraulic preparation (`retained_hydfluid`)

Only actual compatible >=70% petroleum-oil hydraulic preparation for a compatible drive circuit. Measure native Volume/m3 at actual temperature and own composition/density, receipts/stocks/returns/retained charge; no special service approval is inferred. Record only measured charge actually retained in the accepted shipped assembly, independently from consumed trials, drained/reused fluids and returns. Empty circuits/catalogue options do not prove supplied fill.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

###### Retained first-supply Local petroleum lubricating oil (`retained_luboil`)

Only actual supplied petroleum-fraction industrial lubricating oil compatible with its >=70% petroleum-oil interface and provider/additives/viscosity/temperature. Weigh independent local charge/consumption/stock/returns; retained first fill separately. Dataset40.5MJ/kg is not default energy or density and customer maintenance is outside manufacture. Record only measured charge actually retained in the accepted shipped assembly, independently from consumed trials, drained/reused fluids and returns. Empty circuits/catalogue options do not prove supplied fill.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual local hardfacing nitriding cleaning and finishing (`finish`)

#### Inputs

##### Product flows

###### Local Stellite12 hardfacing alloy (`hardfaceco`)

Actual local stellite12 hardfacing alloy only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Fresh cobalt-nickel/alloy and steel candidates do not establish Stellite12 Co-Cr-W composition and supplied hardfacing form. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local Stellite12 hardfacing alloy
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local Colmonoy56 nickel-alloy powder (`hardfaceni`)

Actual local colmonoy56 nickel-alloy powder only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Nichrome wire does not establish Colmonoy56 nickel-alloy powder composition/supplied route. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local Colmonoy56 nickel-alloy powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local chromium trioxide (`chromic`)

Actual local chromium trioxide only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Fresh658d3eef CrO3 chemical name/CAS conflicts with34160 organosulphur/organo-inorganic classification. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local chromium trioxide
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local nickel-sulfate hexahydrate (`nickel`)

Actual local nickel-sulfate hexahydrate only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Fresh11e5d6c8 nickel sulfate class34290 is rare-earth/Y/Sc compounds; nickel-intermediate candidates are not hexahydrate salt. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local nickel-sulfate hexahydrate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local50% aqueous nitric-acid solution (`nitric`)

Actual local local50% aqueous nitric-acid solution only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Freshdb61379750% nitric acid has35499 prepared-chemical classification inconsistent with specified nitric acid identity;40/60% supplies differ. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local50% aqueous nitric-acid solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local30% aqueous sodium-hydroxide solution (`alkali`)

Only actual30% aqueous NaOH supplied as the source-reported industrial reagent solution, with own CAS1310-73-2/provider/assay/water/density and local preparation/reaction/stocks/returns/retention. Native kg refers to physical solution, not pure active NaOH; the source concentration convention supplies no part-cleaning recipe or other concentration conversion.

- Selected flow: Sodium hydroxide solution, 30% `7115909b-796c-4b3d-b40a-1a7c693d12d0`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local anhydrous liquid-ammonia supply for nitriding (`ammonia`)

Only actual anhydrous liquid ammonia CAS7664-41-7 received for an evidenced gas-nitriding route, with own purity/phase/container/provider/temperature/pressure/density/stock/returns. Native kg is liquid supply; independently meter actual vaporization/energy and reaction/recovery/scrubber/waste/non-air fates. It is not purchased gaseous ammonia or aqueous ammonium hydroxide, and the handbook supplies no default furnace recipe.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local protective-atmosphere nitrogen supply (`nitrogen`)

Only actual factory protective-atmosphere nitrogen supply with matched purity/provider/gas phase/container and measured cylinder/line stocks/returns. Customer lifetime gas and electronic-grade supply are distinct.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: reiloy-handbook

###### Local supplied gaseous hydrogen (`hydrogen`)

Actual local supplied gaseous hydrogen only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Fresh raw syngas17202 is a mixture, not pure supplied H2; peroxide/oil candidates are different chemicals. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local supplied gaseous hydrogen
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local supplied gaseous oxygen (`oxygen`)

Only actual compatible gaseous oxygen CAS7782-44-7 at-plant supply produced by cryogenic air separation under the selected34210 product interface. Match actual provider/purity/gas pressure/temperature/container and own physical mass, stocks/returns and local reaction/test attribution. Other oxygen-production routes, liquid supply with unmeasured vaporization and ambient air are not this exchange.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local supplied gaseous argon (`argon`)

Actual local supplied gaseous argon only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Actual candidates are other shielding mixtures/liquid states; known f83a locator has35499 classification inconsistent with argon34210; no compatible gaseous supply established. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local supplied gaseous argon
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local supplied propane fuel (`propane`)

Actual local supplied propane fuel only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Fresh9c0d706a liquefied supply comments include inconsistent ether chemistry and unsupported GB/T3813 grade assertion; no generic propane fuel proxy. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local supplied propane fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local manufactured artificial-corundum abrasive (`alumina`)

Only actual manufactured artificial-corundum abrasive supplied at-plant under37960, not natural corundum, ordinary Bayer alumina or a completed bonded wheel/coated abrasive. Weigh physical powder/grain and independently verify own supplier grade, including white-fused subtype only when actually evidenced, particle form/size, CAS/Al2O3 assay/additives/moisture, stock/returns/retention and captured waste. The generic finished-product record establishes no default purity, fused colour/route or binder recipe.

- Selected flow: Artificial corundum `a6e3c50f-7479-4004-9825-dc60fb6e696d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local prepared machining emulsion (`cutfluid`)

Only actual prepared oil-water machining emulsion matching its own provider/formulation/supplied concentration/phase and metalworking interface. Weigh physical preparation, own oil/water/additive assays, dilution/density/reaction/recovery/stocks/returns and non-air residues; generic product comments do not authorize gas/aerosol/paste substitution or a universal mixing recipe.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local isopropanol cleaning solvent (`ipa`)

Actual compatible China at-plant isopropanol for local equipment cleaning; own purity/water/density/provider and measured preparation/stock/returns/reaction/retention. It is not the optical-assembly or assumed70%-antiseptic supply.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local undenatured rectified ethanol (`ethanol`)

Only actual undenatured rectified ethanol before denaturing, alcoholic strength >=80%vol, compatible CN at-plant supply/provider/own assay/water/temperature/density for local cleaning. Weigh physical solution, independent dilution/reaction/stock/returns/non-air fates; not denatured solvent or a dry-ethanol default.

- Selected flow: Rectified ethanol `276f1cf5-0aa1-4d57-ad95-9dada6e043a0`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local acetone cleaning solvent (`acetone`)

Actual local acetone cleaning solvent only on an evidenced compatible route. Measure physical supplied quantity, own CAS/full chemistry/phase/purity/assay/formulation/moisture/T/P/density/provider, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Freshd5d65ffc acetone is35499 and wafer-production restricted; concentration-specific molar solutions do not establish generic cleaning-solvent supply. Embedded complete bought parts stay upstream once; actual remaining finishing inputs are separate.

- Selected flow: Local acetone cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Local process water (`water`)

Actual treated industrial process-water supplier/quality and own water fraction/temperature/density, receipts/returns/reacted water/stocks; distinct from DI and tap water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual factory inspection and acceptance trials (`test`)

#### Inputs

##### Product flows

###### Local petroleum hydraulic preparation for trials (`hydfluid`)

Only actual compatible >=70% petroleum-oil hydraulic preparation for a compatible drive circuit. Measure native Volume/m3 at actual temperature and own composition/density, receipts/stocks/returns/retained charge; no special service approval is inferred.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources:

###### Local petroleum lubricating oil for trials (`luboil`)

Only actual supplied petroleum-fraction industrial lubricating oil compatible with its >=70% petroleum-oil interface and provider/additives/viscosity/temperature. Weigh independent local charge/consumption/stock/returns; retained first fill separately. Dataset40.5MJ/kg is not default energy or density and customer maintenance is outside manufacture.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources:

###### Factory-test deionized water (`di`)

Actual DI supply through compatible ion-exchange/RO interface, own conductivity/water fraction/temperature/density and measured factory-test receipts/stocks/returns; the equipment customer water rate is not a factory default.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources:

###### Actual factory-trial non-alloy steel wire (`stitchwire`)

Only independently measured non-alloy steel wire actually consumed in attributable factory acceptance of an eligible rope/cable-making part. Match provider/carbon/alloy assay/coating/diameter/form; weigh receipts/consumption/stocks/returns/test products and offcuts. Customer rope/cable production and catalogue line speed provide no default trial quantity.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Unassigned common-period factory services (`services`)

#### Inputs

##### Product flows

###### Unassigned factory service tap water (`tap`)

Only actual compatible Hong Kong treated-water production/supply interface; retain native Volume/m3 and own temperature/density/water fraction when reconciling mass. Unassigned service residual excludes already measured cleaning/trial water.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Unassigned supplied compressed air (`air`)

Actual compressed-air supplier/pressure/purity and native Volume/m3 at stated T/P/wet-dry state; actual meter/density corrections only. Account shared residual once and exclude customer forming-air lifetime demand.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Unassigned low-voltage electricity (`electricity`)

Only actual compatible CN user-side grid-average AC <1kV supply; retain metered Energy/kWh and3.6MJ/kWh conversion. Allocated local work and trial meters take priority; shared service includes only unassigned common-period residual.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Unassigned purchased industrial heat (`heat`)

Only actual compatible CN natural-gas industrial-heat supply and metered native Energy/MJ. Declare gross/net meter datum; subtract independently measured same-datum return once for gross heat, never subtract twice for net supply.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Accepted new part dispatch and packaging (`dispatch`)

#### Inputs

##### Product flows

###### Dispatch corrugated board (`board`)

Actual C/E/F corrugated board with fibre>=80%, supplier/recycled content/moisture and weighed dispatch material/returns. Packing stays outside equipment net mass.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources:

###### Dispatch LDPE foil (`film`)

Actual non-cellular unreinforced non-adhesive LDPE foil supplier/thickness/moisture and dispatch/returned mass. This is not PVA, PET or structural resin.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources:

###### Dispatch wood pallet (`pallet`)

Actual wood pallet supplied for dispatch, own construction/moisture/receipts/reuse/return ledger. It is packaging outside Dnet and not an assumed EURO or one-pallet-per-part mass.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted new dedicated special-purpose machinery part (`finished`)

Only NEW accepted completed dedicated parts for full rubber/plastics44915 machinery and other residual special-purpose hosts eligible under44949, including glass/lamp assembly and rope/cable-making interfaces where qualified. Actual host function/drawing/order/completion and separate-class review precede cp_mass; whole hosts, independent moulds/tools/generic components and returned repair are not reference proxies.

- Selected flow: Parts for the goods of subclass 44915, other parts n.e.c. of special-purpose machinery `bd8fd574-8540-4331-add0-6ab53069fc54`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_mass
- Sources: cpc; census; reiloy-stock

##### Waste flows

##### Elementary flows

### Process: Measured waste transfers and direct emissions (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Transferred unprocessed steel scrap (`wsteel`)

Measured outgoing unprocessed steel machining/forming scrap, own alloy/metal content/moisture/stocks/recovery/returns and actual receiver route; no avoided burden assumed.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred copper scrap (`wcu`)

Measured outgoing copper scrap with own contained-Cu/contaminant/moisture/stocks and receiver. Selected supply interface requires an actual hydrometallurgical recycling route; direct-remelt shipments require another identity.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred nickel-alloy machining scrap (`wnickel`)

Measure actual transferred nickel-alloy machining scrap independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Fresh nickel-smelter slag/intrasmelter residue is not machining nickel-alloy scrap. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred nickel-alloy machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred cleaned polyethylene machining waste (`wplastic`)

Only actual cleaned polyethylene machining waste handed over at the compatible mechanical-recycling interface; own polymer/additive/moisture/contamination/stocks/returns and receiver route. Untreated process-soiled mixture is distinct.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred cured-epoxy composite waste (`wepoxy`)

Measure actual transferred cured-epoxy composite waste independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred cured-epoxy composite waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred carbon-fibre composite waste (`wcarbon`)

Measure actual transferred carbon-fibre composite waste independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred carbon-fibre composite waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred ceramic manufacturing scrap (`wceramic`)

Measure actual transferred ceramic manufacturing scrap independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Fresh radioactive extraction tailings are not ordinary ceramic manufacturing scrap. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred ceramic manufacturing scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred tungsten-carbide wear-material scrap (`wcwaste`)

Measure actual transferred tungsten-carbide wear-material scrap independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Fresh carbide slag39320 ash/residue and tungsten-extraction tailings do not establish transferred WC wear-material composition/receiver route. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred tungsten-carbide wear-material scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred spent machining lubricating oil (`wasteoil`)

Measured spent lubricating/cutting oil from local machining or equipment-maintenance tests under compatible supply scope; own oil/water/metal assay, stocks/returns and treatment receiver. Composite/plating-contaminated liquid and plating liquor require their own waste identities.

- Selected flow: Waste oil `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred spent isopropanol (`spentipa`)

Measure actual transferred spent isopropanol independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred spent isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred metal-processing wastewater (`wastewater`)

Measure actual transferred metal-processing wastewater independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Actual bounded correctly directed query/refinement does not establish the named supplied grade/form/completed interface. Preserve the measured identity gap; no generic material or host proxy. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred metal-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred metal-hydroxide sludge (`sludge`)

Measure actual transferred metal-hydroxide sludge independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Fresh725c8f6e is state20; anode-recycling sludge has a different origin than metal-hydroxide processing sludge. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred metal-hydroxide sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred captured metal-grinding dust (`dust`)

Measure actual transferred captured metal-grinding dust independently at its handover state, own composition/assay/moisture, period stocks/returns/recovery and actual receiver/transport/treatment route. Fresh generic dust/sawdust identities do not establish captured metal-grinding composition and handover state. Wastewater/liquid stocks/captured material are not direct air.

- Selected flow: Transferred captured metal-grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred cleaned LDPE packing waste (`wfilm`)

Only actual cleaned LDPE packaging waste at the compatible mechanical-recycling interface; independently weigh dispatch offcuts/returns, composition/moisture/stocks and receiver. No automatic recovery percentage.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

##### Elementary flows

###### Measured fossil carbon dioxide to ordinary air (`co2`)

Only actual independently measured fossil carbon dioxide to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Fossil origin requires own carbon/fuel evidence; biogenic carbon is separately identified.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured fossil carbon monoxide to ordinary air (`co`)

Only actual independently measured fossil carbon monoxide to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Fossil origin requires own carbon/fuel evidence; biogenic carbon is separately identified.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured isopropanol to ordinary air (`ipair`)

Only actual independently measured isopropanol to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured ethanol to ordinary air (`ethanolair`)

Only actual independently measured ethanol to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured acetone to ordinary air (`acetoneair`)

Only actual independently measured acetone to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured ammonia to ordinary air (`ammoniaair`)

Only actual independently measured ammonia to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured water vapour to ordinary air (`vapor`)

Only actual independently measured water vapour to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured molecular nitrogen dioxide to ordinary air (`no2`)

Only actual independently measured molecular nitrogen dioxide to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Molecular NO2 differs from NOx reported as NO2-equivalent.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured PM10 to ordinary air (`pm10`)

Only actual independently measured pm10 to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. PM10 includes finer fractions; avoid overlapping constituent-element and particle reporting.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured contained copper to ordinary air (`copperair`)

Only actual independently measured contained copper to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Prefer a separately matched individual species when the actual LCIA method differentiates generic metal-and-ion forms.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured contained chromiumVI to ordinary air (`chromiumair`)

Only actual independently measured contained chromiumvi to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own Cr(VI) assay is required, not total chromium/alloy/oxide mass.

- Selected flow: chromium (vi) `08a91e70-3ddc-11dd-950b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured contained nickel to ordinary air (`nickelair`)

Only actual independently measured contained nickel to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Prefer a separately matched individual species when the actual LCIA method differentiates generic metal-and-ion forms.

- Selected flow: nickel `08a91e70-3ddc-11dd-96c8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Measured contained cobalt to ordinary air (`cobaltair`)

Only actual independently measured contained cobalt to ordinary air with CAS/species/origin and ordinary unspecified-air compartment matched to post-control concentration times simultaneous flow/time/state corrections plus separate fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Prefer a separately matched individual species when the actual LCIA method differentiates generic metal-and-ion forms.

- Selected flow: cobalt `08a91e70-3ddc-11dd-9283-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_configuration | Separate actual configurations/site/process meters first. Allocate common-period residual by measured causal service demand or work, not catalogue customer throughput. Include attributable failed trials/rework/rejects in accepted-part burdens. Cancel paired internal transfers; disclose returned/reusable trial media, saleable co-products and receiver allocation/treatment without invented avoided burdens. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted part | foreground_record | model/configuration/serial; net mass; Naccepted; Dnet; included hardware/fills; excluded packing/spares | Calibrated traceable weighings reconcile accepted complete parts with actual order/BOM within one configuration/period. Sum accepted net mass excluding packing/spare stock/rejects/consumed trials. Include only actually retained shipped fill. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_materials | fabrication | local stock and chemical ingredients | foreground_record | Qattr; own gross mass/assay/moisture/density; alloy/formulation; stocks/returns/reactions/retained parts; actual local route | Weigh actual supplied stock and each local finishing/joining/cleaning ingredient; reconcile own-stream element/moisture/chemical contents with retained hardware, reaction products, baths/recovery/waste/stocks/returns. Actual contact alloy or polymer compatibility is specific to the contacted part, never every frame. Embedded complete-module materials stay upstream once. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_modules | assembly | completed hardware and retained fill | foreground_record | Qattr; BOM/completion/options; hardware mass/length; separate fill formula/assay/T/P/density; receipts/installed/returns/stocks | Hardware branch weighs actual completed received/installed/returned assemblies and cable lengths, documenting remaining local work. Chemical branch independently measures local fill/lubricant/gas in its own native units and own composition/moisture/T/P/density, stocks/reactions/retention/returns. Complete bought modules embed their chemicals upstream once; whole hardware mass never substitutes chemical amount. First retained supply fill is distinct from trial consumption and customer maintenance. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_tests | test | observed factory trial media | foreground_record | Qattr; actual acceptance order/trial/repeat/reject; water/wire/gas receipts; own composition/state; returned/reused/sold/discarded stocks | Meter actual attributed factory tests and repeated/failed trials, using each actually consumed wire/chemical/water/gas own measured amount and composition. Record returned/reused/recovered and saleable trial products independently, never as disappearance. Exclude normal customer production, catalogue recipe/capacity, R&D demonstrations or customer commissioning unless an explicit declared manufacturing attribution is evidenced. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_utilities | services | each unassigned utility | foreground_record | Qattr; common period/site/import/self-generation/export/storage; assigned meters; gross/net heat datum; independent return; T/P/humidity/density | Reconcile each common-period imported and actually generated utility minus exports/storage with assigned local/test meters; allocate only residual once. Cable/energy/volume units remain native. Gross heat deducts separately measured same-datum return once; net heat never twice. Process water/DI/service water and internally circulated cooling flows are independent interfaces; paired returns cancel. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_dispatch | dispatch | each packaging item | foreground_record | Qattr; packing grade/moisture/dimensions; dispatch receipts; returns/reuse/stocks; packing outside Dnet | Weigh actual board/foil/pallet independently and reconcile dispatch/returns/reuse/stocks within the accepted configuration/period. No generic packaging ratio or catalogue shipping gross mass establishes net part mass. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_wastes | residues | each outgoing waste stream | foreground_record | Qattr; transfer weight; own composition/assay/moisture/density; stocks/returns/recovery; receiver/transport/treatment route | Measure each outgoing waste independently at its actual handover state; retain own-stream wet/dry/composition and chemical/metal contents, returned stock and receiver route. Wastewater/sludge/spent solvent/captured dust/composite/hardmetal/oil remain separate. Treatment is distinct from direct environmental discharge; captured material is not air. Missing compatible identity remains a gap rather than wrong-origin waste proxy. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_emissions | residues | each direct emitted species | foreground_record | Qattr; CAS/species/origin/compartment; post-control concentration; simultaneous flow/time; T/P/wet-dry/O2 correction; fugitive sampling; capture/reaction/byproducts | Use independently observed post-control concentration times matched actual flow and time with unit/state correction plus separately sampled fugitives. Reconcile input/retained/recovered/destroyed/sludge/wastewater/stocks by own assays; capture is not destruction and non-air/unexplained residuals never infer air. Molecular NO2 differs from NOx-equivalent; contained Cr(VI)/Ni/Cu/Co differs from total metal/oxide/salt/alloy and avoids PM overlap. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Within one actual configuration/period divide attributable native-unit total by the sum of calibrated accepted complete-part net masses. Retain per-part quantities and actual denominator evidence. | Qattr; Dnet; Naccepted; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Same configuration/period Qattr includes attributable manufacture/assembly/tests/reject/rework burden. Naccepted counts accepted parts; Dnet sums their calibrated net masses. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Catalogue empty/gross mass or customer throughput is not a denominator. | calibrated configuration-specific accepted ledger |
| quality_physical | all inventory rows | Every element/chemical term uses its own gross mass, assay/moisture/wet-dry basis, reactions/stocks/returns/retention. Alloy/sludge/solution mass differs from contained element/active chemical. Each water stream requires own water fraction/density at actual temperature, independent reaction/retained fill/evaporation/discharge/stocks; internal returns pair and cancel. | own-stream assays and state/stock/reaction records |
| quality_solvent | ipa; ethanol; acetone; spentipa; ipair; ethanolair; acetoneair; wastewater | Reconcile each solvent own assay, stocks/reactions/retained/recovered/captured/destroyed/wastewater/spent-media terms against independently measured air. Capture differs from destruction; non-air and unexplained residual cannot become emitted IPA. | independent measured fate and air records |
| quality_scope | reference product | Maintain full rubber/plastics and other eligible residual special-purpose host parts with actual host-function, dedicated-interface and NEW manufactured state review. Chemical/thermal/electrical-contact compatibility is component-specific, not a whole-frame claim. Catalogue option, empty/gross mass, customer recipe/yield/utility demand, marketing savings and maintenance consumables are not factory manufacture defaults. | actual order/BOM/acceptance and primary original technical body |
| quality_identity | all inventory rows | Match actual published100/type/native reference internal ID/property/unitgroup and official bilingual names with full chemistry/CAS/grade/phase/provider/completion/compartment. Add every actual unlisted material, ingredient/fuel/fill/module/test media, transport, waste and emitted species as independently queried atomic measured exchanges. Unresolved identities remain gaps; missing differs from zero and not-applicable requires physical evidence. | own full direct and supplier/interface review |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require the accepted dedicated new part, actual rubber/plastics or eligible residual host/function/drawing/interface, one-kg net reference and disclosed completion/new-versus-returned state. Reject whole-host, general machinery, ordinary material/tool or consumable proxies. | cpc; census; reiloy-stock |
| validate_makebuy | Require actual supplied order/BOM, part-specific chemical/thermal/electrical-contact compatibility, exclusive raw-ingredient versus bought-complete branches and actual trial attribution. Reject catalogue alloy/binder recipes/weights/energy/customer yield/lifetime replacement defaults; include attributable rejects/rework/failed trials. | cpc; census; reiloy-handbook; reiloy-stock; troester-calender; emhart-parts; emhart-plunger; emhart-neckring; wire-bows; falma-lamp |
| validate_balances | Require each stream own assay/water/density/stocks/returns/reactions and measured non-air solvent fates; each emission actual species/origin/compartment and post-control concentration times matched flow/time/state plus independent fugitives. Utility imports/actual generation/exports/storage reconcile assigned meters and residual once, with independent same-datum gross heat return deducted once. |  |
| validate_species | Require molecular NO2 not NOx-equivalent, Cr(VI) not total Cr, contained Ni/Cu/Co not gross salts/oxides and non-overlapping PM. Prefer matched individual species where the actual LCIA method differentiates them. Fossil versus biogenic carbon and measured air versus captured/liquid fates remain separate. Report performed/skipped checks, findings and actual completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual accepted configured new rubber/plastics and other eligible residual special-purpose dedicated-part manufacture |
| excluded_use | Whole-host/general-component/material/customer-consumable proxies, catalogue mass/process recipe or universal factory assumption |
| required_metadata | All reference qualifiers; Qattr/Naccepted/Dnet; native units/own assays/state; order/BOM/makebuy/actual tests/providers/receiver/allocation/gaps |
| required_quality_disclosure | Measured/estimated/missing, calibration/sampling/uncertainty, residuals, identity/scope gaps and performed/skipped check completeness |
| update_trigger | Principal function/order/configuration/contact alloy/chemical phase/provider/makebuy/site/period/acceptance/treatment change |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | Central Product Classification Version 3.0, Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full44915 rubber/plastics parts and other n.e.c special-purpose parts44949; explicit8475.90/8477.90/8479.90 versus independent moulds44916 and other explicit part classes.44930 isotopic machine listing does not add unlisted8401.40 parts. |
| census | official_guidance | Schedule B Book - Chapter 84 | https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | Supplementary chapter84 notes, glass/lamp8475.90, full rubber/plastics8477.90 and rope OR cable8479.40/residual8479.90. Broad HS hosts and ceramic/glass/independent tool articles require actual CPC completed-item review, not mechanical inheritance. |
| reiloy-handbook | handbook | Reiloy USA Screw & Barrel Handbook | https://reiloyusa.com/assets/template/Medien/Dateien/reiloy-usa-11th-screw-barrel-hdbk-0819.pdf | Actual screw stock grades/nitriding and ion-nitriding, PM stock and encapsulation, cobalt/nickel hardface variants and nitrided/bimetal/tool-lined barrel routes. No fixed alloy recipe, cycle, powder quantity, hardness or layer thickness; upstream stock differs from local production. |
| reiloy-stock | handbook | Barrel & Screw Stocking Program | https://reiloyusa.com/assets/template/Medien/Dateien/reiloy-usa-stocking-program-2023.pdf | Actual approved-print new manufacture versus used screw/barrel inspection/repair and identified shipment.01/2019 footer edition differs from2023 filename; no stock quantity or part mass default. |
| troester-calender | handbook | CALENDER SYSTEMS | https://www.troester.de/product/calender/ | Calender roll/bearing/crossing/bending and hydraulic/electromechanical nip architecture, actual material/surface and tempering-media variants. Whole-host technical list does not establish delivered part count, alloy or fill. |
| emhart-parts | handbook | Original Parts | https://www.emhartglass.com/Products/LifecycleSolutions/OriginalParts/OriginalParts | Original dedicated spare/wear-part supply portfolio; replacement availability does not prove first included delivery, recipe or testing quantities. |
| emhart-plunger | handbook | 4000 Series Plunger Mechanism | https://emhartglass.com/sites/default/files/publications/2020-11/TNB292%20-4000%20Series%20Plunger%20Mechanism.pdf | 4000-series AIS/IS plunger configured packer/interface, aluminium-bronze floating bearings, lubrication lines and PPC versus dummy-plate interfaces. No default geometry, test amount or bronze composition. |
| emhart-neckring | handbook | Roller Bearing Neckring Mechanism | https://emhartglass.com/sites/default/files/publications/2021-05/TNB295%20-%20Roller%20Bearing%20Neckring%20Mechanism.pdf | Roller-bearing neckring sealing/bracket/cap/split-gear and exhaust architecture; independently machined caps and options follow actual order. Trade-name seal label does not establish a polymer recipe or mass. |
| wire-bows | handbook | Flyer Bows and Spare Parts | https://www.wire-machine.com/buncher-bows/products/ | Custom carbon-fibre/epoxy flyer-bow architecture plus ceramic/WC/zirconia guide and roller/heat-treated wear-strip variants. Actual rope/cable principal function is required; no universal fibre/binder ratio, material density or savings. |
| falma-lamp | handbook | FALMA Lamp Machinery | https://www.lamptech.co.uk/Documents/Machines/Falma%20-%20Lamp%20Machinery%20-%201995%20EU.pdf | Historical manufacturer brochure in an independent archive: incandescent-lamp indexed turret/cam/roller/chain and flare-cutting burner architectures only. No current availability, fixed BOM/test-fuel quantity or customer lamp-production recipe. |
