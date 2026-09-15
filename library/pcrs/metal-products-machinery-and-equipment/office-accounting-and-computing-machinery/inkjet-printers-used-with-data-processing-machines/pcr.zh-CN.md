---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.inkjet-printers-used-with-data-processing-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 与数据处理机配套使用的喷墨打印机


## 1. 范围与适用性

本PCR适用于新制、与数据处理机连接、以液态墨滴在介质上成像的单功能喷墨打印机。热发泡和压电设计共用同一方法，但必须声明实际技术。兼具打印、扫描、复印或传真功能的多功能设备、激光及击打式打印机、工业印刷机、独立复印机、单独销售的墨盒以及再制造不属于本生产路线。来源：`un-cpc-3-0-structure-2025`、`epa-energy-star-imaging-equipment-3-2`。

前景范围为外购部件装配、灌注、功能测试与厂门包装。本数据集作为下游全生命周期建模的生产模块。部件清单是代表性起点，不能免除完整产品物料清单的采集要求。对于未包含在有记录的外购组件中的实际送纸辊、皮带、线束、紧固件、储墨容器、吸墨垫、缓冲件及不合格部件，采集协议要求另建原子交换。不得将未核算余量归入未指明材料流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.inkjet-printers-used-with-data-processing-machines |
| classification_refs | CPC 3.0: 45263 (`un-cpc-3-0-structure-2025`) |
| covered_products | 新制、与数据处理机连接的单功能喷墨打印机 |
| excluded_products | 多功能设备；非喷墨打印机；独立印刷机；单独耗材；再制造打印机 |
| representative_product | 采用外购外壳、机架、控制板、打印头、电机和电源的指定型号 |
| production_route | 外购部件装配及测试，随后包装 |
| market_state | 经验收的新打印机在厂门交付，含声明的随附墨水和附件；包装单独计量 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供接收电子输入并产生规定印刷输出的打印机生产清单 |
| How much | 生产声明单位：1 kg净重配置打印机；一台打印机对应其实测净质量m kg |
| How well | 声明型号、介质幅面、分辨率、彩色能力、双面功能和验收测试；质量本身不能确定功能等效性 |
| How long or cycle | 一个明确的生产报告期。下游服务比较必须另外声明寿命、打印页数、覆盖率和工作周期 |
| reference_flow_link | 所有生产数量除以已验收打印机净产量Q kg；乘以m可得到每台数据。本单位不代表全寿命打印服务功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 与数据处理设备一起使用的喷墨打印机 `02f03b13-dc7c-4249-be05-1a895cc160b6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；单功能状态；喷墨技术；交付配置；单台净质量；墨水配方与充墨量；介质幅面；分辨率；彩色及双面能力；测试协议；工厂及国家；报告期；供应商边界；包装质量；电网电压和地域 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_mass` | 打印机输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考质量不含运输包装；随附墨水及附件应与部件输入的口径一致。保留台数及净质量测量。 |
| `electricity_conversion` | 外购电力 | Net calorific value | MJ | 实测kWh按3.6 MJ/kWh换算；不得在缺少实测时间和负载时用额定功率推算耗电。 |
| `ink_mass` | 墨水输入 | Mass | kg | 使用配方墨水质量；体积换算须有该配方密度和温度。分别核算交付墨水、测试沉积墨水及收集的清洗排墨。 |


## 5. 系统边界

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `production_boundary` | foreground | 包括外购部件装配、生产辅助活动、灌注、测试返工及包装；披露排除项，并保留各外购流的上游数据集链接。 | `ghg-protocol-product-standard` |
| `component_boundary` | purchased_parts | 供应商数据集须覆盖实际供货状态：外壳注塑、机架成形、控制板元器件装配及打印头制造。树脂、钢板或裸板不得替代成品部件。 |  |
| `lifecycle_extension` | downstream_use | 配送、用户用电、替换墨水与纸张、维护及寿命终结不在本生产模块内；完整生命周期须补充这些阶段。不得用仅生产结果声称完整产品足迹或服务等效性。 | `ghg-protocol-product-standard` |
| `ink_boundary` | priming_testing | 包括实测工厂灌注及测试耗墨。标称页面产量不能量化工厂耗量；截留的排墨不属于空气排放。 | `epson-ink-yields` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 装配厂接收的外购成品部件及配方墨水 |
| starting_condition_role | 前景起始边界 |
| product_classification_scope | 与数据处理机连接的单功能喷墨打印机，CPC 45263 |
| recursive_input_rule | 内部经测试打印机转序不得递归展开。外购整机不属于本新制装配路线的部件输入，须另行审查并声明路线。 |
| upstream_dataset_requirement | 链接在地域、技术及供货状态上具有代表性的部件、墨水、纸张、电力和包装数据集；披露供应商缺口及运输覆盖情况。 |
| disclosure | 声明外包制造、厂内作业、报告期、成品率、返工、部件质量闭合、包装及全部遗漏阶段。 |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `assembly_test` | 装配、灌注及测试 | required | 始终 | 前景生产 | 已验收未包装打印机质量 |
| `packing` | 包装 | required | 始终 | 厂门交付 | 1 kg净重配置打印机 |

