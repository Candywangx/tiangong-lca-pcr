---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-input-or-output-peripheral-devices
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他输入或输出外围设备

## 1. 范围与适用性

本 PCR 规定与计算机连接的证卡、卡片、纸带、磁墨及光学读取外围设备的前景制造，包括购入功能组件后的总装、验收测试及包装。语义边界依据 `un-cpc-2-1-reader-notes` 中读取设备的排除规定，并以 `un-cpc-3-0-structure-2025` 核对现行分类身份。旧版注释作为范围证据，不声称 CPC 3.0 发布了相同注释。

以 USB 接触式智能卡读卡器为代表配置（`acs-acr39u-product`）。厂家规格仅支持接口和测试限定信息，不推导通用物料清单、寿命或清单数量。数据包须选择具体型号；不同传感技术分别建模。半导体制造、电路板组装和外壳模塑属于购入组件的上游负荷。集成制造须先明确扩展上游前景过程，才能用本规则描述其完整边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-input-or-output-peripheral-devices |
| classification_refs | CPC 3.0: 45269 |
| covered_products | 计算机连接的证卡和卡片读取器、纸带读取器、磁墨识别及光学读取设备 |
| excluded_products | 键盘、鼠标、操纵杆；图像扫描仪；打印机及多功能打印设备；显示器和投影仪；固定或可移动存储驱动器及闪存卡读卡器；智能卡本身；独立支付终端 |
| representative_product | USB 接触式智能卡读卡器，按具体型号配置 |
| production_route | 购入功能读取电路板及成形组件；装配、测试与包装 |
| market_state | 出厂的新制完整合格设备；包装单列清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明的计算机读取接口 |
| How much | 1 kg 同型号合格完整设备，同时报告对应台数 |
| How well | 通过声明的协议、接口、读写及验收测试，记录判废条件 |
| How long or cycle | 一个制造报告期；不作使用寿命主张。服务比较需另行声明工作周期及寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他输入或输出外围设备 `25b5cd7d-87b6-4790-8626-ce835d1edcad` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；读取原理；支持的介质及协议；主机接口；供电方式；是否含电缆；单台净质量；合格台数；场址及报告期；购入模块边界；测试条件；包装配置 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mass_basis | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量含随附电缆的完整设备，排除纸箱。合格质量等于台数乘以该型号实测单台质量。不得把 kg 等同于台数。 |
| energy_conversion | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表记录，仅进行一次 1 kWh = 3.6 MJ 换算。USB 测试用电须含可归属的主机损耗。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 装配场址接收购入的可用已装配读取电路板和成形组件 |
| starting_condition_role | foreground_input |
| product_classification_scope | 第 2 节语义排除界限内的读取外围设备 |
| recursive_input_rule | 购入的同类别模块作为实测输入，仅关联一次上游数据集；不递归重复其制造 |
| upstream_dataset_requirement | 各购入组件须关联边界相容的从原料至交付数据集，覆盖电子部件、传感元件、模塑和运输，否则披露缺口 |
| disclosure | 声明供应商、地域、技术、排除项及是否仅报告门到门结果 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_completeness | foreground | 包括验收废品、返工、可归属能源和包装。核对实际物料清单；对于核心清单未列出的实际焊料、胶黏剂、螺钉、独立读取头、袋、废物或直接排放，分别增加原子交换行。缺失须有记录证明，不得默认零值。 |  |
| boundary_lifecycle | dataset | 配送、客户使用和报废阶段不属于本制造数据包。不得称其为完整产品生命周期结果；下游完整生命周期模型须补充这些阶段。 | `ghg-product-standard-page` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly_test | 总装与验收测试 | required |  | 前景生产 | 1 kg 合格设备 |
| packing | 交付包装 | required |  | 整备 | 相同的 1 kg 合格设备；不重复计产品产出 |

### 过程：总装与验收测试（`assembly_test`）

#### 输入

##### 产品流

###### 读卡器已装配电路板组件（`reader_board`）

必需；包含已安装的读取接口。声明电路板型号、接触或传感技术及供货组件。单独购入的读取头须另列交换。

- 选定流：读卡器已装配电路板组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期实测数量除以合格设备净质量；参考产出归一化为 1 kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格完整设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly_test`

###### ABS 模塑读卡器外壳（`abs_housing`）

inclusion_condition：安装 ABS 外壳时。记录模塑成品质量、树脂牌号及再生料比例，不得以树脂粒料替代。

- 选定流：ABS 模塑读卡器外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期实测数量除以合格设备净质量；参考产出归一化为 1 kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格完整设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly_test`

###### 带连接器的 USB 电缆（`usb_cable`）

inclusion_condition：设备配有 USB 电缆时。记录完整电缆质量、长度和连接器类型，包括固定连接的电缆。

- 选定流：带连接器的 USB 电缆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期实测数量除以合格设备净质量；参考产出归一化为 1 kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格完整设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly_test`

###### 电力（`electricity`）

包括装配、固件写入、功能测试、返工及可归属的厂务电力；测量测试主机耗电，不计入客户使用阶段。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：报告期实测数量除以合格设备净质量；参考产出归一化为 1 kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格完整设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly_test`

#### 输出

##### 产品流

###### 其他输入或输出外围设备（`reference_product`）

