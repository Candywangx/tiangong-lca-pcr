---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.electrically-programmed-flash-game-cartridge
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 游戏主机实体程序卡带制造

## 1. 范围与适用性

本 PCR 适用于载有明确可执行游戏程序的完整实体主机卡带，采用有原始制造证据的电可编程闪存电路板及外购壳体路线，终止于完整净卡带首次质量放行。厂内裸板贴装、焊膏回流、烧录、验读及实际主机功能测试仅在实际发生时采集；外购完整已装联模块与厂内装联的内含部件投入互斥。不能将完整制造缩为购买已完成已录程序卡带后装盒。来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`。

分类注释将卡带与 CD/DVD 等其他载体区分。本方法排除光盘、磁盘、网络下载、空白存储卡、单独芯片、裸 PCB、主机硬件及纯许可作为参考产物。掩膜只读存储路线不能套用电烧录；无完整已录程序而仅触发下载的密钥卡不能直接套用。不同存储技术须在本身份内完成证据及工艺审查后使用，不另建同类平行身份。质量参考不表示等质量卡带具有相同游戏功能或游玩时间。来源：`unsd-cpc38582`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.electrically-programmed-flash-game-cartridge |
| classification_refs | CPC 3.0 38582; narrower product and route boundary |
| covered_products | 完整实体已录游戏卡带；具体包件须声明闪存及主机接口 |
| excluded_products | 下载；光盘或磁性软件载体；空白存储卡；芯片；裸 PCB；主机；纯许可 |
| representative_product | 一种声明配置的完整闪存游戏卡带首次放行净制品 |
| production_route | 互斥外购已装联模块或实际厂内电路板装联 → 烧录和验读 → 外购壳体及标签装配 → 功能测试及首次放行 |
| market_state | 载有已接受程序且首次质量放行的完整实体卡带；包装另记 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明主机及版本兼容的完整已录程序实体游戏卡带 |
| How much | 首次质量放行完整卡带净制品 1 千克；排除全部包装 |
| How well | 满足实际声明的程序完整性、验读、功能及外观放行准则；不预设性能值 |
| How long or cycle | 一次完整声明生产期 H；后续实际服务归属原放行批次 Qc；不预设使用寿命 |
| reference_flow_link | `finished_cartridge` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 视频游戏机的软件盒 `20e072d2-c6c0-4a85-9dcc-4a9cf9716047` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 游戏名称及发布哈希; 权利及已接受 ROM 来源; 目标主机与地区接口; 实际闪存技术和容量; 映射器及 CIC 或其他实际支持芯片配置; 外购模块或厂内电路板装联路线; 物料清单及壳体结构; 按配置实测的卡带净质量和件数; 首次放行准则及唯一放行标识; 失败与拒收实物流向; 期间 H 及全部场址; 期初期末库存及继承负荷; 烧录及测试覆盖范围; 软件原始资产及许可的核算边界; 包装配置及不计入 Q 的规定; 实际公用工程状态及供方边界; 上游数据集覆盖及分配证据 |

数据包须在可消费元数据或参考流上下文中完整保留全部限定信息。Q 是 H 内唯一首次放行完整卡带的实测净质量之和。实际本体部件及其真实内含组分仅计一次；包装与可剥离底纸不计入 Q。实测件数与按配置净质量保留，不猜单件千克、容量、程序规模、良率或寿命。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass | kg | 采用 cp_release 校准称重及唯一放行记录计算 Q；唯一参考成品输出为 1 千克。零 Q 保留原始负荷，不求单位结果。 |
| `actual_unit_conversion` | 各原子交换 | 实际物理量 | 实际单位 | cp_energy 或对应协议仅采原始记录。kWh × 3.6 转 MJ 一次；已积分体积不乘时间。仅真实速率积分；质量体积换算须该物质在实际相态温压下的独立密度。 |
| `normalization_once` | 所有清单行 | 分子原单位与净产品质量 | 原单位/kg | cp_* 仅汇总原始分子。calc_normalize 对制造 A/Q 或完整实物 V/Q 各执行一次；原放行批次服务仅由 calc_service 执行一次除以 Qc。卡片不能重复相除。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际外购裸 PCB、封装闪存及实际支持元件和整份焊膏，或互斥外购完整已装联闪存模块；外购壳体和标签及既有已接受游戏原始版本 |
| starting_condition_role | 现场制造起点而非上游截断；按真实供货形态承接制造一次 |
| product_classification_scope | 实体已录主机游戏卡带；非空白存储或其他载体软件 |
| recursive_input_rule | 同类外购卡带或半成品一次作为真实上游投入保留；不得在当前系统重复制造或作为新增 Q；内部物料移交抵消 |
| upstream_dataset_requirement | 按实际供货状态、工艺、地理、期间及单位匹配部件、壳体、软件原始资产、公用工程、包装、实际服务和废物处理数据集；披露缺口 |
| disclosure | 生产路线、H、全部场址、外包边界、原始资产复用、放行 Q 与后续 Qc、全部期初期末池、物理及负荷门、失败返工、包装和上游缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | 参考产品 | 仅完整实体卡带承载明确可执行游戏时适用。采用已有证据的闪存路线。掩膜只读存储制造或仅含下载密钥的卡需在同一身份内另有实际路线证据才能使用；不能静默替换为空白闪存。 | `unsd-cpc38582`; `drludos-snes-manufacture-2020` |
| `boundary_manufacture` | 纳入的前景 | 纳入来料及原料储存、实际裸板贴装和焊膏回流或互斥的外购已装联模块接收、ROM 准备传送及烧录、验读完整性及功能测试、壳体闭合与标签装配、首次质量放行，以及单独服务账内的实际包装搬运和仓储发运。原始来源分别为历史制造案例及制造商服务能力；不声称综合内容属于同一 SKU 或同一工厂。 | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `boundary_supplied_state` | 部件上游覆盖 | 外购已装联闪存模块一次承接电路板制造、封装芯片及装联。外购裸 PCB 及封装 IC 保留兼容的上游制造。不能根据拆机或“卡带”名称推定现场晶圆制造和壳体注塑。若实际运行这些工序，使用前须补充有证据的现场过程和每项原子投入产出。 | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `boundary_original` | 软件及权利 | 通过可复用原始资产关联账纳入归属的软件开发负荷，并披露实际许可及复制边界。复制程序不等于每次重新开发。计量实际发生的构建、传送、烧录及测试服务。纯许可付款作为权利元数据保留；供方实际复制时使用核实服务单位或互斥展开的活动数据。不得从卡带质量、代码规模或权利金推导开发电耗。 | `drludos-snes-manufacture-2020`; `jrc-ilcd-attributional-2010` |
| `boundary_time` | 库存失败及服务批次 | H 覆盖完整批次或生产期，包含零产出、启停、空转、清理及返工。原料、在制品及其他非在制品实物池逐一核对期初期末，并逐流保存继承交换向量。制造负荷 A 包含归属的期初在制品负荷和 H 内实际工作，扣除可追溯期末在制品及真正未耗用库存负荷。新首次放行的期末成品已计入 Q，不能再从制造 A 中扣除。已放行货物后续工作归属原 Qc；冲回原交付并保留历史负荷，不虚构新生产，也不省略退回。 | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `boundary_physical` | 实物系统及扩展 | 制造、成品及合并实物门分别闭合。整份供货制品或制剂仅计一次；分析所得组分为非加和子账。使用互斥部件接收或已核对整件桥接，并抵消内部交接。每种实际存在但未列出的清洁化学品、燃料、冷却水、惰性气体、废物及真实分子排放均须另建具体原子卡。未知不能置零或藏入残余集合。真实氮、氧、氩和水分别记录；VOC/COD/NOx/PM 指标不能冒充虚构分子质量。不假设锅炉或蒸汽回路。实际对外返还载热产品须有完整质量及相态、温度、压力、焓，并明确单一供方水能约定。 | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `boundary_downstream` | 使用及完整性 | 默认产品门为完整卡带首次质量放行；H 内已执行服务保留并另归属放行批次。未来未发生的仓储或测试保持未知，不外推。用户游玩、游玩用主机制造、网络下载及使用后终末处理属于单独下游模型。只有部件、原始资产、公用工程及服务的上游缺口解决并完成关联后，才能称完整摇篮到工厂门数据集。 | `unsd-cpc38582`; `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |

各门还须分别保存实际自然吸湿和解吸的水；不将其伪装成修复材料。不用干基系数替代实测全湿库存。只有独立物种或反应证据才能分离反应水、游离水、相态水和结构水；一个残差不能拟合两个未知。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt` | 来料与部件储存 | required | 在不可逆加工前核对供货状态及库存。 | 实际制造或原批次服务账 | 每 1 kg 参考流 |
| `board` | 电路板装联与回流 | conditional | 仅实际厂内元件装联；外购已装联模块跳过此工序。 | 实际制造或原批次服务账 | 每 1 kg 参考流 |
| `program` | ROM 烧录与验证 | required | 纳入实际文件传送、烧录尝试及测试设备。 | 实际制造或原批次服务账 | 每 1 kg 参考流 |
| `housing` | 壳体及本体标签装配 | required | 使用外购壳体；不假设现场注塑。 | 实际制造或原批次服务账 | 每 1 kg 参考流 |
| `release` | 功能测试及首次放行 | required | 仅完整卡带首次满足规定放行准则时计入 Q。 | 实际制造或原批次服务账 | 每 1 kg 参考流 |
| `services` | 包装仓储与发运服务账 | conditional | H 内实际服务归属原首次放行批次 Qc。 | 实际制造或原批次服务账 | 每 1 kg 参考流 |

所有实物卡的数量维度只使用完整实际 V 的单次 V/Q 或原批次 V/Qc 结果，不能以 A 或经济及服务份额替代。对应供方归属负荷 A 在独立负荷维度按原始资产或制造范围核算一次；实物披露本身不自动新增采购、供方需求或抵扣。纯原始资产复用及实际复制服务的数量单位仅描述其实际交付对象，不把卡带千克当软件单位。

以下每卡仅为一个原子交换。适用条件必须由实际物料和工艺记录确认；缺测不等于不存在。实际发生但未列出的每种具体流须增卡并核验供方及单位。各 process 的 preamble 与上位边界和公式共同适用。

### 过程：来料与部件储存（`receipt`）

在不可逆加工前核对供货状态及库存。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 输入

##### 产品流

###### 已装联闪存游戏卡带电路模块（`pcba`）

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅适用于外购完整已装联闪存板；不再采购内含芯片或焊料。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：游戏卡带闪存电路板组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 卡带裸印制电路板（`pcb`）

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为工厂已制造成品印刷电路产品。仅用于实际已有导电图形的外购裸板；不得替换为覆铜板中间体或已装联模块。未给面积质量、密度或封装重量系数；须实测质量。
- 选定流：印刷电路 `b230e7cd-7afd-4398-84bd-71beab1f6626`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 封装闪存集成电路（`flash`）

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球工厂生产混合、已封装且可贴装的产品；同义词包含封装 IC、QFP、BGA、CSP、SMT IC。备注要求上游中间制品身份与 PCBA 链交换一致。仅使用一种声明功能及封装的实际芯片；不是裸片、晶圆或完整存储模块。未指定 CAS、制程节点、容量或全球范围之外的固定地理。一个封装实现多个支持功能时，实物封装只计一次，功能子账非加和。
- 选定流：封装集成电路 `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 封装卡带启动验证集成电路（`cic`）

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球工厂生产混合、已封装且可贴装的产品；同义词包含封装 IC、QFP、BGA、CSP、SMT IC。备注要求上游中间制品身份与 PCBA 链交换一致。仅使用一种声明功能及封装的实际芯片；不是裸片、晶圆或完整存储模块。未指定 CAS、制程节点、容量或全球范围之外的固定地理。一个封装实现多个支持功能时，实物封装只计一次，功能子账非加和。
- 选定流：封装集成电路 `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 封装卡带存储映射集成电路（`mapper`）

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球工厂生产混合、已封装且可贴装的产品；同义词包含封装 IC、QFP、BGA、CSP、SMT IC。备注要求上游中间制品身份与 PCBA 链交换一致。仅使用一种声明功能及封装的实际芯片；不是裸片、晶圆或完整存储模块。未指定 CAS、制程节点、容量或全球范围之外的固定地理。一个封装实现多个支持功能时，实物封装只计一次，功能子账非加和。
- 选定流：封装集成电路 `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 单种外购卡带电容器（`capacitor`）

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生电容器为工厂工业电子无源装配部件；已核对电解、陶瓷、薄膜、钽、超级、可变及固定电容等同义词，但不预设其中一种。生命周期、工艺及质量的一般说明未提供数值配方或认证。须声明实际单种电容类型及等级；不同部件分别建行。
- 选定流：电容器 `df93339b-f27d-4f3e-b672-9d2ef0c536f6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 单种外购卡带电阻器（`resistor`）

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为工厂生产混合的已制造成品产品，明确排除加热电阻器。仅用于真实电子电阻器，不替换为加热元件或电阻原材料。不假定额定值或阻值。
- 选定流：电阻器（加热电阻器除外） `9bee079d-ab55-44db-b1a4-72d61a856d61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 整份外购焊膏制剂（`paste`）

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 整份制剂只采购一次。合金和助焊剂组成须有实际规格；不规定合金或溶剂配方。成分分析仅为非加和子账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购焊膏制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 来料与部件储存中国中压电（`receipt_electricity_mv_cn`）

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次归一化结果；原始电量保持未除。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 来料与部件储存中国低压电（`receipt_electricity_lv_cn`）

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 来料与部件储存用电（`receipt_electricity`）

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：交流电
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### 过程：电路板装联与回流（`board`）

