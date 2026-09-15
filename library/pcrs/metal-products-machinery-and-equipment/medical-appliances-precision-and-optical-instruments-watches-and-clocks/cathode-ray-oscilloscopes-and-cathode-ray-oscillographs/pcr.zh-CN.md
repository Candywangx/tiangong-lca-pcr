---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.cathode-ray-oscilloscopes-and-cathode-ray-oscillographs
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 阴极射线示波器和阴极射线录波器

## 1. 范围与适用性

本 PCR 适用于以阴极射线管显示波形的完整电气测试测量仪器的工厂大门生产，包括形成永久阴极射线波形记录的仪器。不包括不使用阴极射线显示的数字或液晶示波器、独立阴极射线管、显示器、电视机、通用仪表、探头和附件，以及维修、使用与报废处理。适用市场状态为带销售包装的新制成品；翻新产品必须另行声明路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.cathode-ray-oscilloscopes-and-cathode-ray-oscillographs |
| classification_refs | CPC 3.0：48242（精确分类语境） |
| covered_products | 完整阴极射线示波器；显示并记录电波形的完整阴极射线录波器 |
| excluded_products | 无阴极射线显示的数字/液晶示波器；独立阴极射线管；显示器；电视机；探头；零部件；附件；维修服务；翻新仪器 |
| representative_product | 已包装、已校准并可供销售的阴极射线示波器 |
| production_route | 外购组件接收、仪器机电装配、校准与电气安全测试、保护性包装 |
| market_state | 制造商工厂大门处全新、完整且带包装的仪器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将输入信号显示为阴极射线波形，并在适用时记录波形的完整阴极射线示波器或阴极射线录波器 |
| How much | 1 kg 带包装参考产品 |
| How well | 符合所声明型号规格，且已通过校准、功能测试和适用的测量电路安全测试 |
| How long or cycle | 完成一次制造周期并放行至工厂大门；使用寿命不在边界内 |
| reference_flow_link | `finished_instrument` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 阴极射线示波器和阴极射线录波器 `0b3b194a-85eb-4034-8599-9f44eb63f98b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；示波器或录波器；模拟带宽；通道数；记录能力；CRT 类型与尺寸；电源额定值；适用测量电路类别；校准状态；是否含包装；生产地域；生产期间 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 带包装参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用校准秤确定带包装产品净质量；包括销售包装，不包括托盘和可重复使用运输工装。 |
| `component_mass` | 材料、组件投入和废物产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将收货、领用、退料和废物记录换算为一致的质量基准并披露该基准。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 1 kWh = 3.6 MJ 换算计量电量；披露电压、电网地域、损耗和电表分配。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购 CRT、线路板、外壳、导体、包装和电力跨越制造场址接收边界 |
| starting_condition_role | 供应给前景仪器制造系统的从摇篮到大门上游产品 |
| product_classification_scope | 完整阴极射线示波器和阴极射线录波器，不因具体型号带宽或通道数而改变 |
| recursive_input_rule | 为装入或再制造而进入的同类仪器作为单独投入并关联自身上游数据集，不得隐含并入参考产品 |
| upstream_dataset_requirement | 每项外购产品与能源投入均需地域和技术具有代表性的上游数据集，否则明确数据缺口 |
| disclosure | 披露外购与自制组件边界、线路板装配状态、CRT 类型、外壳材料、包装配置、返工、测试时长、电力分配、排除项和截断 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造 | 纳入组件接收、仪器装配、校准和电气安全测试、包装、直接废物及带包装产出。 | `us-epa-desktop-computer-displays-lca-2001`; `iec-61010-2-030-2017` |
| `boundary_rule_2` | 外购投入 | CRT、线路板、金属、塑料、铜、包装和电力的上游生产置于关联上游数据集，不在前景装配中重复。 | `us-epa-desktop-computer-displays-lca-2001` |
| `boundary_rule_3` | 排除项 | 排除资本设备、员工出行、分销、使用、维修和报废；若扩展边界，应单独报告。 | `eu-jrc-ilcd-lca-detailed-guidance-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `instrument_assembly` | 仪器机电装配 | required | 所有产品 | 前景生产 | 送往测试的装配产品 kg |
| `calibration_and_safety_test` | 校准、功能测试和电气安全测试 | required | 所有产品；测试方案遵循声明的型号和市场要求 | 前景调试 | 送往包装的合格产品 kg |
| `protective_packaging` | 保护性包装 | required | 仅记录声明配置中实际存在的各包装组件 | 前景包装 | 1 kg 带包装参考产品 |

### 过程：仪器机电装配（`instrument_assembly`）

#### 输入

##### 产品流

###### 阴极射线管（`cathode_ray_tube`）

记录领用至装配的成品管，并保留规格和供应商信息。

- 选定流：阴极射线管
- 流属性/单位：Mass / kg
- 数量规则：领用质量减未使用退料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass`
- 来源：`us-epa-desktop-computer-displays-lca-2001`

###### 印制线路板（`printed_wire_board`）

记录装配领用的线路板，并保留装配状态和功能。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：实测装入线路板净质量；声明裸板或装配板状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass`
- 来源：`us-epa-desktop-computer-displays-lca-2001`

