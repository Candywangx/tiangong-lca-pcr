---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-footwear
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 皮革鞋面橡胶底休闲鞋成双柜台零售服务

## 1. 范围和适用性

本服务PCR仅涵盖声明的鞋构造与店内路线。共同管理/远程IT支撑按b_completion和c_completion强制补全前，本前景为部分增量清单；完成该汇总前不得作为完整零售服务数据集使用。参考为完成的双鞋零售服务，商品制造保持为独立耦合收货背景。所有数量及供应方证据均须采集；未知不是零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-footwear |
| classification_refs | CPC 3.0 62134；鞋类非专营店零售服务的较窄子集 |
| covered_products | 一个声明的同质SKU、颜色、尺码体系、尺码和宽度的新匹配左右低帮休闲鞋，皮革鞋面和橡胶外底；依供应商BOM声明实际动物物种、鞣制/涂层、内里、鞋垫、鞋带、胶黏剂及底料配方。皮革名称不证明牛源。 |
| excluded_products | 运动、防护、矫形、滑冰、石棉或二手鞋；凉鞋、靴、零部件、单卖鞋垫、混尺码和混材料；线上配送、维修、擦鞋、制造和消费者穿用。 |
| representative_product | 皮革鞋面橡胶底休闲鞋成双柜台零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 常温全电非专营店，电阻暖风及自然通风，无机械制冷或制冷剂回路；人工搬运和一次性纤维素擦地巾；收货、配双/尺码检查、干燥存储陈列、监督室内试穿、柜台结账交付、退货检查和分立残余物交运。不处理鞋材或现场制造。员工个人餐饮、卫生和通勤及消费者出行/使用在此增量服务外；披露此排除，不声称全门店或鞋生命周期清单。 |
| market_state | 新干态成品鞋；室内试穿但仍可售的状态必须明确检查。原双鞋盒和填充物在实物丢弃前随收货背景；门店补换包装单列。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 所声明一双鞋的零售检查、试穿协助及合格柜台交付 |
| How much | 1项完成的双鞋服务；1 Item(s)为恰好匹配的一只左鞋和一只右鞋的服务，绝非一只鞋 |
| How well | 双鞋匹配SKU、尺码、宽度、颜色和声明构造；检查记录状态和试穿决定；接收者接受占有及约定状态。价格/付款本身不证明验收。 |
| How long or cycle | 一个事先固定的相同配置核算池，直至声明的退货成熟截止日，保留全部营业、闲置、失败和零销售区间；迟到事件修订原池。 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 非专营店内成对皮鞋面橡胶外底休闲鞋的柜台零售服务 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | 门店和核算池ID; SKU/颜色; 动物物种和鞋面涂层; 底料配方; 内里/鞋垫/鞋带/胶黏剂BOM; 尺码体系/尺码/宽度; original_pair_id和left/right_source_id（禁止重新配双）; 不含包装的实测双鞋质量; 试穿和验收关口; 退货截止/版本; 原包装; 共用驱动量; 资产寿命模型; 背景归属S/F/T/O; 供应方范围 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | retail_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Q数实际匹配双鞋；无身份配对和最终验收不得自动将2只鞋视为1双。 |
| m_mass | water; cleaner; cleaner_container; receipt_core; receipt_wrap; receipt_carton; floor_wipe; tryon_socks; receipt; bag; box; stuffing; film; unworn_transfer; failed_retained; cleaner_bottle_waste; shoe_waste; cardboard_waste; mixed_dry_waste; effluent | 质量 | kg | 用声明材料状态实测净kg。g/1000；件数转换使用实际批次组分kg/件并拒绝混批。匹配双鞋质量M_pair=m_left+m_right且不含包装，不是其他尺码或单只失败的固定转换。 |
| m_energy | electricity | 净热值, 低位热值 | MJ | 1kWh=3.6MJ；原表核对后仅转换一次，然后除Q一次。 |
| m_asset | building; shelf; bench; mirror; pos; luminaire; hvac | 物品数量 | Item(s) | 一件为完整已识别资产生命周期包；小数数量为暴露/寿命，不是维修件kg或冒充件数的小时。 |
| selected_freight_identity | van_loaded; truck_loaded | 货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 所选公路货运身份采用官方货物运输属性及单位。1kg*km=0.001t*km；保留声明的原数量/归属模式，仅换算一次。实际车型、货物条件及供应阶段仍为独立适用门，不能假定背景或另乘载货份额。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 鞋及原包装在门店关口实物接收，分别识别供应商制造和入店运输背景；实物总收货事件不是服务产出。 |
| starting_condition_role | 具有明确收货关口商品背景耦合的增量零售服务；不是制鞋数据集。 |
| product_classification_scope | 仅62134中所声明的较窄构造及柜台路线；294/295/296组不因此与本范围等同。 |
| recursive_input_rule | 不得将同类零售服务输入暗中以当前产出替代。外部零售步骤须另定服务边界并消除重叠。 |
| upstream_dataset_requirement | 按实际关口、原始数量和版本连接每批原产品/包装与入店运输背景。成功售出商品以B_S/Q保持可单独连接；零售造成不可恢复失败B_F/Q进入本服务。供应商/内部转移B_T与期末库存B_O保留明确签认责任方，不得消失。 |
| disclosure | 披露增量服务及独立B_S、B_F、B_T、B_O核对、原始实物总事件、实际日期和截止/版本；不得声称完整鞋生命周期或法律合规。 |