仅实际厂内元件装联；外购已装联模块跳过此工序。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 输入

##### 产品流

###### 电路板装联与回流中国中压电（`board_electricity_mv_cn`）

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次归一化结果；原始电量保持未除。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_board`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 电路板装联与回流中国低压电（`board_electricity_lv_cn`）

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_board`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 电路板装联与回流用电（`board_electricity`）

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：交流电
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_energy_board`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### 输出

##### 废物流

###### 单独收集的不合格已装联电路板（`board_reject`）

仅实际独立收集的 SMT 及回流焊报废装联卡带电路板；烧录及功能测试损坏板另记。 原生为全球厂内专指 SMT 及回流焊报废 PCBA 的废物；PWB、PCBA、电子废料等同义词不扩大其工序范围。未给数量。本绑定卡仅含实际贴装及回流不合格板；烧录测试报废板另用 program_board_reject，实际返工移交不是废物。
- 选定流：废料，印制线路板 `fe1d2a9b-bdb0-498a-9b5f-4836ec35f883`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_waste_board`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### 过程：ROM 烧录与验证（`program`）

纳入实际文件传送、烧录尝试及测试设备。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 输入

##### 产品流

###### ROM 烧录与验证中国中压电（`program_electricity_mv_cn`）

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次归一化结果；原始电量保持未除。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_program`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### ROM 烧录与验证中国低压电（`program_electricity_lv_cn`）

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_program`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### ROM 烧录与验证用电（`program_electricity`）

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：交流电
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_energy_program`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 卡带烧录器取得（`programmer`）

仅表示实际跨资产边界取得的烧录器。保留完整制品总净质量及对外返还流转；不为每次烧录购买整台设备。实物流 V 账与制造或服务归属负荷及有证据的使用期份额分开；不假定寿命或分配比例。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：卡带 ROM 烧录器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 软件原始资产复用归属投入（`original`）

一种具有明确标识的已接受原始版本供实体复制及其他实际渠道复用。完整开发清单和实际复用总体保留在上游原始资产账中；有依据的复用份额仅归属一次，不将每张卡带视为重新开发的原始资产。此处 item 仅计原始资产，不是代码或卡带质量。许可发票不等于电耗或排放因子。 一个原始资产的 item 与原生 Item(s) 为同一计数物理单位，因子 1；不得借此推算卡带单件千克。复用总体未知时，关联负荷保持未解决。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：已完成游戏软件原始资产
- 流属性/单位：Number of items / item
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_original`
- 来源：`drludos-snes-manufacture-2020`; `jrc-ilcd-attributional-2010`

###### 外购 ROM 复制服务（`replication_service`）

仅适用于具有核实交付单位和明确投入产出覆盖范围的一种实际委托复制活动。区分尝试和合格复制。对同一操作，选择具体服务数据集或供应方逐原子活动展开，不能两者同时计入。单纯复制权不等于实际复制服务。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：游戏卡带 ROM 烧录服务
- 流属性/单位：Number of items / item
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### 输出

##### 废物流

###### 烧录及测试报废电路板（`program_board_reject`）

仅表示烧录或功能测试后实际独立收集的不合格已装联游戏卡带板；保留真实全部失败负荷及实测净质量。不是 SMT/回流工序废物流的自动延伸。真实进入单一混合废物容器时仅保留非加和 originW，不再导出分量。使用 cp_waste 采原始分子，仅引用 calc_normalize 的单次结果。

- 选定流：烧录测试报废游戏卡带电路板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中的单次归一化结果；原始记录保持未除。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste_program`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### 过程：壳体及本体标签装配（`housing`）

使用外购壳体；不假设现场注塑。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 输入

##### 产品流

###### 模制塑料游戏卡带外壳（`shell`）

一种供应商提供的一套单卡带模制壳体制品；在制品物料清单中记录各半壳及实际聚合物和添加剂规格。不假定聚合物或现场注塑配方。壳体制造属于上游。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为未指明塑料机壳产品，具有机壳、外罩、壳体及底座同义词，并标记行业平均估算组合。未规定聚合物、等级、添加剂或成型条件，也不核实供方清单。仅用于与实际组成及供方相符的一种外购卡带壳体制品；树脂与成品壳体不重复采购。
- 选定流：塑料外壳 `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material_housing`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 卡带紧固螺钉（`screw`）

仅在确实单独安装螺钉时适用；记录实际材料及镀层和实测供货质量。已包含在壳体制品中的螺钉不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：卡带紧固螺钉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material_housing`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 印刷自粘卡带识别标签（`label`）

整份外购成品标签含胶和印刷基材，只承接一次；可剥离底纸不计入 Q 并单独记录。留在合格卡带上的标签属于卡带净质量。不再购买其油墨或胶。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷自粘卡带识别标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_material_housing`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 壳体及本体标签装配中国中压电（`housing_electricity_mv_cn`）

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次归一化结果；原始电量保持未除。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_housing`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 壳体及本体标签装配中国低压电（`housing_electricity_lv_cn`）

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_housing`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 壳体及本体标签装配用电（`housing_electricity`）

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：交流电
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_energy_housing`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### 输出

##### 废物流

###### 剥离标签底纸（`label_liner`）

一种实际剥离底纸废物流；其纸或膜及离型涂层需有实际供货证据。不计入卡带净质量。不根据标签名称推定纸或聚乙烯。混合处置遵循单容器规则。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：废弃标签底纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_waste_housing`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### 过程：功能测试及首次放行（`release`）

仅完整卡带首次满足规定放行准则时计入 Q。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 输入

##### 产品流

###### 功能测试及首次放行中国中压电（`release_electricity_mv_cn`）

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次归一化结果；原始电量保持未除。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_release`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 功能测试及首次放行中国低压电（`release_electricity_lv_cn`）

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_release`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 功能测试及首次放行用电（`release_electricity`）

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：交流电
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_energy_release`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 实物测试主机取得（`test_console`）

实际测试主机属于支持设备，不是卡带产出。完整取得和对外返还实物流与资产归属负荷分开。主机、显示器和烧录器用电需计量，USB 供电不重复计算。实际独立显示器或计算机若不在已覆盖服务边界内，应另建卡。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生已制造成品主机产品包含与电视接收机配套及手持式主机。用于具有独立实测净质量及资产历史的实际完整测试主机；主机不计入卡带 Q，也不隐含固定硬件寿命。
- 选定流：电子游戏机 `d51ebfa9-1bbb-4f3d-a487-75c690f9e0f6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_asset_release`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### 输出

##### 产品流

###### 首次放行完整已录程序卡带（`finished_cartridge`）

唯一成品参考制品一次包含已装联 PCB、已写入程序闪存、实际支持元件、供货壳体和本体标签。它不是空白存储设备、芯片、裸 PCB、主机或下载。保留主机兼容性、存储技术、发布哈希及第 3 节全部限定信息。Q 仅为首次放行卡带净质量；全部失败及零产出负荷保留在上游。排除包装；已放行留库的卡带已经计入 Q。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生身份为工厂生产混合、已制造成品的整件产品。未规定容量、芯片类型、寿命、等级或地理。范围为游戏卡带用软件并排除 CD/DVD；不是空白闪存、裸片、PCB、主机或下载。仅适用于声明闪存配置的完整承载可执行程序卡带。退回或发运制品仍须是完整已录程序卡带；真实废物或其他状态使用实际具体流。 必需限定信息完整为：游戏名称及发布哈希; 权利及已接受 ROM 来源; 目标主机与地区接口; 实际闪存技术和容量; 映射器及 CIC 或其他实际支持芯片配置; 外购模块或厂内电路板装联路线; 物料清单及壳体结构; 按配置实测的卡带净质量和件数; 首次放行准则及唯一放行标识; 失败与拒收实物流向; 期间 H 及全部场址; 期初期末库存及继承负荷; 烧录及测试覆盖范围; 软件原始资产及许可的核算边界; 包装配置及不计入 Q 的规定; 实际公用工程状态及供方边界; 上游数据集覆盖及分配证据.
- 选定流：视频游戏机的软件盒 `20e072d2-c6c0-4a85-9dcc-4a9cf9716047`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Method formula （`method_formula`）
- 采集协议：`cp_release`
- 来源：`unsd-cpc38582`; `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

##### 废物流

###### 单独废弃的完整游戏卡带（`cartridge_reject`）

仅表示实际作为废物输出的整份拒收或销毁卡带。整件仅承接一次内含壳体和 PCB；只有实际拆解并核对移交后才能使用独立组分废物流。未授权或拒收产品保留实际制造负荷及流向；放行权限不抹除实物制造。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：废弃完整游戏卡带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_waste_release`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 实际收集的混合制造废物（`mixed_waste`）

仅表示一种实际混收废物，具有实测毛重皮重及实际去向。分别保留板、壳体、标签及各包装来源的独立实测 originW 子账；它们是非加和内含量，不是额外废物输出。组成及危险状态决定接收方兼容性；不能用产品或填埋操作替代此废物流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内混合制造废物，限定总装及工厂测试，未给具体数量。仅用于这些工序的一项真实混合出口，保留真实组成及去向；不按来源自动拆出口，也不额外导出纸或板组分。
- 选定流：制造废弃物，混合 `8a42279e-b14c-408f-98de-e52e0ea3ef3a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_waste_release`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### 过程：包装仓储与发运服务账（`services`）

