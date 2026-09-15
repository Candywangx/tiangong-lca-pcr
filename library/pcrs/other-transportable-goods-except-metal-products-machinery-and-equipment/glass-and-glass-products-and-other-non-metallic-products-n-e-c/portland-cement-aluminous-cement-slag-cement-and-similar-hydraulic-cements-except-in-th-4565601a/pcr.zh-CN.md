---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.portland-cement-aluminous-cement-slag-cement-and-similar-hydraulic-cements-except-in-th-4565601a
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 波特兰水泥、高铝水泥、矿渣水泥及类似水硬性水泥（熟料形态除外）

## 1. 范围与适用性

本 PCR 适用于水泥制造厂或粉磨站交付的成品水硬性水泥前景数据包。覆盖作为水泥而非熟料销售的波特兰水泥、波特兰复合及混合水泥、矿渣水泥、高铝或铝酸钙水泥及类似水硬性胶凝材料，面向建筑、基础设施、砂浆、混凝土及其他需要产品特定水泥投入的下游供应链研究。

前景数据包应代表明确的水泥产品、场址、路线、报告期和交付形态。应区分水泥类别及标准名称、强度等级及声明试验龄期、熟料类型和来源、熟料系数、主要组分、硫酸钙或石膏、补充胶凝材料、少量添加物和助磨剂、粉磨或掺配路线、热能、电力、化石及替代燃料，以及散装或包装交付。仅当成员产品及权重已披露，且该混合物本身就是声明的参考产品时，才允许采用按产量加权的产品混合。

