---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-instruments-and-appliances-used-in-medical-surgical-or-veterinary-sciences-includ-cacd41f4
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他医疗、外科或兽医用仪器及器械

## 1. 范围与适用性

本 PCR 适用于 CPC 48150 边界内医疗、外科、眼科或兽医用成品仪器及器械从摇篮到制造商工厂门的生产，包括注射器、针头、导管、套管以及未另列明的电子医疗器械。无菌和非无菌、一次性和可重复使用、无源和有源产品均可适用，但前景数据包必须声明具体器械类型、物料清单、制造路线、无菌状态、预期用途、包装配置和工厂门产品状态。

本 PCR 不包括电诊断设备、医疗用紫外线或红外线设备、注射器和针头以外的牙科仪器、作为产品销售的医用或实验室灭菌器、机械治疗和呼吸器械、矫形和假体器械、医用家具、单独销售的零部件和附件、药品及医疗服务。默认边界不包括工厂门后分销、临床使用和维护、临床耗材及报废处理；扩展边界时应单独披露新增过程。

该类别具有高度异质性。以下共同规则不允许建立“通用平均器械”。每个数据集应代表一种已声明的产品规格，并只纳入实际适用的材料、清洗、灭菌和包装路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-instruments-and-appliances-used-in-medical-surgical-or-veterinary-sciences-includ-cacd41f4 |
| classification_refs | CPC 3.0:48150（exact） |
| covered_products | 注射器、针头、导管、套管、未另列明的眼科仪器及器械，以及其他未另列明的医疗、外科、兽医或电子医疗用成品仪器及器械 |
| excluded_products | 电诊断设备；医疗用紫外线或红外线设备；注射器和针头以外的牙科仪器；作为产品销售的灭菌器；机械治疗和呼吸器械；矫形或假体器械；医用家具；单独零部件和附件；药品；服务 |
| representative_product | 覆盖边界内一种已声明的成品器械型号或同质器械系列 |
| production_route | 已声明物料清单对应的部件制造、装配与清洗、适用的灭菌以及包装路线 |
| market_state | 制造商工厂门交付的成品器械，并声明无菌状态、一次性/可重复使用状态、包装配置和放行规范 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够履行已声明预期功能的医疗、外科、眼科或兽医用成品仪器或器械 |
| How much | 制造商工厂门处 1 kg 合格成品器械净质量 |
| How well | 满足已声明型号、预期用途、性能、洁净度、无菌状态和放行规范 |
| How long or cycle | 一次工厂门交付；为解释而声明使用寿命或手术次数，但不计入本从摇篮到工厂门参考量 |
| reference_flow_link | 参考产品输出 `finished_medical_instrument` 等于 1 kg 参考量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格成品器械净质量 |
| 参考产品流 | 其他医疗、外科或兽医用仪器及器械（包括注射器、针头、导管、套管、未另列明的眼科用仪器及器械及未另列明的电子医疗器械） `01d838ad-6413-41ad-ba7a-a159be4b8a20` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 器械通用名称及型号或同质系列；医疗、外科、眼科或兽医预期功能；一次性或可重复使用状态；无源或有源状态；不含包装的器械净质量；主要材料及牌号；制造技术；无菌或非无菌状态；适用时的灭菌方法和地点；无菌屏障和销售包装配置；生产地域和基准年；工厂门边界；合格品和废品质量；共产品和废料抵扣处理 |

