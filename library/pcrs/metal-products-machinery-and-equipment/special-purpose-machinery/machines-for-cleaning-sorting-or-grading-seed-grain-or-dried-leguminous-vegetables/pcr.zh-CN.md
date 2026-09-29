---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-for-cleaning-sorting-or-grading-seed-grain-or-dried-leguminous-vegetables
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 种子、谷物或干豆类清选、分选或分级机械

## 1. 范围与适用性

本 PCR 涵盖以清选、分选或分级种子、谷物或干豆类为主要功能的整机从制造到工厂大门的过程。适用部件由申报的机型及验收配置确定。作物加工、机器使用期运行、出厂后运输、安装及寿命终止阶段不属于本生产数据集。CPC 3.0 将此类整机与其他农产品清选设备、制粉机械和单独销售的零件区分 [`un-cpc-3-2025`]。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-for-cleaning-sorting-or-grading-seed-grain-or-dried-leguminous-vegetables |
| classification_refs | CPC 3.0：44128 [`un-cpc-3-2025`] |
| covered_products | 用于种子、谷物或干豆类清选、分选或分级的完整机器。 |
| excluded_products | 单独销售的零件；作物清选服务；加工后的作物；制粉或粉碎机械；鸡蛋、水果等其他农产品清选设备。 |
| representative_product | 经工厂验收的完整电驱动种子或谷物清选分级机。 |
| production_route | 外购材料及部件；适用的零件制造；总装与出厂验收试验。披露外包工序。 |
| market_state | 工厂大门处全新、完整且经验收的机器，不含运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一台用于种子、谷物或干豆类清选、分选或分级的完整机器。 |
| How much | 一台申报配置的验收成品机器。 |
| How well | 已通过所申报分选功能的验收；记录处理能力、驱动方式和筛分配置。 |
| How long or cycle | 至工厂大门的一次制造及验收周期；使用寿命不属于本生产参考。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 种子、谷物或干豆类蔬菜的清洗、分类或分级机 `043e01da-e959-43fb-b5c3-50851590caec` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机型及配置；作物类别；分选功能；驱动及筛网；额定处理量及功率；验收状态；净质量 M。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_unit` | `factory_electricity` | Net calorific value | MJ | 用 1 kWh = 3.6 MJ 将电表记录的 kWh 换算为 MJ；保存原始读数。 |

## 5. 系统边界

记录交付的外购投入品、适用的金属加工、总装、工厂试验及直接归属的废物。外购投入品的上游生产使用与其交付状态相符的背景数据集。申报路线包含外包加工时纳入该工序。美国环保署列举的切割和涂装废物仅可用于识别适用工序，不能当作本机器的定量数据 [`us-epa-sector-aa-2006`]。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | complete machine | 从交付的外购材料和部件开始，至工厂大门处经验收且未包装的机器结束。 | `un-cpc-3-2025` |
| `boundary_use` | downstream | 排除作物加工、使用期运行、出厂后配送和寿命终止；如另行建模，应分别披露。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至制造场址的外购材料和部件。 |
| starting_condition_role | 整机制造的上游投入边界。 |
| product_classification_scope | 种子、谷物和干豆类清选、分选或分级整机；CPC 44128 仅为映射语境。 |
| recursive_input_rule | 若外购投入本身是同类整机，应将其记为显式投入并仅链接一次上游数据集，不在本前景中递归展开。 |
| upstream_dataset_requirement | 对钢板、电动机和电力使用与状态及地域相符的上游数据集；披露缺失数据及代理选择。 |
| disclosure | 申报机型、配置、制造和外包工序、试验方式、供应商及排除事项。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machine_production` | 零件制造、总装与工厂试验 | required | 制成并验收完整机器；钢板和交流电动机行仅在申报配置包含该部件时适用。 | 前景制造 | 每台验收成品机器；实测净质量 M kg。 |

### 过程：零件制造、总装与工厂试验（`machine_production`）

#### 输入

##### 产品流

###### 冷轧非合金钢板（`steel_sheet`）

仅在申报机器使用所加工的钢板时纳入。已审查候选项未能确认语义一致的精确钢板 UUID。

- 选定流：冷轧非合金钢板
- 流属性/单位：质量 / kg
- 数量规则：依据领料及退料记录，记录每台验收成品机器消耗的钢板质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：

###### 外购交流电动机（`ac_motor`）

申报的验收配置含有外购交流驱动电动机时，计入已安装部件。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据物料清单和供应商资料，记录每台验收成品机器已安装电动机的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：

###### 工厂用电（`factory_electricity`）

计入可归属于零件制造、总装及验收试验的电力。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ；单位组 Units of energy
- 数量规则：根据电表及生产日志，记录每台验收成品机器可归属的 MJ 电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收完整机器（`finished_machine`）

输出为未包装且经验收的整机；其配置和实测净质量 M 与参考流一致。