本 PCR 不以水泥熟料作为参考产品，也不覆盖预拌或现场搅拌混凝土、砂浆、耐火水泥组合物、水泥制品或建筑系统。不得用波特兰水泥数据集代表高铝水泥，不得用单一强度等级代表全部等级，也不得把单一场址或地区数据集外推到整个类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.portland-cement-aluminous-cement-slag-cement-and-similar-hydraulic-cements-except-in-th-4565601a |
| classification_refs | CPC 3.0: 37440 |
| covered_products | 波特兰、波特兰复合、混合、矿渣、高铝或铝酸钙及类似成品水硬性水泥，不含熟料形态 |
| excluded_products | 水泥熟料；预拌混凝土；砂浆；耐火组合物；水泥或混凝土制品；石灰；非水硬性胶凝材料 |
| representative_product | 符合其声明产品标准和强度等级的明确成品水硬性水泥配方 |
| production_route | 场内生产熟料的一体化水泥制造，或使用外购熟料或其他水硬性中间体的独立粉磨和掺配 |
| market_state | 工厂门口交付的干燥成品水泥，散装或包装供应并声明交付形态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具有声明类别、配方、强度等级、路线、场址和交付形态的成品水硬性水泥 |
| How much | 1,000 kg 净干水泥，不含包装皮重 |
| How well | 符合声明的水泥标准或技术规范，并有批次或报告期质量记录支持声明的强度等级及其他必需性能 |
| How long or cycle | 一个生产批次或一个有代表性的报告期；水泥工厂门口不赋予使用寿命 |
| reference_flow_link | `storage_quality_and_dispatch` 的 `finished_hydraulic_cement` 输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净干成品水泥 |
| 参考产品流 | 各种水泥制品 `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水泥类别和标准名称；强度等级及声明试验龄期；熟料或水硬性中间体类型和来源；熟料系数；主要组分质量分数；硫酸钙或石膏含量；补充胶凝材料；少量添加物和助磨剂；一体化或独立粉磨路线；工厂和地理范围；报告期；散装或包装交付；包装纳入情况；干质量约定 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 成品水泥参考输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单量归一化到准确的 1,000 kg 净干成品水泥；排除包装皮重，并使水分或干燥失重处理与声明的产品规范一致。 |
| `component_mass_fractions` | 熟料、石膏或硫酸钙、矿渣、粉煤灰、火山灰、石灰石、高铝组分及其他主要添加物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和干质量分数 | 根据进入声明水泥产品的已核对干质量计算各组分分数；不得推定类别平均配方。 |
| `clinker_factor` | 波特兰及混合水泥路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 水泥 | 报告所代表产品或按产量加权混合物每单位净成品水泥消耗的净熟料量；对不使用波特兰熟料的高铝水泥，改为报告路线适用的水硬性中间体比率。 |
| `thermal_energy_basis` | 窑、干燥机及其他热工燃料使用 | 按低位热值计的能量 | MJ | 使用来源和期间特定的低位热值换算各项燃料数量，并分别保留窑燃料、非窑燃料、化石燃料、替代燃料、混合燃料和生物质燃料类别。 |
| `electricity_basis` | 粉磨、输送、掺配、储存、包装、污染控制及条件性熟料生产 | Energy | kWh | 优先使用分过程计量的外购及场内发电用电；单独报告外送电，不得把地区默认值作为前景读数。 |
| `transport_service_basis` | 组分、燃料和包装的入厂运输 | Transport service | tonne-kilometre | 按各运输方式和路线，以运输干质量乘实际路线距离计算，并明确供应商及运输地理范围。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原生矿物、工业副产物或次生组分、熟料或其他水硬性中间体、燃料、电力、水、包装及运输服务在其有记录的上游来源或供应商边界 |
| starting_condition_role | 向产品特定水泥前景系统供给的从摇篮到工厂门口上游投入 |
| product_classification_scope | 与 CPC 3.0 代码 37440 所示语义产品边界相符的成品水硬性水泥；分类仅为语境，不是 canonical PCR identity |
| recursive_input_rule | 外购水泥作为投入时，应使用具有自身限定信息的独立上游水泥数据集；内部退回水泥、循环粉尘和返工料保留为内部循环，不得再次计作总产品投入或输出。 |
| upstream_dataset_requirement | 熟料或其他水硬性中间体、补充组分、燃料、电力、运输及包装应采用与来源、技术、地理和期间相符的数据集。外购熟料应携带其上游采矿、生料、窑、燃料、电力和直接排放负荷，不得视为零负荷。 |
| disclosure | 声明设施和路线、产品配方及产量权重、组分来源和状态、熟料或水硬性中间体系数、窑与非窑能耗分离、燃料类别和生物质分数、电力供应、直接排放、粉尘和废物处理、交付形态、地理范围、期间、分配、排除项和数据缺口。 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 产品系统 | 纳入组分和能源的上游生产及运输、条件性场内熟料或水硬性中间体生产、组分制备、粉磨或掺配、储存、质量控制、污染控制、适用时的包装，以及工厂门口发运。 | `gcca-cement-co2-energy-protocol-v3-1`; `eu-jrc-clm-bref-2013`; `epd-international-cpcr-001` |
| `boundary_product_exclusions` | 参考产品 | 排除以熟料为参考输出、混凝土、砂浆、耐火组合物、水泥制品及下游施工或使用；这些产品应在各自产品系统中建模。 | `unsd-cpc-3-0-explanatory-notes-2024`; `gcca-cement-co2-energy-protocol-v3-1` |
| `boundary_product_differentiation` | 产品和市场混合 | 除非声明的参考产品本身就是已披露的按产量加权混合物，否则应分别处理波特兰、混合、矿渣、高铝及其他水硬性水泥配方；不得把一个等级、工厂或地区外推到整个类别。 | `epd-international-cpcr-001`; `iso-14044-2006` |
| `boundary_energy_and_fuels` | 能源清单 | 分开电力和热能、窑燃料和非窑燃料；识别传统化石、替代、混合和生物质燃料及其低位热值、化石和生物质分数与使用位置。 | `gcca-cement-co2-energy-protocol-v3-1` |
| `boundary_emissions_and_internal_loops` | 直接排放、粉尘和返工料 | 将直接排放归属到发生过程；披露监测或计算方法；把返回粉尘和内部返工料保留为内部循环；仅在边界处报告一次外送处理的粉尘、不合格水泥及其他废物。 | `gcca-cement-co2-energy-protocol-v3-1`; `eu-jrc-clm-bref-2013` |
| `boundary_delivery_form` | 储存和发运 | 包装水泥应纳入包装生产和包装损耗；散装水泥应排除包装，并在两种情况下均声明装载及工厂门口交付条件。 | `epd-international-cpcr-001` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_clinker_production` | 一体化熟料或水硬性中间体生产 | conditional | 当熟料或其他水硬性中间体在声明水泥前景系统内生产时纳入；否则使用具有完整限定信息的上游供应商数据集。 | 生产路线特定的水硬性中间体，并记录窑用原料、燃料、电力、直接排放、粉尘和废物。 | 所代表水泥输出消耗的已核对中间体质量 |
| `constituent_receipt_and_preparation` | 组分接收与制备 | required | 纳入最终粉磨或掺配前发生的接收、入厂运输、储存、破碎、干燥和制备步骤。 | 建立产品特定的干组分投入及供应商身份。 | 每参考流进入水泥成品工序的干组分质量 |
| `cement_grinding_and_blending` | 水泥粉磨、掺配和均化 | required | 纳入声明产品采用的共同粉磨、分别粉磨、掺配、输送、过程除尘和内部循环。 | 把熟料或其他水硬性中间体及添加物转化为成品水泥。 | 每参考流送入储存的净散装成品水泥 |
| `storage_quality_and_dispatch` | 储存、质量控制、包装和发运 | required | 纳入料仓、质量检验、装载以及条件性的装袋或其他包装直至工厂门口。 | 将合格的散装或包装水泥作为参考产品放行。 | 1,000 kg 净干成品水泥 |

### 过程：一体化熟料或水硬性中间体生产（`integrated_clinker_production`）

#### 输入

##### 产品流

###### 路线特定矿物进料（`hydraulic_intermediate_mineral_feed`）

