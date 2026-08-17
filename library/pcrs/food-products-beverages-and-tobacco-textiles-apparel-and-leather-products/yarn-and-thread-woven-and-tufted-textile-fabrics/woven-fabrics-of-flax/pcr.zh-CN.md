---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-flax
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 亚麻机织织物

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 26560 亚麻机织织物的工厂门生产：从织造厂验收亚麻纱开始，经经纱准备、织造、已声明的厂内前处理或后整理、最终检验、卷装或折叠和包装。实际纤维组成、织物结构和整理状态均已声明时，坯布、漂白、染色、印花或其他整理状态的亚麻机织织物均可适用。

前景边界从织造厂验收亚麻纱开始。亚麻种植、纤维提取、打麻、栉梳、纺纱、场外公用工程、购入化学品生产和包装材料生产使用关联的上游数据集表示，不在前景内重新构建。下游裁剪、缝制、使用、洗涤、再利用和生命末期不在本 PCR 范围内。

本 PCR 不包括亚麻纤维、亚麻纱、针织或非织造亚麻纺织品、归入 CPC 26560 之外的特种织物、涂层或浸渍纺织品、制成纺织品，以及纤维组成或制造路线未留存记录的织物批次。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-flax |
| classification_refs | CPC 3.0: 26560, Woven fabrics of flax |
| covered_products | 归入 CPC 26560 的亚麻机织织物，包括坯布及已声明湿法整理的批次 |
| excluded_products | 亚麻纤维；亚麻纱；针织或非织造纺织品；归入 CPC 26560 之外的特种、涂层、浸渍或制成纺织品 |
| representative_product | 以卷装或折叠匹布形态在工厂门交付的一批亚麻机织织物 |
| production_route | 亚麻纱接收；经纱准备及条件性上浆；织造；条件性前处理、染色、印花或后整理；检验；包装 |
| market_state | 制造厂门的成品或坯布状态机织织物，声明纤维组成、织物结构、单位面积质量、幅宽、整理状态和调湿基准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为下游加工提供已声明纺织结构和整理状态的亚麻机织织物 |
| How much | 1 kg 亚麻机织织物 |
| How well | 符合已声明的纤维组成、组织或结构、单位面积质量、幅宽、整理状态和批次质量规范 |
| How long or cycle | 工厂门的一个生产批次；不指定使用阶段持续时间 |
| reference_flow_link | `inspection_and_packaging` 输出的合格已包装织物 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Woven fabrics of flax `be3ea0c2-7e29-449a-97fc-8bf2ac32b999` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 亚麻纤维质量分数及每种其他纤维质量分数；坯布、漂白、染色、印花或整理状态；组织或结构；单位面积质量 g/m2；可用幅宽；生产地理；生产期间；上浆路线；湿法加工路线；调湿环境或水分基准；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考产品按不含可移除包装的织物净质量报告，并声明调湿环境或实测水分基准。 |
| `standard_conditioning` | 参考产品称量和织物试验 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 一致使用已声明的纺织品调湿环境。采用 ISO 139 标准大气时，注明所用版本及商定的替代大气；无书面换算时不得混用调湿质量和来料质量。 |
| `area_to_mass_conversion` | 按面积或长度记录的生产或销售数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅用批次特定的实测单位面积质量和可用幅宽把面积或线性长度记录换算为质量，并保留原始测量和计算。 |
| `chemical_product_mass` | 购入的上浆、前处理、染色、印花及整理化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每个商品化产品按原供应状态质量分别记录；解释所需时声明有效成分浓度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 织造厂验收的亚麻经纱和纬纱，留存供应商、组成、纱支、水分或调湿基准和接收质量 |
| starting_condition_role | 亚麻机织织物制造的前景进入条件 |
| product_classification_scope | 仅 CPC 3.0 子类 26560 |
| recursive_input_rule | 亚麻机织织物作为可回收投入重新进入前景时，记录精确的回收织物流、来源批次、质量状态和既有负荷；无独立上游数据集时不得对同一投入递归应用本 PCR。 |
| upstream_dataset_requirement | 亚麻纱、电力、燃料、供水、化学品和包装材料关联在地理与技术上具有代表性的上游数据集。 |
| disclosure | 声明上浆、退浆、精练、漂白、染色、印花、化学整理、热定形、废水处理和燃烧是在场内、场外进行或不存在。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_onsite_operations` | 前景工厂 | 纳入从纱线验收到合格织物包装的全部场内操作；存在时包括纤维或纱线准备、前处理、染色、印花、后整理、废气治理和废水处理。 | `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014` |
| `boundary_upstream_links` | 购入投入 | 购入的纱线、公用工程、化学品和包装使用关联的上游产品数据集表示，并保留供应商地理、技术和数据期间元数据。 | `jrc-ilcd-general-guide-2010` |
| `boundary_route_disclosure` | 条件性操作 | 仅当生产记录证明某湿法或热处理操作不存在，或该操作由另行关联的供应商数据集表示时，才可省略。 | `eu-textiles-bref-2023` |
| `boundary_downstream_exclusion` | 下游加工与使用 | 除非研究明确扩展本 PCR 系统，否则排除裁剪、缝制、产品组装、工厂门以后配送、使用、洗涤、再利用和生命末期。 | `unsd-cpc-3-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_and_warp_preparation` | 纱线接收与经纱准备 | required | 始终纳入；上浆材料和上浆水仅在场内上浆时适用 | 前景材料准备 | kg 已准备亚麻经纱 |
| `weaving` | 织造 | required | 始终纳入 | 前景织物成形 | kg 亚麻机织坯布 |
| `wet_processing` | 前处理与湿法后整理 | conditional | 场内进行退浆、洗涤、精练、漂白、染色、印花或化学整理任一操作时纳入 | 前景湿法加工 | kg 湿法整理亚麻机织织物 |
| `inspection_and_packaging` | 最终检验与包装 | required | 始终纳入；每个包装材料行仅在实际使用时适用 | 前景市场放行 | kg 合格已包装亚麻机织织物 |

### 过程：纱线接收与经纱准备（`yarn_and_warp_preparation`）

#### 输入

##### 产品流

###### 亚麻经纱（`flax_warp_yarn_input`）

分配至经纱的亚麻纱从供应商或纺纱记录进入，并保留混纺组成、纱支、捻度、批次和水分或调湿基准。

- 选定流：Flax yarn for warp
- 流属性/单位：Mass / kg
- 数量规则：投入经纱准备的已验收实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_and_issues`
- 来源：`eu-textiles-bref-2023`

