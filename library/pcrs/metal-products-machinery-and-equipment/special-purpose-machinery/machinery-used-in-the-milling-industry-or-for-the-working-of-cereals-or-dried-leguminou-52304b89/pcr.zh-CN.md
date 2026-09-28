---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-used-in-the-milling-industry-or-for-the-working-of-cereals-or-dried-leguminou-52304b89
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 谷物碾磨工业及谷物、干豆类加工用机械（农用机械除外）

## 1. 范围与适用性

本 PCR 涵盖一台经验收的完整非农用机械从上游投入至制造商工厂门口的生产；其声明功能为工业场景下碾磨或其他方式加工谷物或干豆类。以谷物辊式磨粉机作为代表配置，但不将其物料清单作为通用默认值。必须声明配置、所含驱动与控制设备、制造场址及验收状态。专用于种子、谷物或干豆类清选、分选、分级的机械、农用机械、单独销售的备件、整套制粉工厂、谷物产品、安装、使用及寿命终结阶段不属于本产品边界。官方 CPC 类目确定产品身份；完整的 Diorit 产品手册提供一款具体辊式磨粉机示例。`un-cpc-3-2025`；`buhler-diorit-2019`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-used-in-the-milling-industry-or-for-the-working-of-cereals-or-dried-leguminou-52304b89 |
| classification_refs | CPC 3.0 44513，与产品类别描述精确对应；分类代码并非 PCR 身份。 |
| covered_products | 工业场景下碾磨或以其他方式加工谷物或干豆类的经已验收完整非农用机械。 |
| excluded_products | 独立的谷物或种子清选、分选、分级机械；农用机械；单售备件；整套工厂；碾磨后的食品。 |
| representative_product | 配置已声明的工业谷物辊式磨粉机，明确铸件、食品接触金属件、驱动和控制装置范围。 |
| production_route | 外购零部件、实际发生的场内制造或机械加工、总装和验收试验。 |
| market_state | 制造商工厂门口经已验收的完整机械，按不含运输包装的净状态计量。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台用于工业碾磨或加工谷物、干豆类的经已验收完整机械。 |
| How much | 声明配置下的一台验收成品机器。 |
| How well | 机械满足所声明谷物或干豆类用途及额定产能的工厂验收规范，并留存验收记录。 |
| How long or cycle | 工厂门口验收时点；本产品参考流不承诺使用寿命或运行产量。 |
| reference_flow_link | `finished_machine_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 粮食碾磨工业用机械或谷类或干豆类植物加工用机械，农用机械除外 `777a709f-59dc-4927-843f-2e9546f5495e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机械型号及序列号；声明的谷物或干豆类用途；额定产能；完整配置及所含驱动或控制装置；验收净质量 M；制造场址及验收日期。 |

M 在前景数据生产时实测，表示与按每台记录的材料和能源交换同属一台验收机械的净质量；运输包装不计入 M。`is-iso-14044-2006`。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

前景边界从外购零部件、材料及场内用电进入已声明制造场址开始，至不含运输包装的完整机械通过验收为止。外购投入的供应商过程应以背景数据集衔接，不得默认为厂内制造。仅纳入所声明路线实际开展的零部件机械加工、板材加工、总装及验收测试。清单每行仅表示一种物理交换。`is-iso-14044-2006`；`buhler-diorit-2019`。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 厂内接收边界上的外购铸铁机架铸件、不锈钢板及驱动电机，并声明各自的供应商规格和来源。 |
| starting_condition_role | 有记录的机器制造前景过程外购投入起点。 |
| product_classification_scope | 谷物或干豆类碾磨、加工用非农用工业机械，不包括谷物产品或独立清选机械。 |
| recursive_input_rule | 若某外购投入本身是本类别的完整机器，应记录其独立数量并引用另一上游机器数据集，不在同一工厂前景过程内递归展开。 |
| upstream_dataset_requirement | 每项外购零部件和电力投入均须衔接有代表性的上游数据集，并披露地理、技术和产品状态。 |
| disclosure | 披露所含部件、外包工序、试验范围、排除项及共享过程分配方法。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 成品机械 | 纳入有记录的材料和能源接收、可归属的制造、总装、试验及直接废物，直至未包装机器验收。 | `is-iso-14044-2006` |
| `boundary_supplier_inputs` | 外购投入 | 将外购零部件衔接上游数据集，并披露缺失的供应商过程或投入。 | `is-iso-14044-2006` |
| `boundary_exclusions` | 产品范围 | 本工厂门口数据包不计入出厂至客户运输、安装、使用及寿命终结阶段，并披露这一排除。 | `is-iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 零部件接收及场内加工 | required | 纳入该配置实际发生的机械加工和板材切割。 | 前景材料及加工交换。 | 每台验收成品机器 |
| `assembly_acceptance` | 总装及验收 | required | 纳入该配置已安装部件及工厂验收试验。 | 成品机器产出和验收用电。 | 每台验收成品机器 |

### 过程：零部件接收及场内加工（`component_fabrication`）

#### 输入

##### 产品流

###### 外购铸铁机架铸件（`frame_casting_input`）

采集所声明辊式磨粉机配置实际接收的合格铸铁机架铸件质量。Diorit 示例采用铸铁机架；其他设计如不采用该材料，应说明本行不适用，不得假定其通用性。`buhler-diorit-2019`。

- 选定流：铸铁机架铸件
- 流属性/单位：质量 / kg
- 数量规则：分配至每台验收成品机器的合格铸件领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_casting`
- 来源：`buhler-diorit-2019`

