---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-for-the-goods-of-subclasses-45110-and-45130-except-covers-carryin-976151c5
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 子类45110和45130所列货物的零件和附件（不包括罩套、便携箱及类似品）

## 1. 范围与适用性

本 PCR 适用于打字机、文字处理机、电子计算器，以及具有计算功能的袖珍式数据记录、再现和显示设备的可识别专用零件和附件。不包括整机、罩套、便携箱、未证明具有主机专用性的通用部件，以及按服务销售的维修业务。官方分类来源界定主机范围，并不规定通用物料清单（`un-cpc-3-0-structure-2025`）。

代表路线以已备妥的裸钢芯和外购丁苯橡胶／天然橡胶配方混炼胶为起点，供应作为货物的成品包胶压纸滚筒。钢芯是需通过供应商图纸确认的前景情景。意大利及美国专业企业的包胶和精加工资料支持这些工序，但不表示所有零件均采用该路线。采用全新滚筒芯和再用滚筒芯的产品必须分别建立数据集。以已去胶滚筒芯为起点，意味着去胶及其废料纳入上游预处理数据，而非省略。

对于计算器电子部件、键盘、齿轮或其他专用零件，应按实际单一料号、物料清单、物料状态和制造过程图进行实例化。逐项补充真实交换并审核其 UUID，不得沿用滚筒物料或能耗值。滚筒数据集不能代表电子部件。零件制造、上游隐含负荷、废品及主机兼容性需要区别于整机使用核算的方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-for-the-goods-of-subclasses-45110-and-45130-except-covers-carryin-976151c5 |
| classification_refs | CPC 3.0: 45170; `un-cpc-3-0-structure-2025` |
| covered_products | 上述范围内的主机专用机械和电子零件 |
| excluded_products | 整机；罩套；便携箱；通用零件；维修服务 |
| representative_product | 型号和滚筒芯来源明确的包胶打字机压纸滚筒 |
| production_route | 接收预处理滚筒芯；包胶；硫化；精加工；检验；包装 |
| market_state | 供应商厂门交付的合格成品零件；分别声明全新或再制造状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在兼容打字机中提供纸张支撑及输纸接触面 |
| How much | 1 kg 合格滚筒净产出；记录对应件数 |
| How well | 满足经检测记录的型号专用直径、跳动、硬度、表面和输纸验收要求 |
| How long or cycle | 厂门处一个生产批次；不假定主机寿命或更换周期。服务比较需实测耐久性和安装后的工况 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 打字机压纸滚筒 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 料号；主机型号及功能；图纸版本；尺寸；硬度验收方法；聚合物配方；芯材；全新或再用滚筒芯来源；单件净质量；收率；场址；期间；供能技术；上游预处理边界；包装；运输；开展功能比较时的预期服务和耐久性证据 |

此参考基准用于部分生产阶段，不构成完整服役期比较。每份前景数据包必须包含必需限定信息。1 kg 基准是归一化选择；基于耐久性的功能比较必须计算所需更换零件的件数和质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_reference | 合格产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品净质量与包装、废料分开；使用型号专用实测质量转换件数。 |
| energy_conversion | 电力和蒸汽热量 | Energy | MJ | 计量 kWh 按 3.6 MJ/kWh 换算；蒸汽采用净焓差传热量，不得使用任意固定的质量能量换算系数。 |

