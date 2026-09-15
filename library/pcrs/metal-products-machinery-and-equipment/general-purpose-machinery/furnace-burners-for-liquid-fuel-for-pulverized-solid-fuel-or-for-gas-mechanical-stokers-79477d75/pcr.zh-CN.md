---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.furnace-burners-for-liquid-fuel-for-pulverized-solid-fuel-or-for-gas-mechanical-stokers-79477d75
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 炉用液体燃料、粉状固体燃料或气体燃烧器；机械加煤机、机械炉排、机械卸灰器及类似装置

## 1. 范围与适用性

本 PCR 适用于液体燃料、粉状固体燃料或气体炉用燃烧器，以及机械加煤机、机械炉排、机械卸灰器和具有相同主要燃烧、给料、炉排或除灰功能的装置从生产到制造厂门的生产。它适用于明确的产品型号和配置，包括构成交付装置的已安装控制器、驱动器、风机、壳体和其他组件。

本 PCR 不包括完整烘炉和熔炉、非电烘焙炉、单独供应的备件、不具有所涵盖功能的通用燃料输送设备、客户现场的安装和调试、使用阶段的燃料燃烧、维护及寿命终止。由他方拥有投入材料的制造服务属于服务边界，不是本 PCR 的参考产品。只有当跨越边界的每种外购物料、组件、能源载体和废物处理均链接适当的上游或下游数据集时，前景数据包才构成从摇篮到制造厂门的数据包。

