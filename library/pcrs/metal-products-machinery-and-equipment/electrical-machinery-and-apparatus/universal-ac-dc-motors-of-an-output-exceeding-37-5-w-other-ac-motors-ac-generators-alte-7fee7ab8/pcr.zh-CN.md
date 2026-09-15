---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.universal-ac-dc-motors-of-an-output-exceeding-37-5-w-other-ac-motors-ac-generators-alte-7fee7ab8
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 输出功率超过37.5瓦的交直流两用电动机；其他交流电动机；交流发电机（光伏发电机除外）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 类别 46112 完整旋转电机的出厂门前景数据包，包括输出功率超过 37.5 W 的交直流两用电动机、其他交流电动机以及非光伏交流发电机（交流发电机）。每个数据包应代表一种实际产品配置和生产路线；不得将电动机与发电机功能平均，也不得按技术变体和包装选择进行笛卡尔展开。

本记录不包括输出功率不超过 37.5 W 的电动机、其他直流电动机和直流发电机、光伏发电机、发电机组、旋转变流机、单独销售的零部件，以及安装、使用、维护、出厂后运输和报废阶段。牵引电机和永磁电机文献仅定性支持过程纳入，不定义全类别通用组成或数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.universal-ac-dc-motors-of-an-output-exceeding-37-5-w-other-ac-motors-ac-generators-alte-7fee7ab8` |
| classification_refs | CPC 3.0 `46112` |
| covered_products | 输出功率超过 37.5 W 的完整交直流两用电动机；其他完整交流电动机；完整非光伏交流发电机 |
| excluded_products | 不超过 37.5 W 的小型电动机；其他直流电动机和直流发电机；光伏发电机；发电机组；旋转变流机；单独销售的零部件 |
| representative_product | CPC 46112 中一种已声明配置的成品旋转电机 |
| production_route | 从外购材料/部件进厂到部件制造、装配、最终试验和包装 |
| market_state | 在制造场址门口已完工、试验合格、可销售并按声明状态包装的电机 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种已声明 CPC 46112 配置的成品旋转电机 |
| How much | 1 kg 净成品 |
| How well | 满足制造商声明的额定值及适用最终试验验收准则 |
| How long or cycle | 所报告制造批次或代表性报告期内的生产 |
| reference_flow_link | `finished_rotating_electrical_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 成品旋转电机 |
| 参考流属性 | Mass；`93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位；`93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 功能；拓扑；额定输出、额定电压和频率、相数、极数或转速、工作制、冷却、保护、效率、试验标准；净产品质量；制造地域和期间；是否使用永磁体和机械换向；包装状态 |

必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。1 kg 参考量用于发布质量归一化清单，并不表示不同功能、额定值、效率、工作制或寿命的产品在功能上等同。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_mass_inputs_outputs` | 固体/液体材料、产品、包装、废物及质量排放 | Mass | kg | 记录跨边界的校准净质量；扣除皮重和内部循环在制品。 |
| `mu_electricity` | `manufacturing_electricity`、`testing_electricity` | Net calorific value | MJ | 按 3.6 MJ/kWh 换算电表 kWh；不得把上游电网排放计入前景基本流。 |
| `mu_gases` | `natural_gas`、`industrial_oxygen` | Volume | m3 | 披露参考温度、压力和换算方法；不得混用标准体积和工况体积。 |
| `mu_reference_product` | `finished_rotating_electrical_machine` | Mass | kg | 采用出厂运输前的合格成品净质量；包装另行报告。 |
| `mu_normalization` | 每一行 | 该行流属性 | 每 kg 产品的该行单位 | 在同一期间和边界内汇总，再除以同期间的合格参考产品质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和部件进入制造场址时的状态 |
| starting_condition_role | 前景起点；外购投入的上游生产由链接的背景数据集表示 |
| product_classification_scope | CPC 3.0 `46112` 内一种实际完整电机 |
| recursive_input_rule | 未经转化而装入产品的外购完整 CPC 46112 电机作为产品投入记录，不在此前景边界内递归展开 |
| upstream_dataset_requirement | 每项外购投入和交付能源均链接具有代表性的供应数据；披露未解决代理 |
| disclosure | 声明过程、外包、场址、期间、分配、截断、配置、试验制度、包装状态及偏离 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_include_factory` | 两个前景过程 | 纳入接收、部件制造、适用的绕组/浸渍、装配、最终试验及包装，止于场址门口。 | `fleischer-et-al-2025-electric-mobility-production`; `iec-60034-1-2026`; `mahmouditabar-et-al-2025-ipm-lca` |
| `sb_background_inputs` | 外购投入 | 上游开采和制造不纳入前景，但必须链接背景数据集。 | `iso-14044-2006` |
| `sb_exclude_downstream` | 数据集 | 排除安装、使用、维护、出厂后运输和报废。 | `iso-14044-2006` |
| `sb_outsourcing` | 外包的范围内作业 | 通过供应商过程数据或有记录的服务投入纳入；不得仅因场外发生而省略。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture_and_assembly` | 部件制造与整机装配 | required | 始终纳入；仅记录声明路线实际使用的作业和条件交换 | 将外购投入转化为已装配电机 | 转入最终试验的合格装配件质量 |
| `final_test_and_packaging` | 最终试验与包装 | required | 始终纳入；包装行仅适用于声明出厂状态中的材料 | 试验并制备合格参考产品 | 1 kg 合格成品旋转电机 |

### 过程：部件制造与整机装配（`component_manufacture_and_assembly`）

#### 输入

##### 产品流

###### 无取向电工钢板（`electrical_steel_sheet`）

记录进入叠片或铁芯制造的外购电工钢。

- 选定流：无取向电工钢板
- 流属性/单位：Mass / kg
- 数量规则：外购净计量质量并分配至合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fleischer-et-al-2025-electric-mobility-production`; `mahmouditabar-et-al-2025-ipm-lca`