## 5. 系统边界

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground | 采集接收至出厂的包胶、硫化、精加工、检测、包装及可归属损失。将外购投入连接上游供应和实际运输，外运废物连接处理过程。披露所得从摇篮到厂门的部分边界及全部排除项。 | `ghg-protocol-product-standard` |
| boundary_operations | platen_production | 按所述路线采集包胶和精加工数据；预处理、高压釜和磨削证据指导工序纳入，但供应商专用硬度建议不作为通用限值。 | `vescovo-platen-recovery`; `jjshort-typewriter-platen` |
| boundary_extension | other_parts | 其他零件或技术应以实测物料清单和明确原子交换替换代表物料清单。如实际存在场内混炼、粘接、清洗、涂布排放或锅炉运行，均应纳入；声明清单完整前逐项核实化学品和排放。 | `ghg-protocol-product-standard` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 裸露且已预处理的钢制滚筒芯及已交付的配方混炼胶 |
| starting_condition_role | foreground_input |
| product_classification_scope | 设备专用零件；不含整机使用阶段 |
| recursive_input_rule | 同类别外购滚筒芯仅记录一次并关联状态对应的上游数据集；不得递归复制相同前景过程。厂内返工循环不构成再次采购。 |
| upstream_dataset_requirement | 供应商数据应说明滚筒芯制造或回收、去胶、清洗、去除橡胶的处理、胶料配制及运输。未明确再用分配方法，不得假定滚筒芯零负荷。 |
| disclosure | 预处理地点；滚筒芯历史；供应商数据集；缺失阶段；分配；本部分清单之外的安装使用服务 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| platen_production | 包胶、硫化、精加工与出厂 | required | 代表性预处理滚筒芯路线 | foreground_production | 1 kg |

### 过程：包胶、硫化、精加工与出厂（`platen_production`）

#### 输入

##### 产品流

###### 钢制打字机压纸滚筒芯 (`core`)

该交换在包胶与精加工边界按其专用批次协议计量。

- 选定流：钢制打字机压纸滚筒芯
- 流属性/单位：Mass / kg
- 数量规则：记录已备妥裸滚筒芯的干基净质量、领用量、退回量和库存；保留供应商预处理及全新或再用状态资料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格滚筒净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_core`

###### 压纸滚筒包胶用未硫化丁苯橡胶／天然橡胶混炼胶 (`compound`)

该交换在包胶与精加工边界按其专用批次协议计量。

- 选定流：压纸滚筒包胶用未硫化丁苯橡胶／天然橡胶混炼胶
- 流属性/单位：Mass / kg
- 数量规则：按交付及领用状态称量配方混炼胶；保留配方或供应商组成、硫化体系和退回未硫化胶库存。不得将已包含的聚合物再次列为外购物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格滚筒净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_compound`

###### 电力 (`electricity`)

该交换在包胶与精加工边界按其专用批次协议计量。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量包胶、电热硫化（采用时）、加工、除尘和检验用电及可归属的空转周期；不重复计入外购蒸汽生产所含用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格滚筒净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`

###### 蒸汽热 (`steam`)

该交换在包胶与精加工边界按其专用批次协议计量。

- 选定流：蒸汽热 `74d07391-d5e4-4beb-bd80-4fe9a7617cf1`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：inclusion_condition：高压釜采用外购蒸汽供热。根据蒸汽流量及入口与回流焓计量净供热量；保留压力、温度、凝结水回流及供应商边界。若场内产汽，应实例化锅炉燃料、水、排污和逐项排放，不得同时把该前景系统的蒸汽列为外购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格滚筒净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`

###### 瓦楞纸箱 (`box`)

该交换在包胶与精加工边界按其专用批次协议计量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：inclusion_condition：出厂时使用瓦楞纸箱。称量空箱并将实际批次用量归属于合格滚筒净产出；产品参考质量不含纸箱。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格滚筒净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_box`

#### 输出

##### 产品流

###### 打字机压纸滚筒 (`reference_product`)

该交换在包胶与精加工边界按其专用批次协议计量。

- 选定流：打字机压纸滚筒
- 流属性/单位：Mass / kg
- 数量规则：尺寸、硬度和功能检验后称量合格成品滚筒；将合格产品净产出归一至 1 kg。按型号记录件数和实测单件净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格滚筒净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`

##### 废物流

###### 废旧橡胶 (`rubber_waste`)

该交换在包胶与精加工边界按其专用批次协议计量。