构建前景数据包时，应在元数据、过程说明、参考流备注、产品说明或等效字段中声明全部必需限定信息。缺失任何限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及归一化分母 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对不含运输包装的合格器械称重；计入作为器械组成部分供应的整体部件和不可拆卸附件。全部清单量归一化为 1 kg 合格输出。 |
| `packaging_mass_separation` | 无菌屏障、防护包装、标签和销售纸盒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种包装材料与器械净质量分开记录；按同一包装规格实测平均质量将件数换算为质量。 |
| `energy_conversion` | 外购电力和工艺能量 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` 或直接审计的能量属性 | MJ | 保留源计量单位，仅按 1 kWh = 3.6 MJ 换算电力；不得将交付蒸汽质量与热能混合。 |
| `water_mass_conversion` | 按体积记录的工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测体积、温度及适用的实测或文件化密度；当废水组成与水存在实质差异时不得假定其密度。 |
| `sterilization_service_basis` | 委外辐照灭菌 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 处理器械 | 将发票或处理记录中的服务量归一化到同一灭菌装载中的合格器械质量，并披露剂量、装载分配及返还合格率。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购原材料、采购部件、包装品、公用工程及委外灭菌服务的接收边界；供应商过程用上游数据集表示 |
| starting_condition_role | 从摇篮到工厂门前景制造起点 |
| product_classification_scope | 仅限 CPC 48150 成品仪器及器械；相邻器械类别、单独部件、药品和服务均排除 |
| recursive_input_rule | 采购并用作部件或子组件的 CPC 48150 器械作为带独立数据集的上游产品输入记录，不在本前景系统内递归拆分 |
| upstream_dataset_requirement | 每种采购材料、部件、公用工程、包装品和委外服务均使用地域、技术、牌号及产品状态相容的上游数据集 |
| disclosure | 声明制造场址、外包操作、物料清单覆盖率、无菌状态、灭菌路线、包装配置、废品处理、分配基础及任何边界扩展 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 全部前景数据集 | 纳入投入品接收与准备、厂内部件制造、装配、清洗、测试、适用的灭菌、包装、放行，以及成品器械工厂门之前的全部废物和直接排放。 | `un-isic-rev4-3250`; `us-fda-qmsr-2026` |
| `boundary_outsourced_operations` | 委外制造和灭菌 | 将外包操作作为上游服务或相连前景过程纳入，并避免返还器械质量重复计算。 | `us-fda-qmsr-2026`; `us-fda-sterilization-process-controls` |
| `boundary_sterile_route` | 以无菌状态投放市场的产品 | 纳入已验证灭菌循环、预处理、处理、解析或冷却、监测、失败装载及适用于已声明方法的无菌包装完整性控制。 | `eu-mdr-2017-745`; `us-fda-sterilization-process-controls` |
| `boundary_direct_emissions` | 场址控制的排放 | 在基本流边界记录实测直接排放；适用时包括受控和无组织环氧乙烷排放；不得重复计入上游电力或燃料排放。 | `us-epa-ethylene-oxide-neshap` |
| `boundary_excluded_lifecycle` | 默认从摇篮到工厂门研究 | 排除工厂门后分销、临床使用、使用期再处理、维护和报废，除非研究另行扩展并分别报告这些阶段。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 部件和材料准备 | `required` | 始终纳入；仅记录已声明物料清单实际使用的材料和制造操作 | 前景部件制造与准备 | 转入装配的合格部件质量 |
| `assembly_cleaning_testing` | 装配、清洗与放行测试 | `required` | 始终纳入；清洗化学品和水仅在实际使用时适用 | 前景装配与产品放行 | 灭菌或包装前合格器械质量 |
| `ethylene_oxide_sterilization` | 环氧乙烷灭菌 | `conditional` | 仅在声明产品采用环氧乙烷灭菌时纳入 | 前景或委外终端灭菌 | EtO 循环放行的合格器械质量 |
| `steam_sterilization` | 蒸汽灭菌 | `conditional` | 仅在声明产品采用蒸汽灭菌时纳入 | 前景或委外终端灭菌 | 蒸汽循环放行的合格器械质量 |
| `irradiation_sterilization` | 辐照灭菌 | `conditional` | 仅在声明产品采用伽马、电子束或 X 射线灭菌时纳入 | 委外或前景终端灭菌 | 合格辐照器械质量 |
| `packaging_release` | 包装、标签与工厂门放行 | `required` | 始终纳入；每个包装行仅在声明配置中存在时适用 | 前景包装与最终放行 | 工厂门处 1 kg 合格成品器械净质量 |

### 过程：部件和材料准备（`component_fabrication`）

#### 输入

##### 产品流

###### 模塑部件用聚丙烯颗粒（`polypropylene_granulate`）

仅在前景边界内模塑聚丙烯部件时记录原生聚丙烯颗粒。Tiangong UUID 尚未解决。

- 选定流：聚丙烯颗粒
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去退回受控库存的未开封材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：

###### 金属部件用不锈钢（`stainless_steel`）

仅对已声明金属部件路线记录不锈钢，并披露合金牌号和供应形态。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：Mass / kg
- 数量规则：实测不锈钢领用量减去退回库存的未变化材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：

###### 部件制造用电力（`fabrication_electricity`）

记录模塑、机加工、成形、焊接及可直接归属制造辅助设备的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按机器时间或经验证分表计量分配至合格部件的电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_utilities`
- 来源：