| rule_id | 规则 | 适用对象 | source_ids |
| --- | --- | --- | --- |
| b_product_family | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 | all inventory rows |  |
| b_scope | 声明构造和路线为适用关口。仅原匹配双鞋合格：保留original_pair_id和left/right_source_id。跨原双重配超出本路线，直至独立审查扩展分配每原鞋背景及全部剩余单只前阻断完整性。同标签但动物物种、底料、尺码或宽度不同的鞋分为独立同质池；不得借分类宽度扩大到运动鞋/部件/其他服务。 | all | src_un; src_clarks; src_label |
| b_operations | 纳入收货检查、存储、试穿凳/镜、试穿资源、照明、结账/POS、电阻暖风、清洁、包装、退货及实际残余转移。全电路线仅可依签名场址检查和公用账单证据排除燃烧；全部实际供应商/内部交出及废物载体背景须声明是否含收取/运输及处理。核供应方实际载货和空驶路线、距离、总载荷及闲置时间；空驶不因t*km=0而无活动。缺供应方运输范围或额外实际物质/运输在完整性成立前须加入原子卡、单过程协议并双语同步。 | all | src_retail |
| b_assets | 每张资产卡为一项有证据的完整单件生命周期供给包：仅该指定资产的制造、安装、非运营维护/替换及终端处理。包内排除其运营用电、清洁和商品。建筑壳体排除单列的陈列架、凳、镜、POS、灯具和电阻暖风机。维护替换仅指部件，绝非完整后继资产：整件替换须有自己的新序列号和寿命历史，不重复包内部件交换。不得预设包可用：缺签名范围/模型、生命周期质量/载体证据或遗漏实际设备均阻断完成数据集使用。 | assets | src_retail; src_ghg |
| b_background | 按唯一追踪的每只鞋及包装组分仅维护一次原收货背景：B_in+B_opening=B_S+B_F+B_T+B_O。货款抵扣没有证据不得移动实物或改变责任。零销售失败保留在事先固定池内。未穿用转移与损坏废物/外留失败载体具有不同实际去向/状态；不得从退款推断废物。 | retail; residual | src_ghg |
| b_completion | 强制共同支撑模块覆盖实际管理/后台工作、交易网络/远程IT、遗漏设施支撑和实际额外设备。每模块固定供应方/场址/过程和相同池/版本；逐项列出实际原子公用/材料/载体、直接原表/发票/库存和事件账、c_assets下实际完整单件资产、供应方运营/维护/终端范围及不存在证据。记录采集者/时间/单位/校准/覆盖和全部受益方。优先直接细分；共用活跃管理按观测任务秒，远程交易服务按实际消息/交易数；闲置支撑按占用支撑面积时保留，含全部闭店/失败期。未知范围或全受益方零/未知驱动阻断完成。不得用未具名组合资源流替代这些模块交换；各模块在汇总前必须提供可解析卡、协议、公式、原始分子和证据。 | all | src_ghg; src_retail |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 收货、试穿和柜台服务 | required | 全部声明池；各原子行以观测存在为条件 | 核心服务及支撑 | 1 Item(s) retail_service |
| residual | 按状态的残余交运 | required | 全部声明池；各原子行以观测存在为条件 | 核心服务及支撑 | 1 Item(s) retail_service |
| assets | 完整资产生命周期供给 | required | 全部声明池；各原子行以观测存在为条件 | 核心服务及支撑 | 1 Item(s) retail_service |
| logistics | 实际分立向外物流 | required | 全部声明池；各原子行以观测存在为条件 | 核心服务及支撑 | 1 Item(s) retail_service |
| support_completion | 强制共同支撑补全 | required | 全部声明池；各原子行以观测存在为条件 | 核心服务及支撑 | 1 Item(s) retail_service |

### 过程：收货、试穿和柜台服务 (`retail`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

依c_shared将互不重叠电表原始kWh E归属后乘3.6并除Q；包括库房、试穿、照明、POS、电阻暖风机、清洁及待机；另核供应方电网/电压/背景。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 自来水 (`water`)

归属后的原始进口V_water*rho_water(T)/Q；仅服务地面清洁用水，排除个人卫生用水。进口表已排除内部回用，不得再次扣回用。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 十二烷基硫酸钠水性地面清洁液 (`cleaner`)

实际领用整液kg归属后/Q；须有SDS安全数据表、浓度、供应批及含水量；不另重复活性物组分交换或整液所含水输入。仅此声明清洁液路线合格。

- 选定流：十二烷基硫酸钠水性地面清洁液
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 一次性纤维素擦地巾 (`floor_wipe`)

实际净原始kg消耗（实际新干巾kg，不重复所吸清洁剂/水；脏整载体产出含其一次），按双鞋/事件直接归属或c_shared后/Q；件数转质量须同批校准称量，不得用标称双鞋质量。

- 选定流：一次性纤维素擦地巾
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 一次性尼龙试穿脚套 (`tryon_socks`)

实际净原始kg消耗（未用/已用发出退回库存，包括未成功试穿、单脚试穿和损坏未用套），按双鞋/事件直接归属或c_shared后/Q；件数转质量须同批校准称量，不得用标称双鞋质量。

- 选定流：一次性尼龙试穿脚套
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 热敏收据纸 (`receipt`)

实际净原始kg消耗（净热敏纸kg排除实际原芯和运输皮重，含试打/作废；未打印卷纸、已打印在制品及发出/作废纸按c_consumables分账），按双鞋/事件直接归属或c_shared后/Q；件数转质量须同批校准称量，不得用标称双鞋质量。

- 选定流：热敏收据纸
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_receipt_roll`; `src_ghg`

###### 牛皮纸手提袋 (`bag`)

实际净原始kg消耗（实际发出补换/新袋、退回及报废，按状态分列），按双鞋/事件直接归属或c_shared后/Q；件数转质量须同批校准称量，不得用标称双鞋质量。

- 选定流：牛皮纸手提袋
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 瓦楞纸板补换鞋盒 (`box`)

实际净原始kg消耗（仅门店增加鞋盒；原收货鞋盒仍属原背景），按双鞋/事件直接归属或c_shared后/Q；件数转质量须同批校准称量，不得用标称双鞋质量。

- 选定流：瓦楞纸板补换鞋盒
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 纸质鞋内填充薄纸 (`stuffing`)

实际净原始kg消耗（仅门店增加填充薄纸，包括丢弃未用薄纸），按双鞋/事件直接归属或c_shared后/Q；件数转质量须同批校准称量，不得用标称双鞋质量。

- 选定流：纸质鞋内填充薄纸
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 聚丙烯护鞋袋 (`film`)

实际净原始kg消耗（仅门店增加护鞋袋；排除供应商原包装），按双鞋/事件直接归属或c_shared后/Q；件数转质量须同批校准称量，不得用标称双鞋质量。

- 选定流：聚丙烯护鞋袋
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 完整高密度聚乙烯瓶身地面清洁剂瓶组件 (`cleaner_container`)

按c_consumables归属实际原完整干瓶组件kg/Q：HDPE瓶身加核实BOM中实际存在的瓶盖/防拆环/衬垫、标签及胶黏剂，不是仅干HDPE聚合物。称整个空干组件；供应方制造范围须准确覆盖该完整组件一次。本输入排除清洁液/残液，不重复它或瓶组件。核实整包供应方模式下，本行仅记实物kg，不连接第二份瓶制造背景。

- 选定流：完整高密度聚乙烯瓶身地面清洁剂瓶组件
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_retail`

###### 螺旋卷绕纸板收据卷芯 (`receipt_core`)

c_consumables确定实际完整干组件kg及其一次制造背景归属/Q。它不是热敏纸kg，也不是瓦楞鞋盒。核实整包供应方模式下，本行仅核对实物kg，不另连接组分制造背景。核准确组件BOM，含附着胶黏剂/胶带/标签/内衬；实际材料/状态不同时须匹配卡，绝不用默认质量。

- 选定流：螺旋卷绕纸板收据卷芯
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_receipt_roll`; `src_ghg`

###### 完整纸质收据卷包材组件 (`receipt_wrap`)

c_consumables确定实际完整干组件kg及其一次制造背景归属/Q。它不是热敏纸kg，也不是瓦楞鞋盒。核实整包供应方模式下，本行仅核对实物kg，不另连接组分制造背景。核准确组件BOM，含附着胶黏剂/胶带/标签/内衬；实际材料/状态不同时须匹配卡，绝不用默认质量。

- 选定流：完整纸质收据卷包材组件
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_receipt_roll`; `src_ghg`