###### 原生马铃薯淀粉上浆剂（`starch_sizing_agent_input`）

批次配方使用淀粉上浆时，原生马铃薯淀粉作为一个化学品投入记录；其他确切上浆产品必须另设原子行。

- 选定流：Native potato starch sizing agent
- 流属性/单位：Mass / kg
- 数量规则：上浆批次领用的原供应状态实测质量；仅有记录证明无淀粉上浆时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_batch_issues`
- 来源：`eu-textiles-bref-2023`

###### 淀粉上浆工艺水（`sizing_process_water_input`）

采用场内上浆时，记录调浆和上浆设备的供水。

- 选定流：Process water for starch sizing
- 流属性/单位：Volume / m3
- 数量规则：水表或批次记录水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meters_and_batch_records`
- 来源：`eu-textiles-bref-2023`

###### 经纱准备电力（`warp_preparation_electricity_input`）

络筒、整经、上浆、烘干和卷绕准备用电来自专用电表，或对共用电表进行可审计分配。

- 选定流：Grid electricity supplied to the weaving mill
- 流属性/单位：Energy / kWh
- 数量规则：实测电力，或按设备功率和运行时间计算的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_metering`
- 来源：`eu-textiles-bref-2023`

#### 输出

##### 产品流

###### 织轴上的已准备亚麻经纱（`prepared_flax_warp_output`）

已准备经纱离开本过程进入织造；记录实测或经核算质量及上浆状态。

- 选定流：Prepared flax warp on loom beam
- 流属性/单位：Mass / kg
- 数量规则：织轴毛重扣皮，或纱线投入扣除已记录准备废物后的核算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-textiles-bref-2023`

