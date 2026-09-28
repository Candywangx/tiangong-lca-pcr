---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.weaving-machines-looms
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 机织机（织机）

## 1. 范围与适用性

本规则建立一台在工厂完成验收、尚未使用且尚未加装运输包装的新织机的前景数据。织机将经纱与纬纱交织；必须声明驱动、开口、引纬、卷取和控制配置。丰田 JAT910 技术资料只描述一种喷气织机；同行评议的粗布织机研究只描述一台电动原型机及其性能试验。两者都不提供通用材料清单、整机质量或生产强度 [`toyota-jat910-2021`；`sedzro-fugu-loom-2025`]。

纳入实际进行的部件调整、装配、初装油和出厂验收测试。在具体数据包中，将每项场内制造交换单独列为原子流；购入部件连接匹配的上游数据集。织物生产、客户现场安装、使用、维护和寿命终止不属于本出厂边界。运输包装另行建模，不计入整机净质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.weaving-machines-looms |
| classification_refs | CPC 3.0：44612，Weaving machines (looms) |
| covered_products | 以经纬交织为主要功能的新完整织机，包括明确配置的有梭和无梭织机 |
| excluded_products | 纱线准备、针织和缝纫机械；独立织机零件；机织物；旧机或翻新机 |
| representative_product | 一台已出厂验收的电动织机，含已安装机架、织造机构、驱动、适用时的控制单元及初装油 |
| production_route | 购入或场内制造部件，调整、装配及功能验收测试；声明实际自制或外购路线 |
| market_state | 新制完整出厂验收机，未加运输包装、尚未由客户使用 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台按所声明配置交织经纬纱的完整织机。 |
| How much | 一台验收完整机。 |
| How well | 声明织幅、技术路线、已安装机构和出厂验收结果。 |
| How long or cycle | 验收后、使用前的工厂门口状态；本生产数据集不计入运行寿命。 |
| reference_flow_link | `finished_loom` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 机织机（织机） `9a86353e-e91a-466c-be25-c022ac99dfe2` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；序列号或批次；织造技术和织幅；开口及引纬类型；驱动和控制配置；已装附件；初装状态；出厂验收；工厂和期间 |

必需限定信息应记入数据集元数据、过程说明或参考流备注。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 `cp_machine_mass` 采集。 |
| `per_machine_basis` | 所有清单行 | 相应交换的属性 | 行单位 | 按同一配置的每台验收成品机器采集交换；共享计量总量按验收台数分摊，并披露不合格机及返工。 |

## 5. 系统边界

前景边界从收到部件或实际进行的首道场内制造工序开始，到包装前的验收整机净质量为止。纳入可归属的装配用电、已装油、调整废料和测试活动。购入投入须连接上游数据集；不得重复计算场内制造部件 [`epd-hub-core-pcr-2026`]。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_route` | 工厂生产 | 记录实际自制或外购路线、装配、调整和验收测试；将每项实际制造交换单独计量。 | `sedzro-fugu-loom-2025` |
| `sb_upstream` | 购入部件 | 各购入部件连接材料及交付状态相符的数据集，并披露替代数据。 | `epd-hub-core-pcr-2026` |
| `sb_gate` | 成品 | 边界止于包装、安装或使用前的出厂验收完整织机。 | `toyota-jat910-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明主要机架和织造组件是以已加工件购入还是在场内制造。 |
| starting_condition_role | 部件进厂门口或实际进行的首道场内工序。 |
| product_classification_scope | CPC 3.0 44612 完整织机；零件及其他纺织机械属于不同产品。 |
| recursive_input_rule | 若完整织机进入返工，作为独立投入记录其上游数据集，并披露返工路线。 |
| upstream_dataset_requirement | 匹配部件状态、技术、地区及参考单位；披露缺失数据。 |
| disclosure | 工厂、期间、型号、配置、自制或外购边界、验收台数、M、测试合格率、分摊及数据缺口。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `loom_build` | 部件调整、装配与出厂测试 | required | 每台验收成品机器 | 工厂前景生产 | 一台验收完整织机，净质量 M kg |

下列流卡只规定核心交换。具体数据集须将其他实际发生的部件、材料、能源、废物或基本流逐项以原子流补充。任何单一案例均不能提供通用材料清单。