###### 部件清洗用工艺用水（`fabrication_process_water`）

仅在本过程进行部件清洗或漂洗时记录工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测清洗供水量，文件化循环水只净计一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_utilities`
- 来源：

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅在采购并消耗二氧化碳作为已声明部件焊接保护气时记录。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：归属于已声明焊接路线的气瓶或储罐质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 聚丙烯制造废料（`polypropylene_waste`）

记录离开本过程的分拣聚丙烯流道、浇口、废品和边角料；同一系统内回用的回料不作为边界输出。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass / kg
- 数量规则：按去向实测离开边界的聚丙烯废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_scrap`
- 来源：

###### 不锈钢制造废料（`stainless_steel_scrap`）

记录离开本过程的场址产生不锈钢边角料、切屑和废件。已审计候选均不匹配本场址产生合金状态，因此 Tiangong UUID 尚未解决。

- 选定流：场址产生不锈钢废料
- 流属性/单位：Mass / kg
- 数量规则：按合金牌号和去向实测不锈钢废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_scrap`
- 来源：

##### 基本流

### 过程：装配、清洗与放行测试（`assembly_cleaning_testing`）

#### 输入

##### 产品流

###### 产品清洗用异丙醇（`assembly_isopropanol`）

仅在清洗或表面准备中消耗异丙醇时记录，并披露纯度和回收情况。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：Mass / kg
- 数量规则：采购和库存质量平衡减去返回使用的回收异丙醇
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_inputs`
- 来源：

###### 氢氧化钠清洗剂（`assembly_sodium_hydroxide`）

仅在水基清洗配方中使用氢氧化钠时记录；报告纯氢氧化钠质量和溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测溶液质量乘以记录的氢氧化钠质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_inputs`
- 来源：

###### 最终清洗用工艺用水（`assembly_process_water`）

记录最终清洗和漂洗供水量，循环水只净计一次。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：向已声明清洗线供应的实测用水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_utilities`
- 来源：

###### 装配和测试用电力（`assembly_electricity`）

记录装配设备、分配至产品的洁净区设备、泄漏测试、功能测试和放行检验的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按经验证设备时间、洁净区占用或分表计量分配的电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_utilities`
- 来源：`us-fda-qmsr-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

记录清洗和漂洗废水在外部处理前离开边界的量，并披露组成、场内处理和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：内部循环后、外部处理前的实测排放废水质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：

##### 基本流

### 过程：环氧乙烷灭菌（`ethylene_oxide_sterilization`）

#### 输入

##### 产品流

###### 环氧乙烷灭菌剂（`ethylene_oxide_sterilant`）

记录进入已验证循环的采购环氧乙烷，包括预处理、灭菌舱注入及适用的载气配方分配。

- 选定流：环氧乙烷 `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- 流属性/单位：Mass / kg
- 数量规则：按装载内合格产品质量分配的实测注入环氧乙烷质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格灭菌器械
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_eto_cycle`
- 来源：`us-fda-sterilization-process-controls`

###### 环氧乙烷灭菌用电力（`eto_sterilization_electricity`）

记录预处理、灭菌舱运行、废气治理、解析及可直接归属辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按灭菌装载内合格产品质量分配的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格灭菌器械
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_eto_cycle`
- 来源：`us-fda-sterilization-process-controls`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 排放至空气的环氧乙烷（`ethylene_oxide_to_air`）

记录受控排气筒和无组织环氧乙烷实测排放，不得扣除监管许可量，并保持排放点可追溯。

- 选定流：环氧乙烷 `fe0acd60-3ddc-11dd-a488-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配至灭菌装载的空气排放实测量或经验证质量平衡量之和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格灭菌器械
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_eto_emissions`
- 来源：`us-epa-ethylene-oxide-neshap`

### 过程：蒸汽灭菌（`steam_sterilization`）

#### 输入

##### 产品流

###### 灭菌器供应的工艺蒸汽（`process_steam`）

记录已验证蒸汽循环的交付工艺蒸汽，单独计量的返还凝结水从边界流量中扣除一次。

- 选定流：工艺蒸汽 `41a70607-cc98-4ae8-8556-e33cdf13157e`
- 流属性/单位：Mass / kg
- 数量规则：实测交付蒸汽质量减去实测返还至供应系统的凝结水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格灭菌器械
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_steam_cycle`
- 来源：`us-fda-sterilization-process-controls`