###### 完整瓦楞收据卷运输纸箱组件 (`receipt_carton`)

c_consumables确定实际完整干组件kg及其一次制造背景归属/Q。它不是热敏纸kg，也不是瓦楞鞋盒。核实整包供应方模式下，本行仅核对实物kg，不另连接组分制造背景。核准确组件BOM，含附着胶黏剂/胶带/标签/内衬；实际材料/状态不同时须匹配卡，绝不用默认质量。

- 选定流：完整瓦楞收据卷运输纸箱组件
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_receipt_roll`; `src_ghg`

#### 输出

##### 产品流

###### 非专营店内成对皮鞋面橡胶外底休闲鞋的柜台零售服务 (`retail_service`)

Q/Q=1；c_accept按匹配双鞋合格验收及撤销确定Q，独立于实物库存和现金。

- 选定流：非专营店内成对皮鞋面橡胶外底休闲鞋的柜台零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail`
- 来源：`src_un`; `src_ghg`

### 过程：按状态的残余交运 (`residual`)

#### 输出

##### 产品流

###### 未穿用皮鞋面橡胶底休闲鞋 (`unworn_transfer`)

向具名供应商/内部接收方实物总交出未穿用鞋kg/Q；每鞋ID一个实际状态和交接事件；完整单只单独实测，不取标称双质量的一半。排除消费者合格交付（此处不另作第二产品产出）。

- 选定流：未穿用皮鞋面橡胶底休闲鞋
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`src_retail`

###### 由外部接收者保留的缺陷皮鞋面橡胶底休闲鞋 (`failed_retained`)

仅有具名接收者、原鞋ID、核实零售关口缺陷/状态、验收撤销和签名B_F/B_T责任时，按实际外留缺陷非废物鞋载体kg/Q。后续无退回撤销仅重分类原实物总交付去向，不产生新向外交出事件。消费者穿用损坏在本路线外；不得因退款或抵扣自动视作废物。

- 选定流：由外部接收者保留的缺陷皮鞋面橡胶底休闲鞋
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`src_retail`

##### 废物流

###### 废弃皮鞋面橡胶底休闲鞋 (`shoe_waste`)

实际交运批次整鞋载体净kg/Q，包括实际单只、成双或与原鞋ID关联的损坏碎片；附带鞋底/鞋面/胶黏剂在本载体内，不重复分列废物组分。

- 选定流：废弃皮鞋面橡胶底休闲鞋
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`src_retail`

###### 废瓦楞鞋盒纸板 (`cardboard_waste`)

实际分流交运干态纸板批次净kg/Q，含实物丢弃原鞋盒；不重复原鞋盒生产输入。测含水/污染并绑定正确处理背景。

- 选定流：废瓦楞鞋盒纸板
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`src_retail`

###### 非危险混合固态零售清洁试穿废物 (`mixed_dry_waste`)

按一个收集合同实际交运整混合固体载体湿态净kg/Q，测含水/清洁剂，含实际使用尼龙套、薄纸、收据纸、牛皮纸手提袋（含未用报废）、收据卷纸板芯/纸包材/瓦楞运输纸箱组件、PP袋及纤维素擦地巾；合同须明确接纳这些实际来源ID载体，代表性分拣组分称量/含水、合同/交运/BOM记录核对每项投入所生废弃、留存库存和顾客交付。未知接纳或单独收集组分在完整性前须自身具名实际载体/协议，不假定消失或套用仅鞋盒卡。测组成/污染，不重复组分且排除液体载体及已独立称量交运的鞋/纸板批次。收据纸箱若进入本混合批次，不得再进入cardboard_waste；每来源组分仅记一个实际载体。危险污染须另立实际卡。

- 选定流：非危险混合固态零售清洁试穿废物
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`src_retail`

###### 零售地面清洁水性废液 (`effluent`)

实际直接排出V_eff*rho_eff(T,组成)归属后/Q，为含溶解清洁剂和污物的整液；独立供水/蒸发/存储平衡仅作QA。不用仅水量重建，不重复扣所含固体或水。

- 选定流：零售地面清洁水性废液
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`src_retail`

###### 含十二烷基硫酸钠水性残液的废完整HDPE瓶身清洁剂瓶组件 (`cleaner_bottle_waste`)

实际批次整瓶组件加残液直接净kg/Q，含BOM中实际附着瓶盖/衬垫/防拆环/标签/胶黏剂；测完整干组件及实际溶液残余以作身份、污染及水QA，不重复组分废物产出。不假定空瓶/非危险：实际安全数据表及承包方确定分类；不同材料/危险状态在完整性成立前须有自身匹配卡。任何实际拆下盖/标签/其他部件均按来源ID追到其实际另载体，从完整组件仅移除一次且不得丢失；不存在/BOM须签名。残液仅在实物排出、实测并从此载体移除时才另入废液。

- 选定流：含十二烷基硫酸钠水性残液的废完整HDPE瓶身清洁剂瓶组件
- 流属性/单位：质量 / kg
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`src_retail`

### 过程：完整资产生命周期供给 (`assets`)

#### 输入

##### 产品流

###### 完整门店建筑壳体生命周期供给 (`building`)

c_assets：完整序列号单件当量w_a,p,v之和/Q，暴露=占用面积乘全部日历小时。1 Item(s)为b_assets下一个完整指定资产生命周期包。核实际型号、安装整件质量/BOM、制造/安装、维护和终端载体模型；不得另重复组分、购入或包内退休流。

- 选定流：完整门店建筑壳体生命周期供给
- 流属性/单位：物品数量 / Item(s)
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`src_ghg`; `src_retail`

###### 完整鞋陈列架生命周期供给 (`shelf`)

c_assets：完整序列号单件当量w_a,p,v之和/Q，暴露=占用陈列架体积乘日历小时。1 Item(s)为b_assets下一个完整指定资产生命周期包。核实际型号、安装整件质量/BOM、制造/安装、维护和终端载体模型；不得另重复组分、购入或包内退休流。

- 选定流：完整鞋陈列架生命周期供给
- 流属性/单位：物品数量 / Item(s)
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`src_ghg`; `src_retail`

###### 完整试穿凳生命周期供给 (`bench`)

c_assets：完整序列号单件当量w_a,p,v之和/Q，暴露=占用支撑地面面积乘日历小时，含闲置支撑。1 Item(s)为b_assets下一个完整指定资产生命周期包。核实际型号、安装整件质量/BOM、制造/安装、维护和终端载体模型；不得另重复组分、购入或包内退休流。

- 选定流：完整试穿凳生命周期供给
- 流属性/单位：物品数量 / Item(s)
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`src_ghg`; `src_retail`

###### 完整试穿镜生命周期供给 (`mirror`)

c_assets：完整序列号单件当量w_a,p,v之和/Q，暴露=服务试穿区面积乘日历小时。1 Item(s)为b_assets下一个完整指定资产生命周期包。核实际型号、安装整件质量/BOM、制造/安装、维护和终端载体模型；不得另重复组分、购入或包内退休流。