##### 废物流

###### 经纱准备产生的亚麻纱废物（`warp_preparation_flax_yarn_waste_output`）

络筒和整经产生的断头、去除的结头和不可用亚麻纱与其他纺织废物分别称量。

- 选定流：Flax yarn waste from warp preparation
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-textiles-bref-2023`

###### 废淀粉浆液（`spent_starch_sizing_liquor_output`）

含淀粉废液从上浆或设备清洗转出处理时，作为独立液体废物记录。

- 选定流：Spent starch sizing liquor
- 流属性/单位：Volume / m3
- 数量规则：实测转移体积或罐液位变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_transfers`
- 来源：`eu-textiles-bref-2023`

### 过程：织造（`weaving`）

#### 输入

##### 产品流

###### 已准备亚麻经纱（`prepared_flax_warp_input`）

已准备经纱带着织轴身份和上浆状态进入织机。

- 选定流：Prepared flax warp on loom beam
- 流属性/单位：Mass / kg
- 数量规则：从 `prepared_flax_warp_output` 转移的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-textiles-bref-2023`

###### 亚麻纬纱（`flax_weft_yarn_input`）

分配至纬纱的亚麻纱从供应商或纺纱记录进入，并保留与经纱相同的身份字段。

- 选定流：Flax yarn for weft
- 流属性/单位：Mass / kg
- 数量规则：发往织机的已验收实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_and_issues`
- 来源：`eu-textiles-bref-2023`

###### 织造电力（`weaving_electricity_input`）

织机、压缩空气、局部抽风和可直接归属织造区域的用电单独记录，不与热能合并。

- 选定流：Grid electricity supplied to the weaving mill
- 流属性/单位：Energy / kWh
- 数量规则：专用电表实测电力，或按设备时间对共用电表进行可审计分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_metering`
- 来源：`eu-textiles-bref-2023`

#### 输出

##### 产品流

###### 亚麻机织坯布（`greige_woven_flax_fabric_output`）

织机输出的坯布在条件性湿法加工和最终检验前按批次记录。

- 选定流：Greige woven flax fabric
- 流属性/单位：Mass / kg
- 数量规则：在已声明调湿基准下实测的坯布质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-textiles-bref-2023`

##### 废物流

###### 织造产生的亚麻纱废物（`weaving_flax_yarn_waste_output`）

织造中移除的织机废纱、不可用布边纱和断裂亚麻纱按特定亚麻纱废物流称量。

- 选定流：Flax yarn waste from weaving
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-textiles-bref-2023`

##### 基本流

###### 排入空气的 10 微米以下颗粒物（`weaving_pm10_air_output`）

设施监测或报告该排放时，记录治理设备后由织造区域抽风排出的 PM10。

- 选定流：Particulate matter, less than 10 micrometres, to air
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的实测烟道或房间抽风排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_monitoring`
- 来源：`eu-textiles-bref-2023`

### 过程：前处理与湿法后整理（`wet_processing`）

仅当前景内实施相关操作时纳入本条件性过程。实际使用的每种染料、颜料、印花浆成分、整理剂或助剂，必须在前景数据包中按商品或化学身份各建一个原子行，不得合并为化学品总量行。

#### 输入

##### 产品流

###### 亚麻机织坯布（`greige_woven_flax_fabric_input`）

坯布带着织造批次和质量基准进入。