###### 蒸汽灭菌用电力（`steam_sterilization_electricity`）

记录灭菌器、控制器、真空、干燥、冷却及可直接归属辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按灭菌装载内合格产品质量分配的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格灭菌器械
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_steam_cycle`
- 来源：`us-fda-sterilization-process-controls`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：辐照灭菌（`irradiation_sterilization`）

#### 输入

##### 产品流

###### 医疗器械辐照灭菌服务（`irradiation_sterilization_service`）

将委外伽马、电子束或 X 射线灭菌作为一种已声明服务路线记录。Tiangong UUID 尚未解决。

- 选定流：医疗器械辐照灭菌服务
- 流属性/单位：Mass / kg 处理器械
- 数量规则：按已声明装载内合格器械分配的发票或处理记录质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格灭菌器械
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_irradiation_service`
- 来源：`us-fda-sterilization-process-controls`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：包装、标签与工厂门放行（`packaging_release`）

#### 输入

##### 产品流

###### 纸盒（`paper_box`）

记录已声明销售或运输包装配置中存在的纸或纸板盒。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：件数乘以现行纸盒规格的实测平均质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`eu-mdr-2017-745`

###### 聚乙烯包装薄膜（`polyethylene_packaging_film`）

仅当聚乙烯薄膜构成袋、包裹层或其他已声明包装层时记录。Tiangong UUID 尚未解决。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：件数乘以现行包装规格的实测平均薄膜质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`eu-mdr-2017-745`

###### 包装与放行用电力（`packaging_electricity`）

记录归属于声明产品的成形、封合、贴标、检验和放行操作电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按包装线时间或产出件数分配的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器械
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_utilities`
- 来源：`us-fda-qmsr-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格医疗用成品仪器或器械（`finished_medical_instrument`）

这是适用的灭菌和包装完成后放行的工厂门参考产品；参考量不包括包装质量。

