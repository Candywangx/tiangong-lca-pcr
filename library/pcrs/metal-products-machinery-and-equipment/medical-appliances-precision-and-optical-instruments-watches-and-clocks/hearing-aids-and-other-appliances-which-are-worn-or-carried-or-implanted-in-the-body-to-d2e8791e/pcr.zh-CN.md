---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hearing-aids-and-other-appliances-which-are-worn-or-carried-or-implanted-in-the-body-to-d2e8791e
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 为弥补缺陷或残疾而佩戴、携带或植入体内的助听器和其他器具

## 1. 范围与适用性

本 PCR 适用于制造商声明的预期用途为补偿缺陷或残疾，且佩戴、携带或植入体内的成品器具。范围包括以成品器械形式交付的助听器以及其他主动或被动补偿器具。前景生产者必须识别器具具体类型、预期补偿功能、主动或被动工作方式、佩戴/携带/植入状态、配置、供电系统、无菌状态、销售地理区域及声明的使用寿命。

本 PCR 不包括矫形器具、夹板、骨折固定器具、人造身体部位、一般诊断或治疗设备、医疗家具、独立供应的软件、充电器或附件，以及独立供应的替换零件。多产品套装只有在参考器具和所有随附附件均在物料清单中分别识别时才属于本范围。该边界遵循 CPC 48172 的产品身份，但分类叶节点不能替代产品特定的物料清单或制造模型（`un-cpc-3-0-2025`、`ec-pef-2021`、`eu-mdr-2017-745`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hearing-aids-and-other-appliances-which-are-worn-or-carried-or-implanted-in-the-body-to-d2e8791e |
| classification_refs | CPC 3.0 48172，精确的分类语境参考 |
| covered_products | 为补偿缺陷或残疾而佩戴、携带或植入体内的成品助听器及其他成品器具 |
| excluded_products | 矫形器具、夹板、骨折固定器具、人造身体部位、一般诊断或治疗设备、医疗家具，以及独立供应的软件、附件、充电器和替换零件 |
| representative_product | 一件完成测试和配置的成品补偿器具；生产者必须说明具体器具类型及随附附件 |
| production_route | 产品特定的组件制造或采购、最终装配、测试、包装，以及适用时经验证的灭菌；分销、使用、维护和生命终期为条件性扩展阶段 |
| market_state | 制造商厂门处的成品器具，并声明无菌/非无菌状态、配置、随附附件和销售地理区域 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供制造商声明的、用于补偿所述缺陷或残疾的功能 |
| How much | 针对一项声明的用户应用提供一件成品且已配置的器具；成对或多单元系统必须说明器具单元数量 |
| How well | 符合制造商声明的预期用途、性能规范、配置和适用的放行测试 |
| How long or cycle | 声明的预期使用寿命或使用周期基准；从摇篮到厂门的数据集仍须披露该限定信息，且不得计入使用阶段负荷 |
| reference_flow_link | 实现功能单位所需一件成品器具的净质量（kg）；随附附件和包装作为独立产品投入，不计入器具净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一件成品器具的产品特定净质量，以 kg 计量 |
| 参考产品流 | 为弥补缺陷或残疾而佩戴、携带或植入体内的助听器和其他器具 `702d21c4-fc45-412a-8beb-e685dd9a623a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 具体器具类型；预期补偿功能；主动或被动工作方式；佩戴、携带或植入状态；单元数量；器具净质量；配置和随附附件；电源化学体系；适用时的无菌状态和灭菌方法；制造商厂门地理区域；销售地理区域；预期使用寿命或使用周期基准；从摇篮到厂门或从摇篮到坟墓边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终测试后、包装前测量成品器具净质量；附件和包装质量须分别报告。 |
| `count_to_mass` | 以件数记录的组件或电池 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用产品特定的实测单件质量将件数换算为 kg，并保留件数、单件质量样本和换算记录；不得采用通用件数-质量因子。 |
| `electrical_energy` | 装配、灭菌和使用阶段充电用电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 记录计量电力，并按 1 kWh = 3.6 MJ 换算；保留电表边界、电压等级、电网地理区域和损耗边界。 |
| `service_life_normalization` | 条件性使用阶段和生命终期阶段 | 质量和声明的器具件数 | kg 和 item | 按声明的器具单元数、工作周期、替换计划和预期使用寿命缩放使用阶段交换，并报告全部四项参数。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_product_specific_bom` | 所有生产数据集 | 使用产品特定的物料清单或组件清单及企业特定制造活动数据；每项随附附件和包装组件须分别识别。 | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca` |
| `boundary_required_production` | 从摇篮到厂门的前景系统 | 纳入跨越最终制造边界的组件或材料投入、厂内成形、最终装配、测试、废品、包装和适用的灭菌，直至成品器具在制造商厂门放行。 | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`; `eu-mdr-2017-745` |
| `boundary_conditional_life_cycle` | 从摇篮到坟墓的扩展 | 只有在声明范围包含相应阶段时，才纳入分销、使用电力、替换耗材、维护、收集、拆解、回收、焚烧和填埋；须说明地理区域和情景假设。 | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca` |
| `boundary_sterile_device` | 以无菌状态投放市场的器具 | 当器具以无菌状态投放市场时，纳入经验证的灭菌操作和无菌屏障包装；披露灭菌方法，并在声明的制造商厂门边界前保持无菌状态。 | `eu-mdr-2017-745` |
| `boundary_no_hidden_cutoff` | 所有前景过程和相连的上游过程 | 不得仅因质量小而省略材料、组件、能源、废物或直接排放；任何合理截断均须量化和披露，并明确评估电子件、电池、贵金属触点和无菌包装。 | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的材料或组件进入报告制造商所控制生产系统的时点 |
| starting_condition_role | 产品投入，其上游生产由相连的背景数据集或供应商特定数据集表示 |
| product_classification_scope | CPC 48172 成品补偿器具；组件和材料保留各自产品身份 |
| recursive_input_rule | 同类别的采购半成品或成品器具作为独立产品投入记录，并说明供应商身份和质量；其上游生产只链接一次，不在接收过程中重复构建 |
| upstream_dataset_requirement | 每项采购组件、材料、电池、包装物和能源载体必须链接具有地理和技术代表性的上游数据集；代理数据须披露，且不得重命名为精确身份 |
| disclosure | 声明制造商厂门地理区域、产品类型、BOM 修订版、组件自制/外购边界、主动/被动及佩戴/携带/植入状态、无菌状态、分配方法、截断、背景数据集版本和所纳入的条件性生命周期阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `device_assembly` | 组件准备、器具装配、测试和放行 | `required` | 始终纳入 | 前景生产 | 合格成品器具净质量 |
| `packaging` | 最终产品包装 | `required` | 始终纳入；实际使用的每项包装组件必须作为原子行加入 | 前景生产 | 一个声明的器具销售单元 |
| `sterilization` | 灭菌及无菌状态维持 | `conditional` | 仅对以无菌状态投放市场的器具纳入；须纳入实际经验证路线并添加路线特定交换 | 前景生产 | 无菌放行器具的质量或件数 |
| `use_and_maintenance` | 运行和计划性耗材更换 | `conditional` | 仅在从摇篮到坟墓范围或单独声明的使用阶段数据集中纳入 | 使用 | 声明的器具件数、工作周期和预期使用寿命 |
| `end_of_life` | 废旧器具收集并转交处理 | `conditional` | 仅当生命终期位于声明的系统边界内时纳入 | 生命终期 | 废旧器具和单独拆出电池的质量 |

### 过程：组件准备、器具装配、测试和放行（`device_assembly`）

#### 输入

##### 产品流

###### 助听器电子模块投入（`hearing_aid_electronic_module`）

当电子有源助听器使用该采购组件时，记录已装配的助听器电子模块。其他有源器具类型必须另增其精确电子组件行，不得复用助听器特定身份。

- 选定流：助听器电子模块组件 `7a71d9b8-bfb0-43e5-bf72-4d6455be5a2f`
- 流属性/单位：Mass / kg
- 数量规则：进入最终形成合格产品的装配过程之验收模块实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`selhorst-et-al-2025-hearing-aid-lca`

###### 厂内注塑外壳用 ABS 粒料（`abs_granulate`）

仅在报告场址使用 ABS 注塑外壳或其他 ABS 器具组件时记录 ABS 粒料。采购的成品外壳应改以其精确组件产品流另行记录。

- 选定流：丙烯腈-丁二烯-苯乙烯共聚物（ABS），粒料 `8f1317c1-aa51-4524-8692-74079c923e2c`
- 流属性/单位：Mass / kg
- 数量规则：扣除退回未开封材料后的 ABS 粒料实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`

