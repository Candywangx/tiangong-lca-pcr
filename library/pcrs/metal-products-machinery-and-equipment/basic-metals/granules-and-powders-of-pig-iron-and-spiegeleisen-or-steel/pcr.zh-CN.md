---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.granules-and-powders-of-pig-iron-and-spiegeleisen-or-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 生铁、镜铁及钢铁的颗粒和粉末

## 1. 范围与适用性

本 PCR 适用于以生铁、镜铁或钢铁制成的干燥、可销售颗粒或粉末的从厂门到厂门生产。其涵盖报告生产活动中实际采用的一条路线：水雾化、气体雾化或空气雾化、机械粉碎或切丝制粒，以及适用的回收、干燥、分级和内部回用。边界始于场址接收金属原料、雾化介质和外购电力，终于最终分级后的干燥散装产品。

本 PCR 不包括直接还原铁或海绵铁、镜铁以外的铁合金粉末、作为废物销售的钢铁屑和机加工残余物、放射性铁粉、药用产品，也不包括下游压制、烧结、增材制造、涂覆、包装、运输、使用和生命末期。默认边界不含包装；若声明的研究纳入包装，须将每个包装组件作为独立原子交换添加。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.granules-and-powders-of-pig-iron-and-spiegeleisen-or-steel` |
| classification_refs | CPC 3.0 `41117`，精确映射 |
| covered_products | 生铁、镜铁或钢铁制成的干燥、可销售颗粒和粉末，包括符合声明产品规格的丸粒和棱角砂粒 |
| excluded_products | 直接还原铁或海绵铁；镜铁以外的铁合金粉末；废锉屑、车屑及其他废物；放射性或药用铁粉；压制、烧结、涂覆或其他下游加工制品 |
| representative_product | 干燥钢粉，并声明钢种、粒度分布、形貌和生产路线 |
| production_route | 实际采用的一条路线：水、气体或空气雾化，机械粉碎或切丝制粒，以及适用的回收、干燥、分级和内部回用 |
| market_state | 工厂门口、包装前的干燥散装材料 |

官方 CPC 叶节点确定分类身份，但其本身不规定生产技术。因此，每个参考流均须同时声明材料类别、路线、钢种、干燥状态、形貌和粒度规格。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明规格的干燥、可销售生铁、镜铁或钢铁颗粒或粉末 |
| How much | 1,000 kg 干燥产品 |
| How well | 经过最终回收、干燥和分级的合格产品；声明钢种、路线、形貌和粒度分布 |
| How long or cycle | 报告期内一个有代表性的生产活动 |
| reference_flow_link | 过程 `granule_powder_production` 的输出行 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 |
| 参考产品流 | 干燥钢粉 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 材料类别；合金或钢种；生产路线；干燥产品状态；形貌；粒度分布及测试方法；场址地理位置；生产期；再生料含量核算；水分校正方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_dry_product_mass` | `reference_product`、金属输入、干燥固体废物和质量排放 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤称量。产品和颗粒状固体按干质量报告；保留实测湿质量、采样时间、水分质量分数和干燥方法。 |
| `measure_particle_size` | 参考产品身份 | 粒度分布 | µm 或 mm | 报告测试方法、筛孔或等效切分点以及筛上/筛下分数。用于海关身份筛查时，颗粒的质量小于 90% 通过 1 mm 且至少 90% 通过 5 mm；粉末至少 90% 通过 1 mm。产品规格仍为控制要求。 |
| `measure_electricity` | `electricity_input` | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始电表读数和计量边界。原始记录以 kWh 表示时，采用有文件依据的物理换算 1 kWh = 3.6 MJ，不改变供电边界。 |
| `measure_liquids` | `demineralized_water_input` | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 使用经校准的流量计或储罐质量/体积记录；由质量换算体积时披露温度或密度换算。 |
| `measure_gases` | `natural_gas_input`、`industrial_oxygen_input`、`nitrogen_gas_input`、`argon_gas_input`、`compressed_air_input` | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按仪表参考温度和压力报告供应体积；不得合并不同气体或压力等级。 |
| `measure_pm10` | `pm10_air` | 质量 | kg | 采用场址特定的烟道或无组织排放测量或计算。记录浓度、气体体积、捕集效率、运行时间、接收环境舱室和排放高度。 |
| `account_internal_recycle` | 返回的筛上物、筛下物和收集粉末 | 质量 | kg | 分别记录总产生量和返回量。内部返回不得计作外部输入或输出；吹扫量和外部转移量另行披露。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告设施接收的金属原料、雾化介质和电力 |
| starting_condition_role | 前景生产活动的上游产品输入 |
| product_classification_scope | CPC 3.0 `41117` 生铁、镜铁或钢铁的干燥颗粒和粉末 |
| recursive_input_rule | 外购原料、电力、水和气体的上游生产由关联的上游数据集表示，不在本前景过程中重建 |
| upstream_dataset_requirement | 采用在地理和技术上具有代表性的供应商或市场数据集并披露任何代理；不得用名称不同的 UUID 替代缺失的精确流 |
| disclosure | 声明实际路线、材料类别和钢种、场址、报告期、产品水分基准、内部回用核算、污染控制边界以及任何可选包装纳入 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景生产活动 | 纳入原料接收和准备、路线特定的熔化或调质、雾化、粉碎或切丝、回收、干燥、分级、内部回用处理，以及该生产活动使用的场内污染控制。 | `mathias-metal-powder-production-2024` |
| `boundary_route_specific` | 声明的生产路线 | 仅纳入声明路线实际使用的操作和原子交换。纳入条件为假的行应当不存在，不得以零值填充。 | `mathias-metal-powder-production-2024` |
| `boundary_recursive_input` | 外购产品输入 | 在接收点对外购产品建模，并单独关联上游供应数据集。 |  |
| `boundary_packaging` | 包装 | 默认排除包装。若研究纳入包装，应将每种材料和组件作为独立交换添加并披露扩展后的边界。 |  |
| `boundary_emissions_and_waste` | 直接排放和外部废物转移 | 纳入实测或计算的直接排放以及每个外部转移的原子废物流。内部回用回路保留在过程内，吹扫量单独报告。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `granule_powder_production` | 钢铁颗粒或粉末生产活动 | required | 始终纳入；仅填报实际采用的一条路线所适用的原子行 | 从厂门到厂门汇总前景过程 | `reference_product` 中 1,000 kg 干燥合格输出 |