- 选定流：种子、谷物或干豆类蔬菜的清洗、分类或分级机 `043e01da-e959-43fb-b5c3-50851590caec`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：

##### 废物流

###### 制造产生的钢边角料（`steel_offcuts`）

纳入场内切割或成形钢板所产生的钢废料，无论其销售回收还是送往处理。不得与钢投入量抵销。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量每台验收机器可归属的钢板边角料；仅在切割或成形钢板时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`us-epa-sector-aa-2006`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_direct` | foreground resources | 用可追溯的生产订单及仪表，将材料、电动机、电力和废钢归属到申报配置。 |  |
| `allocate_shared` | shared resources | 无法直接计量时，采用与共同活动相关的物理分配依据，例如机器工时；报告分子、分母和敏感性。 |  |
| `scrap_no_credit` | steel offcuts | 废钢单列为废物输出；回收抵扣仅在另行的下游或敏感性模型中处理。 | `us-epa-sector-aa-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `machine_production` | 验收完整机器 | 称重及验收记录 | 机型；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个机型或验收批次 | 申报生产期间 | 制造工厂 | 每台验收净质量 | 校准记录；验收记录 |
| `cp_bom` | `machine_production` | 钢板和电动机 | 物料清单及领料记录 | 机型；材料和电动机规格；领用质量；退料质量；安装质量 | 核对领料、退料及安装部件与生产订单和验收配置。 | kg | 每个生产订单 | 申报生产期间 | 工厂及具名供应商 | 每台验收成品机器 | 物料清单版本；领料凭证；供应商规格 |
| `cp_energy` | `machine_production` | 电力 | 电表及生产日志 | 电表起止读数；kWh；机器数量 | 读取经校准电表中可归属制造、总装和试验的电量；排除无关负荷并保存分配依据。 | MJ | 每个订单或报告期间 | 申报生产期间 | 制造工厂 | 每台验收成品机器 | 电表读数；校准记录；试验日志 |
| `cp_scrap` | `machine_production` | 钢边角料 | 废物称量记录 | 废钢质量；废物类别；产生订单；验收数量 | 称量分拣的钢边角料，并核对钢板领用和处理记录。 | kg | 每个订单或报告期间 | 申报生产期间 | 制造工厂 | 每台验收成品机器 | 地磅单；库存平衡；转移记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | `factory_electricity` | 电表记录的 kWh 乘以 3.6 得到 MJ；归属到生产订单后除以验收机器数量。 | 电表 kWh 差值；订单归属；验收机器数量；`cp_energy` | 每台验收机器的 MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all inventory rows | 所有行均应与 M 对应的验收机型、配置和期间一致；说明无钢板或交流电动机的配置。 | 生产订单；物料清单；验收记录 |
| `dq_completeness` | all inventory rows | 核对完整物料清单及主要工序能耗和废物；披露缺失的流身份或供应商数据集。 | 物料清单；仪表；废物台账；缺口清单 |
| `dq_mass` | `steel_sheet`, `steel_offcuts`, `finished_machine` | 说明物料平衡差异；不得假设成品质量全部来自钢板。 | 库存流转；称量；验收质量 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `finished_machine` | 要求一台经 `cp_mass` 测得正值 M 的验收完整机器，配置相同，输出为 M kg。 |  |
| `validate_atomicity` | all inventory rows | 每行仅有一个物理交换，且具备方向、流类型、属性、单位及适用采集协议。 |  |
| `validate_evidence` | `steel_sheet`, `factory_electricity`, `steel_offcuts` | 要求原始数量记录；未解决的 UUID 保持空白，不填入代理流。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 每台验收完整机器生产的前景二次数据集。 |
| downstream_use | 按具体机器配置链接到 process 或 lifecyclemodel 计算。 |
| allowed_use | 核对机型、路线和数据质量后，比较相同范围的工厂大门生产。 |
| excluded_use | 不得推断使用性能、作物加工影响、机器寿命或统一的机器质量。 |
| required_metadata | 机型；批次；作物类别；分选及电动机配置；处理量；功率；工厂；期间；实测 M；上游数据集。 |
| required_quality_disclosure | 称量及电表方法；物料清单覆盖度；共享资源分配；外包；未解决身份和范围；排除事项。 |
| update_trigger | 配置、供应商状态、制造路线、实测质量或生产能耗情况改变。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 解释性说明》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问日期 2026-09-24）。 | 产品身份及相邻类别边界；不提供清单数量。 |
| `us-epa-sector-aa-2006` | 官方指南（`official_guidance`） | 美国环保署，Sector AA: Fabricated Metal Products Manufacturing Facilities，EPA 833-F-06-042，https://www.epa.gov/sites/default/files/2015-10/documents/sector_aa_fabmetal.pdf（访问日期 2026-09-24），表 1。 | 适用工序的钢边角料识别；不提供本机器的定量数据。 |