H 内实际服务归属原首次放行批次 Qc。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 输入

##### 产品流

###### 包装仓储与发运服务账中国中压电（`services_electricity_mv_cn`）

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次归一化结果；原始电量保持未除。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_services`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 包装仓储与发运服务账中国低压电（`services_electricity_lv_cn`）

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy_services`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 包装仓储与发运服务账用电（`services_electricity`）

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：交流电
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_energy_services`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 外购印刷折叠纸板卡带盒（`retail_box_purchase`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷折叠纸板卡带盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随上游货物独立带入的印刷折叠纸板卡带盒（`retail_box_ingress`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

- 选定流：印刷折叠纸板卡带盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_pack`
- 来源：`hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### 外部返回的印刷折叠纸板卡带盒（`retail_box_er`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷折叠纸板卡带盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 外购印刷纸质说明书（`manual_purchase`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷纸质说明书
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随上游货物独立带入的印刷纸质说明书（`manual_ingress`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

- 选定流：印刷纸质说明书
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_pack`
- 来源：`hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### 外部返回的印刷纸质说明书（`manual_er`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷纸质说明书
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 外购外购卡带防尘套制品（`dust_sleeve_purchase`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购卡带防尘套制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随上游货物独立带入的外购卡带防尘套制品（`dust_sleeve_ingress`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

- 选定流：外购卡带防尘套制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_pack`
- 来源：`hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### 外部返回的外购卡带防尘套制品（`dust_sleeve_er`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购卡带防尘套制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 瓦楞运输纸箱（`carton_purchase`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。
- 选定流：完整瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 瓦楞运输纸箱（`carton_ingress`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。
- 选定流：完整瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_pack`
- 来源：`hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### 瓦楞运输纸箱（`carton_er`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。
- 选定流：完整瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 外购瓦楞纸板包装内衬（`insert_purchase`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：瓦楞纸板包装内衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随上游货物独立带入的瓦楞纸板包装内衬（`insert_ingress`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

- 选定流：瓦楞纸板包装内衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_pack`
- 来源：`hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### 外部返回的瓦楞纸板包装内衬（`insert_er`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：瓦楞纸板包装内衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 外购外购热收缩包装膜制品（`shrink_film_purchase`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购热收缩包装膜制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随上游货物独立带入的外购热收缩包装膜制品（`shrink_film_ingress`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

- 选定流：外购热收缩包装膜制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中的第 8 节单次结果；采原始分子。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_pack`
- 来源：`hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### 外部返回的外购热收缩包装膜制品（`shrink_film_er`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购热收缩包装膜制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 收到的已放行卡带全部实物退回（`cartridge_return_in`）

按配置及原批次保留完整实际实物流 V；不按分配份额或库存差缩减数量。合法性及验收状态另记。退回和复验不产生新 Q。原交付冲回及继承制造负荷保留在原放行批次。此物流记录不是另一参考产出或自动抵扣共产品。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生身份为工厂生产混合、已制造成品的整件产品。未规定容量、芯片类型、寿命、等级或地理。范围为游戏卡带用软件并排除 CD/DVD；不是空白闪存、裸片、PCB、主机或下载。仅适用于声明闪存配置的完整承载可执行程序卡带。退回或发运制品仍须是完整已录程序卡带；真实废物或其他状态使用实际具体流。 必需限定信息完整为：游戏名称及发布哈希; 权利及已接受 ROM 来源; 目标主机与地区接口; 实际闪存技术和容量; 映射器及 CIC 或其他实际支持芯片配置; 外购模块或厂内电路板装联路线; 物料清单及壳体结构; 按配置实测的卡带净质量和件数; 首次放行准则及唯一放行标识; 失败与拒收实物流向; 期间 H 及全部场址; 期初期末库存及继承负荷; 烧录及测试覆盖范围; 软件原始资产及许可的核算边界; 包装配置及不计入 Q 的规定; 实际公用工程状态及供方边界; 上游数据集覆盖及分配证据.
- 选定流：视频游戏机的软件盒 `20e072d2-c6c0-4a85-9dcc-4a9cf9716047`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_service_services`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### 输出

##### 产品流

###### 随全部实物发运外出的印刷折叠纸板卡带盒（`retail_box_shipment`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷折叠纸板卡带盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 印刷折叠纸板卡带盒对外返还（`retail_box_eo`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷折叠纸板卡带盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随全部实物发运外出的印刷纸质说明书（`manual_shipment`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷纸质说明书
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 印刷纸质说明书对外返还（`manual_eo`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：印刷纸质说明书
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随全部实物发运外出的外购卡带防尘套制品（`dust_sleeve_shipment`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购卡带防尘套制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 外购卡带防尘套制品对外返还（`dust_sleeve_eo`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购卡带防尘套制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 瓦楞运输纸箱（`carton_shipment`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。
- 选定流：完整瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 瓦楞运输纸箱（`carton_eo`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。
- 选定流：完整瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随全部实物发运外出的瓦楞纸板包装内衬（`insert_shipment`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：瓦楞纸板包装内衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 瓦楞纸板包装内衬对外返还（`insert_eo`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：瓦楞纸板包装内衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 随全部实物发运外出的外购热收缩包装膜制品（`shrink_film_shipment`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购热收缩包装膜制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 外购热收缩包装膜制品对外返还（`shrink_film_eo`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：外购热收缩包装膜制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 对外返还 ROM 烧录器（`asset_external_return`）

按配置及原批次保留完整实际实物流 V；不按分配份额或库存差缩减数量。合法性及验收状态另记。退回和复验不产生新 Q。原交付冲回及继承制造负荷保留在原放行批次。此物流记录不是另一参考产出或自动抵扣共产品。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：卡带 ROM 烧录器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_asset_services`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 卡带全部实物发运（`cartridge_dispatch`）

按配置及原批次保留完整实际实物流 V；不按分配份额或库存差缩减数量。合法性及验收状态另记。退回和复验不产生新 Q。原交付冲回及继承制造负荷保留在原放行批次。此物流记录不是另一参考产出或自动抵扣共产品。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生身份为工厂生产混合、已制造成品的整件产品。未规定容量、芯片类型、寿命、等级或地理。范围为游戏卡带用软件并排除 CD/DVD；不是空白闪存、裸片、PCB、主机或下载。仅适用于声明闪存配置的完整承载可执行程序卡带。退回或发运制品仍须是完整已录程序卡带；真实废物或其他状态使用实际具体流。 必需限定信息完整为：游戏名称及发布哈希; 权利及已接受 ROM 来源; 目标主机与地区接口; 实际闪存技术和容量; 映射器及 CIC 或其他实际支持芯片配置; 外购模块或厂内电路板装联路线; 物料清单及壳体结构; 按配置实测的卡带净质量和件数; 首次放行准则及唯一放行标识; 失败与拒收实物流向; 期间 H 及全部场址; 期初期末库存及继承负荷; 烧录及测试覆盖范围; 软件原始资产及许可的核算边界; 包装配置及不计入 Q 的规定; 实际公用工程状态及供方边界; 上游数据集覆盖及分配证据.
- 选定流：视频游戏机的软件盒 `20e072d2-c6c0-4a85-9dcc-4a9cf9716047`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_service_services`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

##### 废物流

###### 废弃印刷折叠纸板卡带盒（`retail_box_waste`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内纸及纸板包装废物流，同义词明确包含纸板包装废物。仅用于本卡实际来源及真实容器，不替换聚合物套、膜或非纸混合废物。未规定去向、处理或废物比例。
- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 废弃印刷纸质说明书（`manual_waste`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内纸及纸板包装废物流，同义词明确包含纸板包装废物。仅用于本卡实际来源及真实容器，不替换聚合物套、膜或非纸混合废物。未规定去向、处理或废物比例。
- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 废弃外购卡带防尘套制品（`dust_sleeve_waste`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：废弃外购卡带防尘套制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 废弃瓦楞运输纸箱（`carton_waste`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内纸及纸板包装废物流，同义词明确包含纸板包装废物。仅用于本卡实际来源及真实容器，不替换聚合物套、膜或非纸混合废物。未规定去向、处理或废物比例。
- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 废弃瓦楞纸板包装内衬（`insert_waste`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内纸及纸板包装废物流，同义词明确包含纸板包装废物。仅用于本卡实际来源及真实容器，不替换聚合物套、膜或非纸混合废物。未规定去向、处理或废物比例。
- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### 废弃外购热收缩包装膜制品（`shrink_film_waste`）

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

- 选定流：废弃外购热收缩包装膜制品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用本卡说明中规定的第 8 节单次归一化结果；原始记录保持未经相除。
- 数值来源模式：Calculated value （`calculated_value`）
- 适用范围：Site-specific （`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow （`reference_flow`）
- 证据类型：Calculated from collection （`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

## 7. 分配与共产品处理

本方法限归因建模中需要分配的情形。工业制造原始资料用于产品与工艺，不支持任何分配比例。下列层级来自 ILCD §7.9.2–7.9.3；不得把不同复杂产品功能比较的 QFD 示例比例套为卡带生产分配。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_dedicated` | 每个交换 | 逐交换先采用专属采集，再通过实际或虚拟细分归属专用材料及操作。不同电路板路线、版本和订单有独立数据时分别保留。容量和代码规模只是描述信息，不能自动决定回流或测试电耗份额。 | `jrc-ilcd-attributional-2010` |
| `allocate_physical` | 不可避免的共享交换 | 细分后，对每个剩余交换分别确认决定性物理因果关系，记录分子分母及所含共功能。只有实际因果证据且覆盖全部零产出负荷时，实测设备负载和占用时间才可支持能源份额。物理指标不自动等于因果关系，不能对所有交换强用同一键。 | `jrc-ilcd-attributional-2010` |
| `allocate_residual` | 真正不可细分剩余 | 仅确实无法按决定性物理因果归属的有证据剩余部分，才可使用同一共同过程门、实际状态下共产品或功能的同期市场价值。剔除后续运输、包装或处理附加价值。记录期间、数量、价格证据及敏感性。不得任意在质量与经济分配间选择；不设固定比例或自动替代及回收抵扣。 | `jrc-ilcd-attributional-2010` |
| `allocate_original` | 复用游戏原始资产 | 采集一个完整已接受原始资产开发系统，识别实际复用的版本及渠道。采用与上游数据集一致且有证据的归因复用模型，记录份额、已观察总体及不确定性。不能每复制一张卡带就承接一次完整开发，也不能将许可金额换成能源。总体或上游完整性未解决时保持数据缺口。 | `jrc-ilcd-attributional-2010` |
| `allocate_logistics` | 实物交换及损失 | 分配作用于负荷账，不能缩减制品、包装、返还资产、载热水或废物的完整实物流。V 与负荷 A 分开。失败及未授权或拒收制造保留材料及服务负荷；权利或验收决定不抵消它们。返工仅在原继承向量上增加实际增量工作，不重造 Q。 | `jrc-ilcd-attributional-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