- 选定流：其他医疗、外科或兽医用仪器及器械（包括注射器、针头、导管、套管、未另列明的眼科用仪器及器械及未另列明的电子医疗器械） `01d838ad-6413-41ad-ba7a-a159be4b8a20`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 合格成品器械净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造、洁净区、灭菌和包装操作 | 技术可行时，优先按器械系列、生产线、循环或装载进行分表计量或过程细分，以避免分配。 |  |
| `allocation_physical_driver` | 剩余共用公用工程和服务 | 按导致消耗的物理驱动量分配，例如机器时间、洁净区占用时间、处理质量、灭菌舱容积-时间、包装线时间或测试件数；记录所选驱动量及敏感性。 |  |
| `allocation_rejects` | 废品和灭菌失败装载 | 将截至判废点的负荷分配至总生产并按合格输出归一化；返工和重复灭菌分别披露。 | `us-fda-sterilization-process-controls` |
| `allocation_recycling` | 废料和回收材料 | 一致使用研究声明的回收方法；报告废料毛质量和去向，不得从前景材料投入中直接扣除避免生产抵扣。 |  |
| `allocation_no_economic_default` | 多产品场址 | 除非物理细分或因果物理驱动量确实不可用，否则不得采用经济分配；采用经济分配时应说明理由并进行敏感性分析。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | 聚丙烯颗粒；不锈钢 | ERP 领退料记录和经核实物料清单 | 材料身份；牌号；批次；领用质量；退回质量；合格部件质量 | 按产品订单核对领用和退回材料 | kg | 每批或每生产订单 | 具有生产代表性的报告期；说明较短或不连续的覆盖 | 范围内全部制造场址 | 按材料汇总净领用量并按合格成品质量归一化 | 采购规范、批次追溯、校准秤、ERP 对账 |
| `cp_component_utilities` | `component_fabrication` | 电力；工艺用水；二氧化碳 | 分表、机器日志、气瓶或储罐记录 | 表头/表尾；机器时间；水循环；气体库存和交付；合格输出 | 直接计量或带因果分配的文件化质量平衡 | kWh；kg | 每批、每班或每计量期 | 与生产分母相同 | 范围内全部制造场址 | 汇总净使用量，按记录驱动量分配后归一化 | 仪表校准、公用工程发票、机器日志、库存对账 |
| `cp_component_scrap` | `component_fabrication` | 聚丙烯废料；不锈钢废料 | 废物联单、料箱和地磅记录 | 材料；牌号/聚合物；质量；污染；去向；内部回料 | 对每个分拣外运流称重 | kg | 每次外运或每批 | 与材料投入相同 | 范围内全部制造场址 | 按材料和去向汇总外部边界输出 | 校准秤、转移记录、回收商回执 |
| `cp_assembly_inputs` | `assembly_cleaning_testing` | 异丙醇；氢氧化钠 | 化学品领用、浓度、回收和库存记录 | 化学品身份；纯度；溶液质量；浓度；期初/期末库存；回收量 | 按清洗批次进行化学品质量平衡 | kg | 每批或每清洗批次 | 与合格输出相同 | 每个装配/清洗场址 | 计算纯化学品消耗并归一化 | 供应商证书、配方记录、校准投加记录 |
| `cp_assembly_utilities` | `assembly_cleaning_testing` | 工艺用水；电力 | 水电分表和设备日志 | 表头/表尾；循环量；产线时间；洁净区占用；合格输出 | 直接计量或因果分配 | kg；kWh | 每批、每班或每计量期 | 与合格输出相同 | 每个装配和测试场址 | 汇总净用量并在换算后归一化 | 仪表校准、发票、产线记录 |
| `cp_cleaning_wastewater` | `assembly_cleaning_testing` | 废水 | 排放计量和处理记录 | 体积/质量；温度；密度；组成；内部处理；去向 | 计量每次排放或平衡处理系统总量 | kg | 每批或每日 | 与清洗投入相同 | 范围内每个排放点 | 汇总离开边界净排放并归一化 | 流量计校准、采样结果、处理日志 |
| `cp_eto_cycle` | `ethylene_oxide_sterilization` | 环氧乙烷；电力 | 已验证循环和公用工程记录 | 产品装载质量；注入 EtO；配方；时间；温度；压力；湿度；解析；电力；合格和失败质量 | 采集每个灭菌循环记录并只分配至合格装载输出 | kg；kWh | 每循环 | 报告期全部循环 | 每个场内或委外 EtO 设施 | 汇总分配投入并按合格灭菌质量归一化 | 批准验证、循环图、校准传感器、装载放行记录 |
| `cp_eto_emissions` | `ethylene_oxide_sterilization` | 空气中环氧乙烷 | 连续监测、排气筒测试、泄漏调查或经验证质量平衡 | 排口；浓度；流量；时间；捕集效率；无组织排放；装载编号 | 用许可且经验证的方法量化每个排放点 | kg | 每循环或监管监测期 | 与 EtO 投入相同 | 全部受控和无组织排放点 | 汇总直接空气排放并分配至合格装载 | 监测 QA/QC、校准、监管报告 |
| `cp_steam_cycle` | `steam_sterilization` | 工艺蒸汽；电力 | 已验证循环、蒸汽/凝结水/电力计量 | 装载质量；蒸汽输入；凝结水返还；循环参数；电力；合格和失败质量 | 采集每循环和仪表平衡 | kg；kWh | 每循环 | 报告期全部循环 | 每个蒸汽灭菌设施 | 汇总净蒸汽和分配电力并按合格质量归一化 | 批准验证、校准仪表、循环和放行记录 |
| `cp_irradiation_service` | `irradiation_sterilization` | 辐照灭菌服务 | 委外处理和发票记录 | 技术；设施；装载编号；处理质量；剂量；装载分配；合格和失败质量 | 将服务记录与返还放行产品核对 | kg 处理器械 | 每装载 | 报告期全部装载 | 每个委外或场内辐照设施 | 汇总分配至合格输出的处理质量 | 剂量记录、服务证书、收发和放行核对 |
| `cp_packaging_materials` | `packaging_release` | 纸盒；聚乙烯薄膜 | 包装规范、领用记录和样品称量 | 材料身份；规格；件数；样品质量；废料；包装件数 | 对现行规格代表性样品称重并核对领用件数 | kg | 每次规格变化并每月核对 | 与包装输出相同 | 每个包装场址 | 经核实平均件重乘以使用件数，按器械净质量归一化 | 批准包装规范、校准秤、产线核对 |
| `cp_packaging_utilities` | `packaging_release` | 电力 | 分表和包装线记录 | 表头/表尾；产线时间；包装件数；合格输出 | 直接计量或按产线时间分配 | kWh | 每班或每计量期 | 与包装输出相同 | 每个包装场址 | 汇总分配电力并归一化 | 仪表校准、产线日志、发票核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部非参考清单行 | 归一化量 = 同期可归属流量 / 同期合格成品器械净质量 | 可归属流量；合格器械净质量 | 每 1 kg 参考产品的流量 |  |
| `calc_electricity_mj` | 电力行 | MJ = 实测 kWh × 3.6 | 实测 kWh | MJ 电力 |  |
| `calc_solution_active_mass` | 氢氧化钠 | 纯氢氧化钠质量 = 溶液质量 × 实测或供应商证明的质量分数 | 溶液质量；氢氧化钠质量分数 | kg 氢氧化钠 |  |
| `calc_water_mass` | 工艺用水和废水 | 质量 = 实测体积 × 适用的文件化密度；保留源体积和密度 | 体积；温度；密度 | kg 水或废水 |  |
| `calc_load_allocation` | 灭菌投入、服务和排放 | 分配量 = 循环总量 × 装载内合格产品的已声明因果份额 | 循环总量；装载组成；合格质量；因果分配驱动量 | 归属于声明产品的量 | `us-fda-sterilization-process-controls` |
| `calc_packaging_mass` | 纸盒和聚乙烯薄膜 | 包装质量 = 经核实平均件重 × 合格产品使用件数 | 样品质量；使用件数；合格器械质量 | 每 1 kg 参考产品的包装质量 | `eu-mdr-2017-745` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 产品型号或同质系列、预期用途、净质量、无菌状态、重复使用状态和包装配置应追溯到放行生产记录。 | 批准规范、器械历史或批记录、放行记录 |
| `dq_material_completeness` | 物料清单 | 按已识别的原子材料核对完整产品净质量；解释并保守建模任何未核对余量，但不得使用总括清单行。 | 质量平衡物料清单和供应商规范 |
| `dq_temporal_alignment` | 全部前景行 | 分子和合格输出分母应覆盖同一期间；披露停机、开车、异常批次和排除期间。 | 带时间戳仪表、生产记录、核对表 |
| `dq_site_coverage` | 多场址和外包生产 | 纳入对声明工厂门产品有实质贡献的全部场址和委外操作，或量化并说明排除项。 | 场址清单、合同、转移记录、覆盖率计算 |
| `dq_sterilization_traceability` | 无菌路线 | 将每个合格装载关联到已验证循环参数、包装完整性控制、监测、失败品和放行证据。 | 验证批准、循环记录、监测结果、包装完整性和放行记录 |
| `dq_uuid_disclosure` | 未解决流身份 | 明确保留四项 UUID 缺口且不得替换为代理 UUID；仅在新的 state-100 直接审计后更新。 | manifest 未解决事项及任务绑定检索回执 |
| `dq_range_disclosure` | 无外部范围的重要流 | 将数量作为必须采集的前景数据；在获得两个独立相容来源或经审查前景证据前，不允许跨产品默认范围或 QA 范围。 | manifest 范围证据登记和前景采集记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | 参考流 | 确认输出恰为 1 kg 合格器械净质量，且全部清单行采用同一合格输出分母。 |  |
| `validate_identity_and_route` | 数据集元数据和过程图 | 确认一个具体器械规格、材料路线、无菌状态、灭菌方法、包装配置、地域和报告期；拒绝缺少这些限定信息的通用类别平均值。 | `un-cpc-3-0-structure-2025`; `us-fda-qmsr-2026` |
| `validate_process_applicability` | 条件过程和行 | 确认每种条件材料、清洗化学品、灭菌路线和包装品均有记录支持或明确不适用；没有分产记录时不得同时填报互斥灭菌路线。 | `us-fda-sterilization-process-controls` |
| `validate_mass_reconciliation` | 材料、产品和废物 | 核对领用材料、退库、合格产品、废品、废料、回收材料和库存变化，并调查未解释差额。 |  |
| `validate_eto_emissions` | EtO 灭菌 | 确认直接 EtO 空气排放覆盖受控和无组织排放点，并与上游能量排放分开。 | `us-epa-ethylene-oxide-neshap` |
| `validate_packaging_separation` | 参考产品和包装 | 确认包装质量不计入参考产品净质量，且每种存在的包装材料分别记录。 | `eu-mdr-2017-745` |
| `validate_no_proxy_uuid` | 全部含 UUID 行 | 确认每个 UUID 与所选 state-100 身份、流类型、属性和单位支持一致；未解决行必须保持 UUID 为空。 |  |
| `validate_source_ranges` | 定量范围 | 外部推断范围必须至少有两个相互独立、原文核实且系统边界、功能单位和产品状态相容的来源；本候选 PCR 未授权任何外部范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；仅在器械规格和路线相匹配时可作为 `background_dataset` |
| downstream_use | 前景数据包发布，以及从摇篮到工厂门的 process 或 lifecyclemodel 构建 |
| allowed_use | 对材料、无菌状态、灭菌、包装、地域、技术、分配和基准年限定信息相容的同一器械型号或同质系列进行比较或建模 |
| excluded_use | 作为所有 CPC 48150 产品的通用替代；在没有使用阶段功能和寿命模型时比较临床程序；代理排除的医疗器械类别；把未解决 UUID 行当作数据库匹配项 |
| required_metadata | 规范 PCR id 和版本；产品型号/系列；预期用途；净质量；物料清单；一次性/可重复使用和无源/有源状态；无菌状态和路线；包装配置；场址和地域；报告期；合格输出；分配；数据覆盖率；未解决身份 |
| required_quality_disclosure | 一手数据占比；质量平衡；计量和分配方法；场址和供应商覆盖；灭菌验证和监测基础；废品和返工；包装质量分离；未解决 UUID；未授权外部范围 |
| update_trigger | 材料或供应商变化；产品重新设计；新增制造场址或技术；灭菌或包装变化；分配变化；前景年份更新；新的精确 Tiangong UUID；双来源范围综合；边界或法规变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（2026-09-06 检索） | CPC 48150 英文正式分类身份和范围 |
| `un-cpc-1-1-zh-2002` | `official_guidance` | 联合国统计司，《产品总分类版本1.1》，Series M No. 77, Ver.1.1，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（2026-09-06 检索） | 核实未变化 CPC 48150 标签的专业中文表述 |
| `un-isic-rev4-3250` | `official_guidance` | 联合国统计司，ISIC Rev.4 class 3250 detail，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/27/3250（2026-09-06 检索） | 制造范围示例，包括注射器、针头、导管、套管和眼科用品 |
| `eu-mdr-2017-745` | `standard` | 欧盟法规 (EU) 2017/745 医疗器械法规合并原文，https://eur-lex.europa.eu/eli/reg/2017/745/2017-05-05/eng（2026-09-06 检索） | 器械/材料限定、无菌状态和无菌包装边界、包装完整性及披露 |
| `us-fda-qmsr-2026` | `official_guidance` | 美国食品药品监督管理局，Quality Management System Regulation (QMSR)，https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr（2026-09-06 检索） | 成品器械市场状态和生产记录边界 |
| `us-fda-sterilization-process-controls` | `official_guidance` | 美国食品药品监督管理局，Sterilization Process Controls，https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/sterilization-process-controls（2026-09-06 检索） | 条件灭菌过程图、循环参数、监测、失败品及包装完整性控制 |
| `us-epa-ethylene-oxide-neshap` | `official_guidance` | 美国环境保护署，Ethylene Oxide Emissions Standards for Sterilization Facilities: NESHAP，https://www.epa.gov/stationary-sources-air-pollution/ethylene-oxide-emissions-standards-sterilization-facilities-0（2026-09-06 检索） | 环氧乙烷直接空气排放边界和治理系统披露 |