###### 绕组导体（`magnet_wire`）

记录定子或转子绕组消耗的绝缘导体。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：Mass / kg
- 数量规则：领用实测质量减去有记录的可复用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`fleischer-et-al-2025-electric-mobility-production`; `mahmouditabar-et-al-2025-ipm-lca`

###### 壳体或转子用铝铸造合金锭（`aluminium_ingot`）

仅在场内铸造铝件时记录指定牌号的铝铸造合金锭。

- 选定流：铝铸造合金锭
- 流属性/单位：Mass / kg
- 数量规则：炉料实测质量并分配至声明产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`fleischer-et-al-2025-electric-mobility-production`; `mahmouditabar-et-al-2025-ipm-lca`

###### 轴用钢（`carbon_steel_bar`）

记录场内制造轴所消耗的碳素钢棒材。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：Mass / kg
- 数量规则：领用实测质量减去可复用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`mahmouditabar-et-al-2025-ipm-lca`

###### 滚动轴承（`rolling_bearing`）

记录装入合格电机的外购滚动轴承。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：Mass / kg
- 数量规则：装入质量加可归属的报废轴承质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`mahmouditabar-et-al-2025-ipm-lca`

###### 电气绝缘纸（`electrical_insulation_paper`）

记录槽内或绕组中安装的电气级绝缘纸或绝缘纸板。

- 选定流：电气绝缘纸
- 流属性/单位：Mass / kg
- 数量规则：领用实测质量减去洁净可复用边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`fleischer-et-al-2025-electric-mobility-production`

###### 浸渍树脂（`epoxy_resin`）

仅在浸渍、灌封、粘接或涂覆中使用环氧树脂时记录。

- 选定流：环氧树脂 `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- 流属性/单位：Mass / kg
- 数量规则：混合投料减去有记录的可回收退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resin_batch_records`
- 来源：`fleischer-et-al-2025-electric-mobility-production`; `mahmouditabar-et-al-2025-ipm-lca`

###### 永磁体（`ndfeb_magnet`）

仅对已声明的永磁拓扑记录装入的钕铁硼磁体。

- 选定流：钕铁硼磁体 `a598b760-108c-4d70-93f9-59098959141e`
- 流属性/单位：Mass / kg
- 数量规则：装入质量加可归属的报废磁体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`mahmouditabar-et-al-2025-ipm-lca`

###### 碳刷（`carbon_brush`）

仅对采用机械换向的电机记录装入的碳刷。

- 选定流：碳刷
- 流属性/单位：Mass / kg
- 数量规则：装入质量加可归属的报废碳刷质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：

###### 制造用电（`manufacturing_electricity`）

记录范围内作业和辅助设备消耗的交付电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量耗电分配至范围内作业并按 3.6 MJ/kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

###### 场内热力作业用天然气（`natural_gas`）