记录波特兰熟料的石灰石和校正材料干质量，或高铝水泥路线特定的含铝及含钙原料干质量。不得把波特兰生料配方强加给非波特兰路线。

- 选定流：路线特定矿物进料
- 流属性/单位：Mass / kg
- 数量规则：进入中间体生产的实测干矿物进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_mass_balance`
- 来源：`eu-jrc-clm-bref-2013`

###### 窑用热工燃料（`kiln_thermal_fuels`）

记录所有常规窑和分解炉燃料，以及用于干燥或制备熟料原料或窑燃料的燃料。

- 选定流：声明的常规窑燃料
- 流属性/单位：质量或体积及按低位热值计的能量 / kg、Nm3 和 MJ
- 数量规则：实测燃料数量乘以来源和期间特定的低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_thermal_energy`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 替代及生物质窑燃料（`kiln_alternative_fuels`）

分别记录替代、废物衍生、混合及生物质燃料，包括来源、法规状态、低位热值、水分、化石碳和生物质碳分数。

- 选定流：声明的替代、混合或生物质燃料
- 流属性/单位：质量或体积及按低位热值计的能量 / kg、Nm3 和 MJ
- 数量规则：按燃料类别记录实测燃料数量和已验证燃料属性
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_thermal_energy`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 中间体生产用电（`intermediate_production_electricity`）

记录运营控制下的采石、生料和燃料制备、窑系统、冷却、输送及污染控制的计量电力。

- 选定流：Electricity, declared plant supply
- 流属性/单位：Energy / kWh
- 数量规则：外购加场内发电的计量消耗量，外送电单独报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熟料或其他水硬性中间体（`hydraulic_intermediate_output`）

记录供给水泥成品工序的路线特定中间体干质量。在一体化系统中这是内部输出，不是 PCR 参考产品。

- 选定流：路线特定水泥熟料或水硬性中间体
- 流属性/单位：Mass / kg
- 数量规则：由声明水泥产品消耗的已核对中间体生产、库存和转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_mass_balance`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

##### 废物流

###### 外送窑灰和旁路粉尘（`discarded_kiln_dust`）

记录离开窑系统进入处理、处置或外部利用的粉尘；返回窑或生料磨的粉尘不得计作外部废物。

- 选定流：声明去向的水泥窑灰或旁路粉尘
- 流属性/单位：Mass / kg
- 数量规则：按去向实测离开过程边界的干粉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_rework_and_waste`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`; `eu-jrc-clm-bref-2013`

##### 基本流

###### 直接化石源二氧化碳（`direct_fossil_carbon_dioxide`）

分别记录煅烧和燃料燃烧的直接化石源二氧化碳，并与声明的生物源二氧化碳区分。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用有记录的工厂数据和方法输入实测或计算直接化石 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 直接氮氧化物（`direct_nitrogen_oxides`）

记录声明中间体生产系统经监测或许可核算的氮氧化物。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据监测浓度和烟气流量进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-clm-bref-2013`

###### 直接二氧化硫（`direct_sulfur_dioxide`）

记录声明中间体生产系统经监测或许可核算的二氧化硫。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据监测浓度和烟气流量进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-clm-bref-2013`

###### 直接颗粒物（`direct_particulate_matter`）

按监测粒径范围记录颗粒物排放。仅当监测结果明确为大于 PM10 粒径时使用以下选定流；其他粒径应使用匹配的流身份。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：明确匹配粒径范围的实测排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-clm-bref-2013`

### 过程：组分接收与制备（`constituent_receipt_and_preparation`）

#### 输入

##### 产品流

###### 熟料或水硬性中间体投入（`clinker_or_intermediate_input`）

分别记录各类外购或内部转移的熟料或水硬性中间体，包括供应商、路线、地理和干质量。

- 选定流：声明的熟料或水硬性中间体
- 流属性/单位：Mass / kg
- 数量规则：实测接收干质量，加已核对库存变动和内部转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_mass_balance`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 主要矿物组分（`main_mineral_constituents`）

在已核对干质量基准上，分别记录矿渣、粉煤灰、天然或煅烧火山灰、石灰石、高铝组分及所有其他声明主要组分。

- 选定流：声明的主要矿物组分
- 流属性/单位：Mass / kg
- 数量规则：按组分和供应商实测消耗干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cement_composition_and_output`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 硫酸钙和石膏（`calcium_sulfate_and_gypsum`）

分别记录天然、合成或再生硫酸钙材料的来源和干质量。

- 选定流：声明的硫酸钙或石膏
- 流属性/单位：Mass / kg
- 数量规则：实测消耗干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cement_composition_and_output`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 少量添加物和助磨剂（`minor_additions_and_grinding_aids`）

利用供应商身份和配方记录，记录保留在产品中或为产品生产所消耗的每项添加物或助剂。