### 过程：钢铁颗粒或粉末生产活动（`granule_powder_production`）

#### 输入

##### 产品流

###### 生铁原料（`pig_iron_feedstock`）

当声明产品以生铁制造时，以锭块形态接收的生铁作为金属原料跨越场址边界。

- 选定流：锭块状生铁
- 流属性/单位：质量 / kg
- 数量规则：计量投入该生产活动的干燥接收质量；仅在实际使用生铁原料时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`un-cpc-3-0-2025`、`uk-hmrc-iron-steel-classification-2022`

###### 镜铁原料（`spiegeleisen_feedstock`）

仅当声明镜铁产品或混合料时，以锭块形态接收的镜铁作为金属原料跨越场址边界。

- 选定流：锭块状镜铁
- 流属性/单位：质量 / kg
- 数量规则：计量投入该生产活动的干燥接收质量；仅在实际使用镜铁原料时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`un-cpc-3-0-2025`、`uk-hmrc-iron-steel-classification-2022`

###### 钢锭原料（`steel_ingot_feedstock`）

钢锭在用于雾化或机械粉碎钢粉路线时，作为金属原料跨越场址边界。

- 选定流：钢锭
- 流属性/单位：质量 / kg
- 数量规则：计量投入该生产活动的干燥接收质量；仅在实际使用钢锭原料时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`mathias-metal-powder-production-2024`

###### 钢丝原料（`steel_wire_feedstock`）

钢丝仅在切丝制粒路线中作为金属原料跨越场址边界。

- 选定流：钢丝
- 流属性/单位：质量 / kg
- 数量规则：计量分配至该生产活动的干燥接收钢丝质量；仅对切丝生产纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`uk-hmrc-iron-steel-classification-2022`

###### 交流电（`electricity_input`）

外购交流电跨越场址边界，为本生产活动使用的设备供能。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：汇总可归属于该生产活动的分时或分表记录；披露电压、供应商、地理位置、供应技术、交付边界和线路损耗处理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：

###### 气态天然气（`natural_gas_input`）