###### 屏蔽件和机壳件用钢板（`steel_sheet`）

仅在钢板装入屏蔽件、底盘或机壳件时记录本交换。

- 选定流：钢板
- 流属性/单位：Mass / kg
- 数量规则：实测装入钢板质量；仅在实际使用时记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass`
- 来源：`us-epa-desktop-computer-displays-lca-2001`

###### 塑料外壳（`plastic_housing`）

记录装配领用的完整外壳，并保留聚合物组成。

- 选定流：塑料外壳 `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- 流属性/单位：Mass / kg
- 数量规则：实测装入外壳净质量；披露聚合物和再生含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass`
- 来源：`us-epa-desktop-computer-displays-lca-2001`

###### 铜线材（`copper_wire`）

记录外购线路板和 CRT 子组件以外装入的线材，避免重复。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass / kg
- 数量规则：实测外购线路板和 CRT 子组件以外的装入铜线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass`
- 来源：`us-epa-desktop-computer-displays-lca-2001`

###### 装配电力（`assembly_electricity`）

记录可归属机电装配的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：经分配的装配计量电量，换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 破碎阴极射线管玻璃（`broken_crt_glass`）

因组成与处置不同于普通玻璃，单独记录破碎 CRT 玻璃。

- 选定流：破碎阴极射线管玻璃废物
- 流属性/单位：Mass / kg
- 数量规则：实测从装配线转出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste`
- 来源：`us-epa-desktop-computer-displays-lca-2001`

###### 废弃装配印制线路板（`waste_populated_pwb`）

记录送往场外回收或处理前报废的装配线路板。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass / kg
- 数量规则：实测报废装配线路板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste`
- 来源：`us-epa-desktop-computer-displays-lca-2001`

###### 聚苯乙烯外壳废料（`polystyrene_housing_scrap`）

外壳废料与包装废物分开记录。

- 选定流：聚苯乙烯外壳废料
- 流属性/单位：Mass / kg
- 数量规则：实测外壳废料质量；与包装废物分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste`
- 来源：`us-epa-desktop-computer-displays-lca-2001`

##### 基本流

### 过程：校准、功能测试和电气安全测试（`calibration_and_safety_test`）

#### 输入

##### 产品流

###### 测试电力（`test_electricity`）

记录仪器和测试设备通电所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：仪器和测试设备通电所用计量电力，经分配并换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`
- 来源：`iec-61010-2-030-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：保护性包装（`protective_packaging`）

#### 输入

##### 产品流

###### 瓦楞纸板箱（`corrugated_box`）

记录随可售仪器交付的成型瓦楞纸箱。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：实测消耗质量减未使用退料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`

###### 发泡聚苯乙烯保护包装（`expanded_polystyrene_packaging`）

在声明包装配置中实际存在模塑内衬时记录。

- 选定流：发泡聚苯乙烯保护包装
- 流属性/单位：Mass / kg
- 数量规则：实测内衬消耗质量减退料；仅在实际使用时记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 带包装成品仪器（`finished_instrument`）

仅记录带声明销售包装并已放行的合格仪器。