- 选定流：完整试穿镜生命周期供给
- 流属性/单位：物品数量 / Item(s)
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`src_ghg`; `src_retail`

###### 完整结账终端生命周期供给 (`pos`)

c_assets：完整序列号单件当量w_a,p,v之和/Q，暴露=全部受益方活跃结账秒及归属待机秒。1 Item(s)为b_assets下一个完整指定资产生命周期包。核实际型号、安装整件质量/BOM、制造/安装、维护和终端载体模型；不得另重复组分、购入或包内退休流。

- 选定流：完整结账终端生命周期供给
- 流属性/单位：物品数量 / Item(s)
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`src_ghg`; `src_retail`

###### 完整门店灯具生命周期供给 (`luminaire`)

c_assets：完整序列号单件当量w_a,p,v之和/Q，暴露=服务面积乘日历小时。1 Item(s)为b_assets下一个完整指定资产生命周期包。核实际型号、安装整件质量/BOM、制造/安装、维护和终端载体模型；不得另重复组分、购入或包内退休流。

- 选定流：完整门店灯具生命周期供给
- 流属性/单位：物品数量 / Item(s)
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`src_ghg`; `src_retail`

###### 完整门店电阻风扇暖风机生命周期供给 (`hvac`)

c_assets：完整序列号单件当量w_a,p,v之和/Q，暴露=服务采暖体积乘日历小时。1 Item(s)为b_assets下一个完整指定资产生命周期包。核实际型号、安装整件质量/BOM、制造/安装、维护和终端载体模型；不得另重复组分、购入或包内退休流。

- 选定流：完整门店电阻风扇暖风机生命周期供给
- 流属性/单位：物品数量 / Item(s)
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`src_ghg`; `src_retail`

### 过程：实际分立向外物流 (`logistics`)

#### 输入

##### 产品流

###### 载货运输：柴油轻型厢式货车 (`van_loaded`)

c_transport计算实际原始载货运输：活动/Q；仅纳入实际观测柴油轻型厢式货车且未包含在原入店背景、载体处理/收取或另一运输供应方中的范围。这是一个定义的签约车辆服务，不重复燃料/组分。

所选身份表示公路货运活动，不代表实际车辆或LCI供应方。保留本卡货物/车型、原质量基准及完整互斥载货阶段要求。官方单位组支持1t*km=1000kg*km；需要时仅换算一次，不再乘已完成运单/责任份额。空驶与有动力怠速仍保留独立实际车公里/车小时身份。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`src_ghg`; `src_retail`

###### 空驶路线运营：柴油轻型厢式货车 (`van_empty`)

c_transport计算实际原始空驶路线运营：活动/Q；仅纳入实际观测柴油轻型厢式货车且未包含在原入店背景、载体处理/收取或另一运输供应方中的范围。这是一个定义的签约车辆服务，不重复燃料/组分。

- 选定流：空驶路线运营：柴油轻型厢式货车
- 流属性/单位：车辆距离 / vehicle*km
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`src_ghg`; `src_retail`

###### 静止怠速运营：柴油轻型厢式货车 (`van_idle`)

c_transport计算实际原始静止怠速运营：活动/Q；仅纳入实际观测柴油轻型厢式货车且未包含在原入店背景、载体处理/收取或另一运输供应方中的范围。这是一个定义的签约车辆服务，不重复燃料/组分。

- 选定流：静止怠速运营：柴油轻型厢式货车
- 流属性/单位：时间 / h
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`src_ghg`; `src_retail`

###### 载货运输：柴油刚性收运货车 (`truck_loaded`)

c_transport计算实际原始载货运输：活动/Q；仅纳入实际观测柴油刚性收运货车且未包含在原入店背景、载体处理/收取或另一运输供应方中的范围。这是一个定义的签约车辆服务，不重复燃料/组分。

所选身份表示公路货运活动，不代表实际车辆或LCI供应方。保留本卡货物/车型、原质量基准及完整互斥载货阶段要求。官方单位组支持1t*km=1000kg*km；需要时仅换算一次，不再乘已完成运单/责任份额。空驶与有动力怠速仍保留独立实际车公里/车小时身份。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`src_ghg`; `src_retail`

###### 空驶路线运营：柴油刚性收运货车 (`truck_empty`)

c_transport计算实际原始空驶路线运营：活动/Q；仅纳入实际观测柴油刚性收运货车且未包含在原入店背景、载体处理/收取或另一运输供应方中的范围。这是一个定义的签约车辆服务，不重复燃料/组分。

- 选定流：空驶路线运营：柴油刚性收运货车
- 流属性/单位：车辆距离 / vehicle*km
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`src_ghg`; `src_retail`

###### 静止怠速运营：柴油刚性收运货车 (`truck_idle`)

c_transport计算实际原始静止怠速运营：活动/Q；仅纳入实际观测柴油刚性收运货车且未包含在原入店背景、载体处理/收取或另一运输供应方中的范围。这是一个定义的签约车辆服务，不重复燃料/组分。

- 选定流：静止怠速运营：柴油刚性收运货车
- 流属性/单位：时间 / h
- 数量规则：归属原始数量仅除最终Q一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`src_ghg`; `src_retail`

### 过程：强制共同支撑补全 (`support_completion`)

## 7. 分配与联产品处理