仅当报告生产活动可归属的直接燃烧熔化、预热、干燥或热处理设备消耗气态天然气时，其跨越场址边界。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：按声明的参考温度和压力计量或核对外购天然气；仅纳入可归属于报告生产活动的数量，并披露燃烧设备。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_media`
- 来源：

###### 工业氧气（`industrial_oxygen_input`）

仅当报告生产活动可归属的熔化或加热设备采用富氧或氧燃料运行时，工业氧气跨越场址边界。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：按声明的参考温度和压力计量或核对外购氧气；仅在实际使用时纳入并披露用气设备。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_media`
- 来源：

###### 除盐水（`demineralized_water_input`）

仅当除盐水在声明的水雾化路线中作为雾化或调节液体消耗时，其跨越场址边界。

- 选定流：除盐水
- 流属性/单位：体积 / m3
- 数量规则：计量可归属于该生产活动的净补充水；外部输入不含内部循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_media`
- 来源：`mathias-metal-powder-production-2024`

###### 氮气（`nitrogen_gas_input`）

仅当气态氮在声明路线中用作雾化气体或保护气体时，其跨越场址边界。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：体积 / m3
- 数量规则：按声明的参考温度和压力计量或核对外购氮气；仅在实际使用时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_media`
- 来源：`mathias-metal-powder-production-2024`

###### 氩气（`argon_gas_input`）

仅当气态氩在声明路线中用作雾化气体或保护气体时，其跨越场址边界。

- 选定流：气态氩
- 流属性/单位：体积 / m3
- 数量规则：按声明的参考温度和压力计量或核对外购氩气；仅在实际使用时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_media`
- 来源：`mathias-metal-powder-production-2024`

###### 压缩空气（`compressed_air_input`）

仅当空气雾化路线使用外购或集中供应的压缩空气且其未计入另一场址能源记录时，其跨越场址边界。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：按声明的参考温度和压力计量供气体积；披露压缩机边界并避免重复计算其电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_media`
- 来源：`mathias-metal-powder-production-2024`

##### 废物流

默认过程没有作为输入跨越边界的废物流。

##### 基本流

默认过程没有作为输入跨越边界的基本流。

#### 输出

##### 产品流

###### 干燥可销售钢粉（`reference_product`）

代表性参考产品在回收、干燥和最终分级后跨越工厂门。对于生铁、镜铁或颗粒数据集，仅将代表性名称替换为准确的声明产品，同时保留行 ID 和参考流规则。

- 选定流：干燥钢粉
- 流属性/单位：质量 / kg
- 数量规则：固定为 1,000 kg 干燥合格输出；归一化前计量总产量并校正水分。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：来源规则（`source_rule`）
- 采集协议：`cp_product_output`
- 来源：`un-cpc-3-0-2025`、`uk-hmrc-iron-steel-classification-2022`、`mathias-metal-powder-production-2024`

##### 废物流

###### 不合格钢粉（`off_spec_steel_powder`）

干燥不合格粉末仅在外运而非返回内部生产时作为废物跨越边界。

- 选定流：不合格钢粉废物
- 流属性/单位：质量 / kg
- 数量规则：称量外部转移的不合格干燥粉末；排除已记录的内部回用，仅在实际产生时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfers`
- 来源：

###### 含铁雾化污泥（`atomization_sludge`）

含铁污泥仅在水雾化固体被清除并外部转移时跨越边界。

- 选定流：含铁水雾化污泥
- 流属性/单位：质量 / kg
- 数量规则：记录湿态转移质量和代表性干固体质量分数；报告干固体并单独披露湿质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfers`
- 来源：

##### 基本流

###### 排入空气的 PM10（`pm10_air`）

小于 10 µm 的直接颗粒物在适用控制装置之后跨越边界进入接收空气舱室。

- 选定流：排入空气的粒径 <10 µm 颗粒物
- 流属性/单位：质量 / kg
- 数量规则：采用场址特定的、可归属于该生产活动的实测或计算控制后 PM10；在支持记录中分别报告烟道和无组织排放并披露排放高度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pm10_monitoring`
- 来源：

###### 排入空气的化石源二氧化碳（`fossil_co2_air`）

仅当报告生产活动可归属的设备燃烧化石天然气或另一项单独记录的化石燃料时，现场燃烧产生的化石源二氧化碳跨越边界排入空气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：根据实测燃料消耗和有文件依据的燃料碳含量，或直接烟道证据，计算可归属于报告生产活动的化石源二氧化碳；排除生物源二氧化碳和上游燃料供应排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fossil_co2`
- 来源：

###### 排入水体的铁（`iron_to_water`）