### 过程：部件调整、装配与出厂测试（`loom_build`）

#### 输入

##### 产品流

###### 织机已加工框架部件（`frame_parts`）

记录验收整机中已安装加工结构件的质量，包括有记录的内部转移。

- 选定流：织机结构件及副框架（已加工） `76fc68b2-37b9-41b7-b153-6d84f556c57f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每台验收成品机器的已安装框架部件实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：配置或场址特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`toyota-jat910-2021`; `sedzro-fugu-loom-2025`

###### 驱动电机（`drive_motor`）

记录所声明配置实际安装的驱动电机；其确切数据库身份仍待审查。

- 选定流：织机驱动电机
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器的已安装电机实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：配置或场址特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`sedzro-fugu-loom-2025`

###### 电子控制单元（`electronic_controller`）

仅对装有电子控制单元的织机记录该部件。

- 选定流：织机电子控制单元
- 流属性/单位：质量 / kg
- 数量规则：每台验收织机的控制单元实测安装质量；只有证实未配置时才记零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：配置或场址特定（`technology_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 纳入条件：验收配置包含电子控制单元。
- 来源：`toyota-jat910-2021`

###### 初装润滑油（`loom_lubricating_oil`）

记录作为初装油留存在机内的机械润滑油，排除废油和纺织加工油。

- 选定流：织机机构初装矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：每台验收织机保留的初装润滑油实测质量；只有无油润滑时才记零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：配置或场址特定（`technology_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_first_fill`
- 纳入条件：验收配置采用油润滑机构。
- 来源：`toyota-jat910-2021`

###### 装配及测试用电（`assembly_electricity`）

记录调整、装配和出厂验收测试消耗的外购电力。