###### 食品接触部件用不锈钢板（`stainless_sheet_input`）

设计采用不锈钢食品接触部件时，采集其不锈钢板领用质量。Diorit 示例说明接触部件可采用不锈钢或其他食品级材料，但不提供通用不锈钢用量。`buhler-diorit-2019`。

- 选定流：不锈钢板
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器领用的不锈钢板记录质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stainless_sheet`
- 来源：`buhler-diorit-2019`

###### 零部件加工用电（`fabrication_electricity_input`）

采集场内机械加工或板材加工实际使用、可归属于本产品的外购电网电力。公开候选项未匹配所声明 kWh 属性，电力身份仍待确认。

- 选定流：外购电网交流电
- 流属性/单位：能量 / kWh
- 数量规则：每台验收成品机器可归属的计量用电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_electricity`
- 来源：`is-iso-14044-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 板材加工产生的工业后废钢（`fabrication_steel_scrap_output`）

记录场内板材切割或机械加工后分类运出的钢废料。如无此类加工，应记录本行不适用；须记录去向，且不得在缺少明确下游模型时自动给予回收抵扣。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器对应的称重运出废钢质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_scrap`
- 来源：`is-iso-14044-2006`

##### 基本流

### 过程：总装及验收（`assembly_acceptance`）

#### 输入

##### 产品流

###### 外购驱动电机（`drive_motor_input`）

当所交付机械包含驱动电机时，记录装入验收配置的电机质量。两个公开电机身份在可见字段上难以区分，采用 UUID 前须人工审查。该部件取决于已声明配置，不代表 Diorit 电机的通用规格。