- 选定流：Greige woven flax fabric
- 流属性/单位：Mass / kg
- 数量规则：从 `greige_woven_flax_fabric_output` 转移的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-textiles-bref-2023`

###### 纺织湿法加工工艺水（`wet_processing_water_input`）

由水表或批次记录采集进入前处理、染色、印花、后整理、洗涤和设备清洗的水。

- 选定流：Process water for textile wet processing
- 流属性/单位：Volume / m3
- 数量规则：水表或批次记录水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meters_and_batch_records`
- 来源：`eu-textiles-bref-2023`

###### 湿法加工电力（`wet_processing_electricity_input`）

记录湿法设备、泵、投料、抽风和可直接归属处理设备的电力。

- 选定流：Grid electricity supplied to the textile finishing mill
- 流属性/单位：Energy / kWh
- 数量规则：专用电表实测电力，或按设备时间对共用电表进行可审计分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_metering`
- 来源：`eu-textiles-bref-2023`

###### 场内热能用天然气（`wet_processing_natural_gas_input`）

天然气在场内燃烧并为已声明湿法路线提供蒸汽或直接热量时单独记录。

- 选定流：Natural gas combusted in the textile finishing mill boiler
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量燃气使用所记录期间的净热值换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_metering`
- 来源：`eu-textiles-bref-2023`

###### 氢氧化钠（`sodium_hydroxide_input`）

仅在批次配方用于退浆、精练、pH 调节或其他已声明操作时记录氢氧化钠。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：发往批次的原供应状态实测产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_batch_issues`
- 来源：`eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014`

###### 过氧化氢（`hydrogen_peroxide_input`）

仅对使用过氧化物漂白或其他已记录过氧化物处理的批次记录过氧化氢。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：发往批次的原供应状态实测产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_batch_issues`
- 来源：`eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014`

###### 碳酸钠（`sodium_carbonate_input`）

仅在生产配方明确列出时记录碳酸钠。

- 选定流：Sodium carbonate
- 流属性/单位：Mass / kg
- 数量规则：发往批次的原供应状态实测产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_batch_issues`
- 来源：`eu-textiles-bref-2023`

###### 氯化钠（`sodium_chloride_input`）

仅在生产配方明确列出时记录氯化钠。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：发往批次的原供应状态实测产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_batch_issues`
- 来源：`eu-textiles-bref-2023`

###### 乙酸（`acetic_acid_input`）

仅在生产配方明确列为 pH 控制剂或用于其他已声明操作时记录乙酸。

- 选定流：Acetic acid
- 流属性/单位：Mass / kg
- 数量规则：发往批次的原供应状态实测产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_batch_issues`
- 来源：`eu-textiles-bref-2023`

#### 输出

##### 产品流

###### 最终检验前的湿法整理亚麻机织织物（`wet_finished_woven_flax_fabric_output`）

在已声明湿法和热处理之后、最终检验之前记录织物质量。

- 选定流：Wet-finished woven flax fabric before final inspection
- 流属性/单位：Mass / kg
- 数量规则：按已声明调湿或水分基准实测的输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-textiles-bref-2023`

##### 废物流

###### 纺织湿法工艺废水（`textile_wet_process_wastewater_output`）

仅在转移至场内或场外处理的节点记录合并纺织废水；合并前分别计量的浴液仍保留为独立前景记录。

- 选定流：Textile wet-process wastewater
- 流属性/单位：Volume / m3
- 数量规则：实测排放或处理转移体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_transfers`
- 来源：`eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014`

###### 湿法加工产生的亚麻织物废物（`wet_processing_flax_fabric_waste_output`）

湿法加工中去除的破损、修剪或其他不合格亚麻织物与纱线废物分别记录。

- 选定流：Flax fabric waste from wet processing
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-textiles-bref-2023`

##### 基本流

###### 天然气燃烧排入空气的化石二氧化碳（`natural_gas_co2_air_output`）