| rule_id | 规则 | 适用对象 | source_ids |
| --- | --- | --- | --- |
| a_shared | 优先细分和直接计量。剩余共用固定照明/电阻暖风机/建筑/清洁池使用声明的占用面积时，含闭店/闲置区间，对全部实际受益方求和；POS采用实测结账活跃秒数，剩余待机按受益方服务支撑面积时分配。直接试穿/包装事件按双鞋ID归属。所有受益方分配之和回到完整实测池，保留无销售受益方和缺驱动量的不确定性。缺驱动量或全部受益方驱动量为零表示分配未解决，不是零负担。 | all | src_ghg |
| a_assets | 使用持久资产序列号a、暴露e_a,p和签名预期全寿命暴露L_a,v，覆盖过去、当前、未来全部受益方：w_a,p,v=e_a,p/L_a,v。制造供给为w个完整包单位，不是每期新购一整件。修订按delta=w_new-w_old替换各历史受益方旧分配；累计份额不得超过1。退休时以全部实测寿命暴露之和替换预测L，以e_p/sum_all_lifetime_e重算并替换每个过去受益方分配，再将仅剩的舍入/模型余量按同一实际全寿命份额核对一次；绝不把1-prior仅给末期。终端包载体kg为实际整机kg乘其寿命责任一次，不再乘制造份额。拆下部件在供应方包模型中分列；终端直接净称量不得再次扣除。 | assets | src_ghg |
| a_pool | 全部归属后的原始分子使用同一最终Q；已归一化行不得再除。不同交换身份/属性/单位不得相加。退货/再售沿原唯一鞋历史；旧服务撤销即去掉旧产出，即使没有实物退回。后续合格再售仅形成实际新服务，不产生另一份商品制造背景。不得自动给替代/回收信用。 | all | src_ghg |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_retail | retail | retail_service及运营投入 | event_meter_stock_ledger | pool_id; version; cutoff; SKU; animal_species; BOM; size_system; size; width; colour; pair_id; original_pair_id; left_id; right_id; left_source_id; right_source_id; lot; event_id; event_date; physical_state; gross_received_shoes; gross_handover_shoes; gross_return_shoes; internal_in_shoes; supplier_out_shoes; internal_out_shoes; physical_waste_shoes; to_held_waste; waste_open; generated_from_goods; waste_close; source_portion_kg; external_moisture_dirt_kg; measured_source_loss_kg; mass_uncertainty; actual_count; paired_match; tryon_attempt_id; tryon_foot_side; trial_result; goods_open; goods_close; opening_stock; closing_stock; accepted_pair_event; revoked_event; old_event_id; financial_only_flag; destination; B_in; B_S; B_F; B_T; B_O; original_gate_quantity; supplier_side_allocation; side_composition; mass_allocation_justification; sensitivity; M_left; M_right; meter_id; parent_meter_scope; read_start; read_end; kWh; all_beneficiary_area_hours; active_seconds; standby_seconds; imported_water_volume; water_density; temperature; material_batch; bottle_source_id; bottle_complete_BOM; bottle_body_kg; closure_liner_tamper_kg; label_adhesive_kg; complete_dry_bottle_kg; actual_solution_residue_kg; detached_part_source_id; receipt_roll_id; roll_gross_kg; core_id; core_material; core_full_dry_kg; actual_nonpaper_adjunct_kg; actual_net_thermal_paper_kg; wrapping_BOM; wrapping_dry_kg; transport_carton_BOM; transport_carton_dry_kg; opening_unprinted_paper_kg; closing_unprinted_paper_kg; opening_printed_WIP_kg; closing_printed_WIP_kg; printed_WIP_source_ID; original_paper_source_ID; printing_meter_ID; printing_energy_share_MJ; prior_assigned_paper_kg; prior_assigned_printing_MJ; unallocated_WIP_paper_kg; unallocated_WIP_printing_MJ; original_pool_version; replacement_contribution_ID; issued_receipt_kg; test_void_scrap_kg; transferred_printed_kg; all_beneficiary_paper_draw_kg; all_beneficiary_solution_draw_kg; component_background_scope_ids; provider_mode; original_package_id; original_package_quantity; original_package_unit; package_background_scope_id; gross_kg; tare_kg; issue_kg; unused_return_kg; printed_stock; SDS; concentration; measured_kg_per_count; presence_absence_status | 收货/结账主管记录每只鞋及试穿/交付/退回/撤销，含原ID和时间戳；公用工程员读取匹配且不重叠电表；仓管按材料批称输入/退回库存并用可溯源砝码检查秤。供应商确认物种/BOM及原背景。签名场址调查确认各路线存在/不存在，空白不等于不存在。 | Item(s); kg; kWh; m3; s; m2*h | 每次实物或验收事件；每日库存和读表，共用回路连续电记录；使用前作批次转换 | 完整固定池，全部班次、闭店和闲置；跟踪每只原鞋直至截止及后续修正 | 收货关口、库房、试穿区、结账及完整全店共用受益方账 | 每参考流 | 签名关口/验收/退货单、供应商BOM/责任及入店运输证据、电表拓扑/校准、库存称量及全受益方核对；未知保留未知 |
| cp_residual | residual | 按状态转移及终端载体 | consignment_ledger | pool_id; event_id; original_shoe_id; original_pack_component_id; bottle_source_id; complete_dry_bottle_kg; actual_solution_residue_kg; detached_part_source_id; core_id; receipt_roll_id; source_component_kg; kraft_bag_source_id; wrapping_carton_source_id; collection_contract_id; admitted_materials; sorted_composition_kg; retained_component_stock_kg; customer_handover_kg; recipient; state; gross_kg; tare_kg; consignment_net_kg; opening_waste_stock; generation_kg; closing_waste_stock; actual_dispatch; waste_open; generated_from_goods; waste_close; transfer_acceptance; provider_scope; loaded_route_km; empty_route_km; load_kg; idle_seconds; transport_activity_id; treatment_id; B_F; B_T; responsibility_signature; effluent_volume; effluent_density; temperature; composition; contamination; measured_water_supply; evaporation; storage_change; cleaning_solution_water; f_water_effluent; W_open; W_import; W_cleaner; W_other_source; W_solid_dispatched; W_evaporated; W_close; source_portion_water_id; balance_uncertainty; presence_absence_status | 交运员用校准秤称每批并记接收者保管/处理；分开完整鞋、外留损坏鞋、整废鞋、纸板、混合固体载体和液体。技术员按清洁批直接计量/收集整液排放，并测代表性密度/温度/组成。 | kg; m3; kg/m3 | 每次交运和清洁批；每日残余库存 | 同一原池及后续全部关联交运/退货修正 | 具名门店废物/退货关口和实际接收承包方 | 每参考流 | 秤检查、交运收据、照片/材料状态审核、签名责任/处理及水平衡；未知去向/不存在状态阻断完整性 |
| cp_assets | assets | 每项已识别完整资产生命周期供给 | serial_lifetime_ledger | asset_serial; package_id; package_version; exact_model; unit_count; installed_whole_kg; BOM; manufacture_scope; installation_scope; operational_exclusions; maintenance_event_id; replaced_parts; terminal_carrier_net_kg; terminal_measurement_mode; expected_total_lifetime_exposure; historical_exposure; current_exposure; future_exposure; all_beneficiaries; allocation_version; signed_revision; previous_allocations; delta_corrections; retirement_date; presence_absence_status | 设施工程师清查建筑壳体及每个架、凳、镜、POS、灯具和电阻暖风机序列号/型号；核供应商完整生命周期包模型、分立范围和终端载体；按各卡测资产特定暴露，签名全寿命预测并按历史分配核每次修订。 | Item(s); kg; m2*h; m3*h; s | 安装时、每月暴露、每次维护/修订及退休 | 完整资产历史跨全部过去/当前/未来期间及受益方，不仅当前门店报告窗口 | 完整安装资产及准确签约生命周期包，排除单独计量运营 | 每参考流 | 签名工程预测、全寿命历史/受益方总量、供应商阶段/维护/终端模型及整机净称/BOM模式检查；不得预设未核实包完整 |
| cp_transport | logistics | 实际载体转移车辆活动 | route_ledger | pool_id; route_id; vehicle_id; vehicle_class; fuel_type; consignment_id; actual_payload_kg; loaded_leg_km; empty_leg_km; stationary_idle_seconds; route_start_end; all_beneficiary_payload; reserved_capacity_kg; reservation_seconds; benefiting_loaded_legs; provider_scope; original_background_id; treatment_scope_id; included_empty_idle; exact_overlap_ids; presence_absence_status | 调度员按里程表/GPS和引擎记录每个载货/空驶段及静止怠速区间，实际校准载荷秤和签名交运单；供应方签认准确燃料/车辆/资本/空驶/怠速/收取/处理边界。审阅者仅移除准确重叠，并具全部受益方驱动量。 | kg; km; s; t*km; vehicle*km; h | 每段和怠速事件 | 全部实际向外载体路线，包括失败和零销售期 | 厢式货车供应商/内部转移及刚性货车收取路线；其他实际车型须匹配卡 | 每参考流 | GPS/里程检查、引擎账、载荷秤检查、供应方签名范围及准确活动ID去重 |
| cp_completion | support_completion | 强制共同管理、远程IT和设施支撑模块 | support_module_ledger | module_id; provider; site; process; original_pool; cutoff; version; atomic_exchange_id; state; medium; property; unit; direct_raw; shared_raw; meter_invoice_stock_ids; collector; timestamp; calibration; coverage; administrative_task_seconds; transaction_message_count; occupied_support_area_hours; all_beneficiary_drivers; asset_serial; lifetime_version; original_denominator_D_m; prior_contributions; exact_overlap_source_activity_ids; Q; presence_absence_status | 支撑经理依b_completion取得每实际模块原表/发票/库存、任务/网络活动及完整资产账，核每原子交换身份/供应方阶段和模块特定解析协议、签名整池/受益方归属及准确重叠ID。 | kg; MJ; Item(s); s; m2*h | 每次支撑活动、每月整池核对和每次版本更新 | 同一原池含闭店/失败/无销售区间及全资产历史 | 每个实际本地及远程共同支撑受益方 | 每参考流 | 原模块/供应方证据、解析卡/协议、校准、签名归属及c_completion核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_accept | retail_service | Q=count_distinct(在截止/版本时恰有一个最终有效合格验收的original_pair_id)，先将每个关联撤销对原验收应用一次。原始验收/撤销分立保留；不得从已最终有效计数再次减撤销。重复扫描和试穿不是额外服务。有效验收下纯财务调整不改Q或实物库存。错码、左左或混配、以及未经合格验收的接收者保留均无服务产出。整池零产出保留为不可归一化，不得删除。 | accepted_pair_event; revoked_event; old_event_id; original_pair_id; pair_id; left_id; right_id; SKU; size; width; financial_only_flag; cutoff/version | Q Item(s)及修正原池版本 | src_ghg |
| c_stock | retail; residual | 每鞋ID/状态：商品期初+实物收货+实物退回+内部入=实物交付+供应商出+内部出+转待存废物+商品期末。待存废物独立控制体：废物期初+商品转入产生=实际交运+废物期末；不得将产生和交运算作两次商品出。验收撤销不是实物退回。追踪原鞋来源份额至碎片和待存废物；包装另账。这些数量/身份方程不证明kg闭合：在一个声明控制体内，实测鞋/包装来源净kg加实测外来水分/污物增益，等于外出来源份额、剩余库存、废物产生及实测来源材料/水分损失，附不确定性。实际移除来源份额仅进入一个载体；未解决质量变化须调查，不设零。Q独立。 | opening_stock; gross_received_shoes; gross_return_shoes; gross_handover_shoes; supplier/internal movements; to_held_waste; waste_open; generated_from_goods; actual_dispatch; waste_close; goods_close; original_pack_component_id; source_portion_kg; external_moisture_dirt_kg; measured_source_loss_kg; mass_uncertainty | 按实物状态的数量和实测kg核对 | src_retail |
| c_background | retail; residual | 单只去向分立时，优先按实际左右来源记录细分供应商制造及入店载荷；若不可得，声明同一原双实测净质量分配m_side/(m_left+m_right)，须具两只实际质量、组成、物理依据论证及敏感性，绝不默认1/2。已完成预期护鞋功能的原包装随父鞋背景去向，不能仅因拆盒而自动列F；其实际废物处理留在本服务。各原收货产品/包装及入店运输背景仅分为最终S成功、F零售负责失败、T转移责任和O未结一次。每个来源数据集/版本z的B_z,k为该来源声明单位（双、只、kg或货运单位）的原关口活动量；来源/单位坐标分开，不相加kg、件数或影响值。B_S/Q供商品单独连接；B_F/Q明确加入服务；B_T/B_O随责任人和原数量保留。再售不重复原生产；失败后代继承份额之和等于原背景，不各获整份。迟到修正同时更新原分子、责任和Q。 | original_gate_quantity; original_shoe_id; original_pack_component_id; supplier product/packaging and inbound-freight dataset/version; B_in; B_S; B_F; B_T; B_O; signed ownership; actual dates; supplier left/right manufacturing allocation; actual m_left/m_right; allocation justification/sensitivity | B_S/Q; B_F/Q; 保留具原单位B_T与B_O，不重复实物载体 | src_ghg |
| c_mass | retail; residual | 每批/材料状态m=毛重-皮重，或实测件数*同批实测kg/件；两模式互斥。收据纸及其来源包装以外的耗材原消耗=期初+收货-未用退回-期末可用库存，保留报废/作废。收据纸/打印在制品及完整来源包装必须用c_consumables，不用该未打印库存简式。直接交运kg已净，不再以产生/库存修正。双鞋M=m_left+m_right且排包装。按面积/体积标示材料比例不是质量分数。 | gross_kg; tare_kg; measured_kg_per_count; actual count; batch; state; M_left; M_right; opening/receipt/unused_return/closing/printed stock | 原始批次kg，尚未归一化 | src_label |
| c_shared | electricity; water; cleaner; cleaner_container; receipt_core; receipt_wrap; receipt_carton; floor_wipe; tryon_socks; receipt; bag; box; stuffing; film; effluent | x_p=x_direct,p+sum(x_shared_pool*d_p/sum_all d)。使用分立表总量；仅母表确含子表时扣子表。固定门店支撑d=面积时；结账活跃秒及待机面积时份额依a_shared。直接事件d=实际双鞋/事件归属。未知驱动量或覆盖阻断完成；保留闭店、失败及所有受益方。E_MJ=3.6*E_kWh仅一次。 | raw disjoint meter totals; parent_meter_scope; direct event kg; all_beneficiary_area_hours; active_seconds; standby_seconds; full-pool totals | 归属后原始kg和MJ，核对完整池 | src_ghg; src_retail |
| c_liquid | water; effluent | 进口水m=V_water*rho_water(T)。直接整废液m=V_eff*rho_eff(T,组成)；实测排放已反映存储/蒸发。独立水物种QA为W_open+W_import+W_cleaner+W_other_source=J*f_water_effluent+W_solid_dispatched+W_evaporated+W_close，全部为水kg；J为直接整液kg，f_water_effluent为实测水质量分数。匹配水来源份额和互斥去向：擦巾吸水仅属实测留存库存或一次固体交运或一次液体排放，不得多处重复。仅在原湿物料水跨本控制体时纳入。重建不得替换J或二次修正J。未知溶解污物或载体覆盖阻断闭合，不是零。 | imported_water_volume; water_density; effluent_volume; effluent_density; temperature; composition; cleaning_solution_water; f_water_effluent; W_open; W_import; W_cleaner; W_other_source; W_solid_dispatched; W_evaporated; W_close; source_portion_water_id; uncertainty | 直接原始水kg及整液载体，附独立QA平衡 | src_retail |
| c_assets | building; shelf; bench; mirror; pos; luminaire; hvac | 每实际序列号单件w=e_current/L_total,v；原供给=sum w。e与L使用同一卡特定暴露单位。L=过去+当前+预测未来，覆盖全部受益方并签名/版本化。修订时重算替换历史份额，记录差额；退休时先依实际全寿命分母重算/替换全部历史分配；仅最终舍入/模型余量按全部全寿命份额分一次，不单给末期。全历史每实际资产计一个完整包，不把购入库存和消耗供给重复相加。 | asset_serial; current_exposure; historical_exposure; future_exposure; expected_total_lifetime_exposure; all_beneficiaries; signed_revision; previous_allocations; package_version; installed_whole_kg; maintenance and terminal_carrier_net_kg/mode | 原始完整单件供给Item(s)，附全寿命载体/范围核对 | src_ghg |
| c_normalize | all | 每兼容实际交换归属原量x_i，q_i=x_i/Q仅一次。参考q_service=1。外包若已归一化，先以其有证据原分母/池/版本还原原分子；按准确活动/阶段ID去重，仅相同交换/属性/单位原分子相加，再除共同Q一次。供应方包载体留在包内。Q<=0保留为不可归一化；未知不得变零。 | Q; each attributed raw kg/MJ/Item(s); external original denominator/pool/version; exact activity and scope IDs | 每项最终合格匹配双鞋服务的清单 | src_ghg |
| c_transport | van_loaded; van_empty; van_idle; truck_loaded; truck_empty; truck_idle | 载货原活动=sum(实际载荷kg/1000*实际载货段km)，按实际交运载荷归属。空驶vehicle*km=sum实际空驶段km；怠速h=sum静止怠速秒/3600，绝不以空驶t*km=0代替。优先按路线直接目的归属；共用空驶/怠速采用有证据受益载货段载荷*距离份额，保留全部受益方和失败趟。若全部载货驱动为零，采用全部意向受益方有证据的正预留容量kg*预留秒；未知或全零驱动阻断完成。当签名供应方活动已含实际空驶/怠速时，这些记录仅作QA，不加独立活动；否则仅将未覆盖实际阶段加至具体卡，不重复燃料/资本/收取/处理。全部归属原活动仅除Q一次。 | actual_payload_kg; loaded_leg_km; empty_leg_km; stationary_idle_seconds; all_beneficiary_payload; benefiting_loaded_legs; reserved_capacity_kg; reservation_seconds; provider_scope; included_empty_idle; original_background_id; treatment_scope_id; exact_overlap_ids; Q | 分别归属原始t*km、vehicle*km和h，然后各/Q | src_ghg; src_retail |
| c_completion | all | 支撑模块m原子交换i：X_m,i=direct_raw_m,i+shared_raw_m,i*d_m,p/sum_allbeneficiary_d_m。d依b_completion为实际管理任务秒、远程交易/消息数或闲置/固定设施支撑的占用面积时；保留失败/无销售期，分配和核对实测整模块总量。已归一化来源模块以有证据原分母D_m及版本还原：原量=归一化值*D_m，仅一次。匹配共同原池/截止/版本并替换修订旧贡献，移除准确来源活动/供应方阶段重叠。仅相同交换身份/状态/介质/属性/单位原分子与本前景相加；资本按c_assets全寿命处理。最终兼容原量和仅除相同最终Q一次。未有全部实际支撑模块及签名兼容/去重核对，不得声称完成零售清单。 | module_id; provider/site/process; original_pool/cutoff/version; atomic_exchange_id; state; medium; property; unit; direct_raw; shared_raw; administrative_task_seconds; transaction_message_count; occupied_support_area_hours; all_beneficiary_drivers; asset_serial/lifetime_version; original_denominator_D_m; prior_contributions; exact_overlap_source_activity_ids; Q | 完整兼容原量和及一次共同Q归一化，或显式不完整状态 | src_ghg; src_retail |
| c_consumables | cleaner_container; cleaner_bottle_waste; receipt; receipt_core; receipt_wrap; receipt_carton; bag; mixed_dry_waste | 瓶输入为直接称量的完整空干组件；核实BOM的瓶身+盖/衬垫/防拆环+标签/胶黏剂须核对该质量。最终瓶载体为实际完整剩余组件+实际残液，直接称一次；拆下来源部件及排出残液仅进入其实际实测载体。瓶制造按各受益方实际取用溶液kg在该原瓶全部取用量中分配一次，保留失败/闲置池；留存瓶/溶液库存保留未耗责任。收据路线为核实纸板芯卷纸及实际纸包材和瓦楞运输纸箱组件；塑料芯/未知/无芯状态不预设等价或零，须匹配扩展/不存在证据。卷净纸=实际卷毛重减实际整芯及实测非纸附物，排除单独包材/纸箱皮重；不扣本属纸的热敏涂层。当期原始纸耗=期初未打印纸+收货净纸-未用退回-期末未打印纸+期初已打印在制品-期末已打印在制品-转出已打印纸；附不确定性核对发出收据+试打作废+实际纸损失。打印在制品绝非未用纸卷，也不再作新供应。每份已打印在制品source_ID须携带原纸责任及对应实测打印能耗份额跨期结转。已归属受益方的数量不得再计；未分配原纸/打印能耗责任随原在制品来源结转至其有证据的后续使用。归属修正须替换同一原池/版本中的旧贡献，不新增重复。打印电表份额不得既留在旧池又在在制品领出时第二次计入；跨全部期间和受益方核对原纸量及实际打印电表总量，场址待机分配保持独立。按来源批测芯/包材/纸箱完整干kg，追踪全部组件来源ID，按各受益方实际净纸取用量/该来源组件支撑的全部净纸取用量将制造仅分一次；保留未结组件责任，并在最终审计处置时替换旧份额。完成使用前每个瓶/卷来源恰选一种有证据供应方模式：组分模式须将溶液/完整瓶或净纸/芯/包材/纸箱制造范围分立，并在对应实物行各连接一次；整包模式仅按实测原包数量连接核实完整来源包制造一次，组件行仅作实物数量/库存核对，不再连接第二份组分背景。须明确关联此原包绑定及实物组件记录；包不得又当净纸kg或溶液kg套用。未知模式/范围阻断完整性。同一来源包绝不混用两模式；不得把整包装卷kg标成净纸，亦不在组件制造旁另加已含组件的原整包制造。每项已知投入衍生废弃含牛皮纸袋及收据组件须核对至留存库存、实际顾客交付或合同接纳混合固体载体；单批组分审核证明覆盖及逐来源归属，不是额外重复组分废物产出。未知芯/BOM/供应方/合同覆盖阻断完整性，绝非零。先归属兼容原量，再除共同Q一次。 | bottle_source_id; bottle_complete_BOM; bottle_body_kg; closure_liner_tamper_kg; label_adhesive_kg; complete_dry_bottle_kg; actual_solution_residue_kg; detached_part_source_id; receipt_roll_id; roll_gross_kg; core_id; core_material; core_full_dry_kg; actual_nonpaper_adjunct_kg; actual_net_thermal_paper_kg; wrapping_BOM; wrapping_dry_kg; transport_carton_BOM; transport_carton_dry_kg; opening_unprinted_paper_kg; closing_unprinted_paper_kg; opening_printed_WIP_kg; closing_printed_WIP_kg; printed_WIP_source_ID; original_paper_source_ID; printing_meter_ID; printing_energy_share_MJ; prior_assigned_paper_kg; prior_assigned_printing_MJ; unallocated_WIP_paper_kg; unallocated_WIP_printing_MJ; original_pool_version; replacement_contribution_ID; unused_return_kg; issued_receipt_kg; test_void_scrap_kg; transferred_printed_kg; all_beneficiary_paper_draw_kg; all_beneficiary_solution_draw_kg; component_background_scope_ids; provider_mode; original_package_id; original_package_quantity; original_package_unit; package_background_scope_id; source_component_kg; collection_contract_id; admitted_materials; sorted_composition_kg; retained_component_stock_kg; customer_handover_kg; Q | 不重叠原始完整瓶/芯/包材/纸箱及净纸kg；/Q前一次制造归属和来源载体核对 | src_bottle_spec; src_receipt_roll; src_ghg |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all | 每未绑定行须有官方原响应/收据、准确hash、观察状态、双语名、产品/废物/基本类型、限定、介质及属性单位链，并匹配前景供应方。电力身份不识别电网供应方。不虚构UUID或批质量。 | 逐行绑定清单与来源/供应方矩阵；未解决为未核实，不是零 |
| q_measurement | all | 所有协议须完整原始记录、具名采集者/负责审阅者、时间戳、覆盖、校准/砝码检查、电表拓扑和不确定性。缺失/不存在/观测零相异。签名调查支持每条排除路线；额外实际材料或设备在完成使用前须具名原子卡。 | 签名原账、校准和跨全部受益方完整池的范围核对 |
| q_assets | assets | 完整单件包须按阶段证明实际安装整物及全部维护/终端载体；不得重复建筑/固定件/设备组分或运营电。缺模型、整件质量历史、已知正全寿命暴露、签名修订或受益方覆盖均阻断完整性。 | 工程师/供应商签名准确包范围、序列号账及寿命版本/差额账 |
| q_bilingual | all | 两语须保持每卡身份、方向/类型/状态、条件、否定、单位、分母、公式、责任及强制完成条件。解析数组、协议过程ID及稳定引用均须一致。 | 实际双语语义复读及解析业务数组对照 |