本类别产品的燃料、额定热输入、给料或除灰能力、材料和控制配置差异显著。因此，除非这些功能和技术限定信息等效，否则不得使用单位质量结果进行比较性声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.furnace-burners-for-liquid-fuel-for-pulverized-solid-fuel-or-for-gas-mechanical-stokers-79477d75 |
| classification_refs | CPC 3.0: 43410 |
| covered_products | 完整的液体燃料、粉状固体燃料或气体炉用燃烧器；完整的机械加煤机、机械炉排和机械卸灰器；主要功能为炉内燃烧、固体燃料给料、炉排运动或机械除灰的类似完整装置 |
| excluded_products | 完整烘炉或熔炉；单独供应的零件和备件；不具有所涵盖炉用功能的通用输送机或燃料输送设备；安装、调试、维修和委托制造服务 |
| representative_product | 在制造厂门处、采用已声明销售配置并已完成和通过工厂验收的所涵盖装置 |
| production_route | 产品特定物料清单；金属成形与机械加工；连接与装配；按路线有条件纳入的水基表面处理；按路线有条件纳入的工厂热态试验；最终检验 |
| market_state | 制造厂门处的全新完整装置；除非外部运输包装与已声明销售配置不可分，否则不含该包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造厂门处提供一台完整的所涵盖装置，用于履行已声明的炉内燃烧、燃料给料、炉排运动或除灰功能 |
| How much | 已声明销售配置下 1 kg 完成品装置 |
| How well | 符合已声明的型号规格，并已通过制造商针对该型号规定的最终检验或工厂验收试验 |
| How long or cycle | 仅涵盖制造厂门生产；使用寿命、运行负荷、安装和使用属于需声明的限定信息，不计入参考数量 |
| reference_flow_link | `covered_appliance_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 液体燃料、粉状固体燃料或气体炉燃烧器，机械焚烧炉、机械炉排、机械卸灰器及类似装置 `25b61b3f-31a8-4618-9025-db11814c43e2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型；型号和配置；预定燃料或处理物料；额定热输入或额定给料、炉排或卸灰能力；控制和驱动配置；主要材料牌号；完成品质量口径；制造场址和地域；报告期；工厂试验路线和试验燃料；外部包装纳入情况；上游数据集选择 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和 `covered_appliance_output` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终检验后确定已声明销售配置下装置的净完成品质量。包括已安装组件和内置流体；除非在声明配置中明确纳入，否则排除散装备件、调试燃料和外部运输包装。全部清单按该质量的 1 kg 归一化。 |
| `electricity_conversion` | `fabrication_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始计量电力记录并采用 1 kWh = 3.6 MJ 将 kWh 换算为 MJ；不得把电力流属性名称视为燃料燃烧的证据。 |
| `gas_volume_basis` | `natural_gas_test` 和 `industrial_oxygen` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 对每项报告的气体体积声明温度、绝对压力、湿度基准和仪表修正。仅依据有记录的条件在实际体积与参考体积之间换算。 |
| `material_mass_basis` | 物料清单投入和固体废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用扣除退库未用物料后的领用或消耗质量。保留合金牌号、产品形态、再生含量声明和供应商地域作为限定信息；不得将不同材料合并为一个清单行。 |
| `waste_state_basis` | `metal_treatment_wastewater` 和 `metal_treatment_sludge` | Mass | kg | 废水按移交点质量报告，污泥按外运时质量报告；披露密度换算、干固体或含水率、危险废物分类和处理去向。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址门口接收的外购原材料、已加工组件、化学品、燃料、电力和水；每项均声明供应商、产品状态、地域和上游数据集 |
| starting_condition_role | 从上游数据集移交到产品特定前景制造 |
| product_classification_scope | CPC 3.0 代码 43410 语义边界内的完整产品；分类引用仅为定位信息，不将 PCR 扩展至烘炉、熔炉、零件或服务 |
| recursive_input_rule | 作为组件采购的所涵盖装置只作为一个产品投入记录，并链接供应商数据集和声明功能；不得在同一前景数据包中依照本 PCR 递归重建 |
| upstream_dataset_requirement | 将每项外购物料、组件、化学品、燃料、电力供应和水供应链接到地域和技术具有代表性的上游数据集；记录替代和数据质量局限 |
| disclosure | 声明纳入的制造场址和过程、外包工序、产品特定物料清单、分配、试验路线和燃料、排放估算方法、废物去向、截断、外部包装处理和所有排除阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入产品特定的物料接收和领用、金属成形与机械加工、连接与装配、场内精整、最终检验及所有适用的工厂试验，直至完整装置在制造场址门口移交。 | `ifc-metal-products-ehs-2007`; `eu-pef-2021-2279` |
| `boundary_direct_exchanges` | 前景清单 | 记录跨越已声明前景边界的所有环境相关物质和能源投入、产品、废物及直接基本流排放。实际存在但下列卡片未表示的产品特定物料清单项、试验燃料、精整化学品或排放，应分别新增为原子交换。 | `eu-pef-2021-2279` |
| `boundary_outsourced_operations` | 外包成形、涂覆、热处理或试验 | 将外包工序作为上游产品或服务数据集记录，并在范围内记录运输；不得同时把该工序的内部交换记录为场内前景交换。 | `eu-pef-2021-2279` |
| `boundary_exclusions` | 资本品和下游阶段 | 本制造厂门数据包排除制造资本品、研发、销售、员工通勤、安装、客户现场调试、使用、维护和寿命终止；如研究明确扩展边界，则应单独报告新增内容。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication_assembly` | 产品特定加工、装配和最终检验 | required | 始终纳入；包括已声明产品型号的全部场内加工和装配 | 前景制造 | 1 kg 完成品所涵盖装置 |
| `aqueous_surface_treatment` | 水基清洗和表面处理 | conditional | 仅当已声明产品在场内进行碱洗、水洗、转化处理或其他水基金属处理时纳入 | 前景精整 | 1 kg 完成品所涵盖装置 |
| `gas_hot_test` | 天然气工厂热态试验 | conditional | 仅当已声明产品在工厂验收或功能试验中于场内燃烧气态天然气时纳入 | 前景试验 | 1 kg 完成品所涵盖装置 |
| `diesel_hot_test` | 柴油工厂热态试验 | conditional | 仅当已声明产品在工厂验收或功能试验中于场内燃烧柴油时纳入 | 前景试验 | 1 kg 完成品所涵盖装置 |

### 过程：产品特定加工、装配和最终检验（`fabrication_assembly`）