本表 aggregation_rule 仅声明单次计算的目标基准，不在采集时执行相除。collection_method 保留未经相除的真实原始汇总；计算仅在下表实施一次。服务账的参考流始终属于其原放行批次 Qc，而不是本期新 Q。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | release | finished_cartridge | 校准称重及放行日志 | 批次; 配置; 序列号或唯一批次成员; 首次放行时刻; 卡带净质量 kg; 件数; 发布哈希; 已测功能; 不合格状态; 包装皮重; Q; H | 按配置用校准秤称量已接受完整卡带，排除全部包装；对首次放行标识去重；样本及件数扩展须有实际采样不确定性。 原始汇总说明：汇总未经相除的首次放行净质量至 calc_release；之后仅引用 calc_normalize。 | kg; item | 逐次放行 | 完整 H | 全部制造及外包放行场址 | 每 1 kg 参考流 | 称重校准; 放行签字; 测试验读日志; 物料清单及质量核对 |
| `cp_material` | receipt | 每种实物制品或制剂 | 收货领用及库存 | 制品; 实际供货状态; 物料路线; 等级; 实际组成及适用时 CAS; 批号; 单位; 实测收货; 原料在制品非在制品期初期末; 内部领用及返还; 对外返还; 损失; 每交换继承向量 | 逐批追溯每种供货制品或制剂；核对件数与独立实测质量；内含量或成分分析为非加和子账；保留互斥模块与部件数量。 原始汇总说明：汇总未经相除的原始流转及继承向量；用 calc_stock 和 calc_physical 核对；仅引用 calc_normalize。 | 实际原单位; kg; item | 逐次流转 | H 及关联期初历史 | 全部储存及装配场址 | 每 1 kg 参考流 | 供方规格; 适用时 SDS; 发票; 工序单; 称重及库存 |
| `cp_energy` | receipt | 每个电表 | 电表区间及设备记录 | 电表; 操作; 期初期末读数; 原始 kWh; 电压; 地理; 供方边界; 运行负载与时间; 启停; 空转; 清理; 失败尝试; 返工; H; 服务时原 Qc | 读取包含无产出期间的区间电表；核对主机和 USB 供电及设施开销而不重复；无法分表时仅使用有证据的物理因果模型。 原始汇总说明：汇总未除原始电量；calc_units 仅换算一次；按第 7 节归属；制造 calc_normalize 或原批次 calc_service 仅归一化一次。 | kWh; MJ; h | 逐区间并核对完整生产期 | 完整 H 包含 Q=0 | 每个实际设施及供方服务范围 | 每 1 kg 参考流 | 电表校准; 账单; 设备日志; 共享负载模型及闭合 |
| `cp_original` | program | original | 版本及复用负荷账 | 原始资产标识哈希; 完整开发清单; 接受版本; 实际复制渠道及总体; 复用份额; 上游单位; 复制标题; 许可范围; 供方边界; 不确定性 | 保留一个完整上游原始资产账；核对实际复用总体和复制发布身份；区分纯许可权利与实际复制工作。 原始汇总说明：保留未除原始资产及复制总体记录；实施 allocate_original 后本批次仅引用一次 calc_normalize。 | item; 上游交换原单位 | 逐版本及实际总体更新 | 原始开发历史及实际批次使用 | 开发方原始资产所有者及实际供方 | 每 1 kg 参考流 | 开发数据集; 版本来源; 权利记录; 实际复制登记; 不确定性 |
| `cp_asset` | program | programmer; test_console; asset_external_return | 实物资产及服务负荷登记 |资产标识; 实际配置; 实测制品净质量 kg; 完整外部取得 V; 对外返还 V; 资产期初期末池; 实际服务占用; 上游制造边界; 有证据复用模型; 继承向量; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |完整记录外部取得及返还并独立核对资产库存；按实际使用及上游边界单独推导负荷份额；不默认寿命或每次复制采购。 原始汇总说明：保留未除完整 V 及独立归属负荷；实物流先用 calc_physical 再由 calc_normalize 或 calc_service 仅归一化一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; item; h | 逐取得返还及使用区间 | H 及原资产历史 | 全部实际设备位置 | 每 1 kg 参考流 | 资产登记; 称重或供方质量; 使用日志; 上游资产数据及模型 |
| `cp_service` | program | replication_service; cartridge_return_in; cartridge_dispatch | 供方活动及放行批次账 | 供方; 精确服务单位; 尝试及合格复制数; 完整覆盖; H 内已执行实际工作; 原放行批次; Qc; 成品期初期末; 全部发运退回 V; 原交付冲回; 增量返工; 继承向量 | 核验服务交付单位及供货状态覆盖；保留包含拒收或未授权退回的全部流转；配对内部首次放行移交并保存原批次历史负荷。 原始汇总说明：原始服务和完整 V 不相除；不外推未来服务；按原 Qc 仅执行一次 calc_service；抵消内部放行流转。 | item; kg; 实际服务单位 | 逐服务及实物流转 | 仅实际 H 及原放行历史 | 全部供方储存及发运场址 | 每 1 kg 参考流 | 供方记录; 发运退回单; 原放行登记; 接受拒收及历史记录 |
| `cp_pack` | services | 每种具体包装卡 | 独立制品及批次池 |包装身份; 实际材料; 原批次; Qc; 期初空库存; 期初附着在制品; 期初附着成品; 期初周转库存; P; I; ER; S; EO; W; 期末空库存; 期末附着在制品; 期末附着成品; 期末周转库存; 内部复用; originW; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |每种实际包装制品分别称量记录；按实际配置核验件数质量换算；保留完整发运返还及独立废物记录；追踪全部包装池。 原始汇总说明：每种 P/I/ER/S/EO/W 原始总量保持未除；执行 calc_packaging 闭合及 calc_service 一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; item | 逐次流转并期末核对 | 实际 H 及原批次历史 | 全部库房包装及发运场址 | 每 1 kg 参考流 | 包装物料清单; 校准秤; 库存账; 完整发运返还凭据; 废物联单 |
| `cp_waste` | receipt | 每种废物卡 | 实际废物联单及实测来源 |容器; 实际废物类型; 组成; 危险状态; 物理来源; 毛重皮重; 净质量 kg; 废物期初期末池; 去向; 实际处理; 独立 originW; 适用时液体状态及物种; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |实际分收或真实混收废物称量一次；保留实际混合总量和非加和实测 originW；最终外运前内部返工另记。 原始汇总说明：按真实容器及去向汇总未除完整 V；不重复计总量和组分；仅引用 calc_normalize 或 calc_service 一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; 实际原单位 | 逐次收集及外运 | 完整 H 含失败 | 全部场址及真实处理供方 | 每 1 kg 参考流 | 地磅或秤; 废物联单; 分析; 处理收据; 独立来源追踪 |
| cp_energy_board | board | 每个电表 | 电表区间及设备记录 | 电表; 操作; 期初期末读数; 原始 kWh; 电压; 地理; 供方边界; 运行负载与时间; 启停; 空转; 清理; 失败尝试; 返工; H; 服务时原 Qc | 读取包含无产出期间的区间电表；核对主机和 USB 供电及设施开销而不重复；无法分表时仅使用有证据的物理因果模型。 原始汇总说明：汇总未除原始电量；calc_units 仅换算一次；按第 7 节归属；制造 calc_normalize 或原批次 calc_service 仅归一化一次。 | kWh; MJ; h | 逐区间并核对完整生产期 | 完整 H 包含 Q=0 | 每个实际设施及供方服务范围 | 每 1 kg 参考流 | 电表校准; 账单; 设备日志; 共享负载模型及闭合 |
| cp_waste_board | board | 每种废物卡 | 实际废物联单及实测来源 |容器; 实际废物类型; 组成; 危险状态; 物理来源; 毛重皮重; 净质量 kg; 废物期初期末池; 去向; 实际处理; 独立 originW; 适用时液体状态及物种; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |实际分收或真实混收废物称量一次；保留实际混合总量和非加和实测 originW；最终外运前内部返工另记。 原始汇总说明：按真实容器及去向汇总未除完整 V；不重复计总量和组分；仅引用 calc_normalize 或 calc_service 一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; 实际原单位 | 逐次收集及外运 | 完整 H 含失败 | 全部场址及真实处理供方 | 每 1 kg 参考流 | 地磅或秤; 废物联单; 分析; 处理收据; 独立来源追踪 |
| cp_energy_program | program | 每个电表 | 电表区间及设备记录 | 电表; 操作; 期初期末读数; 原始 kWh; 电压; 地理; 供方边界; 运行负载与时间; 启停; 空转; 清理; 失败尝试; 返工; H; 服务时原 Qc | 读取包含无产出期间的区间电表；核对主机和 USB 供电及设施开销而不重复；无法分表时仅使用有证据的物理因果模型。 原始汇总说明：汇总未除原始电量；calc_units 仅换算一次；按第 7 节归属；制造 calc_normalize 或原批次 calc_service 仅归一化一次。 | kWh; MJ; h | 逐区间并核对完整生产期 | 完整 H 包含 Q=0 | 每个实际设施及供方服务范围 | 每 1 kg 参考流 | 电表校准; 账单; 设备日志; 共享负载模型及闭合 |
| cp_waste_program | program | 每种废物卡 | 实际废物联单及实测来源 |容器; 实际废物类型; 组成; 危险状态; 物理来源; 毛重皮重; 净质量 kg; 废物期初期末池; 去向; 实际处理; 独立 originW; 适用时液体状态及物种; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |实际分收或真实混收废物称量一次；保留实际混合总量和非加和实测 originW；最终外运前内部返工另记。 原始汇总说明：按真实容器及去向汇总未除完整 V；不重复计总量和组分；仅引用 calc_normalize 或 calc_service 一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; 实际原单位 | 逐次收集及外运 | 完整 H 含失败 | 全部场址及真实处理供方 | 每 1 kg 参考流 | 地磅或秤; 废物联单; 分析; 处理收据; 独立来源追踪 |
| cp_material_housing | housing | 每种实物制品或制剂 | 收货领用及库存 | 制品; 实际供货状态; 物料路线; 等级; 实际组成及适用时 CAS; 批号; 单位; 实测收货; 原料在制品非在制品期初期末; 内部领用及返还; 对外返还; 损失; 每交换继承向量 | 逐批追溯每种供货制品或制剂；核对件数与独立实测质量；内含量或成分分析为非加和子账；保留互斥模块与部件数量。 原始汇总说明：汇总未经相除的原始流转及继承向量；用 calc_stock 和 calc_physical 核对；仅引用 calc_normalize。 | 实际原单位; kg; item | 逐次流转 | H 及关联期初历史 | 全部储存及装配场址 | 每 1 kg 参考流 | 供方规格; 适用时 SDS; 发票; 工序单; 称重及库存 |
| cp_energy_housing | housing | 每个电表 | 电表区间及设备记录 | 电表; 操作; 期初期末读数; 原始 kWh; 电压; 地理; 供方边界; 运行负载与时间; 启停; 空转; 清理; 失败尝试; 返工; H; 服务时原 Qc | 读取包含无产出期间的区间电表；核对主机和 USB 供电及设施开销而不重复；无法分表时仅使用有证据的物理因果模型。 原始汇总说明：汇总未除原始电量；calc_units 仅换算一次；按第 7 节归属；制造 calc_normalize 或原批次 calc_service 仅归一化一次。 | kWh; MJ; h | 逐区间并核对完整生产期 | 完整 H 包含 Q=0 | 每个实际设施及供方服务范围 | 每 1 kg 参考流 | 电表校准; 账单; 设备日志; 共享负载模型及闭合 |
| cp_waste_housing | housing | 每种废物卡 | 实际废物联单及实测来源 |容器; 实际废物类型; 组成; 危险状态; 物理来源; 毛重皮重; 净质量 kg; 废物期初期末池; 去向; 实际处理; 独立 originW; 适用时液体状态及物种; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |实际分收或真实混收废物称量一次；保留实际混合总量和非加和实测 originW；最终外运前内部返工另记。 原始汇总说明：按真实容器及去向汇总未除完整 V；不重复计总量和组分；仅引用 calc_normalize 或 calc_service 一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; 实际原单位 | 逐次收集及外运 | 完整 H 含失败 | 全部场址及真实处理供方 | 每 1 kg 参考流 | 地磅或秤; 废物联单; 分析; 处理收据; 独立来源追踪 |
| cp_energy_release | release | 每个电表 | 电表区间及设备记录 | 电表; 操作; 期初期末读数; 原始 kWh; 电压; 地理; 供方边界; 运行负载与时间; 启停; 空转; 清理; 失败尝试; 返工; H; 服务时原 Qc | 读取包含无产出期间的区间电表；核对主机和 USB 供电及设施开销而不重复；无法分表时仅使用有证据的物理因果模型。 原始汇总说明：汇总未除原始电量；calc_units 仅换算一次；按第 7 节归属；制造 calc_normalize 或原批次 calc_service 仅归一化一次。 | kWh; MJ; h | 逐区间并核对完整生产期 | 完整 H 包含 Q=0 | 每个实际设施及供方服务范围 | 每 1 kg 参考流 | 电表校准; 账单; 设备日志; 共享负载模型及闭合 |
| cp_asset_release | release | programmer; test_console; asset_external_return | 实物资产及服务负荷登记 |资产标识; 实际配置; 实测制品净质量 kg; 完整外部取得 V; 对外返还 V; 资产期初期末池; 实际服务占用; 上游制造边界; 有证据复用模型; 继承向量; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |完整记录外部取得及返还并独立核对资产库存；按实际使用及上游边界单独推导负荷份额；不默认寿命或每次复制采购。 原始汇总说明：保留未除完整 V 及独立归属负荷；实物流先用 calc_physical 再由 calc_normalize 或 calc_service 仅归一化一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; item; h | 逐取得返还及使用区间 | H 及原资产历史 | 全部实际设备位置 | 每 1 kg 参考流 | 资产登记; 称重或供方质量; 使用日志; 上游资产数据及模型 |
| cp_waste_release | release | 每种废物卡 | 实际废物联单及实测来源 |容器; 实际废物类型; 组成; 危险状态; 物理来源; 毛重皮重; 净质量 kg; 废物期初期末池; 去向; 实际处理; 独立 originW; 适用时液体状态及物种; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |实际分收或真实混收废物称量一次；保留实际混合总量和非加和实测 originW；最终外运前内部返工另记。 原始汇总说明：按真实容器及去向汇总未除完整 V；不重复计总量和组分；仅引用 calc_normalize 或 calc_service 一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; 实际原单位 | 逐次收集及外运 | 完整 H 含失败 | 全部场址及真实处理供方 | 每 1 kg 参考流 | 地磅或秤; 废物联单; 分析; 处理收据; 独立来源追踪 |
| cp_energy_services | services | 每个电表 | 电表区间及设备记录 | 电表; 操作; 期初期末读数; 原始 kWh; 电压; 地理; 供方边界; 运行负载与时间; 启停; 空转; 清理; 失败尝试; 返工; H; 服务时原 Qc | 读取包含无产出期间的区间电表；核对主机和 USB 供电及设施开销而不重复；无法分表时仅使用有证据的物理因果模型。 原始汇总说明：汇总未除原始电量；calc_units 仅换算一次；按第 7 节归属；制造 calc_normalize 或原批次 calc_service 仅归一化一次。 | kWh; MJ; h | 逐区间并核对完整生产期 | 完整 H 包含 Q=0 | 每个实际设施及供方服务范围 | 每 1 kg 参考流 | 电表校准; 账单; 设备日志; 共享负载模型及闭合 |
| cp_service_services | services | replication_service; cartridge_return_in; cartridge_dispatch | 供方活动及放行批次账 | 供方; 精确服务单位; 尝试及合格复制数; 完整覆盖; H 内已执行实际工作; 原放行批次; Qc; 成品期初期末; 全部发运退回 V; 原交付冲回; 增量返工; 继承向量 | 核验服务交付单位及供货状态覆盖；保留包含拒收或未授权退回的全部流转；配对内部首次放行移交并保存原批次历史负荷。 原始汇总说明：原始服务和完整 V 不相除；不外推未来服务；按原 Qc 仅执行一次 calc_service；抵消内部放行流转。 | item; kg; 实际服务单位 | 逐服务及实物流转 | 仅实际 H 及原放行历史 | 全部供方储存及发运场址 | 每 1 kg 参考流 | 供方记录; 发运退回单; 原放行登记; 接受拒收及历史记录 |
| cp_asset_services | services | programmer; test_console; asset_external_return | 实物资产及服务负荷登记 |资产标识; 实际配置; 实测制品净质量 kg; 完整外部取得 V; 对外返还 V; 资产期初期末池; 实际服务占用; 上游制造边界; 有证据复用模型; 继承向量; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |完整记录外部取得及返还并独立核对资产库存；按实际使用及上游边界单独推导负荷份额；不默认寿命或每次复制采购。 原始汇总说明：保留未除完整 V 及独立归属负荷；实物流先用 calc_physical 再由 calc_normalize 或 calc_service 仅归一化一次。 独立观测实际包装池非水 J_in/J_out 转移，保留既有实测水流入出及无修理自然吸脱湿；保留完整湿态、互斥六方向、同侧其他重复事件证明及配对内部池交接，每项实际新增材料/流各设原子卡。 | kg; item; h | 逐取得返还及使用区间 | H 及原资产历史 | 全部实际设备位置 | 每 1 kg 参考流 | 资产登记; 称重或供方质量; 使用日志; 上游资产数据及模型 |

