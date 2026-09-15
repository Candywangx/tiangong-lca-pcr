---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-generating-sets-and-rotary-converters
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 发电机组及旋转式变流机

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 46114 下完整发电机组及旋转式变流机的工厂门生产；联合国官方说明将该子类界定为 HS 2022 品目 8502。范围包括以明确原动机驱动的发电机组、风力发电机组、其他完整发电机组，以及作为可销售设备的机电式旋转变流机。中文标题采用中国官方统计分类使用的专业术语。

前景边界从采购的材料、组件、燃料、公用工程和包装进入制造场址开始，到一台完整产品通过出厂验收为止。不包括安装、出厂后配送、运行、维护和寿命终止阶段；也不包括单独的电动机、发电机或交流发电机、光伏发电机、静止式变流器、变压器、零件和发电服务。

经核证的 Cummins 发电机组 EPD 证明产品会因额定功率、频率、负载工况和设计而变化，并将组件供应、装配、能源、水、排放及包装列为生产阶段要素。该单一案例的数值不作为全类别范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-generating-sets-and-rotary-converters |
| classification_refs | CPC 3.0: 46114（精确分类语境） |
| covered_products | 由明确原动机驱动的完整发电机组；风力发电机组；其他完整发电机组；完整机电式旋转变流机 |
| excluded_products | 单独的电动机；发电机或交流发电机；光伏发电机；静止式变流器；变压器；单独供应的零件；发电服务 |
| representative_product | 按已声明可销售配置完成出厂试验的一台完整发电机组或旋转式变流机 |
| production_route | 材料/组件接收；场内制造、绕组和表面处理（如实施）；装配；加注；出厂验收试验；随产品供应的运输包装 |
| market_state | 制造场址门口完整、通过出厂试验且可销售的设备，并声明包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一台能够实现所声明电气功能的完整发电机组或旋转式变流机 |
| How much | 一台完整可销售产品 |
| How well | 满足声明的额定有功/视在功率、电压、频率、工况或变流配置及验收准则 |
| How long or cycle | 一个制造批次和最终验收事件；支持使用阶段比较时声明使用寿命 |
| reference_flow_link | 已验收输出行 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 发电机组或旋转式变流机（Tiangong UUID 未解决） |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 产品子类型；原动机或变流配置；额定 kW 和 kVA；输入/输出电压；频率；功率因数；工况或运行制度；冷却与外壳；干质量；验收准则；场址和年份；包装状态；用于服务比较时的使用寿命 |

所有必需限定信息必须写入数据集元数据、产品说明、过程备注或等效字段；信息缺失时不得比较实质上不同的配置。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计数通过声明验收试验的完整产品；电动机、交流发电机、发动机、转子或子组件均不是参考产品。 |
| `product_mass_reconciliation` | BOM、成品和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录产品干质量和包装质量，并在一致基准上核对投入、产品留存、退料、废物和在制品。 |
| `electricity_energy_conversion` | 制造用电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始数据，按 1 kWh = 3.6 MJ 精确换算；试验期间输出的电力另行记录。 |
| `gas_volume_reference` | 天然气和氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度、压力、干湿基准和校正，并保留排放计算所需的组成或碳含量。 |
| `water_mass_conversion` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按体积计量时，保留原始体积并记录换算为 kg 所用密度和参考条件。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 适用时纳入采购材料/组件及其上游数据集、场内制造/绕组、清洗/涂装、装配、加注、试验、直接排放、废物及随产品供应的包装。 | `cummins-qsk95-epd-2026` |
| `boundary_excluded_stages` | 下游阶段 | 除非另行扩展研究，否则排除出厂后配送、客户现场安装/调试、运行、维护和寿命终止。 | `cummins-qsk95-epd-2026` |
| `boundary_additional_atomic_flows` | 产品特定清单 | 每项额外材料、组件、燃料、化学品、包装物、废物和基本流排放必须新增独立交换，不得汇总为其他材料、公用工程或废物。 |  |
| `boundary_supplier_linking` | 采购产品 | 每项采购投入应连接身份、状态、地理、技术和时间均具代表性的数据集；除非有原始记录，否则供应商控制的生产属于上游。 |  |
| `boundary_direct_test_emissions` | 燃料驱动的出厂试验 | 仅在前景边界内燃烧燃料时纳入试验燃料和直接燃烧排放；不得重复计入燃料供应数据集已有的上游排放。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购材料、组件、燃料、公用工程和包装已送达制造场址 |
| starting_condition_role | 前景制造门口投入 |
| product_classification_scope | CPC 3.0 子类 46114 的完整产品，不含单独零件或发电服务 |
| recursive_input_rule | 完整 CPC 46114 产品作为投入时保持可见，并连接独立上游数据集，不递归展开本 PCR |
| upstream_dataset_requirement | 匹配身份、状态、地理、技术和时间；披露代理数据并开展敏感性分析 |
| disclosure | 产品子类型、配置、场址、年份、自制/外购边界、试验工况、包装状态、排除项和代理数据 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `final_manufacturing_assembly_test` | 最终制造、装配、出厂试验和运输包装 | required | 每种产品均纳入；只有该原子交换跨越边界时才适用对应流卡。 | 前景生产 | 工厂门口一台完整验收合格产品 |