仅当纳入前景边界的处理之后仍存在可归属于报告生产活动的实测水相排放时，铁跨越基本流边界进入接收水体舱室。

- 选定流：排入水体的铁
- 流属性/单位：质量 / kg
- 数量规则：根据场址特定铁浓度和报告生产活动的不重叠净排水体积计算排放铁质量；披露溶解铁或总铁方法、接收舱室和处理边界。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_iron_to_water`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享前景操作 | 只要仪表、批次记录或生产记录允许，应首先按材料类别、合金或钢种、路线和产品粒级细分生产活动。 |  |
| `allocation_internal_recycle` | 内部含铁返回料 | 返回的筛上物、筛下物和回收粉末保留在过程内。记录总产生量、返回量和吹扫量；内部回路不得计作外部输入或获得替代产品抵扣。 |  |
| `allocation_external_coproduct` | 多种可销售输出 | 细分后仍有多个可销售共产品时，如能证明物理因果关系则采用该关系；否则按干质量分配，并披露数量、价格和敏感性检查，不得默认采用经济分配。 |  |
| `allocation_no_waste_credit` | 外部废物转移 | 外部转移的不合格粉末和污泥作为废物输出报告。本从厂门到厂门过程内不得主张避免生产抵扣；任何接收端回收系统应单独建模。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `granule_powder_production` | 金属原料输入 | 称重、接收和批次记录 | 材料身份；供应商；钢种；毛重和皮重；水分；批次 ID | 将接收量与生产活动投料及库存变化核对 | kg 干质量 | 每次接收和每批次 | 完整报告生产活动 | 报告设施 | 按各原子原料行汇总可归属于生产活动的干质量 | 校准记录、接收单、批次核对 |
| `cp_electricity_meter` | `granule_powder_production` | `electricity_input` | 分时电表和账单 | 起止读数；时间间隔；仪表边界；kWh；供应商；电压；损耗 | 对生产设备分表计量，或按运行时间和额定负载对共享仪表用电进行有文件依据的分配 | 原始 kWh；报告 MJ | 时间间隔或批次 | 完整报告生产活动 | 报告设施 | 汇总可归属于生产活动的读数后换算为 MJ | 仪表校准、账单、分配工作表 |
| `cp_process_media` | `granule_powder_production` | 水、燃料气、氧气和雾化气体输入 | 仪表、储罐和采购记录 | 介质身份；体积；参考温度；压力；期初/期末库存；用气设备 | 按介质核对仪表和采购量；扣除内部循环量，并排除已由其他公用工程记录代表的数量 | m3 | 每批次或计量间隔 | 完整报告生产活动 | 报告设施 | 分别汇总除盐水、天然气、工业氧气、氮气、氩气和压缩空气 | 仪表校准、交付单、库存核对 |
| `cp_product_output` | `granule_powder_production` | `reference_product` | 产品称重和实验室记录 | 毛重/皮重；水分；钢种；路线；形貌；粒度分布 | 称量每个合格批次并测定代表性水分和粒度分布 | kg 干质量 | 每批次 | 完整报告生产活动 | 报告设施 | 归一化前汇总合格干质量 | 秤校准、实验室方法、分析证书 |
| `cp_waste_transfers` | `granule_powder_production` | 固体废物输出 | 秤票、分析和转移联单 | 废物身份；湿质量；干固体分数；去向；日期 | 核对产生、内部返回、储存和外部转移数量 | kg 干质量 | 每次转移 | 完整报告生产活动及期初/期末库存 | 报告设施 | 按废物行分别汇总外部转移干固体 | 秤校准、实验室结果、签署联单 |
| `cp_pm10_monitoring` | `granule_powder_production` | `pm10_air` | 烟道测试、监测或工程计算 | 浓度；气体体积；运行时间；捕集效率；舱室；高度 | 根据场址特定测量或有文件依据的因子计算控制后生产活动 PM10 | kg | 测试和运行间隔 | 报告期内有代表性的运行 | 报告过程和控制装置 | 汇总烟道与无组织结果且不得重复计算 | 测试报告、仪器校准、计算表 |
| `cp_fossil_co2` | `granule_powder_production` | `fossil_co2_air` | 燃料计量、燃料碳分析、碳平衡或直接烟道证据 | 燃料体积；参考条件；碳含量；氧化基准；运行期 | 核对报告生产活动的化石燃料使用量，并计算化石源二氧化碳，不混入上游或生物源排放 | kg | 每批次或计量间隔 | 完整报告生产活动 | 报告过程和燃烧设备 | 汇总不重叠且可归属于报告生产活动的化石源二氧化碳结果 | 仪表校准、供应商组成或分析、计算表 |
| `cp_iron_to_water` | `granule_powder_production` | `iron_to_water` | 排水流量和铁浓度记录 | 净体积；采样期；溶解铁或总铁浓度；处理边界；接收舱室 | 将代表性浓度与边界内处理后的相应不重叠排水体积配对 | kg | 采样和计量间隔 | 完整报告生产活动 | 报告过程及纳入的处理设施 | 按排放点汇总浓度与体积乘积且不得重复计算 | 流量计校准、实验室报告、排放日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化量 = 生产活动量 × 1,000 / 生产活动干燥合格产品质量 | 生产活动交换量和 `reference_product` 干质量 | 每 1,000 kg 干燥产品的交换量 |  |
| `calc_product_dry_mass` | `reference_product` 和干燥固体行 | 干质量 = 实测湿质量 ×（1 − 水分质量分数） | 湿质量、代表性水分分数 | kg 干质量 |  |
| `calc_sludge_dry_solids` | `atomization_sludge` | 干固体 = 湿污泥质量 × 干固体质量分数 | 湿态转移质量、干固体分数 | kg 干固体 |  |
| `calc_gas_mass` | 气体输入的可选支持披露 | 质量 = 参考体积 × 相同参考条件下有文件依据的密度 | 体积、气体身份、温度、压力、密度 | kg 支持值 |  |
| `calc_pm10_emission` | `pm10_air` | 控制后 PM10 = 实测浓度 × 干烟气体积，或有文件依据的未控制排放 ×（1 − 捕集效率）；每个排放源采用一种不重叠方法 | 场址测量或计算输入 | kg PM10 |  |
| `calc_fossil_co2_emission` | `fossil_co2_air` | 化石源二氧化碳 = 实测化石燃料量 × 有文件依据的碳含量 × 有文件依据的氧化与分子质量换算，或采用不重叠的直接烟道结果 | 燃料量、碳含量、氧化基准、采用时的直接烟道证据 | kg 化石源二氧化碳 |  |
| `calc_iron_to_water` | `iron_to_water` | 排放铁质量 = 匹配的净排水体积 × 实测溶解铁或总铁浓度 | 净排水体积、铁浓度、采样覆盖率 | kg 排入水体的铁 |  |
| `calc_mass_balance` | 生产活动物料平衡 | 闭合率 =（干燥产品 + 外部干燥固体输出 + 有文件依据的干库存增加）/（干燥金属输入 + 有文件依据的干库存减少） | 金属输入、产品、固体废物、库存变化 | 无量纲闭合率 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 验证 CPC 身份并声明材料类别、钢种、路线、形貌、粒度分布和干燥市场状态。 | 产品规格、分析证书、CPC 和海关边界来源 |
| `dq_route` | 过程清单 | 证明每个已纳入条件行均由声明路线实际使用，且每个不适用行均已省略。 | 工艺流程图、批次配方、运行日志 |
| `dq_measurement` | 前景数量 | 使用经校准的仪表或经核对的一手记录；披露共享仪表的估算和分配。 | 校准证书、记录、核对工作表 |
| `dq_temporal` | 所有前景数据 | 覆盖有代表性的生产活动，并说明报告日期、停机处理、异常运行和库存变化。 | 生产日历和运行日志 |
| `dq_completeness` | 材料、废物和直接排放行 | 核对原料、产品、内部回用、库存变化、外部转移和直接排放；调查物料平衡缺口。 | 签署的物料平衡审查和排放核对 |
| `dq_range_evidence` | 外部 QA 范围 | 如果没有两项相互独立且原文经核验、边界、单位和产品状态兼容的来源，不得发布外部数值范围。 | 来源审计和独立性键，或未解决的范围证据需求 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_state` | 参考产品和数据集元数据 | 声明范围内钢铁颗粒或粉末及其材料类别、钢种、路线、干燥状态、形貌、粒度分布、场址和报告期。 | `un-cpc-3-0-2025`; `uk-hmrc-iron-steel-classification-2022` |
| `validate_reference_amount` | 参考流和所有交换 | 要求 `reference_product` 在有文件依据的干质量基准上等于 1,000 kg，所有其他数量采用相同归一化。 |  |
| `validate_atomic_inventory` | 过程清单 | 要求每个交换均为一个具体物理、化学、废物或能源流；不得出现合并的公用工程、燃料、包装、废物、废水或排放类别。 |  |
| `validate_route_consistency` | 条件清单行 | 要求仅存在实际采用路线所适用的行；条件不适用的行应当不存在，不得以零值填充。 | `mathias-metal-powder-production-2024` |
| `validate_mass_balance` | 生产活动物料平衡 | 核对金属输入、干燥产品、内部回用、库存变化和外部固体输出，并调查和披露无法解释的差额。 |  |
| `validate_waste_and_emissions` | 外部废物和直接排放 | 要求每个外部废物、直接空气排放和直接水体排放均有去向或接收舱室以及测量或计算证据，且不与内部回用或控制装置捕集重复计算。 |  |
| `validate_uuid_state` | TianGong 引用 | 要求每个采用的 TianGong UUID 均直接核验为公开 `state_code=100`，覆盖基础名称、语言、类型、分类、属性、单位组、状态、地理、技术和备注；未解决行保持 UUID 为空并列入 manifest 审查元数据。 |  |
| `validate_source_provenance` | 外部证据 | 要求最终来源可解析为已核验原文的官方或同行评审资料；不得用发现阶段元数据或摘要作证据，任何外部范围均符合两项独立来源规则。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 干燥钢铁颗粒或粉末从厂门到厂门前景生产数据集 |
| downstream_use | 完成路线和参考流校验后，关联上游供应数据集以及下游产品系统或生命周期模型 |
| allowed_use | 材料类别、钢种、路线、干燥状态、粒度规格、地理、时期和前景证据兼容时的产品特定 LCA 建模 |
| excluded_use | 不得自动代理直接还原铁、镜铁以外的铁合金粉末、废钢铁、粉末冶金制品，或数据集未代表的路线和状态 |
| required_metadata | 规范 PCR ID；CPC 代码；产品类别和钢种；路线；干燥状态；形貌；粒度分布及测试方法；场址和地理；报告期；参考数量；供电限定信息；内部回用处理；分配；UUID 审计状态 |
| required_quality_disclosure | 仪表覆盖率、估算和共享仪表分配、物料平衡闭合、水分校正、废物去向、PM10 方法、缺失的精确 UUID 及未解决的范围证据需求 |
| update_trigger | 原料或钢种、生产路线、产品粒度规格、场址或供电、污染控制、分配、参考流 UUID 可用性或已核验范围证据发生实质变化 |