### 计算规则

普通废物、不合格品、样本及其销售不是可转走制造负荷的其他功能；其生产负荷仍留在目标批次或零产出账。废物的成分来源向量是追踪信息，不构成免除该负荷的共产品分配。

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_release` | finished_cartridge | Q = H 内唯一首次放行完整卡带净质量之和。排除包装及不合格品；新放行期末成品仍含于 Q。 | cp_release | Q |  |
| `calc_units` | 所有清单行 | 各原始记录先换算至实际分子单位再归属。电力 MJ = 原始 kWh × 3.6。真实速率按实测区间仅积分一次；仅在需要时使用独立实测该物质及状态的密度。不编造系数。 |raw_native; cp_energy; cp_energy_board; cp_energy_program; cp_energy_housing; cp_energy_release; cp_energy_services | raw_converted |  |
| `calc_stock` | 所有清单行 | 逐交换保留：期初继承向量 + 实际取得或发生向量 = 真正未耗用期末继承向量 + 目标首次放行批次归属向量 + 有明确依据转移至其他真正功能的向量。普通废物、不合格品及样本负荷不作为其他功能扣走；对应零产出负荷保持可见。已放行期末成品和已执行服务不属于未耗用期末向量。内部交接抵消。不按质量份额猜测化学或能源向量。未耗用原料、在制品及已放行成品分别记账。 |cp_material; cp_service; cp_waste; cp_waste_board; cp_waste_program; cp_material_housing; cp_waste_housing; cp_waste_release; cp_service_services | burden_vectors | `jrc-ilcd-attributional-2010` |
| `calc_physical` | 所有清单行 |V 为各自原单位的实际完整实物交换。逐制品和组分独立核对：期初实物池 + 外部收货 = 期末池 + 全部对外流转 + 对应实际物理耗用或损失。整件及单独供货组分账互斥或明确桥接；内部交接抵消。X 仅去重同侧重复的实际 OTHER 流，不冲库存或对侧流转。 每个实际包装池按 calc_packaging 保留互斥非水 J_in/J_out 以及既有 measured_external_water_in / measured_external_water_out，X 不能冲真实增量或期末库存。 |cp_material; cp_asset; cp_pack; cp_waste; cp_service; cp_waste_board; cp_waste_program; cp_material_housing; cp_waste_housing; cp_asset_release; cp_waste_release; cp_service_services; cp_asset_services | V |  |
| `calc_packaging` | 所有清单行 |每种包装分别满足：Iopening_empty + Iopening_WIP + Iopening_FG + Iopening_reusable + P + I + ER + J_in + measured_external_water_in = Iclosing_empty + Iclosing_WIP + Iclosing_FG + Iclosing_reusable + S + EO + W + J_out + measured_external_water_out。供货制品已包含的水只作为内含子账，不再次加入。真实自然吸脱湿另据独立测量记录；缺测不能用残差补水。内部复用抵消。W 已包含于单一混合废物总量时保留 originW，不再导出其质量。 期初期末各状态及整物品六方向均为实际完整湿态 kg。ER 为收到外部返还，EO 为向外返还，S 为完整毛发运，W 为整湿废弃物。J_in/J_out 为独立实测、跨此具体包装池且尚未含于整物品方向的非水修理、替换、沉积、残留或其他材料转移，不推定发生修理或材料事件。既有 measured_external_water_in / measured_external_water_out 保持独立实测真实水转移，含没有修理的自然吸脱湿。真实新增或移除湿材料依据真实组成证据拆为互斥非水 J 和实测水，不设默认比例或密度。期初期末或完整 P/I/ER/S/EO/W 已包含的料水为非加和内含量，不是另一增量。完整 W 已含基材、留存残余及水一次；除非跨界前真实分离，其嵌套子项不再列 J_out 或外流水。已配对内部池转移合并时抵消，不新增采购、供方服务或 Q。 |cp_pack; cp_waste; cp_waste_board; cp_waste_program; cp_waste_housing; cp_waste_release; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components | packaging_closure |  |
| `calc_normalize` | 所有清单行 | Q > 0 时归属制造负荷仅求一次 A/Q，完整实物流仅求一次 V/Q。A 是真实换算并按第 7 节归属、经继承向量核对后转移至首次放行的负荷。卡片及协议汇总仅引用此结果。Q = 0 时保留原始负荷及未解决平衡，不输出单位结果。 | Q; V; burden_vectors; raw_converted | unit_manufacture |  |
| `calc_service` | 所有清单行 | 每个原放行批次 Qc > 0 时，仅将 H 内实际增量服务负荷除以 Qc 一次，完整实物流 V 也仅除以 Qc 一次。保留原交付冲回及原继承向量；不得从新 Q 扣除历史制造。复验、返工和重发不产生新 Q。Qc = 0 或未知时仅保留原始服务，不输出单位结果。配对抵消内部 Q 交接，不将物流发运计为另一个产品产量。 |cp_service; cp_pack; cp_energy; cp_asset; Qc; V; cp_energy_board; cp_energy_program; cp_energy_housing; cp_energy_release; cp_asset_release; cp_energy_services; cp_service_services; cp_asset_services | unit_service |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 全部卡片及参考流 | 保留完整原生流上下文及实际供方兼容性，包含全部 basename、同义词、备注、CAS、等级、路线、形态、地理、介质、类型和全部属性。采用 UUID 前须有精确被引用属性及单位组版本链；不得推断最新版本。查询候选不等于公开状态直读验证。 | 供方物料清单；完整身份及单位证据 |
| `dq_quantity` | 全部分子记录 | 使用真实校准测量及实际组成；不预设容量、件重、良率、烧录功率、配方、温度时间或寿命。核心阶段缺测明确阻断完整性。普通辅助供方身份缺口与核心方法证据分开。 | 校准；采样；原始及计算记录 |
| `dq_context` | 来源适用性 | 保留各来源特定范围和相邻反例。历史 SNES 案例支持闪存装联及一次真实失败，不支持当代工厂良率；HoskBrew 支持服务，不支持实测 SMT 配方。制造原件不构成分配依据。 | 完整原件及来源特定适用性评估 |
| `dq_temporal` | 制造及放行批次 | 覆盖完整声明 H 及每个实际场址；保留每交换继承向量和期初期末实物池。纳入启停、空转、清理、不成功批次及返工。未观察未来服务保持未知。 | 批次工序单；库存及批次账 |
| `dq_software` | 原始资产及服务供方 | 报告原始开发覆盖和实际复用总体不确定性、权利与复制边界及防重复措施。价格、代码规模和卡带千克不能替代真实活动。 | 原始资产数据集；权利及来源；供方覆盖 |
| `dq_reconciliation` | 全部实物及负荷系统 | 报告独立质量及相关元素和物种平衡，包含实际水状态和去向。真实混合物总量和来源子账非加和。不得拟合密度或虚构修复材料来强迫闭合；未解释残差保持可见。 | 质量及物种平衡；独立测量 |

## 9. 校验规则

### 原接受批次与完整实物历史

Q0 表示锁定的正值原首次接受批次质量，Q=0 表示零产出观测，两者不是同一账户。原批次服务使用相同原 Q0=Qc 及观测 H，不形成新质量或第二归一化。

在唯一首次合格整件卡带接受事件 e 锁定原批次 c 及原 Q0=Qc=sum(M_e)。M_e 为该事件经校准实测的完整湿态净卡带 kg，实际内含部件只计一次，排除包装和测试资产。制造 Q 即所声明制造批次的原 Qc；不得由当前存活质量、净发运、后续重检或干湿变化重算 Qc。失败或未放行 Q=0 保留全部原始负荷，不给归一化结果。期初原料、在制带入实测实物库存及继承交换向量一次；期初已接受卡带沿用原 Qc 及制造历史，不形成新采购或新接受。

每个原接受事件按原接受基准拆为互斥的净外部持有、厂内已放行成品、隔离、维修返工在制、内部使用、不可逆销毁或损失部分及其他有据终端处置。各当期和终端份额之和等于原 Qc，与当前湿态实物质量独立。毛发运和毛返还仍为完整实物事件；返还先逆转对应外部持有，再发运只移动同一存活份额。按有据原基准拆分部分损失和存活量，不得将损失水或部件补回存活量又外排该损失。当前湿态库存、蒸发、拆旧换新件及全部实物出口另建守恒桥。谱系或批次归属未知时，完整保留原始总量且结果未决；循环、接受后销毁、重验及失败作业不产生新 Q。

### 整件污染出口与非重叠供方需求

记录真实接收方转移 t，完整湿态整件出口 Qt 仅一次：废硬件、包装、擦拭件、棉签、布、过滤件或设备基材，加实际留存溶剂、粉尘、制剂残余及水。干基材、内含化学品和水账是经对账的非加和子项；仅在边界前真实物理分离并有各自转移 ID 后才成为独立外部废物出口。单一混合出口内的包装 W 或拆件来源仅可追溯子项，不形成第二出口或处理需求。真实接收方收据和处理总需求仍为 Qt，与环境归属独立。

依已证明因果需求和分配层级，将环境或服务向量 A_tc 归属不重叠原批次。核对 sum_c(A_tc) 加实际其他功能和未分配向量，等于一次真实供方总需求。实物 Qt 保留于唯一事件账，报告引用它，不得每批次再收费整份事件或按分配比例缩小物理出口。重叠报告间实物 V/D 上下文非加和。处理及服务清单采用独立归属的 A_tc/D，分母为制造 Q 或带观测 H 的原 Qc，不得每批次另加整份 Qt/D。真实归属未知仍未决。供方内含历史或处理与完整展开相应直接清单为互斥表示，不是可加采购。


### 实际编程、制剂与生产者边界

第一方制造回顾证明真实全新闪存游戏卡带，不只是空白存储或 PCB。其 ROM 写入、可运行卡带及主机测试、装壳和带标签实体发行支持此产品门，但并未说明采用某一回读哈希算法或编程夹具设定。记录实际获接受发行映像、文件哈希及来源、目标映射、支持的板和编程器接口及写入验证日志。回读比较仅在真实支持读取且明确比较覆盖时作为显式技术验证要求，不得追认来源观察到了该操作。否则保留真实支持的完整性和功能接受方法及证据；关键编程验证适用性未决时，该具体路线仍待审，不得由未来采集措辞或有限检查豁免。

回顾将焊膏俗称为胶，并将回流俗称为干燥。这不确立焊料合金、助焊剂或溶剂化学组成、温度曲线、损失或分子反应。真实整份供货焊膏只记录一次，金属、助焊剂、溶剂和水为互斥组分子账，并记录真实回流能耗及实测物种相态去向。不得假定反应物种守恒、所有溶剂挥发、缺失质量均为水或全部焊料成为焊点金属。附在板、布、过滤件或容器上的残留，在真实分离前仍属于整件污染物品。声称完整前，每项真实独立外供清洗制剂、惰性气体、公用工程、废物及分子物种须有各自原子卡，来源照片不提供配方或因子。

每项真实外供裸板、封装 IC、电容、电阻、已装配模块、外壳、标签及包装须有真实完整上游生产者，或互斥展开实际清单。按真实供货范围保留半导体制造封装、裸板制造、外供 SMT、壳体成型、涂饰、公用工程、维护和废物。真实自有装配、回流、编程、测试及壳体成型不能藏在纸面供方门后。HoskBrew 描述现场 ROM 刷写及外壳制造服务；第一方案例采购专业制造裸板及美国外壳和印刷供货。保留真实不同生产者边界，不要求独立来源对应同一供方或 SKU。外购完整已记录卡带不能替代本必需制造路线。

### 原始软件账户与维护生产台群

保留真实可复用原始游戏版本账户，含原始开发、构建、测试资源及前版本继承工作一次，与当期复制编程分开。以相容交付单位记录真实合格复用群、分配时期、版本发行及载体和原账户余额；归属真实用途、剩余未分配及其他用途的份额之和须等于唯一原账户。不得用固定份数、许可价格、代码大小、卡带质量或假定寿命定义复用群。完整外供原始软件或复制服务与其展开组分活动互斥。未完成、失败原型及构建保留原始负荷，不得每物理复制件重新重复全部开发。原账户分配或服务单位未知时，保留总量及未决归属。

真实编程器、测试主机、回流炉、钢网及生产测试夹具的实物收进、期初期末、外转和退役，与观测服务需求、维护及原批次独立。以相容供方单位和真实使用历史、剩余容量归属，不编资产寿命或每 kg 卡带一整机。实际内含部件和在装流体仅一次，完整湿态污染废弃物与非加和成分账分开。接受后服务沿用原 Qc/H，改写、退回、重验及返工卡带均不产生第二首次接受。


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流及限定信息 | 要求完整已录程序实体卡带及全部有序限定信息。不能以空白闪存设备、裸 IC/PCB、主机、下载或仅许可替代参考制品。每项采用身份都须遵守实际存储技术、接口、供货状态和供方限制。 | `unsd-cpc38582`; `drludos-snes-manufacture-2020` |
| `validate_release` | 首次放行 Q | Q 仅汇总唯一完整卡带首次成功放行净质量。排除全部包装、底纸及不合格品质量；实际本体部件仅计一次。记录件数及实测质量，不假设件到千克系数。Q=0 时保留全部原始负荷，不输出单位结果。复验或重新交付不属于新 Q。 | `drludos-snes-manufacture-2020` |
| `validate_balance` | 实物及继承负荷账 | 要求制造、服务及合并门具备原料、在制品及非在制品/成品期初期末池和实际全部投入产出。每交换保留独立继承向量，退回及后续工作保留原放行批次关联。不得从制造负荷扣除首次放行期末成品。一个残差不能解两个未知量。 | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `validate_packaging` | 每种实际包装制品 |每种实际包装及批次都须核对 P/I/ER/S/EO/W。外部返回不属于采购；内部复用抵消。全部外出物流包含失败或拒收发运。保留附着在在制品和成品上的包装等全部实际库存。混合容器 originW 为非加和子账，实际总量仅由一个接收方承接一次。 每个实际包装池按 calc_packaging 保留互斥非水 J_in/J_out 以及既有 measured_external_water_in / measured_external_water_out，X 不能冲真实增量或期末库存。 | `hoskbrew-cartridge-services` |
| `validate_calculation` | 全部交换数量结果 | 采集未经相除的原始分子记录。真实单位先换算，真正速率仅积分一次，然后进行因果归属；制造 A/Q、实物 V/Q 或服务原 Qc 各只归一化一次。卡片及协议汇总仅引用该次计算。区分积分体积与速率；体积转质量须有该物质实测状态下密度。未知关系需审查。 |  |
| `validate_completeness` | 实际操作及来源限制 | 要求完整实际烧录、验读和功能测试及上游关联，保留全部失败或零产出负荷及未列流缺口。行业服务能力不等于工厂测量；工业制造来源不能支持分配。依原文上下文实施归因层级；单一来源不赋予方法审批，也不代表所有制造技术。 | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`; `jrc-ilcd-attributional-2010` |