###### 医用级硅橡胶耳塞或耳帽（`silicone_earpiece_component`）

仅对含该组件的助听器配置记录成品硅橡胶耳塞或耳帽。其 TianGong UUID 尚未解决；不得以硅、二氧化硅或硅铁合金身份替代。

- 选定流：医用级硅橡胶助听器耳塞或耳帽
- 流属性/单位：Mass / kg
- 数量规则：纳入声明器具配置的验收组件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`selhorst-et-al-2025-hearing-aid-lca`

###### 已安装锂离子可充电助听器纽扣电池（`lithium_ion_rechargeable_button_cell`）

只有声明器具安装该化学体系和电池形态时才记录该产品交换。其精确 TianGong UUID 尚未解决。

- 选定流：锂离子可充电助听器纽扣电池
- 流属性/单位：Mass / kg
- 数量规则：实测已安装电池质量，并保留电池件数和实测单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`selhorst-et-al-2025-hearing-aid-lca`

###### 出厂随附锌空气一次助听器纽扣电池（`zinc_air_primary_button_cell_factory`）

记录随器具供应但不计入器具净质量的锌空气一次纽扣电池。精确 TianGong UUID 尚未解决；不得以锌锰电池作代理。

- 选定流：锌空气一次助听器纽扣电池
- 流属性/单位：Mass / kg
- 数量规则：随附件数乘以产品特定的实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个声明的器具销售单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`selhorst-et-al-2025-hearing-aid-lca`