- 选定流：声明的少量添加物或助磨剂
- 流属性/单位：Mass / kg
- 数量规则：实测或按批次配方计算的消耗质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cement_composition_and_output`
- 来源：`epd-international-cpcr-001`

###### 入厂运输服务（`inbound_transport_services`）

记录熟料、组分、燃料和包装的实际运输方式、路线、距离、载荷基准和运输质量。

- 选定流：声明的货物运输服务
- 流属性/单位：Transport service / tonne-kilometre
- 数量规则：按运输方式和供应商路线，以运输干质量吨数乘路线公里数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_inbound_transport`
- 来源：`epd-international-cpcr-001`

###### 组分干燥热能（`constituent_drying_thermal_energy`）

当声明系统内进行矿物组分粉磨前干燥或热制备时，纳入相关热工燃料。

- 选定流：声明的非窑干燥燃料
- 流属性/单位：质量或体积及按低位热值计的能量 / kg、Nm3 和 MJ
- 数量规则：实测燃料数量乘以来源和期间特定的低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_thermal_energy`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制备水泥组分（`prepared_cement_constituents`）

按组分记录转入粉磨或掺配的已核对干质量。

- 选定流：已制备的路线特定水泥组分
- 流属性/单位：Mass / kg
- 数量规则：制备及库存核对后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cement_composition_and_output`
- 来源：`eu-jrc-clm-bref-2013`

##### 废物流

##### 基本流

### 过程：水泥粉磨、掺配和均化（`cement_grinding_and_blending`）

#### 输入

##### 产品流

###### 已制备配方组分（`prepared_formulation_constituents`）

转入产品特定的熟料或水硬性中间体、石膏或硫酸钙、主要组分及添加物，不得合并其身份。

- 选定流：已制备的路线特定水泥组分
- 流属性/单位：Mass / kg
- 数量规则：加入粉磨或掺配系统的已核对干组分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cement_composition_and_output`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 粉磨和掺配用电（`grinding_and_blending_electricity`）

记录磨机、选粉机、掺配、输送、内部循环和除尘的计量电力。

- 选定流：Electricity, declared plant supply
- 流属性/单位：Energy / kWh
- 数量规则：水泥成品设备的计量耗电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 工艺水和冷却水（`cement_finishing_water`）

记录跨越前景边界的水，并在适用时区分消耗、循环和排放。

- 选定流：声明来源和用途的水
- 流属性/单位：Volume or Mass / m3 or kg
- 数量规则：计量取水减去有记录的内部循环，排水另行报告
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`eu-jrc-clm-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入储存的散装成品水泥（`bulk_finished_cement_to_storage`）

按类别、标准名称、强度等级和生产批次记录转入声明产品料仓的合格干水泥。

- 选定流：各种水泥制品 `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除外送不合格料后转入储存的实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cement_composition_and_output`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

##### 废物流

###### 外送不合格水泥和收集粉尘（`off_spec_cement_and_dust`）

记录送往外部回收、处理或处置的材料。磨机回料和内部粉尘循环保留为内部循环。

- 选定流：声明去向的不合格水泥或收集水泥粉尘
- 流属性/单位：Mass / kg
- 数量规则：按去向实测离开过程边界的干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_rework_and_waste`
- 来源：`eu-jrc-clm-bref-2013`

##### 基本流

###### 粉磨和操作颗粒物排放（`cement_finishing_particulate_release`）

按监测粒径范围记录磨机、选粉机、料仓、输送机及除尘系统的直接颗粒物排放。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：明确匹配粒径范围的实测排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-clm-bref-2013`

### 过程：储存、质量控制、包装和发运（`storage_quality_and_dispatch`）

#### 输入

##### 产品流

###### 成品工序散装水泥（`bulk_cement_from_finishing`）

仅转入粉磨或掺配后的声明合格水泥，并保持批次、料仓和产品身份。

- 选定流：各种水泥制品 `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入声明产品料仓的实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cement_composition_and_output`
- 来源：`gcca-cement-co2-energy-protocol-v3-1`

###### 包装材料（`cement_packaging_materials`）

仅在声明包装交付时纳入包装袋、内衬、托盘、缠绕膜及其他包装。

- 选定流：声明的水泥包装材料
- 流属性/单位：Mass / kg
- 数量规则：包装领用记录减去有记录的可重复使用包装返回量，并按材料记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：`epd-international-cpcr-001`

###### 储存、包装和装载能源（`storage_packing_loading_energy`）

记录料仓、质量取样、包装和装载的计量电力及移动设备燃料。

- 选定流：声明的电力和设备燃料
- 流属性/单位：Energy / kWh and MJ
- 数量规则：按电表或有记录的物理驱动因素分配给储存、包装和装载的实测能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`
- 来源：`eu-jrc-clm-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品水硬性水泥（`finished_hydraulic_cement`）

这是参考输出。应保留声明的水泥类别、标准名称、强度等级、熟料或水硬性中间体比率、主要组分分数、生产路线、场址、期间和交付形态。

- 选定流：各种水泥制品 `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg（Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：准确的 1,000 kg 净干合格成品水泥，不含包装皮重
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-0-explanatory-notes-2024`

##### 废物流

