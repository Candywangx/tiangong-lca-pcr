---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.scanners-except-combination-of-printer-scanner-copier-and-or-fax
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 扫描仪（打印机、扫描仪、复印机和/或传真机组合除外）

## 1. 范围与适用性

本PCR适用于将文件或图像数字化的独立式计算机输入扫描仪，包括平板式及馈纸式型号。不包括打印、扫描、复印、传真组合设备、医学诊断扫描仪、三维计量扫描仪及仅用于读取条码的设备。本制造模块止于经测试设备的工厂交付。光学架构、合格图像质量、测试损失及随附附件配置均须按产品采集；不适用打印耗材假设。范围依据 `un-cpc-3-0-structure-2025` 及 `epa-imaging-equipment-v3-1` 对扫描仪的区分。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.scanners-except-combination-of-printer-scanner-copier-and-or-fax |
| classification_refs | CPC 3.0: 45262; `un-cpc-3-0-structure-2025` |
| covered_products | 独立式平板及馈纸图像扫描仪 |
| excluded_products | 多功能成像设备；医学、三维计量及仅条码扫描设备 |
| representative_product | 声明型号及传感器架构的独立式文件扫描仪 |
| production_route | 采购零部件集成、校准、验收测试及包装 |
| market_state | 全新、已测试、声明随附附件的出厂扫描仪 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将所声明格式的原稿数字化 |
| How much | 制造声明单位：1 kg合格扫描设备净质量；以实测整机套装质量m换算为一台完整扫描仪 |
| How well | 声明光学分辨率、色深、原稿尺寸、单/双面吞吐量及验收标准；不得以kg等同扫描性能 |
| How long or cycle | 一次制造及验收周期。服务比较须另行声明寿命页数及年限；不设默认寿命 |
| reference_flow_link | scanner_output = 1 kg；每台制造负荷等于每kg负荷乘以m。本模块为部分制造清单，不构成完整服务比较。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 扫描仪（打印机、扫描仪、复印机和/或传真机组合除外） `9111cdf0-20a6-465c-a7cb-4b8a0fbc4968` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；平板式或馈纸式；CIS或CCD；照明方式；光学分辨率；色深；原稿尺寸；双面模式；额定吞吐量及测试设置；套装净质量；随附适配器及电缆；制造场址及期间；交付状态；上游边界 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_mass` | scanner_output | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将合格套装与包装分开称量。使用型号特定的台数×实测套装质量；不得以运输毛重代替。 |
| `electricity_units` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表kWh记录，按1 kWh = 3.6 MJ换算。铭牌功率不等同工厂实测能耗。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 装配厂接收的采购成品零部件及空包装 |
| starting_condition_role | 连接供应商的装配前景；原料及零部件生产位于上游 |
| product_classification_scope | 独立式计算机输入扫描仪；不将扫描仪零部件作为成品 |
| recursive_input_rule | 采购完整扫描仪须采用单独装配或翻新路线及其供应商清单；不得将相同整机输出递归展开为自身输入 |
| upstream_dataset_requirement | 每个零部件连接匹配的供应商生产及交付数据集。缺失上游覆盖应披露为缺口，不得视为零负荷。 |
| disclosure | 报告零部件制造地点、外购/厂内划分、附件及包装范围和排除项 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `manufacturing_boundary` | manufacturing | 纳入装配、校准、测试、返工、包装及连接的上游供应和工厂废物处理。披露排除的分销、使用及报废阶段；不得以本模块声称完整生命周期。 | `ghg-protocol-product-standard-2011` |
| `bom_completeness` | foreground | 核对实际物料清单。下列卡片为常见原子交换，并非通用完整物料清单。存在CCD模块、进纸辊、紧固件、其他材质外壳、缓冲件或实际工厂化学品时，应分别增加有明确身份的交换。须核实不存在，不得假设为零。避免供应商总成与内部零件重复计入。 | `epson-gts55-scanner-parts`; `epson-v19-v39-scanner-parts` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | inclusion_condition | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `scanner_assembly` | 装配、校准、测试及包装 | required | 所有范围内制造记录 | 集成前景生产；保留工序级计量 | 1 kg合格扫描设备净质量 |

### 过程：装配、校准、测试及包装（`scanner_assembly`）

#### 输入

##### 产品流

###### ABS注塑扫描仪外壳 (`housing`)

仅当安装的外壳为ABS时纳入；使用供应商成品零件质量，不使用树脂投料量。

- 选定流：ABS注塑扫描仪外壳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`