仅在范围内炉窑、烘箱或供热直接消耗天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按披露参考条件计量并分配至范围内作业
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_meters`
- 来源：

###### 氧燃料作业用氧气（`industrial_oxygen`）

仅在范围内切割、焊接或热作业使用氧气时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按披露参考条件计量或根据钢瓶库存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_meters`
- 来源：

###### 清洗用工艺水（`process_water`）

仅在水洗或其他范围内湿法作业使用水时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量用量并披露体积转质量方法；扣除循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_cleaning_records`
- 来源：

###### 碱性清洗用氢氧化钠（`sodium_hydroxide`）

仅在路线使用碱性清洗槽时记录氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据溶液质量和实测浓度计算 NaOH 活性质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_cleaning_records`
- 来源：

##### 废物流

本过程无废物输入跨越边界。

##### 基本流

不预设基本流输入；如有场址特定资源取用，应另设经审计的原子交换。

#### 输出

##### 产品流

已装配电机是转入最终试验的内部流，不是出厂门产品交换。

##### 废物流

###### 钢废料（`steel_scrap`）

记录范围内切割、冲压和机加工产生并离场的分类钢废料。

- 选定流：钢废料 `db39c2c0-61a0-4dde-8d68-db5777fe25a8`
- 流属性/单位：Mass / kg
- 数量规则：出场称重质量扣除退回的可复用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

###### 废铜（`copper_scrap`）

记录绕线或连接作业产生并离场的分类导体废料。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：出场称重质量并分配至声明产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

###### 铝废料（`aluminium_scrap`）

仅在范围内铸造或机加工产生铝废料时记录。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：出场称重质量并分配至声明产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

###### 清洗废水（`cleaning_wastewater`）

仅在范围内水洗产生送往处理的废水时记录。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：计量或物料衡算排放量，不含循环槽液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_cleaning_records`
- 来源：

###### 未固化环氧树脂废物（`uncured_epoxy_waste`）

仅在适用树脂作业产生废弃未固化混合环氧树脂时记录。

- 选定流：未固化环氧树脂废物
- 流属性/单位：Mass / kg
- 数量规则：废弃混合树脂称重质量并分配至声明产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

##### 基本流

###### 直接化石源二氧化碳（`fossil_co2`）

仅记录前景边界内现场燃烧的直接化石源 CO2；排除上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气测量或有记录的燃料碳平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 非甲烷挥发性有机化合物（`nmvoc_to_air`）

仅在边界内有含溶剂树脂、涂覆或清洗作业时记录直接 NMVOC 排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：有组织/无组织测量或扣除捕集转移量的溶剂平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：最终试验与包装（`final_test_and_packaging`）

#### 输入

##### 产品流

###### 最终试验用电（`testing_electricity`）

记录最终例行或验收试验及辅助设备消耗的交付电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：试验台计量电量并按 3.6 MJ/kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_test`
- 来源：`iec-60034-1-2026`

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录声明出厂包装状态使用的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去有记录的可复用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_issues`
- 来源：

###### 木制托盘（`wooden_pallet`）

记录随产品交付的托盘；排除不作为包装离开系统的可回收托盘。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：不可回收托盘净领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_issues`
- 来源：

###### 低密度聚乙烯薄膜（`pe_ld_film`）

仅在使用 PE-LD 薄膜包裹或保护合格产品时记录。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：薄膜净领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品旋转电机
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_issues`
- 来源：

##### 废物流

本过程无废物输入跨越边界。

##### 基本流

不预设基本流输入。

#### 输出

##### 产品流

###### 合格成品旋转电机（`finished_rotating_electrical_machine`）

记录跨越出厂门的合格产品；每个数据包只覆盖一种声明配置。

- 选定流：成品旋转电机
- 流属性/单位：Mass / kg
- 数量规则：合格成品的校准净质量；参考量为 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格成品旋转电机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_test`
- 来源：`un-cpc-3-0-structure-2025`; `iec-60034-1-2026`

##### 废物流

如不合格品和包装废物跨越边界，应分别增加原子行；不得使用兜底总类。

##### 基本流