###### 包装和装载废物（`packaging_and_loading_waste`）

按材料和去向记录离开设施的破损包装及装载损失。

- 选定流：声明的包装或装载废物
- 流属性/单位：Mass / kg
- 数量规则：实测离开前景系统的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净干成品水泥
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：`epd-international-cpcr-001`

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享设施过程 | 优先采用产品线计量、批次记录、料仓身份和过程细分，使熟料生产、组分制备、粉磨、掺配、储存和包装负荷在分配前直接归属。 | `iso-14044-2006`; `epd-international-cpcr-001` |
| `allocation_clinker_transfers` | 生产、采购、销售和内部转移的熟料 | 使用已核对熟料质量平衡；只计一次上游熟料生产，把外购熟料作为上游产品投入，不把内部转移或库存变动视为新生产。 | `gcca-cement-co2-energy-protocol-v3-1` |
| `allocation_multi_product_cement` | 共享粉磨、掺配、储存和发运 | 先直接归属计量投入和排放。仅对剩余共享负荷采用反映共享操作且有记录的物理驱动因素，例如干物料吞吐量、磨机时间、计量能源或包装件数，并披露驱动因素和受影响产品。 | `iso-14044-2006`; `epd-international-cpcr-001` |
| `allocation_product_mix` | 声明的按产量加权水泥混合物 | 按同一场址和报告期已核对的净干产量对产品特定清单加权。不得采用未加权平均，也不得在缺少明确范围论证时合并显著不同的场址、地区、路线或产品类别。 | `iso-14044-2006` |
| `allocation_secondary_constituents_and_fuels` | 矿渣、粉煤灰、废物衍生组分、替代燃料及其他次生投入 | 保留上游数据集记录的废物、副产物、再循环和分配约定。没有明确选定的项目规则和已披露敏感性时，不得假设零上游负荷或给予避免负荷信用。 | `iso-14044-2006`; `epd-international-cpcr-001` |
| `allocation_internal_recycling` | 返回粉尘、内部返工料和返生产的不合格水泥 | 将内部循环作为无共产品信用的内部回路建模；只记录跨越前景边界的额外能源、损失和材料。 | `gcca-cement-co2-energy-protocol-v3-1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cement_composition_and_output` | `constituent_receipt_and_preparation`; `cement_grinding_and_blending`; `storage_quality_and_dispatch` | 组分投入、配方、净水泥输出、产品限定信息 | 批次票、地磅记录、配料系统、实验室及料仓记录 | 产品代码；标准；强度等级和龄期；组分身份和供应商；湿质量和干质量；水分；批次或料仓；输出质量；批号；路线；交付形态 | 将批次配方、校准秤、料仓转移和实验室放行记录核对到声明产品。 | kg 干质量和质量分数 | 每批次或批号，按月汇总 | 一个有代表性的连续报告期，通常为 12 个月，除非对季节性和阶段生产另有论证 | 对声明产品有贡献的每个设施 | 按产品汇总干组分和净输出质量；仅用已披露产品输出计算按产量加权值。 | 秤校准；实验室证书；配方批准；库存核对；签署的生产报告 |
| `cp_intermediate_mass_balance` | `integrated_clinker_production`; `constituent_receipt_and_preparation` | 生产、采购、销售、转移、库存和消耗的熟料或水硬性中间体 | 地磅、生产计量、库存盘点、转移和采购记录 | 中间体类型；供应商；生产；采购；销售；内部转入和转出；期初和期末库存；消耗干质量 | 按中间体类型和产品用途核对完整场址质量平衡。 | kg 干质量 | 每月并年度核对 | 与水泥输出相同报告期 | 范围内全部生产和接收设施 | 期初库存加生产加采购加转入，应等于消耗加销售加转出加期末库存，并记录核对差异。 | 库存盘点；校准秤；发票；转移记录；管理层批准的核对表 |
| `cp_fuel_and_thermal_energy` | `integrated_clinker_production`; `constituent_receipt_and_preparation` | 窑、分解炉、干燥及其他热工燃料 | 仪表、地磅、发票、燃料实验室和供应商证书 | 燃料身份；使用位置；质量或体积；水分；低位热值；化石碳；生物质碳；替代燃料状态 | 计量各燃料流，并匹配来源和期间特定的燃料属性。 | kg、Nm3、MJ 低位热值 | 每次交付和计量期，按月汇总 | 与生产相同报告期 | 每座窑、干燥机和热工单元 | 按燃料和使用位置汇总能源；分别保留化石、替代、混合和生物质类别。 | 仪表校准；地磅记录；燃料分析；供应商证书；燃料台账 |
| `cp_process_electricity` | all processes | 按过程和供应类型记录电力 | 分表、公用事业发票、场内发电和外送电表 | 外购电；场内发电；过程耗电；外送电；计量边界；电压；供应商和地理 | 优先采用过程分表；否则用有记录的物理驱动因素分配剩余共享电力。 | kWh | 连续或账单期，按月汇总 | 与生产相同报告期 | 范围内每个设施和过程 | 外购加场内消耗电力，外送电另行报告；不得用外送电抵销无关过程耗电。 | 仪表校准；公用事业发票；发电和外送记录；分配工作表 |
| `cp_direct_air_emissions` | `integrated_clinker_production`; `cement_grinding_and_blending` | 直接化石源和生物源 CO2、NOx、SO2、颗粒物粒径及其他受监管排放 | 连续监测、烟囱测试、许可报告、质量平衡或批准的计算 | 污染物；流身份；浓度；烟气流量；运行小时；实测质量；计算输入；化石和生物质拆分；粒径范围 | 优先采用实测排放；采用计算时保留公式、因子、测量输入和批准依据。 | kg 及支持性监测单位 | 连续监测或各要求测试期 | 与生产相同报告期并覆盖正常及相关异常运行 | 声明系统内每个排放点 | 按匹配基本流和排放过程汇总；不得把未指定粉尘结果映射到特定粒径流。 | 校准和 QA 报告；烟囱测试报告；许可报送；计算工作表 |
| `cp_dust_rework_and_waste` | `integrated_clinker_production`; `cement_grinding_and_blending` | 返回粉尘、内部返工料、不合格水泥、外部回收、处理和处置 | 除尘器、地磅、库存、废物转移和返工记录 | 材料；干质量；来源；内部返回；外部去向；处理；库存变动 | 按来源和去向核对粉尘及不合格料，区分内部循环和跨边界废物。 | kg 干质量 | 每月 | 与生产相同报告期 | 所有除尘和返工点 | 内部返回不作为外部输出；仅把实测外部去向汇总为废物输出。 | 废物联单；地磅记录；收集器日志；返工批准；库存核对 |
| `cp_inbound_transport` | `constituent_receipt_and_preparation` | 熟料、组分、燃料和包装入厂运输 | 供应商发货、地磅、承运人和路线记录 | 材料；供应商起点；目的地；方式；距离；载荷；质量；返程假设 | 将各交付质量匹配实际路线和方式；承运记录不完整时记录路线估算方法。 | tonne、km、tonne-kilometre | 每票，按月汇总 | 与生产相同报告期 | 所有纳入的供应商和接收设施 | 按材料、供应商、方式和路线汇总质量乘路线距离。 | 提单；地磅票；承运记录；路线证据 |
| `cp_water_balance` | `cement_grinding_and_blending` | 取水、耗水、循环和排水 | 水表、公用事业账单、水箱及排放记录 | 来源；取水；循环；蒸发或产品保留；排放；去向 | 按来源和去向核对水，不把内部循环视为新取水。 | m3 或 kg | 连续或每月 | 与生产相同报告期 | 范围内每个设施 | 按来源汇总取水，并分别报告循环和排放。 | 仪表校准；公用事业账单；排放报告；平衡核对 |
| `cp_packaging_and_dispatch` | `storage_quality_and_dispatch` | 包装投入、可重复使用返回、包装废物、产品装载、散装或包装形态 | 包装领用、包装线计数、仓库、地磅和发运记录 | 包装材料和质量；领用件数；可重复使用返回；破损；装载损失；净水泥质量；交付形态 | 将包装领用和废物与包装产品核对；散装交付不记录包装投入。 | kg 包装和 kg 净水泥 | 每批次或发运，按月汇总 | 与生产相同报告期 | 范围内每条包装和装载线 | 按材料汇总每包装输出的包装；除非声明按产量加权混合，否则分开散装和包装产品。 | 供应商规范；包装计数；仓库领用；地磅和发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化量 = 报告期数量 / 报告期净干成品水泥输出 × 1,000 kg | 报告期数量；净干成品水泥输出 | 每 1,000 kg 净干成品水泥的数量 | `iso-14044-2006` |
| `calc_component_fraction` | 各水泥组分 | 组分干质量分数 = 组分消耗干质量 / 净干成品水泥输出 | 干组分质量；净干水泥输出 | 产品特定组分质量分数 | `gcca-cement-co2-energy-protocol-v3-1` |
| `calc_clinker_or_intermediate_factor` | 波特兰、混合、矿渣、高铝及类似路线 | 熟料或路线特定水硬性中间体系数 = 已核对中间体消耗干质量 / 净干成品水泥输出 | 生产、采购、销售、转移、库存和消耗的中间体质量；水泥输出 | 声明的熟料系数或水硬性中间体比率 | `gcca-cement-co2-energy-protocol-v3-1` |
| `calc_fuel_energy` | 各热工燃料 | 按低位热值计的能量 = 实测燃料数量 × 来源和期间特定低位热值；分别保留燃料类别和使用位置 | 燃料质量或体积；低位热值；使用位置；类别 | 按燃料、过程及化石/替代/混合/生物质类别的 MJ | `gcca-cement-co2-energy-protocol-v3-1` |
| `calc_transport_service` | 入厂运输 | 运输服务 = 运输干质量吨数 × 单程或有记录路线公里数 | 质量；方式；路线距离 | 按材料、方式和路线的 tonne-kilometre | `epd-international-cpcr-001` |
| `calc_direct_release` | 直接大气排放 | 归一化排放 = 实测或批准计算的报告期排放 / 净干成品水泥输出 × 1,000 kg | 排放质量，或监测浓度和烟气流量；运行时间；水泥输出 | 每参考流的匹配基本流 kg | `eu-jrc-clm-bref-2013`; `gcca-cement-co2-energy-protocol-v3-1` |
| `calc_product_mix` | 允许的声明水泥混合物 | 混合清单 = 同一场址和期间各产品特定清单乘其已核对净干产量份额之和 | 产品特定清单；按产品净干输出 | 按产量加权的声明混合物清单 | `iso-14044-2006` |
| `calc_mass_balance` | 水泥配方和损失 | 将熟料或中间体、其他组分、添加物和库存变动与成品水泥、外送粉尘、不合格料及其他记录损失核对；调查并披露剩余差异 | 全部干投入；库存变动；内部返回；成品水泥；外部废物和损失 | 已核对质量平衡及披露差异 | `gcca-cement-co2-energy-protocol-v3-1` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 水泥类别、标准名称、强度等级和龄期、配方、路线、场址、期间及交付形态应明确且相互一致。 | 产品规范；配方批准；实验室放行；数据集元数据 |
| `dq_composition_completeness` | 水泥配方 | 在已核对干质量基准上报告全部主要组分、硫酸钙或石膏、补充材料、少量添加物及助磨剂；调查并披露质量平衡剩余差异。 | 批次配方；秤记录；库存核对；质量平衡工作表 |
| `dq_temporal_representativeness` | 全部前景记录 | 采用共同的代表期，并披露停机、阶段生产、异常运行、替代和缺失月份。 | 生产日历；仪表覆盖；维护和事故日志 |
| `dq_site_and_route_representativeness` | 设施和供应商 | 纳入对声明产品有实质贡献的全部设施，并区分一体化和独立粉磨路线。 | 设施清单；过程图；供应商登记；转移记录 |
| `dq_energy_and_fuel_traceability` | 电力和热能 | 保留计量边界、分配驱动因素、燃料低位热值、替代燃料状态及化石/生物质分数；不得用无完整限定信息的通用能源值替代。 | 仪表登记；发票；燃料分析；分配工作表 |
| `dq_emission_flow_matching` | 直接排放 | 将各监测结果匹配正确的基本流、环境介质、化石或生物质来源及粒径范围；未解决匹配保留为已披露数据缺口。 | 监测报告；流选择记录；计算工作表 |
| `dq_upstream_dataset_matching` | 熟料、其他中间体、组分、燃料、电力、运输和包装 | 选择与声明身份、技术、地理、期间及供应商状态匹配的数据集；披露代理，不得把单一地区水泥数据集作为类别默认。 | 供应商证据；数据集元数据；代理论证和敏感性 |
| `dq_measurement_control` | 质量、能源、水和排放记录 | 使用经校准的仪器或受控商业记录，并保留证明完整性和单位换算的检查。 | 校准证书；发票；实验室 QA；内部审计 |
| `dq_no_hidden_estimates` | 缺失前景数据 | 识别每项估算和替代方法。本 PCR 不提供默认清单数量、性能阈值、法律限值或推理估算范围。 | 数据缺口登记；估算方法；审核人签署 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 除非参考输出准确为 1,000 kg 净干成品水泥，并使用产品流 `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg，否则失败。 | `unsd-cpc-3-0-explanatory-notes-2024` |
| `validate_required_qualifiers` | 参考产品元数据 | 缺少水泥类别和标准名称、强度等级和龄期、熟料或水硬性中间体类型和来源、系数、主要组分分数、石膏或硫酸钙、添加物、路线、场址、期间、交付形态及干质量约定时失败。 | `epd-international-cpcr-001`; `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_category_boundary` | 产品适用性 | 参考产品为熟料、混凝土、砂浆、耐火组合物、水泥制品、石灰或其他非水泥产品，或把单一等级、场址或地区水泥表示为整个类别时失败。 | `unsd-cpc-3-0-explanatory-notes-2024`; `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_composition_and_factor` | 配方 | 无法根据已核对干质量记录复现熟料或路线特定水硬性中间体系数及全部声明组分分数，或在没有产量权重时平均显著不同配方，则失败。 | `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_energy_and_fuels` | 能源清单 | 电力与热能未分开、窑燃料和非窑燃料混合，或传统、替代、混合及生物质燃料缺少所需身份、低位热值、使用位置及化石/生物质拆分时失败。 | `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_process_boundary` | 过程图 | 适用的熟料或水硬性中间体生产、组分制备、粉磨或掺配、储存、污染控制、质量控制、包装或发运被遗漏，且没有披露上游数据集或排除理由时失败。 | `eu-jrc-clm-bref-2013`; `epd-international-cpcr-001` |
| `validate_direct_releases` | 直接排放和废物 | 直接排放未归属到排放过程、缺少监测或计算方法、粒径范围不匹配，或内部粉尘和返工料被重复计作外部废物时失败。 | `eu-jrc-clm-bref-2013`; `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_mass_balance` | 中间体和成品水泥质量 | 熟料或水硬性中间体、组分、库存、输出、废物和损失记录未形成有记录的核对，或内部转移被计作新生产时失败。 | `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_allocation` | 共享过程和次生投入 | 未尝试直接归属和细分、剩余分配驱动因素未披露，或在没有明确项目规则时对废物/副产物投入赋予零负荷或避免负荷信用，则失败。 | `iso-14044-2006`; `epd-international-cpcr-001` |
| `validate_packaging_and_delivery` | 工厂门口交付 | 缺少交付形态、包装水泥遗漏包装，或把包装计入 1,000 kg 净水泥参考量皮重时失败。 | `epd-international-cpcr-001` |
| `validate_geography_period_and_mix` | 代表性 | 设施、地理、报告期、产品产量权重和上游数据集匹配不足以复现声明产品或混合物时失败。 | `iso-14044-2006`; `epd-international-cpcr-001` |
| `validate_no_cross_category_extrapolation` | 数据集使用 | 把波特兰水泥作为高铝水泥默认值、把单一强度等级或配方推广到全部水泥，或把单一工厂或地区推广到其声明代表性之外时失败。 | `unsd-cpc-3-0-explanatory-notes-2024`; `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门口成品水硬性水泥的产品特定或已披露按产量加权 secondary_dataset 和 background_dataset |
| downstream_use | 用于混凝土、砂浆、建筑产品、建筑物、基础设施及声明水泥其他使用者的前景数据包及下游 process 或 lifecyclemodel 投影 |
| allowed_use | 声明的水泥类别、标准、强度等级、配方或明确产量混合、路线、设施范围、地理、报告期及散装或包装交付形态 |
| excluded_use | 熟料；混凝土；砂浆；耐火组合物；水泥制品；未指定水泥平均值；无代表性证据的其他强度等级、配方、路线、设施、地区或期间 |
| required_metadata | Canonical PCR id；产品和参考流 UUID；水泥类别和标准；强度等级和龄期；组分分数；熟料或水硬性中间体系数；路线；设施；地理；期间；交付和包装形态；分配；上游数据集；采集协议 |
| required_quality_disclosure | 仪表和秤覆盖；实验室和组分证据；质量平衡差异；能源和燃料分类；直接排放方法；供应商和数据集匹配；产量权重；排除项；代理；缺失数据；适用时的不确定性和敏感性 |
| update_trigger | 水泥类别或标准、强度等级、配方或熟料系数、供应商或水硬性中间体、窑或粉磨技术、热能或电力组合、替代燃料使用、设施范围、分配、交付形态、地理、报告期或任何重大数据质量缺口发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2024` | official_guidance | 联合国统计司，*Draft CPC Version 3.0 Explanatory Notes*，代码 37440 及相邻代码 37430 和 37510，2024-11-01，https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf（访问日期 2026-08-08） | 产品类别边界、成品水泥身份、熟料和混凝土排除项 |
| `epd-international-cpcr-001` | standard | EPD International，c-PCR-001 *Cement and building lime (EN 16908)*，登记号 2019:14-c-PCR-001，版本 1.0.0；引用 EN 16908:2017+A1:2022 和 PCR 2019:14，https://www.environdec.com/pcr-library/pcr2019-14-c-pcr-001（访问日期 2026-08-08） | 水泥特定建设产品 PCR 语境、从摇篮到工厂门口产品定义、包装、分配、质量和报告规则 |
| `gcca-cement-co2-energy-protocol-v3-1` | handbook | Global Cement and Concrete Association，*Cement CO2 and Energy Protocol*，Version 3.1，Internet Manual for printout，https://cement-co2-protocol.org/en/Content/Resources/Downloads/GCCA_Internet_Manual.pdf（访问日期 2026-08-08） | 水泥定义、熟料和矿物组分质量平衡、熟料系数、粉磨与掺配、窑与非窑燃料区分、替代燃料、电力、直接 CO2 和粉尘核算 |
| `eu-jrc-clm-bref-2013` | official_guidance | 欧盟委员会联合研究中心，*Best Available Techniques Reference Document for the Production of Cement, Lime and Magnesium Oxide*，EUR 26129 EN，2013，DOI 10.2788/12850，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CLM_Published_def_0.pdf（访问日期 2026-08-08） | 过程分解、材料和燃料制备、窑系统、产品制备与储存、包装与发运、排放和废物监测 |
| `iso-14044-2006` | standard | ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*，2022 年确认继续有效并有已发布修订，https://www.iso.org/standard/38498.html（访问日期 2026-08-08） | LCI 范围、数据一致性、分配、报告、解释和审核框架 |