## 9. 验证规则

| rule_id | 规则 | 适用对象 | source_ids |
| --- | --- | --- | --- |
| v_accept | 拒绝混合/未知构造、不匹配双鞋、缺验收或修正Q不一致；显式保留零池不可归一化。实物库存、背景S/F/T/O和财务账按实际日期独立核对。 | all | src_un; src_ghg |
| v_inventory | 要求每个存在行和路线、完整原始归属、最终一次归一化、不重叠电表/包/供应方范围及完整实际去向。条件不存在须签名证据；未知数量/身份/去向/包为不完整，不是not_applicable或零。 | all | src_retail; src_ghg |
| v_assets | 对全部受益方核对每个序列号暴露及生命周期包阶段；累计责任<=1，签名寿命修订替换旧分配，终端余量一次。完整资本包不得与重复组分/终端前景交换并存。 | assets | src_ghg |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 候选部分增量前景零售方法，强制共同支撑补全 |
| downstream_use | 完成身份、采集、供应方和方法审查后可作secondary_dataset; background_dataset |
| allowed_use | 一项声明的同配置匹配双鞋服务，附独立收货背景耦合 |
| excluded_use | 全鞋类等价、鞋底生产、消费者穿用、自动法律合规或未核实完成清单 |
| required_metadata | 全部参考限定、池/截止/版本、实物历史、BOM/物种/状态、S/F/T/O原关口责任、范围/供应方ID、资产寿命和测量不确定性 |
| required_quality_disclosure | 未绑定身份、缺原始/供应方证据、不存在路线证明、分配不确定性、零池及包寿命修订 |
| update_trigger | SKU/物种/尺码/构造、路线/供应方/清洁剂/包装、退货关口、电表范围、资产/修订寿命或来源改变 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| src_un | official_guidance | UNSD CPC3.0，子类62134说明，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62134 | 分类包括293–296组；本PCR为较窄构造/路线，非完全等价 |
| src_clarks | literature | Clarks2016春夏季目录，PDF35/印页33，Stratton Way26102520/26102519；https://clarks.scene7.com/is/content/clarks/Americas/US/B2B/Marketing/SS16/Catalog/Dual%20Gender%20Independent%20CatalogSS16.pdf | 历史皮鞋面橡胶底休闲构造及多尺码/宽度；不提供当前供应、牛物种、质量、配方或退货政策默认值 |
| src_label | official_guidance | 英国政府，鞋类标示，网页快照2026-10-28；https://www.gov.uk/guidance/footwear-labelling | 英国市场指南区分鞋面、内里/鞋垫、外底；材料标签不提供质量BOM或普遍法律批准。另核实际适用/管辖。 |
| src_retail | official_guidance | 欧盟委员会JRC，零售行业最佳环境管理实践，EUR25998EN2013，执行摘要和能源/废物/水章节；https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售电、水、化学品、物流和废物范围相关性；不用清单基准值。具体关口、清洁路线及采集/分配公式是须前景证据的PCR设计。 |
| src_ghg | standard | WRI/WBCSD，产品生命周期核算与报告标准2011，第6–7、9章；https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分析单位和分配层级原则；PCR特定资产/责任公式为披露设计，不声称完全符合标准 |
| src_bottle_spec | literature | Heres Plastics，HP7013 Bottle2000ml产品规格，原网页快照2026-10-28；https://www.heresplastics.com/en/products/bottles/1195-bottle-2000ml-hdpe-hp7013 | 制造商分别列HDPE瓶体、防拆盖及标签尺寸；仅支持组件范围核查。不证明本门店瓶/盖/标签BOM或完整干质量，不采用其所列重量或容量。 |
| src_receipt_roll | literature | Wedderburn，Thermal Receipt Roll57x45x12，原网页快照2026-10-28；https://www.wedderburn.com.au/product/available-for-purchase/consumables/thermal-receipt-roll/ | 供应方说明热敏纸装在纸板芯上；仅支持纸/芯区别。不转用纸/芯质量、打印机兼容、实际纸等级或包材/纸箱BOM默认值；均须来源批前景实测。 |