###### 装配和测试用电（`assembly_electricity`）

记录跨越最终装配和测试电表边界的电力。排除采购组件上游数据集中已经包含的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按第 7 节规则分配至合格器具产出的实测装配和测试用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_energy`
- 来源：`ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品补偿器具（`finished_compensatory_appliance`）

记录完成全部必需测试，并在适用时完成灭菌后于制造商厂门放行的器具。包装和单独供应的附件不计入器具净质量。

- 选定流：为弥补缺陷或残疾而佩戴、携带或植入体内的助听器和其他器具 `702d21c4-fc45-412a-8beb-e685dd9a623a`
- 流属性/单位：Mass / kg
- 数量规则：合格成品器具输出的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`un-cpc-3-0-2025`; `eu-mdr-2017-745`

##### 废物流

###### 废弃装配印制线路板（`populated_pwb_reject`）

记录在前景生产边界内被拒收或损坏，并转交处理的装配印制线路板。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass / kg
- 数量规则：扣除有据可查且返回生产的返工量后，作为装配线路板废物转出的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_rejects`
- 来源：`selhorst-et-al-2025-hearing-aid-lca`

###### ABS 注塑废料（`abs_moulding_scrap`）

记录单独收集并转出前景系统的 ABS 流道、浇口和不合格注塑件。TianGong UUID 尚未解决；通用塑料废物不是精确身份。

- 选定流：废 ABS 注塑废料
- 流属性/单位：Mass / kg
- 数量规则：转出的 ABS 废料实测质量，扣除经核实并在同一报告期内回用于过程的回磨料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_rejects`
- 来源：`ec-pef-2021`

##### 基本流

### 过程：最终产品包装（`packaging`）

#### 输入

##### 产品流

###### 纸板销售包装盒（`paper_box`）