### 过程：装配、灌注及测试 (`assembly_test`)

#### 输入

##### 产品流

###### ABS注塑打印机外壳 (`housing`)

依据部件物料清单取得外壳质量；供应商数据集应包括注塑过程。

- 选定流：ABS注塑打印机外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 打印机钢制机架 (`chassis`)

记录外购成形机架的质量及供应商制造边界，不得按原始钢板处理。

- 选定流：打印机钢制机架
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 已装配元器件的打印机控制电路板 (`pcb`)

记录包含已安装元器件的控制板质量；排除单独计量的电源。

- 选定流：已装配元器件的打印机控制电路板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 喷墨打印头 (`head`)

记录打印头质量及热发泡或压电技术；按供货配置说明附带墨路部件。

- 选定流：喷墨打印头
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 小型电动机 (`motor`)

记录所安装驱动电机的质量和额定功率；相同电机可合计，不同流身份不得合并。

- 选定流：小型电动机 `60ce5b4c-0a5b-4ee5-9f5a-ac3d2b69681c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 打印机交流转直流电源 (`supply`)

记录完整电源质量及随附电缆边界；避免重复计入同一电路板。

- 选定流：打印机交流转直流电源
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 喷墨墨水 (`ink`)

计量领用墨水减退库量，区分随产品交付的充墨量与灌注、测试耗墨量。不同配方分别实例化；墨盒壳体不属于墨水质量。

- 选定流：喷墨墨水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 未涂布木浆印刷纸 (`paper`)

称量测试纸张，或按张数、实测单张面积和定量换算；包括重复测试用纸。

- 选定流：无涂层无木纸 `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 电力 (`electricity`)

计量装配、固件写入、灌注、测试及所分配生产辅助活动的用电；保留电网地域和电压信息。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

#### 输出

##### 产品流

###### 经测试的未包装喷墨打印机 (`tested_printer_out`)

称量已验收的未包装打印机，明确交付配置；转入包装工序时不得重复附加上游负荷。

- 选定流：经测试的未包装喷墨打印机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

##### 废物流

###### 废印刷测试纸 (`waste_paper`)

称量废弃测试纸张及其附着墨水；记录接收处理方式，并排除留存的测试记录。

- 选定流：废印刷测试纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

###### 待回收的不合格喷墨打印机 (`waste_printer`)

inclusion_condition：完整装配打印机报废并送出厂外时纳入。记录质量和处理去向；内部返工不属于废物外运。

- 选定流：待回收的不合格喷墨打印机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_test`

### 过程：包装 (`packing`)

#### 输入

##### 产品流

###### 经测试的未包装喷墨打印机 (`tested_printer_in`)

使用与装配输出相匹配的转入量，并核对在制品库存变化。

- 选定流：经测试的未包装喷墨打印机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`

###### 瓦楞纸箱 (`box`)

记录每台出厂产品所用外购纸箱质量，包括包装损耗；完整物料清单中另列缓冲件。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`

###### 低密度聚乙烯包装薄膜 (`bag`)

inclusion_condition：使用LDPE防护薄膜时纳入。记录薄膜质量和厚度；树脂粒料不能视为已加工薄膜。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`

#### 输出

##### 产品流

###### 与数据处理设备一起使用的喷墨打印机 (`reference_product`)

记录已验收出厂打印机质量，不含运输包装；保留台数及每台配置产品的净质量。

- 选定流：与数据处理设备一起使用的喷墨打印机 `02f03b13-dc7c-4249-be05-1a895cc160b6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按所链接协议采集过程报告期数量，核对库存并按合格产量Q归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每1 kg厂门已验收净重配置打印机
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`


## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | shared_operations | 优先拆分可直接计量的作业。剩余共享生产用电按有记录的因果驱动量（如计量设备工时）分配；只有无法建立物理关系时才采用经济分配，并披露敏感性。 | `ghg-protocol-product-standard` |
| `reject_burden` | rejects_rework | 测试失败及返工负荷按合格产量归一化。内部转序仅传递一次上游负荷。无经济价值废物不分配生产负荷；明确报告处理及回收约定，不自动扣减避免生产的信用。 | `ghg-protocol-product-standard` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_assembly_test` | `assembly_test` | 各部件、墨水、纸张、电力、转序和废物行 | 物料清单、计量表、批次及废物记录 | 部件身份；供应商供货状态；数量；库存变化；单台净质量；合格及不合格台数；仪表读数；测试耗墨分项；去向；时间 | 称量部件及输出；核对采购及领用记录；读取校准电表；保留完整物料清单和测试日志 | kg; MJ | 每批次及每计量间隔 | 包含正常损耗及返工的一个明确代表性报告期 | 指定装配厂及供应商接口 | 按原子身份汇总净数量后除以Q；核对内部转序及库存 | 校准记录；发票；供应商物料清单；测试验收；废物凭据；质量闭合 |
| `cp_packing` | `packing` | 转序、纸箱、薄膜及合格输出 | 包装及出厂记录 | 转入打印机质量；输出台数及净质量；纸箱和薄膜质量；损耗；库存 | 分别称量包装组件；核对出厂台数及合格打印机质量 | kg | 每个出厂批次 | 与装配相同报告期 | 指定包装厂 | 领用包装净量除以Q；Q不含包装 | 衡器；包装物料清单；出厂核对记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalization` | 全部交换 | q_i = A_i / Q；Q为已验收出厂配置打印机净质量之和。报告期保持一致并核算库存变化。 | A_i; Q | 每kg打印机的数量 |  |
| `unit_conversion` | 每台打印机 | q_item = q_i × m | q_i; m | 每台配置打印机的数量 |  |
| `paper_conversion` | 测试用纸 | 纸张kg = 张数 × 单张面积m2 × 定量g/m2 / 1000 | 张数；面积；定量 | kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `bom_closure` | 外购组件 | 完整部件质量加交付墨水应与打印机净质量核对。记录各组件边界，并在数据集完成前补充缺失的具体交换；不得虚构平衡流。 | 供应商物料清单及称量记录 |
| `period_scope` | 全部行 | 保留地域、技术、测量不确定性及报告期。区分实测零值、不存在的交换及缺失数据。本PCR不规定无证据支持的外部范围。 | 所链接的采集协议 |
| `ink_closure` | 墨水 | 将领用墨水与交付墨水、测试纸沉积、截留排墨和库存变化核对。排出厂外的废墨或吸墨垫须单独计量并增列。 | 墨水平衡及废物凭据 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity_check` | reference_flow | 若缺少型号限定信息，或产品为多功能或非喷墨设备，应拒绝。核对参考产品状态、净质量及台数与质量换算。 | `un-cpc-3-0-structure-2025` |
| `inventory_check` | inventory | 每行必须为单一原子交换，属性与单位匹配，链接采集协议，且具有已核验UUID或明确的未解决身份。检查完整物料清单、正值Q及内部转序平衡。 |  |
| `boundary_check` | dataset | 拒绝重复的部件或上游负荷、将包装计入净参考质量，以及将仅生产结果标为完整生命周期。记录外部范围证据需求，不虚构上下限。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 经完整性检查后，用作所声明配置的工厂生产模块及链接上游的生产建模 |
| excluded_use | 独立的服务比较声明；未含使用及寿命终结的完整产品足迹；外推至多功能或再制造设备 |
| required_metadata | 全部参考限定信息；物料清单；供应商链接；生产报告期；测量及分配方法；边界 |
| required_quality_disclosure | UUID缺口；遗漏交换；上游覆盖；不确定性；未解决范围证据；数据代表性 |
| update_trigger | 型号、配置、供应商、工艺、电网或包装变化；获得新的一手证据 |


## 11. 数据源

| 来源编号 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations, CPC 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 检索日期 2026-09-08 | 分类身份 |
| `epa-energy-star-imaging-equipment-3-2` | standard | EPA, ENERGY STAR Imaging Equipment Version 3.2 Final Specification, definitions 1.A–1.C. https://www.energystar.gov/sites/default/files/ENERGY%20STAR%20Imaging%20Equipment%20Version%203.2%20Final%20Specification.pdf; 检索日期 2026-09-08 | 打印机和喷墨技术定义及运行模式术语，不作为经验耗量范围 |
| `ghg-protocol-product-standard` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, chapters 7–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; 检索日期 2026-09-08 | 边界披露、一手数据及分配层级；本生产阶段数据集不等于完整产品碳足迹 |
| `epson-ink-yields` | handbook | Epson, Ink Yields, Initial Ink and Printhead Maintenance sections. https://epson.com/ink-yield-cartridge-info; 检索日期 2026-09-08 | 区分初始充墨、维护耗墨、残余墨水与页面产量 |