### 过程：最终制造、装配、出厂试验和运输包装（`final_manufacturing_assembly_test`）

#### 输入

##### 产品流

###### 钢制底座框架（`steel_base_frame`）

记录为本产品接收或制造的钢制底座框架；其他钢制品分别新增行。

- 选定流：钢制底座框架（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量安装质量；可归因制造损失另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：

###### 铝制外壳面板（`aluminium_enclosure_panel`）

仅在产品包含铝制外壳面板时记录，不得用混合金属外壳代替。

- 选定流：铝制外壳面板（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量或供应商声明的安装面板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：

###### 绝缘绕组导体（`magnet_wire`）

电磁线跨越场址边界或领用于场内绕组时适用。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：Mass / kg
- 数量规则：领料质量减去有记录的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：

###### 电气绝缘树脂（`epoxy_resin`）

边界内采用环氧树脂浸渍、浇注、粘结或绝缘时适用。

- 选定流：环氧树脂 `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- 流属性/单位：Mass / kg
- 数量规则：批次领料减可回收退料，分配给该批合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：

###### 制造用电（`electricity`）

纳入制造、绕组、表面处理、装配、辅助设施和试验用电；单独计量的试验输出电力予以分开。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按分表或因果驱动分配的计量用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utilities`
- 来源：

###### 工艺用水（`process_water`）

清洗、冷却补水、水压试验或其他声明工序使用时适用；排除生活用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量的可归因用量，必要时记录体积到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utilities`
- 来源：

###### 热切割用氧气（`industrial_oxygen`）

仅在边界内进行耗氧工序时适用。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：校正后的流量计或交付体积，分配给处理的合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utilities`
- 来源：

###### 碱洗用氢氧化钠（`sodium_hydroxide`）

仅用于前景碱洗时适用；报告氢氧化钠质量而非溶液总质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：分配给合格产品的采购或补加氢氧化钠质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：

###### 工艺供热或出厂试验用天然气（`natural_gas`）

场内燃气供热或燃气机组试验时适用；原始记录中区分用途。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：声明参考条件下校正后的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_fuels`
- 来源：

###### 出厂试验用柴油（`diesel_fuel`）

出厂试验燃烧柴油时适用；排除客户运行。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：期初库存加接收量，减期末库存、退料和无关领料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_fuels`
- 来源：

###### 产品加注或试验用润滑油（`lubricating_oil`）

原始记录应区分产品留存的加注油和排出的废油。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：领料质量减未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：

###### 木制运输托盘（`wooden_pallet`）

仅在托盘随产品跨越工厂门时适用；薄膜、木箱、干燥剂和紧固件另行记录。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：随产品供应的托盘计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整验收合格参考产品（`reference_product`）

仅记录通过验收的完整产品；全类别 Tiangong UUID 尚未解决。