## 11. 数据源

| source_id | type | reference | original_text_verified | used_for | independence_key |
| --- | --- | --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》和《解释性说明》（2025）。[结构 CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv)；[解释性说明 PDF](https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf) | 是——直接读取了官方 CSV 行和 PDF 层级。 | CPC 41117 身份、文字表述以及与相邻初级铁形态的区分 | `unsd-cpc-ver-3-0-2025` |
| `uk-hmrc-iron-steel-classification-2022` | `official_guidance` | 英国税务海关总署，[钢铁分类指南](https://www.gov.uk/guidance/classifying-iron-and-steel)，2022 年 3 月 7 日更新 | 是——直接读取了官方原始页面。 | 税目 7205 的颗粒和粉末粒度边界、切丝制品纳入、生铁和镜铁定义及排除项 | `uk-hmrc-heading-7205-guidance-2022` |
| `mathias-metal-powder-production-2024` | `literature` | Mathias 等，“Metal powder as feedstock for laser-based additive manufacturing: From production to powder modification”，*Journal of Materials Research* 39, 19–47 (2024)。[DOI 10.1557/s43578-023-01271-8](https://doi.org/10.1557/s43578-023-01271-8) | 是——直接读取了同行评审全文。 | 生产路线分类；雾化顺序；水、空气、氮气、氩气和其他气体的作用；回收、干燥、筛分和后处理 | `mathias-et-al-jmr-2024` |
| `china-customs-tariff-2021` | `official_guidance` | 广州市商务局托管的官方税则附件，[2021 年税则 PDF](https://sw.gz.gov.cn/attachment/6/6733/6733943/6989367.pdf) | 是——直接读取了含税目 72.05 的官方 PDF 原页。 | 专业中文产品名称“生铁、镜铁及钢铁的颗粒和粉末” | `china-tariff-schedule-2021` |