#### 输入

##### 产品流

###### 合金钢板材（`alloy_steel_sheet`）

记录实际领用于所涵盖产品的进一步加工合金钢板材。本卡不表示不锈钢、铸铁、棒材、管材或外购已加工组件。

- 选定流：银板材 `13082a6a-e820-45ec-89f5-3c2c3650495b`
- 流属性/单位：Mass / kg
- 数量规则：产品特定领用质量减去有记录的未用退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 不锈钢板材（`stainless_steel_sheet`）

仅当产品特定物料清单含有不锈钢板材时记录。经审计的候选流在分类或双语名称方面冲突，因此 Tiangong UUID 尚未解决。

- 选定流：不锈钢板材
- 流属性/单位：Mass / kg
- 数量规则：产品特定领用质量减去有记录的未用退库质量；仅当已声明型号不含不锈钢板材时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 铸铁（`cast_iron`）

仅当已声明产品含有铸铁组件时，记录外购或场内生产组件中所含的铸铁材料。不得以生铁、铁矿石、铸铁管或铸铁研磨介质代替。

- 选定流：铸铁
- 流属性/单位：Mass / kg
- 数量规则：进入装配的产品特定铸铁组件质量；避免重复计算已由外购组件数据集表示的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 外购电力（`fabrication_electricity`）

采用有记录的分表计量或分配后，记录用于加工、机械加工、焊接、装配、通风和最终检验的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于已声明产品和报告期的计量电力，并按照 `electricity_conversion` 换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-2021-2279`

###### 工业氧气（`industrial_oxygen`）

记录氧燃料切割或另一项有记录的场内加工工序所消耗的外购工业氧气。排除前景边界外使用的氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：适用场内加工在已声明参考条件下消耗的供应商交付量或流量计体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_and_fuel_records`
- 来源：`ifc-metal-products-ehs-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完成品所涵盖装置（`covered_appliance_output`）

记录已声明销售配置下完成并验收合格的装置净完成品质量。

- 选定流：液体燃料、粉状固体燃料或气体炉燃烧器，机械焚烧炉、机械炉排、机械卸灰器及类似装置 `25b61b3f-31a8-4618-9025-db11814c43e2`
- 流属性/单位：Mass / kg
- 数量规则：根据计量完成品质量归一化后恰为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-2025`

##### 废物流

###### 分类收集的工业后钢废料（`steel_scrap`）

记录作为分类工业后废钢离开加工工序的钢材边角料、切屑和报废钢件。其他金属或受污染废物应分别作为原子流记录。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：归属于已声明产品的外运称量废钢；无法直接称量时采用产品特定金属质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`ifc-metal-products-ehs-2007`

##### 基本流

###### 排放到空气、粒径未特指的颗粒物（`fabrication_particulate`）

记录切割、磨削、喷砂或其他场内加工经治理后直接排放到未特指空气的颗粒物。不得纳入上游电力或物料数据集中的颗粒物排放。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：报告期内具有代表性的实测排放或有记录的场址计算，并分配至已声明产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`ifc-metal-products-ehs-2007`

### 过程：水基清洗和表面处理（`aqueous_surface_treatment`）

#### 输入

##### 产品流

###### 工艺用水（`process_water`）

记录用于适用水基清洗、水洗、槽液补充或直接工艺用途并跨越场址边界的水。本行不包括非接触冷却水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供应至所纳入场内水基表面处理工序的计量或批次记录用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受该处理的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_chemical_records`
- 来源：`ifc-metal-products-ehs-2007`

###### 氢氧化钠（`sodium_hydroxide`）

记录场内碱洗或处理槽消耗的氢氧化钠。声明溶液浓度，并将纯氢氧化钠当量质量与载体水分别报告。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据投加溶液质量和经核实的浓度计算纯氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受该处理的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_chemical_records`
- 来源：`ifc-metal-products-ehs-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 金属表面处理废水（`metal_treatment_wastewater`）

记录在场内清洗、水洗或表面处理之后、外运处理之前或已声明场内处理移交点离开工序的水基废物流。非接触冷却水和生活污水应分开记录。

- 选定流：金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：采用有记录密度把排放流量或储罐转移记录换算为质量，并声明去向和组成
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受该处理的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_sludge_records`
- 来源：`ifc-metal-products-ehs-2007`