本过程不预设基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_avoid` | 共用作业和公用工程 | 优先采用仪表、批次、机器时间或直接材料追踪避免分配。 | `iso-14044-2006` |
| `al_physical` | 无法避免的共用交换 | 采用机器时间、炉料、加工质量或试验时间等有因果关系的物理驱动；不得默认按收入分配。 | `iso-14044-2006` |
| `al_scrap` | 可回收废物输出 | 在边界报告废物质量，不计避免负荷；下游回收另行披露。 | `iso-14044-2006` |
| `al_rejects` | 返工和不合格品 | 将可归属负荷计入合格产品分母，并保留内部返工能耗和损失。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `component_manufacture_and_assembly` | 电工钢 | 发票和库存台账 | 质量、牌号、批次、库存、退料 | 对账进料和库存 | kg | 每批；月结 | 连续 12 个月或有依据批次 | 纳入场址 | 按直接追踪计净消耗 | 发票、库存核对 |
| `cp_material_issues` | `component_manufacture_and_assembly` | 金属、导体、绝缘 | 领退料记录 | 领用/退回质量、牌号、订单 | 订单直接追踪 | kg | 每次领料 | 与产出一致期间 | 纳入场址 | 按产品计净领料 | ERP、称重、BOM |
| `cp_component_installation` | `component_manufacture_and_assembly` | 轴承、磁体、碳刷 | BOM 和报废记录 | 数量、单位质量、报废 | 数量乘实测质量或称重 | kg | 每订单 | 与产出一致期间 | 装配场址 | 装入加报废 | BOM、秤、报废单 |
| `cp_resin_batch_records` | `component_manufacture_and_assembly` | 环氧树脂 | 配料单 | 组分质量、退料、废弃 | 每批称重 | kg | 每批 | 与产出一致期间 | 树脂作业 | 净混合投入 | 批记录、校准 |
| `cp_energy_meters` | `component_manufacture_and_assembly` | 电力 | 电表时段记录 | 电表、时间、kWh、驱动量 | 分表与总表核对 | MJ | 连续 | 连续 12 个月或有依据批次 | 纳入作业 | 换算并按物理量分配 | 校准、核对 |
| `cp_gas_meters` | `component_manufacture_and_assembly` | 天然气和氧气 | 仪表/钢瓶记录 | 体积、条件、作业 | 计量或库存差 | m3 | 每次交付/时段 | 与产出一致期间 | 热力作业 | 统一参考条件后分配 | 证书、交付单 |
| `cp_water_and_cleaning_records` | `component_manufacture_and_assembly` | 水、NaOH、废水 | 仪表和槽液记录 | 水、溶液、浓度、排放 | 计量加槽液平衡 | kg | 每槽；月结 | 与产出一致期间 | 湿法作业 | 排除循环量 | 校准、检测、排放单 |
| `cp_waste_dispatch` | `component_manufacture_and_assembly` | 废物 | 转移记录 | 类型、净质量、去向、日期 | 出场称重 | kg | 每次转移 | 与产出一致期间 | 纳入场址 | 按致因作业汇总 | 磅单、转移联单 |
| `cp_direct_emissions` | `component_manufacture_and_assembly` | CO2 和 NMVOC | 测试或平衡 | 浓度、流量、燃料碳、溶剂、捕集 | 测量或有记录平衡 | kg | 测试/平衡期间 | 与产出一致期间 | 排放点 | 仅直接排放 | 测试、燃料、溶剂记录 |
| `cp_final_test` | `final_test_and_packaging` | 试验电力和产出 | 试验记录 | 产品、结果、kWh、质量、报废 | 序列/批次关联仪表和秤 | MJ; kg | 每台/批 | 与产出一致期间 | 试验场址 | 合格产出加报废负荷 | 报告、校准 |
| `cp_packaging_issues` | `final_test_and_packaging` | 包装 | 领退料记录 | 类型、数量、质量、回收性 | 直接追踪 | kg | 每发运批 | 与产出一致期间 | 包装场址 | 仅出厂状态包装 | 记录、规格 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material` | 材料投入 | 净消耗 = 收料或领料 + 期初库存 - 期末库存 - 可复用退料 | 质量和库存记录 | kg 投入 | `iso-14044-2006` |
| `calc_normalize` | 所有行 | 归一化量 = 分配后期间数量 / 合格产品质量 | 行数量、产品质量 | 每 kg 产品的行单位 | `iso-14044-2006` |
| `calc_electricity` | 电力 | MJ = kWh × 3.6 | kWh | MJ |  |
| `calc_solution_active` | `sodium_hydroxide` | 活性质量 = 溶液质量 × 实测质量分数 | 溶液和浓度 | kg NaOH |  |
| `calc_mass_balance` | 主要材料 | 投入 = 产品带入 + 废物 + 库存变化 + 有记录排放/损失；调查残差 | 投入/产出/库存 | 已核对质量 | `iso-14044-2006` |
| `calc_direct_co2` | `fossil_co2` | 采用测量值，或燃料 × 碳含量 × 氧化率 × 44/12 | 燃料/碳数据 | kg 化石源 CO2 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_temporal` | 前景行 | 使用一致期间，通常连续 12 个月；说明较短生产期和排除项。 | 带日期记录和核对 |
| `dq_technology` | 数据集 | 匹配拓扑、额定值、工艺路线、控制和试验制度；不得泛化牵引电机证据。 | 规格和工艺路线 |
| `dq_geography` | 前景/背景 | 识别场址并选择匹配供应商地域和技术的上游数据。 | 场址清单和选择记录 |
| `dq_completeness` | 交换 | 核对投入、产出、废物和库存；记录所有截断。 | 物料/能源平衡和截断清单 |
| `dq_units` | 测量 | 保留原始单位、系数、气体条件、浓度和校准状态。 | 原始导出和证书 |
| `dq_uuid` | 已链接流 | 保留经审计身份、类型、属性、单位组和状态；六项缺口在审计前保持未解决。 | 搜索回执和直接读取 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 产品身份 | 产品是一台完整 CPC 46112 电机，且不是排除产品或零件。 | `un-cpc-3-0-structure-2025` |
| `val_reference` | 参考流 | 参考输出为 1 kg 合格产品，且披露所有限定信息。 | `iec-60034-1-2026` |
| `val_processes` | 过程图 | 两个过程均存在；条件行在适用时纳入，否则有不适用证据。 |  |
| `val_atomicity` | 清单 | 每行仅一个原子交换；不得使用公用工程、包装、废物或排放总类。 |  |
| `val_units` | 清单 | 含 UUID 行使用审计属性/单位组；电力为 MJ、气体为 m3、质量行为 kg。 |  |
| `val_balance` | 清单 | 产品和材料记录在披露容差内核对，并调查残差。 | `iso-14044-2006` |
| `val_direct_emissions` | 基本流输出 | 前景 CO2 和 NMVOC 仅为直接排放，不重复上游排放。 |  |
| `val_allocation` | 共用作业 | 共用作业采用有记录的因果物理驱动量分配。 | `iso-14044-2006` |
| `val_ranges` | 外部范围 | 无两份独立、原文核验且边界兼容来源时不得发布外部范围。 |  |
| `val_uuid_gaps` | UUID 空缺行 | 六个 UUID 空缺行保持未解决，不得填入未经审计代理。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种声明 CPC 46112 电机的出厂门前景清单规则 |
| downstream_use | TianGong 流、过程和生命周期模型的构建与审查 |
| allowed_use | 质量归一化清单；仅在另行确认功能等效后用于比较 |
| excluded_use | 跨功能、额定值、工作制、效率、寿命或技术的无条件比较；下游阶段声明 |
| required_metadata | 限定信息、规格、场址/期间、过程覆盖、外包、分配、截断、背景选择、UUID 状态 |
| required_quality_disclosure | 一手数据覆盖、校准、平衡残差、分配、缺口、代理、不确定性及无外部范围 |
| update_trigger | 拓扑、额定值、制造路线、场址、能源、控制、试验、包装或 UUID/范围证据变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 结构》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 46112 身份及相邻类别排除 |
| `iec-60034-1-2026` | standard | IEC 60034-1:2026，Rotating electrical machines — Part 1: Rating and performance。https://webstore.iec.ch/en/publication/89961 | 额定值限定信息和最终试验 |
| `fleischer-et-al-2025-electric-mobility-production` | literature | Fleischer 等（2025），Production technologies and systems for electric mobility，CIRP Annals 74，1047–1072。https://doi.org/10.1016/j.cirp.2025.05.001 | 电机制造顺序的定性证据 |
| `mahmouditabar-et-al-2025-ipm-lca` | literature | Mahmouditabar 等（2025），Multi-Physics LCA-Based Design Optimization of an Interior Permanent Magnet Motor for EVs，Energies 18，6167。https://doi.org/10.3390/en18236167 | 部件身份的定性证据 |
| `iso-14044-2006` | standard | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines。https://committee.iso.org/standard/38498.html | LCA 范围、清单、报告、一致性和审查框架 |