### 包装池湿质量及观测桥

Iopening_empty + Iopening_WIP + Iopening_FG + Iopening_reusable + P + I + ER + J_in + measured_external_water_in = Iclosing_empty + Iclosing_WIP + Iclosing_FG + Iclosing_reusable + S + EO + W + J_out + measured_external_water_out。期初期末各状态及整物品六方向均为实际完整湿态 kg。ER 为收到外部返还，EO 为向外返还，S 为完整毛发运，W 为整湿废弃物。J_in/J_out 为独立实测、跨此具体包装池且尚未含于整物品方向的非水修理、替换、沉积、残留或其他材料转移，不推定发生修理或材料事件。既有 measured_external_water_in / measured_external_water_out 保持独立实测真实水转移，含没有修理的自然吸脱湿。真实新增或移除湿材料依据真实组成证据拆为互斥非水 J 和实测水，不设默认比例或密度。期初期末或完整 P/I/ER/S/EO/W 已包含的料水为非加和内含量，不是另一增量。完整 W 已含基材、留存残余及水一次；除非跨界前真实分离，其嵌套子项不再列 J_out 或外流水。已配对内部池转移合并时抵消，不新增采购、供方服务或 Q。

原始观测桥为 L_in_observed - X_in = P + I + ER + J_in + measured_external_water_in，以及 L_out_observed - X_out = S + EO + W + J_out + measured_external_water_out。L 仅为观测侧总量，不是额外供方需求或实物清单。每个 X 按同一事件、组分、单位和方向映射到同侧其他精确重复观测，且规范侧已计一次。对账后每项真实非水及水增量仍保留一次，X 不因留库而冲真实留存入流、期初期末库存、对侧方向或嵌套 W。原观测互斥时 X=0。单纯内部附着复用不跨池边界；由另一内部池真实转入材料须有源目的地配对账，合并边界抵消。真实供方总量、整湿 W 及实物库存独立于原 Q0=Qc/H 和非重叠 A/Q 归属。未知观测保持未决，不能配残差或靠未来许可闭合未知。


### 完整可消费适用性段落

#### 来源章节 1 / 1

本 PCR 适用于载有明确可执行游戏程序的完整实体主机卡带，采用有原始制造证据的电可编程闪存电路板及外购壳体路线，终止于完整净卡带首次质量放行。厂内裸板贴装、焊膏回流、烧录、验读及实际主机功能测试仅在实际发生时采集；外购完整已装联模块与厂内装联的内含部件投入互斥。不能将完整制造缩为购买已完成已录程序卡带后装盒。来源：`drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`。