- 选定流：电网电力
- 流属性/单位：电能 / kWh
- 数量规则：按每台验收织机计的装配、调整及验收测试可归属计量电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：配置或场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`epd-hub-core-pcr-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收成品织机（`finished_loom`）

仅记录通过出厂验收的完整机器，采用其实测净质量 M。

- 选定流：机织机（织机） `9a86353e-e91a-466c-be25-c022ac99dfe2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：配置或场址特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machine_mass`
- 来源：`toyota-jat910-2021`

##### 废物流

###### 机加工钢废料（`machining_steel_scrap`）

当场内进行框架调整或机加工时，记录分拣的机加工钢废料。

- 选定流：机加工钢废料 `a88e0790-436c-44f8-b336-ee509aa8a38a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按每台验收织机归属的机加工钢废料称重质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：配置或场址特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 纳入条件：场内钢件调整或机加工产生此废物。
- 来源：`sedzro-fugu-loom-2025`

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | 共享工序 | 优先对调整、装配与测试分别计量。 | `epd-hub-core-pcr-2026` |
| `alloc_physical` | 其余共享负荷 | 按记录在案的因果物理关系（如机时或部件质量）分摊共享实测投入和产出，并披露系数及基准。 | `epd-hub-core-pcr-2026` |
| `alloc_scrap` | 钢废料 | 单独报告废料实物质量及处置路线；不得暗中抵扣原生钢生产。 | `epd-hub-core-pcr-2026` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machine_mass` | `loom_build` | 验收整机 | 验收和称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机 | 参考期间 | 生产厂 | 每台验收净质量 | 秤记录；验收证书 |
| `cp_bom` | `loom_build` | 机架、电机和控制单元 | 物料清单及接收或转移记录 | 部件编号；供应商；配置；装配数量；实测单位质量 | 将安装件与验收序列号核对，并称重或采用同配置可追溯质量记录。 | kg | 每台验收机 | 参考期间 | 生产厂及供应商 | 已装质量 / 验收机器数量 | BOM 版本；收货及称重记录 |
| `cp_first_fill` | `loom_build` | 初装油 | 加注记录 | 油品规格；加注质量或校准体积与密度；泄漏 | 称量保留在机内的油，或以实测密度换算校准加注体积。 | kg | 每台验收机 | 参考期间 | 生产厂 | 留存油 / 验收机器数量 | 加注单；校准记录 |
| `cp_electricity` | `loom_build` | 装配及测试用电 | 电表及生产日志 | 表计读数；型号；测试机时；合格和不合格台数 | 计量相关工序并扣除无关负荷；共享负荷按记录的机时分摊。 | kWh | 每批或每班 | 参考期间 | 生产厂 | 可归属电量 / 验收机器数量 | 表计记录；分摊工作表 |
| `cp_scrap` | `loom_build` | 机加工钢废料 | 废物称重记录 | 质量；钢种；工单；处置路线；验收台数 | 称量分拣的机加工钢废料并归属到相应型号。 | kg | 每批或每班 | 参考期间 | 生产厂 | 可归属废料 / 验收机器数量 | 秤票及转移单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `allocate_shared` | `assembly_electricity`, `machining_steel_scrap` | 每台验收机可归属数量 = 分配至该型号的实测数量 / 该型号验收台数；记录物理分摊及返工处理。 | `cp_electricity`；`cp_scrap`；验收台数；分摊工作表 | 每台验收机的 kWh 或 kg | `epd-hub-core-pcr-2026` |
| `mass_check` | `finished_loom` | 用已安装部件、初装油、调整损失和称重不确定度核对 M；调查无法解释的差异。 | `cp_machine_mass`；`cp_bom`；`cp_first_fill`；`cp_scrap` | 质量核对记录 | `epd-hub-core-pcr-2026` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 所有行 | 采用同一验收配置和可追溯批次或序列号；披露自制或外购及测试合格率。 | BOM；生产及验收记录 |
| `dq_completeness` | 所有行 | 核对实际配置的 BOM 和工序；缺失交换逐项补充为原子流并披露缺口。 | BOM；表计、废物及排放登记 |
| `dq_representativeness` | 上游数据集 | 披露年份、地区、技术、完整性及替代数据。 | 数据集元数据及分摊工作表 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 参考产品 | 确认产出是 CPC 44612 的完整出厂验收织机，而非零件或其他纺织机械。 | `toyota-jat910-2021` |
| `val_mass` | M 及 `finished_loom` | 确认同一验收配置的校准净质量 M（kg）并排除包装。 | `epd-hub-core-pcr-2026` |
| `val_inventory` | 所有清单行 | 检查原子流身份、存在 UUID 时的属性及单位、每台实测基准、纳入条件和上游不重复计算。 | `epd-hub-core-pcr-2026` |
| `val_gaps` | 发布及下游使用 | 披露未解决流身份和经验范围缺口；不得把替代流视为已验证。 | `epd-hub-core-pcr-2026` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 一台明确配置、出厂验收新织机的前景生产数据集。 |
| downstream_use | 经数据集审查后用于 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 在上游部件数据匹配且明确技术和质量限定信息时，建模织机出厂生产。 |
| excluded_use | 未另建模块的织物生产、机器使用、包装、运输、安装或寿命终止；配置未对齐的跨技术基准比较。 |
| required_metadata | PCR id 和版本；型号；批次或序列号；织幅及技术；自制或外购路线；工厂；年份；验收台数；M；上游身份。 |
| required_quality_disclosure | 实测数据、缺口、未解决 UUID、分摊、代表性和不确定度。 |
| update_trigger | 设计、部件供应、路线、实测电耗或验收程序发生实质变化。 |

## 11. 数据来源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `toyota-jat910-2021` | handbook | Toyota Industries Corporation, *WEAVING MACHINERY JAT910 Air Jet Loom* (2021.12), https://www.toyotatextilemachinery.com/wp-content/uploads/2022/01/JAT910.pdf | 一种完整织机的机构类别；不提供通用质量或生产强度 |
| `sedzro-fugu-loom-2025` | literature | Sedzro 等，*DESIGN OPTIMISATION OF AN AUTOMATED TRADITIONAL SMOCK (FUGU) WEAVING MACHINE*, African Journal of Applied Research 11(3), 2025, https://ajaronline.com/index.php/AJAR/article/download/1159/620/2673 | 原型机的机架、电机、机构和测试阶段；不提供行业范围 |
| `epd-hub-core-pcr-2026` | standard | EPD Hub B.V., *Core Product Category Rules*, version 1.2.1 (2026), https://www.epdhub.com/_files/ugd/199f85_451db462020743c4b007603b67f3c807.pdf | 一般制造产品 LCA 分摊和数据质量规则 |