按单一型号及配置记录合格完整设备。排除包装质量。包装过程使用相同的合格产出分母。

- 选定流：其他输入或输出外围设备 `25b5cd7d-87b6-4790-8626-ce835d1edcad`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期实测数量除以合格设备净质量；参考产出归一化为 1 kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格完整设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly_test`

##### 废物流

###### 废弃读卡器电子组件（`rejected_reader`）

inclusion_condition：无法修复的读卡器组件离厂处理时。记录实际组成、危险特性、去向和处理方式；厂内返工设备不作为废弃输出。

- 选定流：废弃读卡器电子组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期实测数量除以合格设备净质量；参考产出归一化为 1 kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格完整设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly_test`

### 过程：交付包装（`packing`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`carton`）

inclusion_condition：交付使用瓦楞纸箱时。称量分摊到合格设备的纸箱质量，披露再生料含量及交付包装配置。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期实测数量除以合格设备净质量；参考产出归一化为 1 kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格完整设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_records | shared_operations | 优先采用专用领料及电表记录。共用测试设备按实测功率乘以占用测试时长分配实测电力；共用包装按实际纸箱消耗分配。依据 cp_assembly_test 和 cp_packing 记录因果依据，核对分配合计与实测总量。 |  |
| reject_burden | waste | 废品及返工负荷归于合格产出。不得重复计算返工设备，也不得对离厂废物自动给予替代原生生产信用；披露下游回收约定。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly_test | assembly_test | 组件；电力；合格和废弃设备 | 生产记录 | 型号；批次；组件领退料质量；期初期末库存；合格台数；单台净质量；废品质量；kWh；测试时长；功率；返工；处理去向 | 称量并核对库存；计量含测试主机的用电；保留验收及废物转移记录 | kg; count; kWh; h | 逐批及逐计量间隔 | 声明的连续代表性报告期 | 单场址及型号 | 合计净领用及实测能耗，除以合格净质量，避免重复计返工 | 校准；物料清单；库存核对；供应商组成；测试日志 |
| cp_packing | packing | 纸箱消耗 | 包装记录 | 纸箱质量；领退数量；合格设备质量；配置 | 称量代表性纸箱，核对领用及交付记录 | kg; count | 每批发货 | 与装配相同报告期 | 相同场址及型号 | 纸箱净用量除以合格设备质量 | 秤校准及包装物料清单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | inventory | M = 合格台数 × 实测单台净质量；q_i = 报告期净数量_i / M；核对期初库存 + 收货 - 期末库存 - 退货 | cp_assembly_test; cp_packing | 每 kg 设备的交换 |  |
| energy | electricity | MJ = kWh × 3.6 | cp_assembly_test | MJ/kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceability | all_rows | 将数量关联至带日期的记录、型号及场址；保留不确定性及缺失数据披露。不得以厂家规格替代生产消耗。 | cp_assembly_test; cp_packing |
| technology | reference_product | 记录读取协议、随附接口和验收测试；无明确权重不得混合接触式、磁式和光学设备。 | `acs-acr39u-product` |
| complete_bom | components | 核对组件质量、合格产品、废品及库存变化。各差异须结合测量不确定性调查，不设置预设容差。 | 供应商物料清单及批次台账 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | 须提供全部参考限定信息及正的合格质量。排除存储介质读卡器和手动输入设备。 | `un-cpc-2-1-reader-notes` |
| validate_inventory | all_rows | 须使用原子交换、相容单位、一致报告期及上游边界关联。缺失 UUID 保持为明确身份缺口；缺失数量不得视为零。不授权通用外部数量范围。 |  |
| validate_comparison | dataset | 按质量归一化的制造结果不能证明服务等效。比较前须统一读取功能、性能、工作周期、寿命及完整系统边界。 | `ghg-product-standard-page` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 关联明确上游数据集的特定型号制造贡献 |
| excluded_use | 无条件比较；以门到门数据主张完整生命周期；替代存储驱动器或智能卡 |
| required_metadata | 型号；场址；报告期；净质量；台数；传感技术；物料边界；供应商地域；分配 |
| required_quality_disclosure | 覆盖程度；不确定性；缺失 UUID 和数量；排除阶段；范围证据缺口 |
| update_trigger | 物料清单、接口、供应商、测试制度、能源组合或制造边界变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UNSD CPC 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 现行类别名称及相邻类别排除；检索日期 2026-09-09 |
| un-cpc-2-1-reader-notes | official_guidance | UNSD CPC 2.1, 45269. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/45269 | 原始解释注释、读取设备范围及存储和手动输入排除；检索日期 2026-09-09 |
| acs-acr39u-product | handbook | ACS ACR39U-U1 智能卡读卡器技术规格 V1.04，第 1、2、5 节（CardLogix 托管的制造商原始文件）。 https://www.cardlogix.com/wp-content/uploads/ACS-ACR39U-U1-Smart-Card-Reader-Technical-Specifications.pdf | 代表性的计算机连接读卡器，仅用于接口、供电及电缆限定信息；检索日期 2026-09-09 |
| ghg-product-standard-page | official_guidance | GHG Protocol Product Standard overview and comparison FAQ. https://ghgprotocol.org/product-standard | 完整生命周期阶段区分及产品比较限制；检索日期 2026-09-09 |