天然气在前景内燃烧时，记录场内锅炉或直燃设备排放的化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：实测烟道排放，或与计量燃料期间核对的设施报告排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_monitoring`
- 来源：`eu-textiles-bref-2023`

###### 天然气燃烧排入空气的氮氧化物（`natural_gas_nox_air_output`）

设施监测或报告时，记录场内锅炉或直燃设备排放的氮氧化物。

- 选定流：Nitrogen oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：实测烟道排放，或与计量燃料期间核对的设施报告排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_monitoring`
- 来源：`eu-textiles-bref-2023`

### 过程：最终检验与包装（`inspection_and_packaging`）

#### 输入

##### 产品流

###### 最终检验前的亚麻机织织物（`woven_flax_fabric_before_inspection_input`）

作为坯布销售时，织物批次从织造进入最终检验；声明整理时则从湿法加工进入。

- 选定流：Woven flax fabric before final inspection
- 流属性/单位：Mass / kg
- 数量规则：从最后一个已纳入生产过程转移的批次质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-ecolabel-textiles-2014`

###### 检验与包装电力（`inspection_electricity_input`）

记录验布机、卷装或折叠设备、局部抽风和包装设备用电。

- 选定流：Grid electricity supplied to the weaving mill
- 流属性/单位：Energy / kWh
- 数量规则：专用电表实测电力，或按设备时间对共用电表进行可审计分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_metering`
- 来源：`eu-ecolabel-textiles-2014`

###### 瓦楞纸板包装（`corrugated_board_packaging_input`）

存在时，卷芯、端部保护、纸箱或其他发运包装所用瓦楞纸板作为一个材料投入记录。

- 选定流：Corrugated board packaging
- 流属性/单位：Mass / kg
- 数量规则：发往生产批次的实测包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_issues`
- 来源：`eu-ecolabel-textiles-2014`

###### 低密度聚乙烯包装薄膜（`ldpe_packaging_film_input`）

存在时，包裹织物批次所用低密度聚乙烯薄膜作为一个材料投入记录。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：发往生产批次的实测薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_issues`
- 来源：`eu-ecolabel-textiles-2014`

#### 输出

##### 产品流

###### 合格亚麻机织织物（`woven_fabrics_of_flax_output`）

合格已包装织物批次为定量参考输出，其净质量不含可移除包装。

- 选定流：Woven fabrics of flax `be3ea0c2-7e29-449a-97fc-8bf2ac32b999`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明调湿或水分基准计的恰好 1 kg 合格织物净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 不合格亚麻机织织物（`rejected_woven_flax_fabric_output`）

最终检验剔除的织物进行称量，并指定实际回收、再循环、处理或处置去向。