###### 含金属表面处理污泥（`metal_treatment_sludge`）

记录场内金属精整废水处理后离开的脱水污泥。本行排除市政污水污泥、含油污泥以及污泥干燥机尾气。

- 选定流：金属表面处理产生的含金属污泥
- 流属性/单位：Mass / kg
- 数量规则：按外运时称量质量记录，并声明含水率或干固体含量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受该处理的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_and_sludge_records`
- 来源：`ifc-metal-products-ehs-2007`

##### 基本流

### 过程：天然气工厂热态试验（`gas_hot_test`）

#### 输入

##### 产品流

###### 热态试验消耗的天然气（`natural_gas_test`）

仅记录为所纳入产品的工厂热态试验而在场内燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按照 `gas_volume_basis` 修正并归属于已声明产品的试验仪表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受该试验的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_and_fuel_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 天然气热态试验产生的化石源二氧化碳（`gas_test_co2`）

记录所纳入场内天然气试验直接排放的化石源二氧化碳。排除上游天然气供应和电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或天然气消耗量乘以有记录且适合场址的化石源二氧化碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受该试验的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021-2279`

###### 天然气热态试验产生的氮氧化物（`gas_test_nox`）

记录所纳入试验直接排放到未特指空气的氮氧化物总量，并采用场址已声明的计量基准。其精确 Tiangong UUID 尚未解决。

- 选定流：排放到未特指空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：归属于已声明产品的代表性实测排放或有记录的场址计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受该试验的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`ifc-metal-products-ehs-2007`

### 过程：柴油工厂热态试验（`diesel_hot_test`）

#### 输入

##### 产品流

###### 热态试验消耗的柴油（`diesel_test_fuel`）

仅记录为所纳入产品的工厂热态试验而在场内燃烧的柴油。本行不得用于其他液体燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：试验油箱质量平衡，或采用有记录密度换算并归属于已声明产品的计量体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受该试验的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_gas_and_fuel_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 柴油热态试验产生的化石源二氧化碳（`diesel_test_co2`）