- 选定流：废旧橡胶 `b4818cb7-cbef-403a-9fc3-a12fe8baf092`
- 流属性/单位：Mass / kg
- 数量规则：称量精加工中收集并送往有记录处理路线的橡胶废料。不得将捕集物计为排入空气的基本流；如存在未捕集排放，应逐项计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格滚筒净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rubber_waste`

###### 不合格打字机压纸滚筒 (`reject`)

该交换在包胶与精加工边界按其专用批次协议计量。

- 选定流：不合格打字机压纸滚筒
- 流属性/单位：Mass / kg
- 数量规则：inclusion_condition：整件不合格滚筒离厂进行废物处理。应与橡胶磨削废料分开称量；留厂返工为内部循环，不属于外运废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格滚筒净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_operations | 优先采用批次分表计量及过程细分。无法避免时，根据实测运行时间和负荷分配共用设备能耗并论证物理关系。仅在说明物理分配不适用原因后采用经济分配，并披露敏感性。 | `ghg-protocol-product-standard` |
| allocation_reuse | core_and_waste | 披露所选再用／再生分配方法及继承的滚筒芯负荷。不得自动抵扣避免制造新芯或未来整机服务的负荷。废物处理与共产品分配分开，不得重复计入原生材料替代收益。 | `ghg-protocol-product-standard` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_core | platen_production | core | 批次记录 | 批次号；料号；日期；期初库存；接收；退回；期末库存；净数量；单位；合格产出；计量器编号；去向 | 校准称量或分表计量；核对发票、领料单及废物转移单；蒸汽另记录入口和回流状态 | kg | 每批 | 声明的代表性生产期间，包含空转和失败批次 | 一个明确场址及路线 | 同期间净交换量合计后除以合格净产出 kg；参考产出除以其自身 | 校准资料、可追溯单据、物料清单版本、计量核对及检验记录 |
| cp_compound | platen_production | compound | 批次记录 | 批次号；料号；日期；期初库存；接收；退回；期末库存；净数量；单位；合格产出；计量器编号；去向 | 校准称量或分表计量；核对发票、领料单及废物转移单；蒸汽另记录入口和回流状态 | kg | 每批 | 声明的代表性生产期间，包含空转和失败批次 | 一个明确场址及路线 | 同期间净交换量合计后除以合格净产出 kg；参考产出除以其自身 | 校准资料、可追溯单据、物料清单版本、计量核对及检验记录 |
| cp_electricity | platen_production | electricity | 批次记录 | 批次号；料号；日期；期初库存；接收；退回；期末库存；净数量；单位；合格产出；计量器编号；去向 | 校准称量或分表计量；核对发票、领料单及废物转移单；蒸汽另记录入口和回流状态 | MJ | 每批 | 声明的代表性生产期间，包含空转和失败批次 | 一个明确场址及路线 | 同期间净交换量合计后除以合格净产出 kg；参考产出除以其自身 | 校准资料、可追溯单据、物料清单版本、计量核对及检验记录 |
| cp_steam | platen_production | steam | 批次记录 | 批次号；料号；日期；期初库存；接收；退回；期末库存；净数量；单位；合格产出；计量器编号；去向 | 校准称量或分表计量；核对发票、领料单及废物转移单；蒸汽另记录入口和回流状态 | MJ | 每批 | 声明的代表性生产期间，包含空转和失败批次 | 一个明确场址及路线 | 同期间净交换量合计后除以合格净产出 kg；参考产出除以其自身 | 校准资料、可追溯单据、物料清单版本、计量核对及检验记录 |
| cp_box | platen_production | box | 批次记录 | 批次号；料号；日期；期初库存；接收；退回；期末库存；净数量；单位；合格产出；计量器编号；去向 | 校准称量或分表计量；核对发票、领料单及废物转移单；蒸汽另记录入口和回流状态 | kg | 每批 | 声明的代表性生产期间，包含空转和失败批次 | 一个明确场址及路线 | 同期间净交换量合计后除以合格净产出 kg；参考产出除以其自身 | 校准资料、可追溯单据、物料清单版本、计量核对及检验记录 |
| cp_reference_product | platen_production | reference_product | 批次记录 | 批次号；料号；日期；期初库存；接收；退回；期末库存；净数量；单位；合格产出；计量器编号；去向 | 校准称量或分表计量；核对发票、领料单及废物转移单；蒸汽另记录入口和回流状态 | kg | 每批 | 声明的代表性生产期间，包含空转和失败批次 | 一个明确场址及路线 | 同期间净交换量合计后除以合格净产出 kg；参考产出除以其自身 | 校准资料、可追溯单据、物料清单版本、计量核对及检验记录 |
| cp_rubber_waste | platen_production | rubber_waste | 批次记录 | 批次号；料号；日期；期初库存；接收；退回；期末库存；净数量；单位；合格产出；计量器编号；去向 | 校准称量或分表计量；核对发票、领料单及废物转移单；蒸汽另记录入口和回流状态 | kg | 每批 | 声明的代表性生产期间，包含空转和失败批次 | 一个明确场址及路线 | 同期间净交换量合计后除以合格净产出 kg；参考产出除以其自身 | 校准资料、可追溯单据、物料清单版本、计量核对及检验记录 |
| cp_reject | platen_production | reject | 批次记录 | 批次号；料号；日期；期初库存；接收；退回；期末库存；净数量；单位；合格产出；计量器编号；去向 | 校准称量或分表计量；核对发票、领料单及废物转移单；蒸汽另记录入口和回流状态 | kg | 每批 | 声明的代表性生产期间，包含空转和失败批次 | 一个明确场址及路线 | 同期间净交换量合计后除以合格净产出 kg；参考产出除以其自身 | 校准资料、可追溯单据、物料清单版本、计量核对及检验记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all_rows | q_i = 净交换量_i / 合格产品净质量；除算前核对库存变动；保留废品批次负荷 | 同期间实测量 | 单位/kg 合格产品 |  |
| mass_balance | solid_material | 滚筒芯 + 胶料投入 = 合格产品 + 外运固废 + 库存变化 + 实测损失；根据仪器不确定度调查残差，不得强行配平 | 固体净质量 | kg 残差及解释 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_traceability | all_rows | 使用场址一手记录；区分缺失、实测零值及经证明不存在的流。未经限定不得跨滚筒芯历史、电子／机械技术或电网外推。 | `ghg-protocol-product-standard`; cp_* |
| quality_function | reference_product | 保留型号专用图纸、硬度方法、尺寸、检验结果及实测废品质量；制造商硬度示例不作为通用验收限值。 | `vescovo-platen-recovery`; `jjshort-typewriter-platen` |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | 拒绝主机不兼容零件、缺失限定信息或将未解决 UUID 静默替换为通用整机流的情况。 | `un-cpc-3-0-structure-2025` |
| validate_inventory | all_rows | 核查原子交换身份、流类型、单位、归一期间、上游覆盖及条件工序完整性。确认电力和外购蒸汽未重复计算供热。 |  |
| validate_balance | production | 要求合格产品质量大于零，并用测量不确定度解释库存调整后的质量不平衡。证据缺失意味着无法得出结论，不意味着零值或可虚构范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 已声明零件及路线的供应清单，用于兼容设备制造或更换研究 |
| excluded_use | 无条件整机足迹；寿命收益宣称；用滚筒数据代表计算器电子部件 |
| required_metadata | 参考限定信息；物料清单；过程图；地点；日期；上游数据集；分配；运输及废物去向 |
| required_quality_disclosure | 缺失投入；未确认身份；实测覆盖；排除项；不确定性；路线变更；缺少经验范围 |
| update_trigger | 零件设计、胶料、滚筒芯来源、供能、工艺或供应商证据发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 45110、45130 及 45170 条目；分类范围。2026-09-08 核验。 |
| ghg-protocol-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分析单位、部分边界披露、一手记录和分配顺序；作为温室气体核算指导，并非完整多影响类别 LCA 规范。2026-09-08 核验。 |
| vescovo-platen-recovery | handbook | Vescovo Restauri, European Typewriter Platen Recovery Service. https://www.vescovorestauri.it/laboratorio/european-typewriter-platen-recovery-service/ | 意大利路线：丁苯／天然橡胶包胶、硫化、尺寸精加工；仅为定性工艺证据。2026-09-08 核验。 |
| jjshort-typewriter-platen | handbook | J.J. Short Associates, Typewriter Platens, Feed Rollers, Bail Rollers, Finger Rollers and Power Rollers. https://www.jjshort.com/typewriter-platen-repair.php | 美国专业企业：去胶、重新包胶、精密磨削及型号专用胶料和硬度。不提供清单数量范围。2026-09-08 核验。 |