记录容纳声明销售单元的单个纸盒。若存在内衬、说明书、薄膜、袋或其他包装，应分别添加为原子行。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：实测纸盒质量乘以每个声明器具销售单元使用的纸盒数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个声明的器具销售单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 来源：`ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：灭菌及无菌状态维持（`sterilization`）

#### 输入

##### 产品流

###### 环氧乙烷灭菌剂（`ethylene_oxide_sterilant`）

仅对厂内经验证的环氧乙烷灭菌路线记录环氧乙烷。其他灭菌剂必须以独立且精确的化学品行加入。

- 选定流：环氧乙烷 `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- 流属性/单位：Mass / kg
- 数量规则：经验证灭菌周期的灭菌剂实测投料质量，按无菌放行器具产出分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 无菌放行器具净质量
- 基准类型：过程产出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sterilization_records`
- 来源：`eu-mdr-2017-745`

###### 灭菌用电（`sterilization_electricity`）

记录厂内灭菌、解析和减排设备的实测电力；若厂外灭菌供应商数据集已包含电力，不得重复记录。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按周期装载量分配至无菌放行器具产出的实测电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 无菌放行器具净质量
- 基准类型：过程产出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sterilization_records`
- 来源：`ec-pef-2021`; `eu-mdr-2017-745`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 环氧乙烷直接排放至空气（`ethylene_oxide_to_air`）

记录前景灭菌过程减排后直接释放至空气的实测环氧乙烷。不得计入灭菌剂或电力上游数据集中包含的排放。

- 选定流：环氧乙烷 `fe0acd60-3ddc-11dd-a488-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：减排后烟道和无组织释放的环氧乙烷实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 无菌放行器具净质量
- 基准类型：过程产出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sterilization_records`
- 来源：`eu-mdr-2017-745`

### 过程：运行和计划性耗材更换（`use_and_maintenance`）

#### 输入

##### 产品流

###### 充电用电（`charging_electricity`）

仅对声明使用期内的可充电器具记录交付电力。充电器损耗在电表边界内时计入，并声明电网地理区域。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：每周期实测或产品特定充电能耗乘以声明使用寿命内有据可查的充电周期数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个声明器具使用周期和预期使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario`
- 来源：`selhorst-et-al-2025-hearing-aid-lca`; `eu-mdr-2017-745`

###### 使用期替换的锌空气一次纽扣电池（`zinc_air_primary_button_cells_use`）

仅对使用一次电池的配置记录替换用锌空气一次助听器纽扣电池。其精确 TianGong UUID 尚未解决。

- 选定流：锌空气一次助听器纽扣电池
- 流属性/单位：Mass / kg
- 数量规则：声明使用寿命内有据可查的替换电池件数乘以产品特定的实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个声明器具使用周期和预期使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario`
- 来源：`selhorst-et-al-2025-hearing-aid-lca`; `eu-mdr-2017-745`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废锌空气一次纽扣电池（`spent_zinc_air_button_cells`）

记录从用户系统转交至声明收集或处理路线的完整废锌空气纽扣电池。其精确 TianGong UUID 尚未解决；锌废料或锌渣不是可接受的代理。