记录所纳入场内柴油试验直接排放的化石源二氧化碳。排除上游柴油供应和电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或柴油消耗量乘以有记录且适合场址的化石源二氧化碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受该试验的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021-2279`

###### 柴油热态试验产生的氮氧化物（`diesel_test_nox`）

记录所纳入试验直接排放到未特指空气的氮氧化物总量，并采用场址已声明的计量基准。其精确 Tiangong UUID 尚未解决。

- 选定流：排放到未特指空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：归属于已声明产品的代表性实测排放或有记录的场址计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受该试验的完成品所涵盖装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`ifc-metal-products-ehs-2007`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多产品设施和共用工序 | 首先通过产品特定物料清单、分表计量、试验日志、废物记录和可独立计量过程的细分来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | 剩余共用前景投入和产出 | 无法细分时采用有记录的因果物理关系：加工能源采用机器时间，物料处理负荷采用实测物料吞吐量，试验台负荷采用试验时间或实测燃料，废水处理采用处理流量或污染物负荷。 | `eu-pef-2021-2279` |
| `allocation_other` | 不存在合理物理关系的共用负荷 | 仅在说明为何不能细分且无因果物理基准后，才采用包括经济分配在内的其他分配基准；披露基准、期间、产品和敏感性。 | `eu-pef-2021-2279` |
| `allocation_scrap` | 废钢和处理残余物 | 在前景移交点把废钢和残余物作为废物产出报告。除非下游建模框架明确要求且相应分配方法已披露并无重复计算，否则不得在本制造厂门清单内计入避免负荷收益。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_mass` | `fabrication_assembly` | 完成品参考产品 | 最终检验和发运记录 | 型号；序列号或批次；合格数量；完成品净质量；所含组件；包装口径；时间戳 | 经校准秤或受控工程质量记录，并与发运记录核对 | kg | 每台合格产品或均质批次 | 与清单相同报告期 | 范围内全部制造场址 | 汇总合格净质量；把清单归一化到 1 kg | 校准记录；验收记录；发运核对 |
| `cp_bom_materials` | `fabrication_assembly` | 物料投入 | 产品特定物料清单和领料记录 | 型号；物料身份；牌号；形态；供应商；领用质量；退库质量；外购组件数据集；批次 | 核对受控 BOM、采购收货及领退料记录 | kg | 每个生产订单 | 有代表性的年度期间或已声明生产期 | 全部纳入的加工和装配场址 | 按原子物料和产品订单计算领用减退库质量 | 批准的 BOM 版本；供应商规格；库存核对 |
| `cp_energy_records` | `fabrication_assembly` | 电力投入 | 仪表和生产记录 | 仪表编号；起止读数；单位；损耗边界；产品产出；机器时间；分配驱动量；电网供应商 | 优先读取经校准分表；否则核对账单总量并采用有记录的分配 | kWh 和 MJ | 每月或每个生产期 | 至少连续 12 个月，除非生产期数据有充分理由 | 全部纳入场址和共用公用系统 | 扣除排除负荷；按第 7 节分配；kWh 换算 MJ | 仪表校准；账单；分配工作表；生产核对 |
| `cp_gas_and_fuel_records` | `fabrication_assembly`; `gas_hot_test`; `diesel_hot_test` | 工业氧气和试验燃料 | 供应商交付、仪表、储罐和试验日志 | 产品型号；试验编号；气体或燃料身份；起止读数；交付量；退回量；温度；压力；湿度；密度；试验时间 | 把修正后仪表或罐瓶质量平衡与单项试验日志核对 | m3 或 kg | 每次交付和试验 | 报告期内全部试验 | 纳入的切割设备和试验台 | 按原子气体或燃料计算净消耗量；只分配有记录的共用损耗 | 仪表校准；供应票据；储罐核对；签字试验日志 |
| `cp_water_and_chemical_records` | `aqueous_surface_treatment` | 工艺用水和氢氧化钠 | 仪表、批记录和化学品领用 | 槽号；用水读数；溶液质量；浓度；补充量；废弃量；处理产品质量；时间戳 | 把水表和批次投加记录与处理产量核对 | kg | 每次配槽和每月仪表结算 | 报告期内全部适用处理批次 | 纳入的场内水基处理线 | 将溶液拆分为纯化学品和载体水；按处理质量或实测负荷分配 | 仪表校准；分析证书；批记录；库存核对 |
| `cp_waste_records` | `fabrication_assembly` | 工业后钢废料 | 分类称量单和废物联单 | 材料；毛重和皮重；污染；去向；日期；产品订单或分配驱动量 | 称量分类容器，或进行经核对的产品特定质量平衡 | kg | 每次外运；每月分配 | 与生产相同报告期 | 全部纳入加工场址 | 按废物身份汇总净质量；按第 7 节分配 | 经校准秤；联单；回收方收据；质量平衡检查 |
| `cp_wastewater_and_sludge_records` | `aqueous_surface_treatment` | 废水和污泥 | 排放仪表、储罐转移、实验室和联单 | 流量或体积；密度；pH；相关金属；处理点；污泥毛重/皮重；含水率或干固体；去向 | 测量排放或转移量并称量污泥；保留有代表性的组成和含水率检测 | kg | 连续或每批/每次外运 | 报告期内全部适用处理运行 | 纳入的处理线和场内废水处理 | 采用有记录密度将体积换算为质量；按废物状态分别汇总 | 仪表校准；实验室报告；联单；储罐或质量核对 |
| `cp_direct_emissions` | `fabrication_assembly`; `gas_hot_test`; `diesel_hot_test` | 直接空气排放 | 有组织/无组织监测和计算文件 | 来源；污染物；浓度或因子；流量；运行时间；燃料用量；治理；试验编号；环境介质；方法 | 优先采用代表性测量；否则根据采集活动数据和经批准因子进行有记录的计算 | kg | 监测频率应足以取得代表性数据；每个报告期计算 | 与活动数据相同期间和运行条件 | 每个纳入的场内排放源 | 计算治理后的排放质量；按因果关系分配并按产品质量归一化 | 认可或有记录的方法；校准；原始结果；因子来源；不确定性审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 每个可变量清单行 | 归一化数量 = 报告期可归属数量 / 合格完成品净质量 | 原子流数量；`cp_product_mass` 的合格产品质量 | 每 1 kg 完成品所涵盖装置的流数量 | `eu-pef-2021-2279` |
| `calc_bom_net_use` | 物料投入 | 净物料用量 = 领用质量 - 未用退库质量；外购组件数据集单独建模并防止重复计算其内含材料 | BOM；领用；退库；组件数据集边界 | 每参考流的原子物料投入 | `eu-pef-2021-2279` |
| `calc_electricity` | `fabrication_electricity` | 可归属 MJ = 可归属计量 kWh × 3.6 | 仪表读数；排除负荷；分配驱动量 | 每参考流的 MJ 电力 | `eu-pef-2021-2279` |
| `calc_gas_volume` | `natural_gas_test`; `industrial_oxygen` | 采用有记录的温度、绝对压力、压缩因子和湿度修正，把实际体积换算到已声明参考条件；不得采用无记录默认值 | 实际体积；温度；压力；湿度；修正方法 | 每参考流、已声明条件下的 m3 | |
| `calc_solution_mass` | `sodium_hydroxide` | 纯 NaOH 质量 = 溶液质量 × 经核实的质量分数；跨越边界的载体水在 `process_water` 中记录 | 溶液质量；证书或批次浓度 | 每参考流的 kg 氢氧化钠 | `ifc-metal-products-ehs-2007` |
| `calc_direct_emissions` | `gas_test_co2`; `diesel_test_co2`; `gas_test_nox`; `diesel_test_nox`; `fabrication_particulate` | 排放质量 = 代表性实测质量或采集活动数据 × 有记录的因子；仅按实测治理进行调整，并按第 7 节分配 | 监测排放或活动记录；因子来源；治理；分配驱动量 | 每参考流的 kg 直接基本流排放 | `eu-pef-2021-2279`; `ifc-metal-products-ehs-2007` |
| `calc_mass_balance` | 物料投入、产品和固体废物 | 将投入物料质量与完成品质量、退库物料、已记录废物及有记录在制品变动核对；调查每种材料的差额 | BOM 净用量；产品质量；退库；废物；在制品 | 材料特定核对和完整性发现 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 为每个所代表产品保留型号、产品子类型、预定燃料或处理物料、额定能力、配置及批准规格。 | 规格；铭牌；最终验收记录 |
| `dq_product_specificity` | 物料清单和制造活动 | 使用实际产品特定 BOM 和公司特定制造活动；跨型号平均必须采用质量加权代表性组合，并披露每个纳入型号。 | 受控 BOM；生产组合；分配工作表 |
| `dq_temporal` | 全部前景记录 | 使用一个共同的代表性报告期，通常为连续 12 个月；说明生产期数据、停机、异常试验和外推。 | 带日期记录；运行日历；代表性审查 |
| `dq_geography_technology` | 上游数据集 | 在重要情况下匹配供应商地域、材料牌号、生产技术、电力供应、燃料状态和废物处理路线；记录代理。 | 供应商数据；数据集元数据；代理清单 |
| `dq_completeness` | 清单 | 核对产品质量、物料领用、能源账单/仪表、试验日志和废物联单；把遗漏的每种产品特定物料、试验燃料、精整化学品、废物和直接排放新增为单独原子流。 | 质量和能源核对；遗漏登记；签字审查 |
| `dq_emissions` | 直接排放 | 采用足以代表所纳入运行的监测频率和条件，保留因子来源和治理状态，不得把上游排放导入前景直接排放行。 | 原始监测；方法；校准；计算文件；边界检查 |
| `dq_uncertainty` | 计算值和分配值 | 记录测量不确定性、因子不确定性、分配敏感性以及未解决 UUID 和缺失经验范围的影响。 | 不确定性清单；敏感性计算；审查签字 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 产品子类型、型号/配置、预定燃料或处理物料、额定能力、产品质量口径、制造场址或工厂试验路线缺失时，校验失败。 | `un-cpc-3-0-2025` |
| `validate_reference_mass` | 归一化 | 要求归一化后的 `covered_appliance_output` 恰为 1 kg，并把分母与合格完成品质量记录核对。 | `eu-pef-2021-2279` |
| `validate_process_routes` | 条件过程 | 要求纳入每项适用的场内表面处理和热态试验路线；不适用路线应明确声明，不得用虚构零值表示。 | `ifc-metal-products-ehs-2007` |
| `validate_atomic_inventory` | 清单行 | 拒绝合并物料、燃料、公用系统、废物、废水和残余物或排放组的行。实际存在但未列出的每种 BOM 物料、燃料、化学品、废物和直接排放必须作为一个原子交换新增。 | `eu-pef-2021-2279` |
| `validate_balance` | 物料和能源记录 | 要求进行产品特定 BOM 核对、电力核对、试验燃料核对，并为物料质量平衡差额提供有记录的解释。 | `eu-pef-2021-2279` |
| `validate_emission_boundary` | 直接基本流排放 | 拒绝在前景直接排放行中纳入上游电力、物料、燃料供应或废物处理排放；要求每项直接排放具有来源、方法、环境介质、治理和分配证据。 | `ifc-metal-products-ehs-2007`; `eu-pef-2021-2279` |
| `validate_unresolved` | UUID 和范围审查 | 把未解决 UUID 行和未解决经验范围需求报告为不完整审查项；不得采用代理 UUID 或虚构范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定制造厂门前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 已声明所涵盖装置的从摇篮到工厂门研究；在安装、使用、维护或寿命终止阶段单独建模时，作为扩展模型的上游投入 |
| excluded_use | 功能、额定能力、负荷、使用寿命、燃料兼容性或配置不同产品之间的比较性声明；表示完整烘炉/熔炉、备件、服务、客户现场调试、使用阶段燃烧或寿命终止 |
| required_metadata | PCR id 和版本；产品子类型；型号/配置；预定燃料或处理物料；额定热功率或处理能力；产品净质量口径；生产路线；场址和地域；报告期；产品组合；试验路线和试验燃料；分配；上游数据集；废物去向；外部包装处理；未解决身份；截断 |
| required_quality_disclosure | 初级数据比例；BOM 和活动代表性；仪表和秤质量；质量/能源核对；分配和敏感性；排放方法和因子来源；上游代理使用；不确定性；未解决 UUID；缺失经验范围 |
| update_trigger | 产品设计、主要材料牌号、供应商或上游数据集、生产技术、场址、电力供应、表面处理路线、试验路线或燃料、废物处理、分配或报告期发生实质变化；或已列 UUID/范围证据缺口得到解决 |

## 11. 数据源

| 来源 ID | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | CPC 43410 正式产品身份和分类边界 |
| `ifc-metal-products-ehs-2007` | official_guidance | 国际金融公司，《金属、塑料和橡胶制品制造环境、健康与安全指南》，2007 年 4 月 30 日，https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf（检索于 2026-09-05） | 成形/精整过程分解；加工粉尘；水基表面处理废水、污泥和监测要求 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，《委员会建议（EU）2021/2279：环境足迹方法》，勘误文本，https://eur-lex.europa.eu/eli/reco/2021/2279/corrigendum/2022-05-23/oj/eng（检索于 2026-09-05） | 功能单位和系统边界；产品特定 BOM 和公司特定制造数据；分配层级；数据质量、报告和校验 |