#### 来源章节 1 / 2

分类注释将卡带与 CD/DVD 等其他载体区分。本方法排除光盘、磁盘、网络下载、空白存储卡、单独芯片、裸 PCB、主机硬件及纯许可作为参考产物。掩膜只读存储路线不能套用电烧录；无完整已录程序而仅触发下载的密钥卡不能直接套用。不同存储技术须在本身份内完成证据及工艺审查后使用，不另建同类平行身份。质量参考不表示等质量卡带具有相同游戏功能或游玩时间。来源：`unsd-cpc38582`。

#### 来源章节 3 / 1

数据包须在可消费元数据或参考流上下文中完整保留全部限定信息。Q 是 H 内唯一首次放行完整卡带的实测净质量之和。实际本体部件及其真实内含组分仅计一次；包装与可剥离底纸不计入 Q。实测件数与按配置净质量保留，不猜单件千克、容量、程序规模、良率或寿命。

#### 来源章节 6 / 1

所有实物卡的数量维度只使用完整实际 V 的单次 V/Q 或原批次 V/Qc 结果，不能以 A 或经济及服务份额替代。对应供方归属负荷 A 在独立负荷维度按原始资产或制造范围核算一次；实物披露本身不自动新增采购、供方需求或抵扣。纯原始资产复用及实际复制服务的数量单位仅描述其实际交付对象，不把卡带千克当软件单位。

#### 来源章节 6 / 2

以下每卡仅为一个原子交换。适用条件必须由实际物料和工艺记录确认；缺测不等于不存在。实际发生但未列出的每种具体流须增卡并核验供方及单位。各 process 的 preamble 与上位边界和公式共同适用。

#### 来源章节 6 / 3

在不可逆加工前核对供货状态及库存。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 来源章节 6 / 4

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅适用于外购完整已装联闪存板；不再采购内含芯片或焊料。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 5

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为工厂已制造成品印刷电路产品。仅用于实际已有导电图形的外购裸板；不得替换为覆铜板中间体或已装联模块。未给面积质量、密度或封装重量系数；须实测质量。

#### 来源章节 6 / 6

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球工厂生产混合、已封装且可贴装的产品；同义词包含封装 IC、QFP、BGA、CSP、SMT IC。备注要求上游中间制品身份与 PCBA 链交换一致。仅使用一种声明功能及封装的实际芯片；不是裸片、晶圆或完整存储模块。未指定 CAS、制程节点、容量或全球范围之外的固定地理。一个封装实现多个支持功能时，实物封装只计一次，功能子账非加和。

#### 来源章节 6 / 7

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球工厂生产混合、已封装且可贴装的产品；同义词包含封装 IC、QFP、BGA、CSP、SMT IC。备注要求上游中间制品身份与 PCBA 链交换一致。仅使用一种声明功能及封装的实际芯片；不是裸片、晶圆或完整存储模块。未指定 CAS、制程节点、容量或全球范围之外的固定地理。一个封装实现多个支持功能时，实物封装只计一次，功能子账非加和。

#### 来源章节 6 / 8

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球工厂生产混合、已封装且可贴装的产品；同义词包含封装 IC、QFP、BGA、CSP、SMT IC。备注要求上游中间制品身份与 PCBA 链交换一致。仅使用一种声明功能及封装的实际芯片；不是裸片、晶圆或完整存储模块。未指定 CAS、制程节点、容量或全球范围之外的固定地理。一个封装实现多个支持功能时，实物封装只计一次，功能子账非加和。

#### 来源章节 6 / 9

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生电容器为工厂工业电子无源装配部件；已核对电解、陶瓷、薄膜、钽、超级、可变及固定电容等同义词，但不预设其中一种。生命周期、工艺及质量的一般说明未提供数值配方或认证。须声明实际单种电容类型及等级；不同部件分别建行。

#### 来源章节 6 / 10

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 仅用于实际物料清单中单独供货的部件；不同实际等级或支持芯片功能另建卡。不假定封装质量或存储容量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为工厂生产混合的已制造成品产品，明确排除加热电阻器。仅用于真实电子电阻器，不替换为加热元件或电阻原材料。不假定额定值或阻值。

#### 来源章节 6 / 11

每卡仅表示一种实际供货制品。记录批号、交货状态及实测全部收货和流转。使用互斥物料路线：外购已装联模块仅承接一次内含 PCB 及芯片；单独采购部件仅归属厂内装联数量。UUID 未确认不等于省略交换。 整份制剂只采购一次。合金和助焊剂组成须有实际规格；不规定合金或溶剂配方。成分分析仅为非加和子账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 12

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

#### 来源章节 6 / 13

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

#### 来源章节 6 / 14

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 15

仅实际厂内元件装联；外购已装联模块跳过此工序。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 来源章节 6 / 16

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

#### 来源章节 6 / 17

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

#### 来源章节 6 / 18

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 19

仅实际独立收集的 SMT 及回流焊报废装联卡带电路板；烧录及功能测试损坏板另记。 原生为全球厂内专指 SMT 及回流焊报废 PCBA 的废物；PWB、PCBA、电子废料等同义词不扩大其工序范围。未给数量。本绑定卡仅含实际贴装及回流不合格板；烧录测试报废板另用 program_board_reject，实际返工移交不是废物。

#### 来源章节 6 / 20

纳入实际文件传送、烧录尝试及测试设备。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 来源章节 6 / 21

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

#### 来源章节 6 / 22

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

#### 来源章节 6 / 23

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 24

仅表示实际跨资产边界取得的烧录器。保留完整制品总净质量及对外返还流转；不为每次烧录购买整台设备。实物流 V 账与制造或服务归属负荷及有证据的使用期份额分开；不假定寿命或分配比例。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 25

一种具有明确标识的已接受原始版本供实体复制及其他实际渠道复用。完整开发清单和实际复用总体保留在上游原始资产账中；有依据的复用份额仅归属一次，不将每张卡带视为重新开发的原始资产。此处 item 仅计原始资产，不是代码或卡带质量。许可发票不等于电耗或排放因子。 一个原始资产的 item 与原生 Item(s) 为同一计数物理单位，因子 1；不得借此推算卡带单件千克。复用总体未知时，关联负荷保持未解决。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 26

仅适用于具有核实交付单位和明确投入产出覆盖范围的一种实际委托复制活动。区分尝试和合格复制。对同一操作，选择具体服务数据集或供应方逐原子活动展开，不能两者同时计入。单纯复制权不等于实际复制服务。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 27

仅表示烧录或功能测试后实际独立收集的不合格已装联游戏卡带板；保留真实全部失败负荷及实测净质量。不是 SMT/回流工序废物流的自动延伸。真实进入单一混合废物容器时仅保留非加和 originW，不再导出分量。使用 cp_waste 采原始分子，仅引用 calc_normalize 的单次结果。

#### 来源章节 6 / 28

使用外购壳体；不假设现场注塑。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 来源章节 6 / 29

一种供应商提供的一套单卡带模制壳体制品；在制品物料清单中记录各半壳及实际聚合物和添加剂规格。不假定聚合物或现场注塑配方。壳体制造属于上游。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为未指明塑料机壳产品，具有机壳、外罩、壳体及底座同义词，并标记行业平均估算组合。未规定聚合物、等级、添加剂或成型条件，也不核实供方清单。仅用于与实际组成及供方相符的一种外购卡带壳体制品；树脂与成品壳体不重复采购。

#### 来源章节 6 / 30

仅在确实单独安装螺钉时适用；记录实际材料及镀层和实测供货质量。已包含在壳体制品中的螺钉不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 31

整份外购成品标签含胶和印刷基材，只承接一次；可剥离底纸不计入 Q 并单独记录。留在合格卡带上的标签属于卡带净质量。不再购买其油墨或胶。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 32

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

#### 来源章节 6 / 33

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

#### 来源章节 6 / 34

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 35

一种实际剥离底纸废物流；其纸或膜及离型涂层需有实际供货证据。不计入卡带净质量。不根据标签名称推定纸或聚乙烯。混合处置遵循单容器规则。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 36

仅完整卡带首次满足规定放行准则时计入 Q。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 来源章节 6 / 37

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

#### 来源章节 6 / 38

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

#### 来源章节 6 / 39

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 40

实际测试主机属于支持设备，不是卡带产出。完整取得和对外返还实物流与资产归属负荷分开。主机、显示器和烧录器用电需计量，USB 供电不重复计算。实际独立显示器或计算机若不在已覆盖服务边界内，应另建卡。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生已制造成品主机产品包含与电视接收机配套及手持式主机。用于具有独立实测净质量及资产历史的实际完整测试主机；主机不计入卡带 Q，也不隐含固定硬件寿命。

#### 来源章节 6 / 41

唯一成品参考制品一次包含已装联 PCB、已写入程序闪存、实际支持元件、供货壳体和本体标签。它不是空白存储设备、芯片、裸 PCB、主机或下载。保留主机兼容性、存储技术、发布哈希及第 3 节全部限定信息。Q 仅为首次放行卡带净质量；全部失败及零产出负荷保留在上游。排除包装；已放行留库的卡带已经计入 Q。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生身份为工厂生产混合、已制造成品的整件产品。未规定容量、芯片类型、寿命、等级或地理。范围为游戏卡带用软件并排除 CD/DVD；不是空白闪存、裸片、PCB、主机或下载。仅适用于声明闪存配置的完整承载可执行程序卡带。退回或发运制品仍须是完整已录程序卡带；真实废物或其他状态使用实际具体流。 必需限定信息完整为：游戏名称及发布哈希; 权利及已接受 ROM 来源; 目标主机与地区接口; 实际闪存技术和容量; 映射器及 CIC 或其他实际支持芯片配置; 外购模块或厂内电路板装联路线; 物料清单及壳体结构; 按配置实测的卡带净质量和件数; 首次放行准则及唯一放行标识; 失败与拒收实物流向; 期间 H 及全部场址; 期初期末库存及继承负荷; 烧录及测试覆盖范围; 软件原始资产及许可的核算边界; 包装配置及不计入 Q 的规定; 实际公用工程状态及供方边界; 上游数据集覆盖及分配证据.

#### 来源章节 6 / 42

仅表示实际作为废物输出的整份拒收或销毁卡带。整件仅承接一次内含壳体和 PCB；只有实际拆解并核对移交后才能使用独立组分废物流。未授权或拒收产品保留实际制造负荷及流向；放行权限不抹除实物制造。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 43

仅表示一种实际混收废物，具有实测毛重皮重及实际去向。分别保留板、壳体、标签及各包装来源的独立实测 originW 子账；它们是非加和内含量，不是额外废物输出。组成及危险状态决定接收方兼容性；不能用产品或填埋操作替代此废物流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内混合制造废物，限定总装及工厂测试，未给具体数量。仅用于这些工序的一项真实混合出口，保留真实组成及去向；不按来源自动拆出口，也不额外导出纸或板组分。

#### 来源章节 6 / 44

H 内实际服务归属原首次放行批次 Qc。 逐批保留真实投入产出、启停空转及失败负荷。实物量与继承负荷向量分开；相邻工序的内部交接必须配对抵消。

#### 来源章节 6 / 45