- 选定流：废锌空气一次助听器纽扣电池
- 流属性/单位：Mass / kg
- 数量规则：有据可查的废电池件数乘以产品特定的实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个声明器具使用周期和预期使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario`
- 来源：`selhorst-et-al-2025-hearing-aid-lca`

##### 基本流

### 过程：废旧器具收集并转交处理（`end_of_life`）

#### 输入

##### 产品流

##### 废物流

###### 进入生命终期的废旧补偿器具（`used_compensatory_appliance`）

将废旧器具作为进入生命终期系统的特定废物投入记录。精确 TianGong 废物流 UUID 尚未解决；不得使用未指定固体废物。

- 选定流：废旧助听器或其他补偿器具
- 流属性/单位：Mass / kg
- 数量规则：扣除单独拆出电池后的废旧器具实测收集质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每件进入生命终期的声明器具
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_records`
- 来源：`ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造和灭菌操作 | 在具有产品特定记录时，优先细分产品线、电表、工单和灭菌装载，再应用分配。 | `ec-pef-2021` |
| `allocation_physical_driver` | 余下的共用能源、公用工程和废品 | 使用有据可查的因果性物理驱动因素分配余下交换，例如机器时间、周期装载量或实测质量吞吐量；存在因果物理驱动因素时不得使用收入分配。 | `ec-pef-2021` |
| `allocation_conforming_output` | 装配和包装 | 将前景交换归一化至合格放行器具产出；废品计入产生它们的过程，不得以总毛投入分摊负荷。 | `ec-pef-2021` |
| `allocation_recycling_credit` | 再生投入和生命终期回收 | 分别报告再生投入、处理负荷、回收材料及任何替代或抵扣方法；未声明并一致应用生命终期方法时，不得声称避免原生材料生产。 | `ec-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_assembly_bom` | `device_assembly` | 采购组件、已安装电池、随附电池和成品器具 | 批准的 BOM、收货记录、称量记录、生产产出 | 零件身份、化学体系、供应商、验收数量、件数、抽样单件质量、成品净质量、批次、配置 | 将批准的 BOM 与收货记录及校准称量结果核对 | item 和 kg | 每次 BOM 修订及每个生产批次 | 代表性报告年度 | 每个报告场址和产品配置 | 汇总验收质量并归一化至合格器具净质量；保留件数到质量的计算 | BOM 修订版、供应商规范、校准记录、批次核对、放行记录 |
| `cp_assembly_energy` | `device_assembly` | 装配和测试用电 | 分表、机器日志、生产记录 | 电表起止值、kWh、产线、机器时间、合格产出质量、电网地理区域、电压 | 读取校准分表，或将机器能耗日志与总表核对 | kWh 和 MJ | 每班次或批次 | 代表性报告年度 | 每条装配和测试线 | 扣除非生产时段，按因果驱动因素分配，kWh 换算为 MJ，并归一化至合格产出 | 电表校准、账单核对、生产日志 |
| `cp_assembly_rejects` | `device_assembly` | 装配线路板废品和 ABS 废料 | 废品日志、废物称量单、返工记录 | 材料身份、废品毛质量、返工返回质量、转出质量、危险性状态、去向 | 将质量废品记录与称重转移及过程内回用记录核对 | kg | 每次转移及每个生产批次 | 代表性报告年度 | 每个报告场址 | 转出废物等于废品减去经核实的返工或同报告期回用量；归一化至合格产出 | 校准秤、转移单、返工记录、质量平衡检查 |
| `cp_packaging_bom` | `packaging` | 纸盒和其他分别添加的包装 | 包装规范、采购记录、称量记录 | 组件身份、材料、单件质量、每销售单元件数、再生含量、印刷规范 | 称量有记录的样本，并将使用量与已包装销售单元核对 | item 和 kg | 每次包装修订和生产批次 | 代表性报告年度 | 每个包装场址和销售配置 | 单件质量乘以使用件数，归一化至声明的器具销售单元 | 包装图纸、抽样记录、秤校准、包装单元核对 |
| `cp_sterilization_records` | `sterilization` | 灭菌剂、电力和环氧乙烷直接排放 | 灭菌周期批记录、化学品领用记录、电表、连续或批次排放监测 | 周期编号、装载质量、放行产品质量、灭菌剂投料和回收、kWh、烟气流量、浓度、无组织释放估算、减排状态 | 核对经验证的周期记录、电表、化学品库存和减排后监测 | kg 和 kWh | 每个周期；按许可证或验证频次监测排放 | 代表性报告年度 | 每套灭菌和减排系统 | 汇总完整周期并归一化至无菌放行产出；烟道和无组织释放须明确区分 | 灭菌验证、批次放行、电表校准、化学品质量平衡、监测报告 |
| `cp_use_scenario` | `use_and_maintenance` | 充电用电、替换电池和废电池 | 产品测试、充电器测量、寿命记录、替换日志或声明情景 | 器具件数、运行小时、充电能量、充电器损耗边界、充电周期、电池化学体系、替换件数、单件质量、使用寿命、地理区域 | 使用产品特定测试或有据可查的用户/维护记录；情景数据须单独识别 | item、kWh、MJ、kg、hour、year | 每次测试或维护事件 | 声明的预期使用寿命 | 声明的用户地理区域和器具配置 | 按有据可查的周期和器具件数缩放每周期实测交换；核对投入与废弃一次电池 | 测试报告、充电器电表校准、寿命声明、替换记录、情景依据 |
| `cp_end_of_life_records` | `end_of_life` | 废旧器具收集 | 收集凭证、称量记录、拆解记录 | 器具类型、配置、毛质量、拆出电池质量、收集地理区域、去向、处理路线 | 在监管权转移时称量废旧器具和单独拆出的电池 | kg | 每次收集或转移 | 声明的生命终期情景期间 | 每个收集地理区域和路线 | 汇总扣除单独记录电池后的器具质量，并归一化至进入生命终期的器具 | 校准秤、监管链记录、处理接收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_mass` | 使用件数记录的组件、包装和电池行 | mass_kg = accepted_or_used_item_count × measured_mean_unit_mass_kg；样本和配置必须与报告产品一致 | 件数、产品特定单件质量样本 | 每参考流的组件质量（kg） | `ec-pef-2021` |
| `calc_shared_energy` | 未按产品直接计量的装配或灭菌能耗 | product_energy_MJ = shared_energy_kWh × 3.6 × product_causal_driver / total_causal_driver | 共用电表读数、机器时间或周期装载量、合格产出 | 每参考流或过程产出的分配能量（MJ） | `ec-pef-2021` |
| `calc_ethylene_oxide_release` | 环氧乙烷直接排放至空气 | released_mass = integrated post-abatement concentration × dry gas volume + documented fugitive release；温度和压力参考条件必须一致 | 浓度、烟气流量或体积、监测时段、无组织释放估算 | 每无菌过程产出的环氧乙烷排放（kg） | `eu-mdr-2017-745` |
| `calc_use_electricity` | 可充电器具使用 | lifetime_electricity_MJ = measured_charge_energy_kWh × charge_cycles × appliance_count × 3.6 | 每次充电实测能量、周期数、件数、使用寿命 | 每声明寿命功能单位的电力（MJ） | `selhorst-et-al-2025-hearing-aid-lca` |
| `calc_replacement_cells` | 使用一次锌空气电池 | supplied_or_spent_mass_kg = documented_cell_count × product-specific_measured_unit_mass_kg | 电池件数、单件质量、器具件数、使用寿命 | 每声明寿命功能单位的电池质量（kg） | `selhorst-et-al-2025-hearing-aid-lca` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和所有清单行 | 匹配产品类型、化学身份、流类型、产品状态、属性和单位；不得以宽泛或相关流替代尚未解决的精确身份。 | 批准的 BOM、供应商规范、TianGong state-100 UUID 审核、未解决流登记 |
| `dq_mass_balance` | 装配、包装和生命终期 | 在同一期间将验收材料和组件质量与合格产出、退料、返工、废品、包装和转出废物核对。 | 签署的质量平衡表、校准称量记录、转移单 |
| `dq_temporal` | 所有前景记录 | 有条件时使用连续且有代表性的 12 个月；否则披露较短期间、季节性、生产批次和外推。 | 带日期的电表数据、生产日历、发票、批记录 |
| `dq_technology` | 装配、灭菌、供电系统和使用 | 记录产品配置、BOM 修订、电池化学体系、制造线、灭菌路线及减排、充电器技术和工作周期；不得在缺少加权记录时合并不兼容技术。 | 工程变更记录、过程规范、验证报告、产品测试 |
| `dq_geography` | 电力、供应链、使用和生命终期 | 说明制造场址、电网结构地理区域、已知的供应商地理区域、销售/使用地理区域和生命终期路线地理区域。 | 场址元数据、公用事业合同、供应商声明、情景记录 |
| `dq_completeness` | 全部清单 | 筛查完整的产品特定 BOM 及所有前景电表、化学品、直接排放、废品、包装、附件和条件性阶段；量化并说明排除项。 | 与 BOM、电表、许可证和废物登记交叉引用的完整性检查表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别和参考流 | 确认声明产品是佩戴、携带或植入体内的成品补偿器具，且参考 UUID、质量属性和 kg 单位未改变。 | `un-cpc-3-0-2025` |
| `validate_qualifiers` | 前景数据包 | 缺少器具类型、预期用途、主动/被动状态、佩戴/携带/植入状态、件数、质量、配置、供电化学体系、无菌状态、地理区域、使用寿命或边界时，完整性校验失败。 | `eu-mdr-2017-745`; `ec-pef-2021` |
| `validate_bom` | 生产清单 | 确认每项 BOM 组件和每项包装均由原子清单行表示，或作为量化排除项披露；验证随附附件未隐藏在参考产品质量中。 | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca` |
| `validate_conditions` | 条件性行和过程 | 确认电池化学体系、硅橡胶耳塞、ABS 注塑、灭菌路线、使用和生命终期行仅在明确条件适用时纳入，且适用行未被遗漏。 | `eu-mdr-2017-745`; `selhorst-et-al-2025-hearing-aid-lca` |
| `validate_no_double_count` | 电力、采购组件、厂外服务和废物 | 确认前景交换排除了相连供应商数据集中已包含的负荷，且厂外灭菌未与厂内灭菌剂和能源重复表示。 | `ec-pef-2021` |
| `validate_allocation` | 共用操作 | 确认已优先尝试细分，且每项余下分配均使用有记录的因果物理驱动因素，并保留分子、分母和期间。 | `ec-pef-2021` |
| `validate_mass_balance` | 装配和生命终期 | 确认投入、合格产出、返工、废品、单独供应附件、包装和废物质量在声明容差内平衡；说明任何不平衡。 | `ec-pef-2021` |
| `validate_range_status` | 重要清单流 | 确认前景值来自声明的采集协议。只有至少两项相互独立、边界兼容且经原文核实的来源支持综合区间后，外部范围证据才视为已解决。 | `ec-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定前景生产数据集；条件性阶段数据集可单独发布并链接 |
| downstream_use | 用作声明器具配置和地理区域的 `secondary_dataset` 或 `background_dataset`；只有在条件性阶段和参考流换算明确时才可作为 lifecyclemodel 的输入 |
| allowed_use | 对指定器具类型、BOM 修订、生产路线、无菌状态、制造商厂门地理区域、供电系统和声明期间建模；仅在纳入相应阶段时使用情景特定的使用或生命终期数据 |
| excluded_use | 不得通用于未表示的器具类型，不得在植入与非植入器具、不同电池化学体系或不同无菌状态之间替代；功能、使用寿命、边界和数据质量不等价时不得用于比较性声明 |
| required_metadata | canonical PCR id；产品和参考流 UUID；器具类型和预期用途；主动/被动及佩戴/携带/植入状态；件数和净质量；BOM 修订；配置和附件；供电化学体系；无菌状态和方法；场址及市场地理区域；技术；报告期间；使用寿命；边界；分配；截断；背景数据集版本 |
| required_quality_disclosure | 一手数据占比；电表和质量覆盖率；BOM 完整性；未解决 UUID；代理数据集；分配驱动因素；质量平衡结果；时间、技术和地理代表性；排除的流和阶段；不确定性；范围证据缺口 |
| update_trigger | 预期用途、产品类型、BOM 或附件配置、电池化学体系、外壳材料、电子模块、装配线、灭菌路线或减排、包装、供应商地理区域、电网结构、寿命声明、使用情景、生命终期路线或会实质改变清单结果的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《产品总分类》第 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-06） | CPC 48172 正式分类身份和英文标题 |
| `ec-pef-2021` | `official_guidance` | 欧盟委员会，Commission Recommendation (EU) 2021/2279 附件一《产品环境足迹方法》，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（检索日期：2026-09-06） | 功能单位结构、产品特定 BOM 和制造数据、生命周期阶段、分配、截断、采集及生命终期建模规则 |
| `eu-mdr-2017-745` | `standard` | 欧洲议会和理事会关于医疗器械的 Regulation (EU) 2017/745，官方文本，https://eur-lex.europa.eu/eli/reg/2017/745/oj/eng（检索日期：2026-09-06） | 预期用途、植入器械、无菌状态、灭菌方法、识别、性能和预期寿命限定信息 |
| `selhorst-et-al-2025-hearing-aid-lca` | `literature` | Selhorst, R. da R.; Alves, C.; Li, C.; Silva, A. (2025), Life Cycle Assessment of Hearing Aid Devices: Environmental Impact Analysis and Improvement Opportunities, Recycling 10(6), 219, https://doi.org/10.3390/recycling10060219（检索日期：2026-09-06） | 助听器特定过程分解，以及 BOM、组件质量、制造用能、包装、分销、使用耗材和生命终期的一手数据方法 |