- 选定流：发电机组或旋转式变流机（Tiangong UUID 未解决）
- 流属性/单位：Number of items / Item(s)
- 数量规则：恰好一台完整验收合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：一个 PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_acceptance`
- 来源：

##### 废物流

###### 排放的废润滑油（`waste_lubricating_oil`）

仅适用于试验、冲洗或不合格加注产生并离开过程的废油；产品留存油不是废物。

- 选定流：废润滑油 `9c1267ee-ba26-4c53-9643-89ae0c5764c4`
- 流属性/单位：Mass / kg
- 数量规则：分配给试验批次的容器净质量或废物联单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

###### 天然气直接燃烧的化石二氧化碳（`fossil_co2_natural_gas`）

仅计场内直接排放；上游供应排放保留在天然气数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_direct_fossil_co2` 由天然气量、组成/碳含量和氧化率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_fuels`
- 来源：

###### 柴油直接燃烧的化石二氧化碳（`fossil_co2_diesel`）

仅计场内试验直接排放；上游供应排放保留在柴油数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_direct_fossil_co2` 由柴油质量、碳含量和氧化率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台完整验收合格参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_fuels`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享制造和试验 | 首先通过直接计量、批次隔离、过程细分或系统扩展避免分配。 | `eu-pef-method-2021` |
| `allocation_physical_driver` | 剩余共享负荷 | 无法细分时，采用设备时间、试验时间、计量能源或加工质量等有记录的因果驱动。 | `eu-pef-method-2021` |
| `allocation_other_relationship` | 不存在物理关系 | 仅在说明前述方案均不可行后采用其他关系；披露因子并开展敏感性分析。 | `eu-pef-method-2021` |
| `allocation_scrap` | 可回收生产废料 | 废料作为废物流连接接收处理；本工厂门清单内不扣除避免的原生材料信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_packaging` | `final_manufacturing_assembly_test` | 安装材料和包装 | BOM 和供应商记录 | 配置；身份；领料、退料、安装和包装质量 | ERP、秤和供应商规格核对 | kg/item | 每种配置 | 代表年份 | 场址和供应商 | 各物品分别求和并按合格产品归一化 | 已发布 BOM；校准；供应商声明 |
| `cp_material_issue` | `final_manufacturing_assembly_test` | 化学品和加注材料 | 领退料记录 | 身份；等级；期初；接收；领料；退料；期末；合格数量 | 库存核对和批次单 | kg/item | 批次或月度 | 代表年份 | 前景场址 | 期初加接收减期末、退料和无关领料 | 库存核对；规格 |
| `cp_site_utilities` | `final_manufacturing_assembly_test` | 电、水、氧气 | 计量或交付记录 | 仪表；读数；单位；条件；校正；停机；数量；驱动 | 分表或仪表平衡 | MJ/item; kg/item; m3/item | 批次或月度 | 代表年份 | 前景场址 | 扣除无关用量后按仪表或因果驱动分配 | 校准；发票；仪表图 |
| `cp_test_fuels` | `final_manufacturing_assembly_test` | 试验燃料和直接 CO2 | 试验、领料和燃料规格记录 | 序列号；时长；负载；燃料；条件；组成/碳；氧化；输出电力 | 试验台计量和库存平衡 | kg/item; m3/item; kg CO2/item | 每次试验 | 代表年份 | 试验台 | 汇总可归因燃料并分别计算各 CO2 流 | 校准；试验记录；规格 |
| `cp_product_acceptance` | `final_manufacturing_assembly_test` | 完整产品 | 验收/放行记录 | 序列号；子类型；配置；额定值；工况；质量；结果；包装 | 受控验收记录 | Item(s) | 每台 | 代表年份 | 制造场址 | 仅计放行且合格产品 | 签署证书；放行；校准 |
| `cp_waste_records` | `final_manufacturing_assembly_test` | 废油 | 称量和联单 | 身份；皮重/毛重；期间；批次；去向；处理 | 称量与联单核对 | kg/item | 每批出运 | 代表年份 | 前景场址 | 净质量分配给因果批次且不计信用 | 校准；联单；容器记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_item_normalization` | 所有行 | 可归因数量 / 所代表的验收合格产品数 | 数量；合格产品；分配驱动 | 每台流数量 |  |
| `calc_electricity_mj` | 电力 | 校正 kWh × 3.6 | 电表 kWh | MJ/item |  |
| `calc_water_mass` | 体积计量水 | 校正体积 × 记录的密度 | 体积；密度；条件 | kg/item |  |
| `calc_direct_fossil_co2` | 场内燃烧 | 燃料质量 × 化石碳质量分数 × 氧化率 × 44/12；气体换算采用声明组成和条件 | 燃料质量/体积；密度/组成；碳；氧化率 | kg 化石 CO2/item |  |
| `calc_material_reconciliation` | 材料和损失 | 投入 = 产品留存 + 退料 + 废物 + 排放 + 期末在制品 | BOM；领退料；产品/包装；废物；在制品 | 差额和完整性标志 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留序列号/型号和全部限定信息；不同产品不得在缺少配置特定归一化时平均。 | 验收证书和规格；`cummins-qsk95-epd-2026` |
| `dq_temporal` | 前景记录 | 使用有代表性的连续一年，或披露较短期间和变异性；每项记录均注明日期。 | 仪表、ERP、试验和联单记录 |
| `dq_completeness` | BOM 和场址清单 | 核对至少 99% 的产品干质量和随附包装质量；逐项列出排除质量和理由。 | 签署的质量平衡审查和排除清单 |
| `dq_metering` | 公用工程和试验燃料 | 记录边界、校准、校正、条件、停机、返工、不合格试验、输出电力和共享服务。 | 校准证书、仪表图和核对表 |
| `dq_supplier_data` | 采购投入 | 优先采用当前供应商数据；否则披露代表性并对材料代理开展敏感性分析。 | 供应商元数据和代理审查 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 确认一台验收合格产品及其子类型、电气、工况/配置、质量、场址、年份和包装限定信息。 | `cummins-qsk95-epd-2026` |
| `validate_inventory_atomicity` | 清单 | 拒绝合并标签；每行只有一个身份、属性、单位、方向、数量规则和适用条件。 |  |
| `validate_boundary` | 系统边界 | 确认上游连接、前景工序、试验排放、包装和排除项遵守工厂门边界且无重复。 | `cummins-qsk95-epd-2026` |
| `validate_mass_balance` | 材料和包装 | 执行 `calc_material_reconciliation`，调查差额并披露排除项。 |  |
| `validate_allocation` | 场址共享数据 | 确认首先尝试细分，并记录剩余驱动、因子和敏感性。 | `eu-pef-method-2021` |
| `validate_uuid_resolution` | 未解决流 | 在确认语义、属性和单位匹配的公开 state-100 精确结果前，`reference_product`、`steel_base_frame` 和 `aluminium_enclosure_panel` 的 UUID 保持空缺。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一台完整发电机组或旋转式变流机的前景制造清单数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 配置、功能、边界、地理、技术和时间相容的建模 |
| excluded_use | 额定值、工况、寿命、技术、变流功能或边界不同的直接比较；无下游模型的使用阶段声明 |
| required_metadata | PCR id/version；子类型；配置；额定值；工况；干质量；场址/年份；自制/外购边界；试验工况；分配；包装；未解决 UUID；来源/代理 |
| required_quality_disclosure | 时间、计量、质量平衡和分配覆盖；不合格试验/返工处理；供应商代表性；排除项；范围需求；敏感性 |
| update_trigger | 设计、额定值、场址、能源/燃料、供应商组合、试验、包装、分配、数据时效或已解决身份发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，CPC 3.0 解释性说明，2025-06-30；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-09-04） | 类别身份及 HS 2022 品目 8502 边界 |
| `china-nbs-statistical-product-classification-2010` | official_guidance | 中华人民共和国国家统计局，《统计用产品分类目录》；https://www.stats.gov.cn/sj/tjbz/tjypflml/2010/39.html（检索于 2026-09-04） | 专业中文术语 |
| `cummins-qsk95-epd-2026` | dataset | Cummins Inc.，Environmental Product Declaration: Cummins QSK95 Series Open Diesel Generator Set，EPD-IES-0025774，2026-03-31；https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/10fb072a-4359-48aa-b53e-08ddf1520762/Documents（检索于 2026-09-04） | 配置、过程分解、边界和质量语境；不用于推导范围 |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，section 4.5；https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-09-04） | 分配层级 |