仅在实际供电为中国用户侧 1–35 kV 中压电网平均消费组合时采用此产品流。完整原生身份为交流电及 AC 同义词，电网平均供电，消费组合到用户，地理 CN；没有独立 CAS、燃料配方或特定电站属性。全部属性的唯一参考为净热值，精确关联能量单位组及 MJ 基准；不是质量单位组。不得用于低压、其他国家或特定焚烧发电。逐电表与下方其他供电卡互斥，避免变压器或 USB 重复供电。V 保留本工序实际完整交付电量；负荷归属 A 另记，不用经济份额缩减物流。仅在 calc_normalize 的制造或 calc_service 的原批次服务互斥范围内归一化一次；保留启停、空转、清理、失败和返工。

#### 来源章节 6 / 46

仅在实际中国用户侧 <1 kV 电网平均消费组合时采用。原生正式名称为交流电，AC 为同义词；产品交付到用户，地理 CN。唯一参考属性为净热值，精确能量单位组基准 MJ；不是质量组。不用于中压、其他国家或特定电站发电。各电表与中压及其他供电卡互斥；包含全部启停、空转、清理、失败及返工，不重复 USB 或变压器供电。采 cp_energy 原始分子，仅在第 8 节制造或原批次服务互斥范围中归一化一次。

#### 来源章节 6 / 47

仅适用于未由中国中压或低压卡覆盖的实际其他电压或地理供电；不得与它们的电表重复。 按电压和地理记录本工序实际用户侧用电，包含启停、空转、失败尝试、清理及增量返工。原始千瓦时先换算为兆焦，再归属。供电不明是数据缺口；不默认电网或每卡带烧录电耗。后续服务归属原放行批次账。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 48

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 49

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

#### 来源章节 6 / 50

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 51

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 52

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

#### 来源章节 6 / 53

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 54

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 55

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

#### 来源章节 6 / 56

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 57

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。

#### 来源章节 6 / 58

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。

#### 来源章节 6 / 59

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。

#### 来源章节 6 / 60

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 61

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

#### 来源章节 6 / 62

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 63

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 P 仅为单独采购包装；供方随货带入 I 及外部返回 ER 是独立互斥流。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 64

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 I 为随上游货物带入且未计入 P 或整份制品质量的这一实际包装制品，包含供方随货不另收费包装；不因价格合并而省略。不再次承接已在整份制品中计入的包装。逐批保留全部实物 V、原放行批次和期初期末空包装、附着在制品与成品及周转库存。采用 cp_pack 采原始分子；仅引用 calc_service 的原 Qc 单次结果。

#### 来源章节 6 / 65

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 ER 为实际收到的外部返还；保留原所有权及继承负荷，不再次采购。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 66

按配置及原批次保留完整实际实物流 V；不按分配份额或库存差缩减数量。合法性及验收状态另记。退回和复验不产生新 Q。原交付冲回及继承制造负荷保留在原放行批次。此物流记录不是另一参考产出或自动抵扣共产品。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生身份为工厂生产混合、已制造成品的整件产品。未规定容量、芯片类型、寿命、等级或地理。范围为游戏卡带用软件并排除 CD/DVD；不是空白闪存、裸片、PCB、主机或下载。仅适用于声明闪存配置的完整承载可执行程序卡带。退回或发运制品仍须是完整已录程序卡带；真实废物或其他状态使用实际具体流。 必需限定信息完整为：游戏名称及发布哈希; 权利及已接受 ROM 来源; 目标主机与地区接口; 实际闪存技术和容量; 映射器及 CIC 或其他实际支持芯片配置; 外购模块或厂内电路板装联路线; 物料清单及壳体结构; 按配置实测的卡带净质量和件数; 首次放行准则及唯一放行标识; 失败与拒收实物流向; 期间 H 及全部场址; 期初期末库存及继承负荷; 烧录及测试覆盖范围; 软件原始资产及许可的核算边界; 包装配置及不计入 Q 的规定; 实际公用工程状态及供方边界; 上游数据集覆盖及分配证据.

#### 来源章节 6 / 67

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 68

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 69

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 70

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 71

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 72

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 73

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。

#### 来源章节 6 / 74

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 此具体完整瓦楞纸箱身份仍未确认。保留真实瓦楞结构、纤维原料、涂层、实测整箱质量及供方；不得以通用包装集合绑定此具体物品，也不强定纤维比例。整箱采购内含纸和胶一次；产品返还腿须为实际可用纸箱，废弃纸箱采用实际废物身份。

#### 来源章节 6 / 75

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 76

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 77

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 S 是随全部实物发运外出的包装，包含替换品和拒收交付；不属于新增卡带产量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 78

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 EO 为实际向外部所有者或供方返还；不自动给回收抵扣。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 79

按配置及原批次保留完整实际实物流 V；不按分配份额或库存差缩减数量。合法性及验收状态另记。退回和复验不产生新 Q。原交付冲回及继承制造负荷保留在原放行批次。此物流记录不是另一参考产出或自动抵扣共产品。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 80

按配置及原批次保留完整实际实物流 V；不按分配份额或库存差缩减数量。合法性及验收状态另记。退回和复验不产生新 Q。原交付冲回及继承制造负荷保留在原放行批次。此物流记录不是另一参考产出或自动抵扣共产品。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生身份为工厂生产混合、已制造成品的整件产品。未规定容量、芯片类型、寿命、等级或地理。范围为游戏卡带用软件并排除 CD/DVD；不是空白闪存、裸片、PCB、主机或下载。仅适用于声明闪存配置的完整承载可执行程序卡带。退回或发运制品仍须是完整已录程序卡带；真实废物或其他状态使用实际具体流。 必需限定信息完整为：游戏名称及发布哈希; 权利及已接受 ROM 来源; 目标主机与地区接口; 实际闪存技术和容量; 映射器及 CIC 或其他实际支持芯片配置; 外购模块或厂内电路板装联路线; 物料清单及壳体结构; 按配置实测的卡带净质量和件数; 首次放行准则及唯一放行标识; 失败与拒收实物流向; 期间 H 及全部场址; 期初期末库存及继承负荷; 烧录及测试覆盖范围; 软件原始资产及许可的核算边界; 包装配置及不计入 Q 的规定; 实际公用工程状态及供方边界; 上游数据集覆盖及分配证据.

#### 来源章节 6 / 81

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内纸及纸板包装废物流，同义词明确包含纸板包装废物。仅用于本卡实际来源及真实容器，不替换聚合物套、膜或非纸混合废物。未规定去向、处理或废物比例。

#### 来源章节 6 / 82

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内纸及纸板包装废物流，同义词明确包含纸板包装废物。仅用于本卡实际来源及真实容器，不替换聚合物套、膜或非纸混合废物。未规定去向、处理或废物比例。

#### 来源章节 6 / 83

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 6 / 84

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内纸及纸板包装废物流，同义词明确包含纸板包装废物。仅用于本卡实际来源及真实容器，不替换聚合物套、膜或非纸混合废物。未规定去向、处理或废物比例。

#### 来源章节 6 / 85

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。 原生为全球厂内纸及纸板包装废物流，同义词明确包含纸板包装废物。仅用于本卡实际来源及真实容器，不替换聚合物套、膜或非纸混合废物。未规定去向、处理或废物比例。

#### 来源章节 6 / 86

本实际包装池按 calc_packaging 同时保留互斥非水材料转移 J_in/J_out、既有 measured_external_water_in / measured_external_water_out、完整湿态库存及完整六方向。即使无修理仍保留真实留存料和自然湿分，不规定料量或配方。本整物品已含料水为非加和内容。X 只去除同侧其他精确重复观测，不能冲真实增量、期末库存或整湿废物。任何真实单独供给或转移的材料/物种须有独立原子实测卡和兼容身份，不藏入本制品也不虚增采购。 仅在这一具体供货包装制品实际存在时适用。记录实际组成及供货状态；不默认聚合物或纤维配方。不计入 Q。每种包装单独建立 P/I/ER/S/EO/W 账，包含空包装、附着在在制品及成品上的包装和周转库存。内部复用抵消，不再采购，也不生成共产品。使用实际单位的完整实物流 V，并采用原批次 Qc 仅执行一次 calc_service；不按能源或经济份额缩减物流。 W 仅为这一实际独立收集的废物流。若进入一个真实混合容器，仅用 mixed_waste 导出一次，并保留非加和实测 originW；不再导出其中该组分质量。 单次结果归属由第 8 节 calc_normalize 和原批次服务 calc_service 的互斥范围确定；采集协议仅采原始分子。

#### 来源章节 8 / 1

本表 aggregation_rule 仅声明单次计算的目标基准，不在采集时执行相除。collection_method 保留未经相除的真实原始汇总；计算仅在下表实施一次。服务账的参考流始终属于其原放行批次 Qc，而不是本期新 Q。

#### 来源章节 8 / 2

普通废物、不合格品、样本及其销售不是可转走制造负荷的其他功能；其生产负荷仍留在目标批次或零产出账。废物的成分来源向量是追踪信息，不构成免除该负荷的共产品分配。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按首次放行净卡带 1 kg 归一化的前景制造候选；关联上游及原批次服务另有明确边界 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在游戏、主机、存储技术、路线、供货状态、地理期间和质量门相符且缺口已解决时用于实体卡带供应链分析 |
| excluded_use | 空白闪存或芯片或主机或下载替代；游玩服务等效声明；把历史制造案例当通用数值；缺口未解决时的完整摇篮到门主张 |
| required_metadata | 游戏名称及发布哈希; 权利及已接受 ROM 来源; 目标主机与地区接口; 实际闪存技术和容量; 映射器及 CIC 或其他实际支持芯片配置; 外购模块或厂内电路板装联路线; 物料清单及壳体结构; 按配置实测的卡带净质量和件数; 首次放行准则及唯一放行标识; 失败与拒收实物流向; 期间 H 及全部场址; 期初期末库存及继承负荷; 烧录及测试覆盖范围; 软件原始资产及许可的核算边界; 包装配置及不计入 Q 的规定; 实际公用工程状态及供方边界; 上游数据集覆盖及分配证据 |
| required_quality_disclosure | 所有原始协议覆盖、UUID 与供方限制、计量及库存向量、Q/Qc、完整物流、失败返工、软件原始资产及上游缺口、真实分配和来源适用性 |
| update_trigger | 程序或存储技术、主机接口、供货边界、装联烧录测试路线、壳体、工厂能源、Q 门、软件复用总体或供方身份发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc38582` | official_guidance | UN Statistics Division. CPC Version 3.0: 38582 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38582 | 实体卡带范围及其他载体排除；不支持制造数值 |
| `drludos-snes-manufacture-2020` | literature | Dr. Ludos. Making a SNES game in 2020 — Yo-Yo Shuriken developer postmortem. https://drludos.itch.io/yo-yo-shuriken/devlog/147478/making-a-snes-game-in-2020 | 开发者与制造伙伴的一手历史案例：外购裸板、贴装、焊膏回流、闪存烧录、启动芯片、外购壳体标签及印刷盒说明书；接反烧毁反例；不转用代码规模、批量、功率或良率 |
| `hoskbrew-cartridge-services` | handbook | HoskBrew. Services. https://services.hoskbrew.com/services | 制造商完整服务说明：PCB 采购、现场 ROM 烧录、测试及卡带壳体和包装仓储发运；仅能力范围，不是工厂测量或配方 |
| `jrc-ilcd-attributional-2010` | official_guidance | European Commission JRC. ILCD Handbook — General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010. Sections 7.9.2–7.9.3 pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因分配情形：实际或虚拟细分、逐交换决定性物理因果及真正剩余部分的共同过程门实际状态同期市场价值；无数值比例；不转用 QFD 复杂产品功能比较图的份额 |