###### 已装配元器件的扫描仪控制电路板 (`board`)

记录到厂的已装配电路板；单独采购的图像传感器模块不得重复计入。

- 选定流：已装配元器件的扫描仪控制电路板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`

###### 接触式图像传感器模块 (`sensor`)

inclusion_condition：采用CIS设计。记录完整采购模块，包含其内置照明。

- 选定流：接触式图像传感器模块
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`

###### 步进电动机 (`motor`)

inclusion_condition：装有步进驱动。记录采购电动机质量及额定输出功率。

- 选定流：步进电动机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`

###### 扫描仪成品玻璃台板 (`glass`)

inclusion_condition：平板式设计。记录成品光学台板，不使用未经加工的玻璃板。

- 选定流：扫描仪成品玻璃台板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`

###### 交流转直流电源适配器 (`adapter`)

inclusion_condition：产品随附适配器。USB供电且不附带适配器的型号不得计入。

- 选定流：交流转直流电源适配器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`

###### USB电缆 (`cable`)

inclusion_condition：随附USB电缆。记录带接头电缆，不得替换为排线。

- 选定流：USB电缆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`

###### 瓦楞纸箱 (`box`)

inclusion_condition：使用瓦楞运输纸箱。记录实际空箱质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`

###### 电力 (`electricity`)

计量同一生产期内装配、校准、功能测试、返工及包装用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

#### 输出

##### 产品流

###### 扫描仪（打印机、扫描仪、复印机和/或传真机组合除外） (`scanner_output`)

记录合格扫描仪质量，包含已声明的随附运行附件，不含任何运输包装。

- 选定流：扫描仪（打印机、扫描仪、复印机和/或传真机组合除外） `9111cdf0-20a6-465c-a7cb-4b8a0fbc4968`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_output`

###### 瓦楞纸箱 (`box_output`)