- 选定流：Rejected woven flax fabric
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的不合格织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`eu-ecolabel-textiles-2014`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多产品工厂过程 | 在技术可行时，优先按电表、批次记录、设备时间和废物记录细分至亚麻织物生产批次，以避免分配。 | `iso-14044-2006`; `jrc-ilcd-general-guide-2010` |
| `allocation_causal_shared_inputs` | 共用公用工程与处理 | 无法细分时，按能因果表征使用量的书面物理驱动分配共用电力、热能、水和处理负荷，例如设备运行时间、计量体积或处理水力负荷。 | `jrc-ilcd-general-guide-2010` |
| `allocation_mass_fallback` | 剩余共用负荷 | 仅在没有更具因果性的物理驱动时，才以合格织物净质量作为后备基准；披露受影响流、共产品、分配份额和基准敏感性。 | `iso-14044-2006`; `jrc-ilcd-general-guide-2010` |
| `allocation_waste_and_recovery` | 纱线废物、织物废物和回收材料 | 应先记录每项物理输出及去向，再应用任何再循环、替代或避免负荷约定；不得在前景内自动计入抵扣。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts_and_issues` | `yarn_and_warp_preparation`; `weaving` | 亚麻经纱和纬纱 | 采购收货与物料领用 | 供应商；批次；纱线身份；组成；纱支；毛重；皮重；净重；水分或调湿基准；领用过程 | 校准秤和企业物料记录 | kg | 每次收货和领用 | 完整生产批次期间 | 服务该批次的全部纱库和发料点 | 按确切纱线身份汇总已验收净质量，核对收货、库存变化和领用 | 秤校准；供应商证书；批次追溯；库存核对 |
| `cp_chemical_batch_issues` | `yarn_and_warp_preparation`; `wet_processing` | 一个确切化学品 | 批次配方与投料记录 | 商品名；化学或 Colour Index 身份；供应商；浓度；批次；原供应状态质量；工艺批次 id；退料质量 | 校准投料系统或称量领用 | kg | 每批 | 完整生产批次期间 | 已纳入过程的全部投料点 | 按每种确切产品分别汇总净领用质量；不得合并不同化学品 | 配方批准；SDS；投料校准；领退料记录 |
| `cp_water_meters_and_batch_records` | `yarn_and_warp_preparation`; `wet_processing` | 一个工艺水投入 | 水表与批次记录 | 表 id；起止读数；批次 id；操作；水源；回用水状态 | 校准流量计；无水表时使用经验证的罐体或批次体积 | m3 | 每批或每班 | 覆盖生产批次的完整期间 | 服务已纳入操作的全部进水口 | 读数差扣除已记录非生产用水，回用水转移单列 | 水表校准；读数日志；批次核对 |
| `cp_electricity_metering` | `yarn_and_warp_preparation`; `weaving`; `wet_processing`; `inspection_and_packaging` | 电网电力 | 电表与设备运行记录 | 表 id；起止读数；设备 id；额定或实测负荷；运行时间；批次 id | 专用电表；否则按共用电表进行经验证的设备时间分配 | kWh | 每班或每批 | 覆盖批次和正常运行波动的代表性连续期间 | 过程边界内全部用电设备 | 汇总专用读数或计算可审计份额，并与厂级电表核对 | 电表校准；运行日志；分配工作表；厂级核对 |
| `cp_fuel_metering` | `wet_processing` | 天然气 | 燃料表与热值记录 | 表 id；起止读数；标准体积；净热值；锅炉 id；运行时间；批次 id | 校准燃气表和供应商热值声明 | MJ | 每班或每批 | 服务该批次的完整期间 | 服务已纳入操作的场内燃烧设备 | 使用期间特定净热值把计量燃气换算为 MJ，并按因果驱动分配 | 燃气表校准；供应商声明；锅炉日志；厂级核对 |
| `cp_product_and_scrap_mass` | 全部过程 | 中间产品、合格织物或一个特定纺织废物 | 生产、称量和废物转移记录 | 批次；产品或废物身份；毛重；皮重；净重；调湿基准；去向；时间戳 | 校准秤和批次级核对 | kg | 每次转移或每批 | 完整生产批次期间 | 全部已纳入生产和废物收集点 | 按行身份和去向汇总净质量；核对过程投入、输出、库存变化和实测水分基准 | 秤校准；批次流转单；废物接收单；质量平衡表 |
| `cp_wastewater_transfers` | `yarn_and_warp_preparation`; `wet_processing` | 废浆液或纺织废水 | 流量计、罐体和处理转移记录 | 流身份；来源操作；体积；时间戳；处理去向；回用比例 | 校准排放表或经验证的罐液位变化 | m3 | 每批或每日 | 完整生产批次期间 | 已纳入操作的全部废水转移 | 按特定流和处理去向汇总，不重复计算内部回流 | 水表校准；处理日志；转移单；水平衡 |
| `cp_direct_emission_monitoring` | `weaving`; `wet_processing` | 一个排入空气的基本流 | 烟道或工作场所抽风监测记录 | 排放身份；环境介质；采样点；浓度；气体流量；持续时间；生产批次；治理状态 | 适用的认可测量方法或经核验的法规监测记录 | kg | 监测活动或报告期间 | 对生产批次有代表性的期间 | 全部已纳入直接排放点 | 计算期间释放质量，按书面运行时间或生产驱动分配 | 实验室认可；仪器校准；采样报告；法规报表 |
| `cp_packaging_material_issues` | `inspection_and_packaging` | 一个确切包装材料 | 包装领用与产品发运记录 | 材料身份；供应商；批次；毛重；皮重；退料质量；织物批次 | 校准秤和领用记录 | kg | 每织物批次 | 完整生产批次期间 | 服务该批次的全部包装工位 | 按包装材料分别计算领用质量扣除已记录退料 | 秤校准；采购记录；领退料日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | 每个非参考清单行 | 行数量 / 合格亚麻机织织物净 kg | 已采集行数量；`woven_fabrics_of_flax_output` 净质量 | 每 1 kg 参考产品的行数量 | `eu-ecolabel-textiles-2014` |
| `area_or_length_to_mass` | 按面积或长度记录的织物 | 面积 × 批次特定实测单位面积质量，或长度 × 可用幅宽 × 批次特定实测单位面积质量；明确换算单位 | 实测面积或长度；可用幅宽；实测 g/m2 | 已声明调湿基准下的织物 kg | `iso-139-2005` |
| `shared_electricity_allocation` | 共用电表 | 共用电表 kWh × 可归属设备运行时间或实测负荷份额 / 相应驱动总量 | 共用电表读数；设备运行时间；实测或经验证负荷 | 分配至过程和批次的 kWh | `jrc-ilcd-general-guide-2010` |
| `process_mass_balance` | 每个生产过程 | 期初库存 + 实测质量投入 = 实测产品输出 + 实测废物输出 + 期末库存 + 已记录质量变化或残差 | 物料收发；产品和废物质量；库存变化；水分或挥发物变化 | 已核对过程质量平衡及已披露残差 | `jrc-ilcd-general-guide-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 纱线、化学品、织物、废物和包装 | 保留供应商、批次、确切材料身份、组成或浓度，以及从接收到生产和输出的关联。 | 供应商证书；SDS；批次配方；批次流转单；废物转移记录 |
| `dq_measurement_control` | 质量、水、电力、燃料和排放 | 使用校准仪器；否则记录经验证的估算方法、分配驱动、不确定性及与场址级控制总量的核对。 | 校准证书；仪表日志；分配工作表；场址核对 |
| `dq_temporal_coverage` | 前景清单 | 覆盖代表正常生产的期间，并纳入可归属已声明批次的启动、停机、清洗、次品、返工和路线特定操作。 | 生产日历；批次日志；仪表期间；停机和清洗记录 |
| `dq_route_completeness` | 湿法与整理路线 | 保留完整配方，并对跨越边界的每种确切染料、颜料、助剂、整理剂、能源载体、废水转移、废物和直接排放保留一个原子清单记录。 | 批准配方；领用记录；仪表；废物和排放报告 |
| `dq_conditioning_basis` | 织物和纱线质量 | 声明参考流或质量平衡计算中每项材料质量的调湿环境或水分基准。 | 调湿室记录；试验报告；水分测量；称量程序 |
| `dq_geography_and_technology` | 关联上游数据集 | 尽可能匹配供应商地理、电网、水源、燃料供应、纱线技术和处理路线，并披露任何代理。 | 供应商位置；公用工程合同；数据集元数据；代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 核对精确 Tiangong 产品流 UUID、Mass 流属性 UUID、Units-of-mass 单位组 UUID、1 kg 参考数量及全部必需限定信息。 | `unsd-cpc-3-2025`; `eu-ecolabel-textiles-2014` |
| `validation_route_completeness` | 过程图与清单 | 已声明路线必须纳入场内全部准备、织造、前处理、染色、印花、后整理、检验、包装、废水和排放治理操作，或为场外操作识别关联的供应商数据集。 | `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014` |
| `validation_atomic_flows` | 过程清单 | 每张卡必须表示一种确切材料、能源载体、废物流或基本流排放；化学品总量、合并公用工程、合并包装和合并废物标签均不合规。 | `eu-ecolabel-textiles-2014` |
| `validation_mass_balance` | 经纱准备、织造、湿法加工和检验 | 对每个过程核对实测投入、输出、废物、库存变化及已记录水分或挥发物变化；披露并调查每项无法解释的残差。 | `jrc-ilcd-general-guide-2010` |
| `validation_no_unsubstantiated_values` | 清单数量和计算 | 仅接受已采集前景记录，或与已采集字段和已声明公式关联的计算；不得用 AI 编写范围或无来源默认值替代缺失记录。 | `iso-14044-2006`; `jrc-ilcd-general-guide-2010` |
| `validation_allocation_disclosure` | 共用与多产品过程 | 校验细分尝试、所选物理驱动、受影响流、分配份额、共产品处理及任何敏感性结果。 | `iso-14044-2006`; `jrc-ilcd-general-guide-2010` |
| `validation_conditioning_consistency` | 参考产品和质量换算 | 校验参考产品质量、单位面积质量、纱线质量和过程质量平衡使用一致且已声明的调湿或水分基准。 | `iso-139-2005`; `eu-ecolabel-textiles-2014` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 亚麻机织织物工厂门前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当织物组成、结构、整理状态、地理、技术、调湿基准和边界与目标用途匹配时，可用于下游服装、室内纺织品、技术产品及产品系统模型 |
| excluded_use | 无明确系统扩展时，不用于亚麻种植、纤维提取、纱线生产、针织或非织造纺织品、归入其他类别的特种或涂层织物、制成纺织品生产、使用阶段和生命末期 |
| required_metadata | canonical PCR id；CPC 26560；参考流 UUID；纤维组成；组织或结构；g/m2；可用幅宽；整理状态；调湿或水分基准；地理；技术；生产期间；已纳入及场外操作；分配方法；上游数据集引用 |
| required_quality_disclosure | 一手数据份额；仪表与秤覆盖；校准状态；路线完整性；质量平衡残差；化学品身份完整性；废水和排放覆盖；代理；不确定性；未解析 UUID |
| update_trigger | 纤维组成、组织、单位面积质量、幅宽、上浆或湿法配方、生产技术、场址、能源供应、废水或排放治理、分配基准、包装或代表性数据期间发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 26560, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品身份、分类范围和下游排除项 |
| `eu-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry | 过程拆分、湿法加工边界、公用工程、废水、废物和大气排放采集范围 |
| `eu-ecolabel-textiles-2014` | official_guidance | Commission Decision 2014/350/EU establishing EU Ecolabel criteria for textile products, consolidated text. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02014D0350-20201201 | 纺织产品范围、1 kg 功能单位、供应链证据、化学品与过程、排放处理和适用性能元数据 |
| `iso-139-2005` | standard | ISO 139:2005, Textiles — Standard atmospheres for conditioning and testing, with Amendment 1:2011. https://www.iso.org/standard/35179.html | 调湿基准声明和质量换算一致性 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, with Amendments 1:2017 and 2:2020. https://www.iso.org/standard/38498.html | 清单、分配、报告和评审原则 |
| `jrc-ilcd-general-guide-2010` | official_guidance | European Commission Joint Research Centre, International Reference Life Cycle Data System Handbook — General guide for Life Cycle Assessment — Detailed guidance, EUR 24708 EN, JRC48157, DOI 10.2788/38479. https://publications.jrc.ec.europa.eu/repository/handle/JRC48157 | 系统边界、上游关联、细分、物理分配、数据质量、质量平衡和文档规则 |