- 选定流：阴极射线示波器和阴极射线录波器 `0b3b194a-85eb-4034-8599-9f44eb63f98b`
- 流属性/单位：Mass / kg
- 数量规则：固定归一化产出 1 kg 带包装参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 带包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 可分过程 | 分别计量装配、测试和包装，并直接归属型号特定组件领用，以避免分配。 | `eu-jrc-ilcd-lca-detailed-guidance-2010` |
| `allocation_rule_2` | 共用公用工程和废物 | 按实测设备时间、测试时间、质量或其他因果物理驱动分配共用电力与废物，并披露驱动。 | `eu-jrc-ilcd-lca-detailed-guidance-2010` |
| `allocation_rule_3` | 可售废料 | 分别报告总投入、装入质量、废料产出和回收抵扣；无明确方法不得扣除收入或避免负荷。 | `eu-jrc-ilcd-lca-detailed-guidance-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_mass` | `instrument_assembly` | 组件投入 | ERP 领退料与 BOM | 型号；批次；组件；领用；退料；线路板状态；供应商 | 对账库存移动并抽样称量 | kg | 每批；按月汇总 | 12 个代表性月份或完整生产期 | 所有范围内装配线 | 净领用质量/包装产出质量 | 秤校准；库存对账；BOM 版本 |
| `cp_process_electricity` | `instrument_assembly`; `calibration_and_safety_test` | 过程电力 | 分表或分配的总表 | 起止读数；过程时间；产出；驱动 | 读取校准电表，尽可能分开装配和测试 | kWh | 每班或每批 | 与生产相同 | 所有产线和测试工位 | kWh×3.6/包装产出质量 | 电表校准；分配表；停机日志 |
| `cp_assembly_waste` | `instrument_assembly` | 装配废物 | 标识容器与转移记录 | 身份；组成；毛重；皮重；净重；去向 | 转移前逐流称量 | kg | 每次转移 | 与生产相同 | 所有装配线 | 各流净重/包装产出质量 | 秤校准；联单；回收证明 |
| `cp_packaging_mass` | `protective_packaging` | 销售包装 | 领退料记录 | 组件；材料；领用；退料；产出 | 库存对账并抽样称量 | kg | 每批；按月汇总 | 与生产相同 | 所有包装线 | 净消耗/包装产出质量 | 秤校准；规格；对账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material` | 组件和包装行 | （领用质量-未使用退料质量）/放行包装产品质量 | 领退料与产出记录 | kg/kg 参考产品 |  |
| `calc_electricity` | 电力行 | （计量 kWh×3.6）/放行包装产品质量 | 电表与产出质量 | MJ/kg 参考产品 |  |
| `calc_waste` | 废物行 | Σ（容器毛重-皮重）/放行包装产品质量 | 容器重量与产出 | kg/kg 参考产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有流 | 保留供应等级、组件状态、聚合物、CRT 组成、去向和 UUID 决定；不得使用集合流。 | 规格、BOM、联单、UUID 审计 |
| `dq_temporal` | 前景清单 | 使用 12 个代表性月份或完整生产期；披露停产、试制和异常废品。 | 带日期电表、ERP、生产与废物记录 |
| `dq_completeness` | 平衡 | 对账合格产出、废品、退料和废物；解释残差和截断。 | 对账表和签字审查 |
| `dq_measurement` | 秤和电表 | 使用校准期内仪器，保留状态、分辨率和分配工作表。 | 校准证书与日志 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份 | 确认使用阴极射线显示且为完整示波器或录波器；拒绝纯数字/液晶仪器、零件和显示器。 | `un-cpc-3-0-structure-2025`; `teledyne-lecroy-oscilloscope-overview-zh` |
| `validation_rule_2` | 参考流 | 确认成品 UUID、Mass、kg、1 kg 归一化、包装边界和全部限定信息。 |  |
| `validation_rule_3` | 清单 | 要求全部 13 个 row_id，BOM 条件行可有记录充分的不适用；披露 UUID 缺口和范围证据需要。 | `us-epa-desktop-computer-displays-lca-2001` |
| `validation_rule_4` | 平衡 | 重算材料、电力、废物和产出归一化；调查线路板/CRT 重复及不明质量。 | `eu-jrc-ilcd-lca-detailed-guidance-2010` |
| `validation_rule_5` | 测试 | 保留通过的功能、校准及适用测量电路安全测试证据。 | `iec-61010-2-030-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新制阴极射线示波器和阴极射线录波器前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 型号、技术、地域、期间、包装与测试范围兼容的从摇篮到大门研究 |
| excluded_use | 数字/液晶示波器、显示器、电视、独立 CRT、翻新产品、使用、维修或未单独建模的报废阶段 |
| required_metadata | 型号；类型；带宽；通道；记录；CRT；电源；测量类别；校准；线路板状态；外壳；包装；场址；期间；分配；截断；UUID 缺口 |
| required_quality_disclosure | 记录覆盖、校准、BOM 版本、供应商覆盖、质量对账、废物去向、分配驱动、异常废品、UUID 缺口和缺失范围证据 |
| update_trigger | CRT、线路板、外壳、包装、场址、测试方案、分配、上游数据或已确认 TianGong 身份发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索 2026-09-07） | CPC 48242 正式身份 |
| `un-cpc-1-1-chinese` | official_guidance | 联合国统计司，《产品总分类（CPC）》第 1.1 版中文本，M 系列第 77 号/第 1.1 版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索 2026-09-07） | CPC 48242 未变产品名称的正式中文表述 |
| `us-epa-desktop-computer-displays-lca-2001` | literature | 美国 EPA，Desktop Computer Displays: A Life-Cycle Assessment, Volume 1，EPA 744-R-01-004a，2001-12，https://www.epa.gov/sites/default/files/2014-01/documents/computer_display_lca.pdf（检索 2026-09-07） | 类比 CRT 分解、组件与装配废物；未迁移数量范围 |
| `iec-61010-2-030-2017` | standard | IEC 61010-2-030:2017，https://webstore.iec.ch/en/publication/31488（检索 2026-09-07） | 测量电路设备范围与安全测试限定 |
| `eu-jrc-ilcd-lca-detailed-guidance-2010` | official_guidance | 欧盟委员会联合研究中心，《ILCD Handbook: General guide for Life Cycle Assessment - Detailed guidance》，第一版，2010，https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf（检索 2026-09-07） | 范围与清单审查；通过过程细分/直接归属避免分配；因果物理关系分配 |
| `teledyne-lecroy-oscilloscope-overview-zh` | handbook | Teledyne LeCroy，示波器技术概述（中文），https://zh-cn.teledynelecroy.com/oscilloscope/（检索 2026-09-07） | 中文术语与 CRT 模拟示波器功能 |