- 选定流：工业用电驱动电机
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实际安装的电机记录质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drive_motor`
- 来源：

###### 验收试验用电（`test_electricity_input`）

采集所声明配置在工厂验收试验期间的外购电网计量用电量，并与零部件加工用电分开记录。

- 选定流：外购电网交流电
- 流属性/单位：能量 / kWh
- 数量规则：每台验收成品机器的验收试验计量用电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_electricity`
- 来源：`is-iso-14044-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收完整谷物碾磨机械（`finished_machine_output`）

已验收机械的净状态是唯一参考产品产出；其配置和净质量须与 `cp_mass` 一致。公开产品流对应整个 CPC 类别，而非某个 Bühler 型号。

- 选定流：粮食碾磨工业用机械或谷类或干豆类植物加工用机械，农用机械除外 `777a709f-59dc-4927-843f-2e9546f5495e`
- 流属性/单位：质量 / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共享工厂作业 | 优先利用机器专属计量、工单和物料清单记录拆分共享作业，再考虑分配其交换。 | `is-iso-14044-2006` |
| `allocation_physical` | 不可拆分的共享作业 | 如无法拆分，应采用并记录具有因果关系的物理指标，例如实测设备时间或加工质量；保留分配前总量并核对。 | `is-iso-14044-2006` |
| `allocation_other` | 缺乏合理物理关系的作业 | 记录有依据的其他分配关系，分析选择不同分配方法的敏感性；不得代入默认系数。 | `is-iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_frame_casting` | `component_fabrication` | 外购机架铸件 | 物料清单及收货单 | 型号；配置；铸件料号；接收质量；领用件数 | 将合格铸件的收货和领用记录与同一机器配置核对。 | kg | 每台验收机器 | 验收生产批次 | 制造场址及已声明供应商 | 每台验收成品机器 | 收货单、供应商规格、领用台账 |
| `cp_stainless_sheet` | `component_fabrication` | 不锈钢板 | 领用及切割记录 | 型号；配置；材料牌号；领用质量；退库质量 | 称量或核对所声明食品接触部件的不锈钢板可追溯领用记录。 | kg | 每台验收机器 | 验收生产批次 | 制造场址 | 每台验收成品机器 | 材质证明、领用及退库台账 |
| `cp_fabrication_electricity` | `component_fabrication` | 外购电网电力 | 分表或设备运行记录 | 电表起数；电表止数；工单号；机器数量 | 用分表计量加工用电，或按有记录的工单电表总量归属至验收机器。 | kWh | 每项工单或班次 | 验收生产批次 | 制造场址 | 每台验收成品机器 | 电表校准、工单、分配记录 |
| `cp_steel_scrap` | `component_fabrication` | 工业后废钢 | 废物运出记录 | 废物代码；磅单质量；去向；工单号 | 称量分类收集的加工废钢，并将运出质量与工单核对。 | kg | 每次运出 | 验收生产批次 | 制造场址 | 每台验收成品机器 | 磅单、废物移交记录 |
| `cp_drive_motor` | `assembly_acceptance` | 外购驱动电机 | 验收物料清单 | 型号；配置；电机料号；安装质量；数量 | 将已安装电机及供应商质量记录与验收配置核对。 | kg | 每台验收机器 | 验收生产批次 | 制造场址及已声明供应商 | 每台验收成品机器 | 物料清单、供应商规格、验收记录 |
| `cp_test_electricity` | `assembly_acceptance` | 外购电网电力 | 验收试验电表 | 电表起数；电表止数；试验号；序列号 | 计量验收试验用电，或将有记录的试验区域电表总量归属至验收机器。 | kWh | 每次试验 | 验收生产批次 | 制造场址 | 每台验收成品机器 | 试验记录、电表校准、分配记录 |
| `cp_mass` | `assembly_acceptance` | 参考产品 | 校准称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机器 | 验收日期 | 制造场址 | 每台验收净质量 | 秤校准证书、称重凭证、签署的验收记录 |

### 计算规则

不规定默认数值系数或机器质量。各项采集的交换总量按相应协议归属至一台验收成品机器。保留共享作业的总量和分配计算记录，以供审查。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 参考产品及投入 | 将零件、电表、废物和质量记录对应至同一型号、序列号、配置及验收批次。 | 物料清单；验收记录 |
| `dq_metering` | 电力及质量 | 保留电表或秤的校准证明，并说明共享计量时的归属方法。 | 校准证书；电表记录；分配工作表 |
| `dq_supply` | 外购零部件 | 记录供应商、材料牌号、数量和上游数据集匹配情况；披露缺失的供应商数据。 | 供应商规格；收货单；数据集元数据 |
| `dq_completeness` | 全部清单 | 核对采购、装机质量、退库库存和废物，不假设通用机械材料组成。 | 物料平衡；领用及废料记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 成品机械 | 确认唯一参考产出为 M kg 验收净质量，采用准确产品 UUID、同一配置，并关联 `cp_mass` 记录。 | `is-iso-14044-2006` |
| `validate_inventory` | 前景交换 | 确认每项选定流仅为一种物理交换，每项采集行均关联协议，且外购投入具有相容的上游数据集。 | `is-iso-14044-2006` |
| `validate_allocation` | 共享作业 | 核对分配总量与工厂实测总量，记录物理或其他分配关系，并披露缺口。 | `is-iso-14044-2006` |
| `validate_range_gap` | 已报告数量 | 所有数量均以实际前景记录为准；不得将 Diorit 示例或单份报告假设当作本机械类别的经验范围。 | `buhler-diorit-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一台验收完整机械配置的前景制造数据包。 |
| downstream_use | 边界和来源质量经审查后，可作为 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 建模已声明的非农用谷物或干豆类碾磨机械从上游投入至工厂门口的生产。 |
| excluded_use | 不得用作谷物碾磨运行、食品生产、整套工厂安装或机械全寿命服务的数据集。 |
| required_metadata | PCR id；型号；序列号或代表配置；谷物或干豆类用途；额定产能；场址；期间；M；所含部件；供应商地理位置。 |
| required_quality_disclosure | 实测与分配交换；上游数据集覆盖；缺失 UUID；缺失的范围证据；排除过程；不确定性和数据时效。 |
| update_trigger | 型号或材料配置、制造路线、电力来源、验收协议或经审查的流身份发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，CPC 第 3.0 版结构，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 官方产品身份及与相邻 CPC 类别相关的排除项。 |
| `buhler-diorit-2019` | `handbook` | Bühler，《Diorit Roller Mill MDDY/Z》，2019 版，第 1–2 页。https://dam.buhlergroup.com/asset/af37413b24454efb8d6787644dcff3b0/Brochure_Roller_Mill_Diorit_2019.pdf | 完整具体机器示例、铸铁机架、食品接触材料及声明配置；不提供通用数量。 |
| `is-iso-14044-2006` | `standard` | 印度标准局，《IS/ISO 14044 (2006): Environmental Management—Life Cycle Assessment—Requirements and Guidelines》，第 4.2.3.3、4.3.2、4.3.4 节。https://fenix.ciencias.ulisboa.pt/downloadFile/2251937252647064/is.iso.14044.2006.pdf | 系统边界、单元过程数据采集、归一化及分配层级。 |