随扫描仪出厂的纸箱质量与扫描仪净质量分开记录；其为附属包装，不作为独立分配的共产品。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_output`

##### 废物流

###### 废弃独立式扫描仪 (`reject`)

inclusion_condition：工厂报废不可修复的完整扫描仪。记录废物转移质量及去向；厂内返工不属于废物外运。

- 选定流：废弃独立式扫描仪
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期实测总量除以合格扫描仪净质量；保留适用条件及原始记录
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格扫描设备净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_output`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `subdivide_first` | shared_operations | 优先使用独立产线记录。剩余共用负荷按有证据的物理驱动因素分配；仅在无法建立物理关系时论证经济分配。 | `ghg-protocol-product-standard-2011` |
| `reject_accounting` | rejects | 将测试及返工负荷计入合格产品。不得向报废扫描仪或附属运输纸箱分配负负荷。单独记录废物处理，防止重复回收抵扣。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_components` | scanner_assembly | 采购零部件及纸箱 | 物料清单及库存台账 | 零件编号；组成；数量；质量；收货；期初/末库存；退料；型号 | 称量代表性零件并将领用量与库存核对 | kg | 每批 | 声明的完整生产期 | 装配场址及具名供应商 | 净消耗/合格扫描仪kg；必要时以数量×实测零件质量换算 | 秤校准；供应商零件图；库存核对 |
| `cp_energy` | scanner_assembly | 电力 | 电表及运行记录 | 起止读数；单位；产线；返工；运行时间；分配驱动因素 | 分表计量装配/测试/包装并核对厂级总量 | kWh | 每班 | 与合格产出同期间 | 装配场址 | 分配后kWh × 3.6/合格扫描仪kg | 电表校准；账单；分配表 |
| `cp_output` | scanner_assembly | 合格扫描仪、出厂纸箱及报废扫描仪；分别记录 | 验收及发运台账 | 合格台数；套装质量；纸箱质量；报废质量；库存变化；去向；测试设置 | 分别称量；核对验收、返工及发运记录 | kg | 每批 | 同一完整生产期 | 装配场址及废物接收方 | 各项输出质量/合格扫描仪净kg | 测试报告；秤核查；废物转移记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all_rows | q_i = Q_i / M_good；M_good = 合格台数×实测套装净质量。使用库存调整后的消耗量，包含失败产品的投入。 | Q_i; M_good | q_i |  |
| `balance_material` | mass | 核对投入质量与合格套装、出厂包装、废物及库存变化。依记录的测量不确定度调查差额；不设通用容差。 | 质量台账 | 差额解释 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `representativeness` | all_rows | 评价供应商及场址记录的技术、地理、时间代表性、完整性及可靠性。 | `ghg-protocol-product-standard-2011` |
| `configuration` | scanner_output | 保留型号特定物料清单及验收设置。无产量加权及披露时，不得混合CIS与CCD型号或馈纸与平板配置。 | 物料清单；测试报告；产量权重 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity_check` | reference | 拒绝多功能设备及缺失必需限定信息的数据；核实质量归一化和精确流身份。 | `un-cpc-3-0-structure-2025`; `epa-imaging-equipment-v3-1` |
| `inventory_check` | inventory | 要求每项适用行具备采集记录及单位换算。空UUID表示明确身份缺口，不允许省略交换。检查物料完整性、包装分离、合格质量为正及总量核对。 |  |
| `boundary_check` | dataset | 阻止以本制造模块声称完整生命周期。上游数据集缺口及排除项必须清晰披露。 | `ghg-protocol-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据包 |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 型号特定制造贡献；仅在上游连接完整时用于摇篮到大门模型 |
| excluded_use | 单独用于完整生命周期或扫描服务比较；替代多功能打印设备 |
| required_metadata | 必需限定信息；供应商边界；期间；地理范围；产量权重；分配 |
| required_quality_disclosure | UUID缺口；上游缺口；排除项；测量不确定度；范围证据局限 |
| update_trigger | 型号、物料清单、传感器、供应商、场址、测试程序或包装变更 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | UN Statistics Division, CPC 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 检索日期 2026-09-08 | 分类识别；45262行 |
| `epa-imaging-equipment-v3-1` | `standard` | US EPA, ENERGY STAR Imaging Equipment, Version 3.1; https://www.energystar.gov/sites/default/files/asset/document/ENERGY%20STAR%20Version%203.1%20Imaging%20Equipment%20Specification_0.pdf; 检索日期 2026-09-08 | 准入标准第1节：扫描仪及多功能设备定义；不采用数值能效限值 |
| `ghg-protocol-product-standard-2011` | `standard` | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; 检索日期 2026-09-08 | 第7至9章：部分边界披露、数据质量及分配层级；应用于本制造模块 |
| `epson-gts55-scanner-parts` | `handbook` | Epson GT-S55/GT-S85 User Guide, Scanner Parts; https://files.support.epson.com/htmldocs/gts55_/gts55_ug/parts_1.htm; 检索日期 2026-09-08 | 外壳、进纸辊、直流电源接口及USB接口的实物核查清单；并非物料清单或数量来源 |
| `epson-v19-v39-scanner-parts` | `handbook` | Epson V19/V39 Scanner Parts; https://files.support.epson.com/docid/cpd6/cpd62790/source/scanners/source/product_info/references/v19_v39/v19_v39_parts.html; 检索日期 2026-09-08 | 平板式玻璃、扫描滑架及USB接口；按工艺路线核查实物 |
