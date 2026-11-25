---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-articles-for-lighting
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 完整白色 TERTIAL703.554.55 E27 工作灯（不含灯泡）的到店零售服务

## 1. 范围与适用性

本候选方法只覆盖一个同质 SKU：全新、完整的宜家 TERTIAL 白色工作灯703.554.55，以原装完整零售包装供货，不含灯泡，经自然通风、无机械暖通、无制冷剂回路、无现场燃烧的常温非专营到店门店零售，准入须有完整场地未发生证据。纳入收货、库存保管、包装外观检查、门店独立持有的演示台、结账交付与退货核对。服务参考是成功零售提供，而非灯具制造、照明或流明小时。制造商规格证明实际对象，不能替代门店实测清单。下述部分增量模块必须按边界规则 b_completion 补全后，才能声称完整零售服务结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-articles-for-lighting |
| classification_refs | CPC3.0 62143；465组货物零售服务的较窄语义子集；原分类标题保留于清单。本文不建立已接受映射。 |
| covered_products | 完整白色 TERTIAL703.554.55 灯具，包含实际灯臂、灯罩、夹具、弹簧、灯座、开关、线缆和插头；不含灯泡。仅原装封闭完整包装可形成最终服务验收。 |
| excluded_products | 其他颜色和 SKU、散装灯具或灯泡、独立备件、翻新或开箱销售、安装、送货和消费者使用。旧产品回收是需补全扩展的独立服务，不能默认作为门店灯具库存废物。 |
| representative_product | 宜家 TERTIAL703.554.55 白色 E27 工作灯；制造商列出灯泡最大13W、灯罩17cm、线长1.5m。包装质量不等于灯具净质量。 |
| production_route | 常温收货与上架；封闭包装外观检查；独立演示台采用 TERTIAL 灯具和 SOLHETTA805.914.47 透明 E27 LED470lm2700K2.2W 演示灯泡；到店付款交付；最终退货状态核对。该透明灯泡不是网页推荐的乳白灯泡，必须核实实际灯座和额定参数的兼容性。 |
| market_state | 具有原始收货配置和包装 BOM 记录的全新完整原 SKU；常温干燥储存。后续开封或损坏库存按失败或退回状态追踪，不得自动成为封闭包装验收服务。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过规定的到店零售路线提供并交付指定完整灯具。 |
| How much | 一个不同原始灯具 ID 的一项最终有效验收服务；Q 为事先定义池内最终有效的不同 ID 数。 |
| How well | 正确 SKU；封闭完整包装；供应商装箱清单证明内容完整；有记录的客户验收；无未解决的验收撤销。仅付款不足。 |
| How long or cycle | 从记录的门店收货至观察前声明的最终验收截止日期，所有后续已知退货均修正原池。消费者灯具或灯泡寿命不是服务持续期。 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一盏完整白色 TERTIAL703.554.55 灯具（不含灯泡）的零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 门店及国家; SKU703.554.55 白色及供应商修订版; 完整灯具及原始包装 BOM; 原始物品 ID 及收货门背景 ID; 常温到店路线; 池时间范围及验收截止日; 最终有效 Q 及修正版; 演示灯具及透明灯泡805.914.47 身份与兼容性; 电表包含关系及所有受益者分配; 部分边界及补全模块版本; 失败且外部保留货物的接收者及背景责任; 供应方及终端处理边界 |

全部必需限定信息须出现在数据集元数据或等效字段中。缺失限定信息阻止完整性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | retail_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 一个计数表示一项零售服务；Q 不是灯具质量、灯泡包数、发票或交易数。所有非参考分子均为归属后的池原始总量，仅除以 Q 一次。 |
| m_energy | bench_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 读取演示灯具、实际测试和待机的插座电表 kWh；仅乘3.6一次。铭牌功率与宣传25000h不是实测能耗或资产寿命。 |
| m_carrier | stock_lamp_waste; demo_lamp_waste; demo_bulb_waste; carton_waste | 质量 | kg | 采用经校准秤和皮重得到的实际托运载体净质量；干纸箱 kg 含一体胶黏剂，整灯电子废物排除另行拆除的灯泡。直接净称重与 BOM 重建为互斥模式。包装毛重或材料表估计不能替代载体净测量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 门店收货时实际完整原装包，保留供应商版本、BOM及原始背景。 |
| starting_condition_role | 明确的增量零售服务门，非货物制造。 |
| product_classification_scope | CPC3.0 62143 照明用品贸易服务的较窄子集。 |
| recursive_input_rule | 不得将本零售服务递归用作商品制造；识别上游服务并排除重复收货门操作。 |
| upstream_dataset_requirement | 本文F与下游S的实际整包来源背景、互斥演示整灯及灯泡供应方和全部补全模块。 |
| disclosure | 部分边界、未解决身份供应方范围字段、true/false/unknown适用性及补全版本。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_gates | all inventory rows | 收货门固定为门店卸货接收：原始完整灯具、实际原始包装及门前入站运输。增量模块覆盖演示台运行和资产、失败货物收货门背景及实际发出残余物。成功商品的制造、包装和入站运输保留于下游商品背景 B_s；消费者使用与消费者处置在零售边界外。商品背景不含灯泡。 | ikea-tertial-70355455; ghg-product-standard-2011 |
| b_background | failed_background | 对每个原始物品来源 j，将其收货门背景仅分配一次至 S 最终有效成功客户责任、F 归于本零售池的不可逆失败、O 未关闭责任和 T 具名转移责任。B_j=B_sj+B_fj+B_oj+B_tj，单位为原始收货物品当量。转售保留同一原始来源 ID。转演示用途以 T 绑定同一原始收货背景至资产台账，仅采用一次演示供应背景；不得同时归 F 或制造另一整灯。本文仅计入 B_f/Q；下游商品汇总仅加入 B_s/Q 一次。退供应商和外部保留不消除背景，必须有已签署的继续责任，否则归 F。责任转移不得创造新物理交换。 | ghg-product-standard-2011 |
| b_state | retail_service; supplier_sealed; supplier_opened; retained_sealed; retained_opened; stock_lamp_waste | 将物理收货、交付、退回、供应商发运、外部保留失败、本地废物发运、内部调拨、转演示用途和期初期末库存分别记录为带日期事件。最终验收撤销即取消服务，即使无实物退回；仅财务退款而验收有效时保留服务。无合格验收的外部保留既不是服务输出，也不是本地废物。封闭完整和开封不工作但完整的退回状态采用独立卡；缺件、碎片或其他状态必须有具名状态原子扩展后才算完整。 | ikea-tertial-70355455; ghg-product-standard-2011 |
| b_assets | demo_lamp_input; demo_bulb_input; demo_lamp_waste; demo_bulb_waste | 演示灯具包含实际夹具、线缆、插头、灯座和开关；可拆灯泡单独计。灯具和灯泡投入供应方仅覆盖制造、实际完整原始采购包装和交付门店，排除运行、维护和寿命终结。不含灯泡的实测终端整灯与拆下整灯泡是互斥载体。维修按事件记录具名部件投入及拆下部件载体，不能再次计入整灯制造负荷。不得由制造商钢材、ABS 或玻璃列表推断完整 BOM。 | ikea-tertial-70355455; ikea-solhetta-80591447 |
| b_conditions | all inventory rows | 对每个过程和卡记录 true、false 或 unknown，并保留有日期的检查、电表、发票、发运或操作者签署证据。false 需覆盖全池的未发生证据；unknown 阻止完整性，绝非零。此路线要求演示台；无演示台或不同演示型号改变适用性。实际清洁、维修、附加包装、打印小票、购物袋或旧产品回收均触发 b_completion，并须有具名双语原子卡后才能形成完整数据集。 | jrc-retail-bemp-2013 |
| b_completion | all inventory rows |本文为部分增量前景模块。准入场地为自然通风常温门店，无现场燃烧、制冷或制冷剂回路、机械暖通；必须由签署的场地设备公用工程记录和全期间检查证明上述未发生。未知或实际存在均使本路线不适用并阻止完整性，绝不计为零。强制外部模块为建筑、货架、演示台支撑物、结账终端和小票打印机的制造安装维护退役；一般电力照明、结账网络、小票纸、购物袋；实际清洁；人工内部搬运、合同退回发运与终端处理；carton_waste以外的原灯具内衬包裹物及演示灯泡包装处置。采购供应方已含原包装制造。固定资产按跨全部受益者的持续暴露量e/L及a_lifetime全部修订处理；建筑货架一般照明按实际预留面积小时含闭店期间；结账资产按预留运行及实际静止闲置小时，结账运行按实际交易分钟。总表残余kWh为实测总表减其确实包含的演示回路；不扣独立电表。残余能量保持kWh直至逐行转换，驱动未知或全受益者驱动总和为零不得通过。清洁准入实际同质温和水性洗涤剂，具有供应商完整配方与包装BOM、外购稀释水计量和实际一次性纤维素抹布；每个确切配方包装抹布在完整前须有独立具名双语原子卡。水表已排除内部回用。清洁剂原配方来源kg由原容器净库存平衡实测，互斥分至最终去向：未用保留库存、终端容器保留配方、污水、抹布、溢洒及尚未关闭的已用库存，排除新增水和污物。已用是中间状态，非额外最终去向；取得后续去向证据时替换该状态并将同一原始来源kg重新分类，不新增投入或重复责任。未用保留库存不含已发往处理的容器；不得再将整污水乘来源组成。整清洁污水仅采用经校准载体直接净kg或实际排放体积乘记录温度下实测整污水密度；两模式互斥，禁止重建。用后整抹布载体净kg含保留液和污物，与实测污水互斥；原始干投入与最终载体为不同数量。原洗涤剂容器终端载体为实际完整瓶体、瓶盖、标签及其中保留的原配方，一起测量载体净kg，不假设为空容器或纯瓶体聚合物kg。其保留配方来源kg与污水、抹布、溢洒及未用库存来源kg互斥，不作为第二个实物配方输出。包装制造已在洗涤剂供应内。终端处理供应方从各具名载体接收门起，排除重复清洁供应，披露已含提取运输。合同退回运输采用实际完整车辆行程供应包，覆盖实际燃料（含实际怠速）、司机、车辆制造维护退役及重载空载路段各一次；保留行程loaded_km、empty_vehicle_km、moving_h、stationary_idle_h、fuel_L、密度低位热值证据、货物ID及全部受益者。固定每个行程r及其区段s，对受益者p计算d_pr=sum_segments_s(reserved_volume_p,r,s*(moving_h_r,s+idle_h_r,s))，预留体积单位m3，移动及实际静止闲置时长单位h。f_pr=d_pr/sum_b d_br，分母仅对同一行程r的所有实际受益者b求和，绝不跨行程。包含有证据的实际空载区段及静止闲置区段预留。仅对尚未归于p的行程包分子施加f_pr一次；供应方已归属量保留其记录分配，不再乘比例。不得因t*km=0抹掉空驶。包内燃料怠速空载覆盖未知或驱动总和不为正阻止补全；不得再加入重叠燃料、卡车或处理行程。内部搬运限人工，须全期间无动力设备证据；其他设备改变路线。各模块返回原子交换属性单位来源事件分子、原始分母与版本。按实际原始分母恢复归一化行，仅分配一次，拒绝重复来源事件范围版本键，只相加相同交换属性单位的兼容分子，再除共同修正Q一次。演示来源包装处置与其制造采用同一来源资产寿命比例及全部既往版本替换；普通库存包装处置采用实际库存来源责任。全部实际额外行、完整BOM供应方边界及原始量证据须在完整前具备。| jrc-retail-bemp-2013; ghg-product-standard-2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| sale | 保管与验收零售交付 | required | 规定的封闭包装路线；保留全部库存和验收事件。 | 前景零售服务 | 每参考流 |
| bench | 演示台 | required | 独立持有的 TERTIAL 灯具与透明 SOLHETTA805.914.47 灯泡；包含实际测试和待机。 | 前景零售服务 | 每参考流 |
| failure | 失败商品与残余物发运 | conditional | 发生不可逆失败、供应商或外部转移、原纸箱弃置时为 true；false 需完整保管及发运证据；unknown 阻止完整性。 | 前景零售服务 | 每参考流 |
| retirement | 演示资产退役 | conditional | 实际资产退役时为 true；false 需资产库存台账；unknown 阻止完整性。 | 前景零售服务 | 每参考流 |

### 过程：保管与验收零售交付 (`sale`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 一盏完整白色 TERTIAL703.554.55 灯具（不含灯泡）的零售服务 (`retail_service`)

仅最终有效的封闭包装验收合格；实物交付是另一台账。

- 选定流：一盏完整白色 TERTIAL703.554.55 灯具（不含灯泡）的零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_sale`
- 来源：`ikea-tertial-70355455`; `ghg-product-standard-2011`

##### 废物流

##### 基本流

### 过程：演示台 (`bench`)

#### 输入

##### 产品流

###### 交流电 (`bench_electricity`)

演示和测试台实际使用点交流电，含待机。供应方、电压和供电组合需独立记录选择。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：E_bench/Q；cp_bench。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bench`
- 来源：`ikea-tertial-70355455`; `ikea-solhetta-80591447`; `jrc-retail-bemp-2013`

###### 完整白色 TERTIAL703.554.55 E27 工作灯（不含灯泡） (`demo_lamp_input`)

实际演示灯具采购的寿命归属量，含完整实际灯具及一体部件；排除灯泡、演示台支撑物及下游运行、维护和处理。

- 选定流：完整白色 TERTIAL703.554.55 E27 工作灯（不含灯泡）
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实际灯具资产的 Sum_a f_ap/Q；cp_assets。采购库存为证据，不是额外耗用件数行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ikea-tertial-70355455`; `ghg-product-standard-2011`

###### 完整 SOLHETTA805.914.47 透明 E27 LED 灯泡470lm2700K (`demo_bulb_input`)

实际完整演示灯泡包括驱动、灯头、外壳及实际完整 BOM，非仅玻璃。它不是已售商品或其他灯泡型号。

- 选定流：完整 SOLHETTA805.914.47 透明 E27 LED 灯泡470lm2700K
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实际灯泡资产的 Sum_a f_ap/Q；cp_assets。不采用额定小时替换默认值。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ikea-solhetta-80591447`; `ghg-product-standard-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：失败商品与残余物发运 (`failure`)

#### 输入

##### 产品流

###### 门店收货门处完整原装 TERTIAL703.554.55 零售包（不含灯泡） (`failed_background`)

归于本零售服务不可逆耗用的原始收货商品背景。整包供应方须覆盖实际灯具、完整原包装及入站交付；不得将某部件背景当另一整包计入。此责任行不是第二次实物采购。

- 选定流：门店收货门处完整原装 TERTIAL703.554.55 零售包（不含灯泡）
- 流属性/单位：物品数量 / Item(s)
- 数量规则：Sum_j B_fj/Q 原始收货物品当量；cp_failure。供应方或 BOM 未解决阻止完整结果。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_failure`
- 来源：`ikea-tertial-70355455`; `ghg-product-standard-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 向供应商交付的封闭原装 TERTIAL703.554.55 零售包（不含灯泡） (`supplier_sealed`)

实际向供应商交付的封闭完整原装包；不意味着废物或服务验收。

- 选定流：向供应商交付的封闭原装 TERTIAL703.554.55 零售包（不含灯泡）
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_supplier_sealed/Q 实际实物件数；cp_failure。S/F/O/T 责任另行核对，不能创造另一实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_failure`
- 来源：`ikea-tertial-70355455`; `ghg-product-standard-2011`

###### 向供应商交付的开封不工作但完整 TERTIAL703.554.55 灯具（不含灯泡） (`supplier_opened`)

实际向供应商交付的开封不工作但完整的灯具；包装单独记录；不允许缺件。

- 选定流：向供应商交付的开封不工作但完整 TERTIAL703.554.55 灯具（不含灯泡）
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_supplier_opened/Q 实际实物件数；cp_failure。S/F/O/T 责任另行核对，不能创造另一实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_failure`
- 来源：`ikea-tertial-70355455`; `ghg-product-standard-2011`

###### 外部保留未验收的封闭 TERTIAL703.554.55 零售包（不含灯泡） (`retained_sealed`)

失败或撤销验收后具名外部接收者实际保留的完整封闭包；实物交付仅记录一次。

- 选定流：外部保留未验收的封闭 TERTIAL703.554.55 零售包（不含灯泡）
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_retained_sealed/Q 实际实物件数；cp_failure。S/F/O/T 责任另行核对，不能创造另一实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_failure`
- 来源：`ikea-tertial-70355455`; `ghg-product-standard-2011`

###### 外部保留未验收的开封不工作但完整 TERTIAL703.554.55 灯具（不含灯泡） (`retained_opened`)

具名外部接收者保留的开封不工作但完整灯具；同一载体不存在本地废物发运。

- 选定流：外部保留未验收的开封不工作但完整 TERTIAL703.554.55 灯具（不含灯泡）
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_retained_opened/Q 实际实物件数；cp_failure。S/F/O/T 责任另行核对，不能创造另一实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_failure`
- 来源：`ikea-tertial-70355455`; `ghg-product-standard-2011`

##### 废物流

###### 弃置的完整 TERTIAL703.554.55 灯具（不含灯泡） (`stock_lamp_waste`)

实际本地发出的失败完整灯具净载体，含一体线缆、夹具和电器；排除纸箱与另行拆下灯泡。碎片或缺失部件需状态扩展，不得采用本完整设备卡。

- 选定流：弃置的完整 TERTIAL703.554.55 灯具（不含灯泡）
- 流属性/单位：质量 / kg
- 数量规则：W_stock/Q 实测发出净 kg；cp_failure。不对已发质量再次作产生库存修正。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_failure`
- 来源：`ikea-tertial-70355455`

###### 弃置的 TERTIAL 原纸板零售箱（含一体胶黏剂） (`carton_waste`)

实际干燥完整纸箱载体，由原包装 BOM 核实，含一体印刷和胶黏剂；不另设重复胶黏剂行。其他内衬、包裹物或损坏混合包装需其实际原子卡。

- 选定流：弃置的 TERTIAL 原纸板零售箱（含一体胶黏剂）
- 流属性/单位：质量 / kg
- 数量规则：(W_stock_carton+Sum_a W_demo_carton,a*f_ap(version))/Q；cp_failure。原箱供应背景已在商品或演示供应方内，不再次计入制造投入。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_failure`
- 来源：`ikea-tertial-70355455`; `jrc-retail-bemp-2013`

##### 基本流

### 过程：演示资产退役 (`retirement`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 退役的完整 TERTIAL703.554.55 演示灯具（不含灯泡） (`demo_lamp_waste`)

实际退役演示整灯，排除拆下灯泡。除独立灯泡外必须保留实际完整一体BOM；拆除其他一体部件时本完整整灯卡不适用，必须建立具体剩余载体扩展。直接净称重不再重复扣灯泡。供应方从此实测废物交接点开始。

- 选定流：退役的完整 TERTIAL703.554.55 演示灯具（不含灯泡）
- 流属性/单位：质量 / kg
- 数量规则：Sum_a W_lamp,a*f_ap(final)/Q；cp_retirement。不再乘制造比例。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_retirement`
- 来源：`ikea-tertial-70355455`; `ghg-product-standard-2011`

###### 退役的完整 SOLHETTA805.914.47 透明 E27 LED 灯泡 (`demo_bulb_waste`)

实际拆下的完整灯泡，含灯头与驱动，非仅玻璃废物；任何灯具载体均不含它。灯泡碎片需单独状态卡及完整容纳载体称重。

- 选定流：退役的完整 SOLHETTA805.914.47 透明 E27 LED 灯泡
- 流属性/单位：质量 / kg
- 数量规则：Sum_a W_bulb,a*f_ap(final)/Q；cp_retirement。不重复计入供应方已含处置输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_retirement`
- 来源：`ikea-solhetta-80591447`; `ghg-product-standard-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_pool | all inventory rows | 测量前声明观察时间范围、SKU 配置和受益者池。同一配置池保留关闭、闲置、失败和零销售期间；原始分子按来源 ID 结转。全零输出池保持不可归一化并披露原始总量。晚到退货在原版中同时替换分子去向背景和最终有效 Q；不得对后续转售池再次收费。不默认回收或避免销售抵扣。 | ghg-product-standard-2011 |
| a_meters | bench_electricity | 优先独立电表和直接事件细分。演示台服务多种商品时，将测试事件直接计量能耗归原物品池。剩余实测闲置和待机能耗按事先记录的演示台预留小时在所有实际受益者间分配，包括闭店预留时间。分配总和须等于完整电表总量。要求已知且为正的所有受益者驱动与包含关系；未知或驱动总量为零则阻止结果。 | ghg-product-standard-2011 |
| a_lifetime | demo_lamp_input; demo_bulb_input; demo_lamp_waste; demo_bulb_waste | 对每个实际资产维持跨全部期间和受益者的持续台账。暴露量 e_ap 为归于受益者 p 的已安装预留小时，包含闲置、关灯和闭店期间。预计总寿命暴露量 L_a 来自带日期的采购、状态、运行和退役证据，不采用宣传灯泡寿命。分版责任 f_ap=e_ap/L_a；累计比例不能超过1。修订 L_a 时替换每个既往受益者分配，将带符号差额回记原池，不能重启制造。实际退役时 L_a=实际全寿命暴露量之和，在全部原受益者间核对最终残余。终端载体责任仅乘最终 f_ap 一次，不再乘制造比例。寿命或暴露未知，或退役时全寿命驱动不为正，均阻止完整性。 | ghg-product-standard-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sale | sale | retail_service | 保管与验收事件台账 |pool_id; version; original_item_id; SKU; supplier_revision; original_receipt_id; pack_BOM_id; 期初库存; 收货; 实物交付; 实物退回; 内部调拨; 转演示用途; 供应商发运; 本地废物发运; 外部保留; 期末库存; 验收ID; 验收状态; 撤销事件日期; 仅财务标记; 截止日; 修正父版; original_item_id; final_acceptance_status; cutoff; physical_event_ledger; opening_stock; receipts; physical_returns; physical_handovers; supplier_dispatch; local_waste_dispatch; demo_conversion; net_internal_transfers; goods_opening_count; receipts_count; physical_returns_count; physical_handovers_count; supplier_goods_dispatch_count; goods_to_residue_count; demo_conversion_count; net_internal_transfers_count; goods_closing_count; held_waste_opening_kg; waste_generated_kg; waste_dispatched_kg; held_waste_closing_kg|每个保管事件扫描原始 ID；供应商装箱清单和封闭包装目视检查；签署验收及退货审查。物理计数与最终服务状态独立。 汇总方法：c_accept；不同最终有效原始 ID 仅计一次；所有物理事件核对库存；不得再次扣撤销。 末列稳定字段为对应公式的原始量或核实派生量；保留核实和分配状态，未核实不等于零。 商品原ID件数与废物载体kg分开；转残余时扣商品件，发废物时仅扣待运废物kg。| Item(s) | 逐事件及截止修正 | 完整声明范围及后续已知修正 | 一个门店、SKU 与配置池 | 每参考流 | 带日期扫描、供应商 BOM、验收及退货证据 |
| cp_bench | bench | bench_electricity | 插座电表与事件预留记录 |pool_id; version; source_event_id; meter_id; 校准; 起始kWh; 终止kWh; 缺口kWh; 事件kWh; 被测原始ID; 通电起止; 实测功率; 各受益者预留小时; 闲置小时; 闭店小时; 总表ID; 包含关系图; 电压; 供应方ID; 供电边界; opening_kWh; closing_kWh; verified_gap_kWh; direct_event_kWh_all; reserved_hours_all; Q|校准插座电能表分时记录；识别实际灯具、灯泡与兼容性；采集包括失败测试和待机的实际测试能耗。核对寄存器总量、事件能耗及缺口；带符号负差须调查，不截为零。 汇总方法：c_energy；先电表原始总量，再直接事件和残余预留分配，转 MJ 后仅除 Q 一次。 末列稳定字段为对应公式的原始量或核实派生量；保留核实和分配状态，未核实不等于零。| kWh; h; W | 连续间隔及每次测试 | 全池含闭店和闲置 | 实际演示台插座及全部受益者 | 每参考流 | 电表校准、拓扑、原始记录及全部受益者预留 |
| cp_assets | bench | demo_lamp_input; demo_bulb_input | 持续资产寿命台账 |资产ID; 型号; 供应商修订版; 完整BOM; 供应方ID; 供应方范围; 原始采购; 交付; 安装日期; 各期间受益者已安装预留小时; 预计寿命暴露量; 寿命证据; 退役日期; 寿命版本; 既往分配; 替换差额; 残余; 状态; 维修事件ID; asset_id; e_ap_all; L_a; lifetime_version; previous_allocations; Q|由供应商证据追踪每个实际完整演示灯具和独立灯泡的安装、实际预留时间观察及退役；采集供应商实际完整 BOM 和互斥供应阶段。修订保留并替换全部既往分配。 汇总方法：c_assets；暴露量除寿命比例仅用一次；采购和退役库存仅作控制证据。 末列稳定字段为对应公式的原始量或核实派生量；保留核实和分配状态，未核实不等于零。| Item(s); h | 逐事件、分时暴露和每次修订 | 跨所有期间的完整资产寿命 | 全部实际受益者，非仅本SKU | 每参考流 | 供应商完整BOM、供应合同、记录、退役及修正凭证 |
| cp_failure | failure | failed_background; supplier_sealed; supplier_opened; retained_sealed; retained_opened; stock_lamp_waste; carton_waste | 原始来源、去向与发运台账 |池ID; 来源事件ID; 原始物品ID; 收货背景ID; original_B_j; B_sj; B_fj; B_oj; B_tj; 责任签署; 接收者; 物理状态; 封闭或开封; 完整BOM检查; 灯具存在; 灯泡拆除; 供应转移件数; 外部保留件数; 废物托运; 秤净kg; 毛kg; 皮kg; 秤校准; 纸箱BOM; 干燥状态; 期初废物库存; 产生量; 期末废物库存; 处理供应方; 已含运输; 修正版; original_background_id; B_j; B_sj; B_fj; B_oj; B_tj; owner_signoff; original_item_id; physical_event_id; recipient; state; measurement_mode; consignment_id; gross_kg; tare_kg; net_kg; carrier_state; Q; source_kind; source_asset_id; packaging_source_id; W_stock_lamp; W_stock_carton; W_demo_carton_a; f_ap_version; lifetime_version; condition_status; presence_absence_evidence|将实际原始收货 ID 关联最终去向和签署的持续背景责任者；每次本地发运直接净称重。外部保留及供应商货物的实物与背景责任独立记录。选卡前核实完整设备或纸箱状态。 汇总方法：c_background；c_transfers；c_waste。发出净kg为输出；期初+产生-发出=期末是独立检查。同一原始物品或包装不得计两次生产负荷。 末列稳定字段为对应公式的原始量或核实派生量；保留核实和分配状态，未核实不等于零。 原包装处置按stock或demo来源拆分；demo纸箱及其他原包载体处理随原asset寿命比例一次，修订替换全部旧份额。| Item(s); kg | 逐去向、托运及修订 | 所有失败含零销售期间 | 实际接收者、门店及供应方 | 每参考流 | 原收货BOM及背景、签署去向责任、秤和转移处理凭证 |
| cp_retirement | retirement | demo_lamp_waste; demo_bulb_waste | 资产终端载体台账 |资产ID; 终端事件ID; 型号; 状态; 完整设备; 拆下灯泡ID; 拆下部件ID; 测量模式; 直接净kg; BOM部件净kg; 毛kg; 皮kg; 秤校准; 最终寿命暴露量; final_f_ap; 责任池ID; 供应方ID; 供应方范围; 重复来源键; measurement_mode; W_a; component_net_kg; final_f_ap; lifetime_version; Q|经校准直接称完整设备净重，排除拆下灯泡，或采用互斥的完整部件重建；完整灯泡单独称重。确认投入包内供应方未已包含终端处理。 汇总方法：c_terminal；实际净载体仅乘最终寿命责任一次，再除Q一次；最终修订替换所有旧版。 末列稳定字段为对应公式的原始量或核实派生量；保留核实和分配状态，未核实不等于零。| kg; h | 每次退役及最终寿命修正 | 完整实际资产寿命 | 全部原受益者池 | 每参考流 | 秤或BOM证据、资产关联、最终比例及供应方接收 |
| cp_completion | sale | all inventory rows | 强制外部补全模块台账 |模块ID; 池ID; 版本; 来源事件ID; 原始分母; 已归一化标记; 交换ID; 属性; 单位; 原始总量; 归属总量; 来源BOM; 供应方范围; 电表拓扑; 总表kWh; 所含分表kWh; 独立电表kWh; 全部受益者面积小时; 预留运行小时; 静止闲置小时; 结账分钟; 清洁面积; 供水kg; 配方来源kg; 抹布kg; 实际污水体积; 污水密度; 固体载体kg; 路线质量t; 重载km; 空载车辆km; 车辆容量; 供应方空载范围; 资产暴露; 寿命证据; 终端质量; 补全状态; normalized_flag; normalized_value; original_denominator; raw_total; allocation_status; causal_fraction; source_event_keys; exchange_identity; property; unit; corrected_Q; condition_status; site_absence_records; no_HVAC; no_refrigerant_circuit; no_combustion; no_powered_internal_handling; cleaning_formulation_id; source_formula_kg_unused; source_formula_kg_used; source_formula_kg_spilled; source_formula_kg_in_wipe; source_formula_kg_in_container; source_formula_kg_in_effluent; source_formula_kg_still_open_used; used_destination_reclassification_version; container_whole_terminal_net_kg; container_retained_formulation_source_kg; detergent_packaging_BOM; wipe_dry_input_kg; wipe_whole_terminal_kg; effluent_mode; effluent_temperature; trip_id; full_trip_provider_scope; loaded_km; empty_vehicle_km; moving_h; stationary_idle_h; fuel_L; fuel_density; fuel_LHV; segment_id; beneficiary_id_b; reserved_volume_p_r_s_m3; moving_h_r_s; idle_h_r_s; empty_segment_reservation_evidence; d_pr_all_b; f_pr_all_b; provider_allocation_status; provider_attributed_numerator; original_packaging_asset_id; f_ap_version|执行b_completion全部固定准入与方法。清洁只准完整废液直接净kg或实测V*rho两互斥模式，禁止重建。全部额外原子行和实际BOM须双语投影；取得现场无燃烧、无制冷剂回路、无机械暖通、无动力内部搬运的全期间证据；未知不通过。整行程运输保留trip_id、segment_id、全部beneficiary_id_b、reserved_volume_p_r_s_m3、moving_h_r_s及实际idle_h_r_s；保留实际空载区段预留证据、实际燃料与供应方覆盖和provider_allocation_status。按b_completion在每个同一行程r内计算d_pr和f_pr；分母绝不跨行程，供应方已归属量不再乘f_pr。覆盖未知或同一行程全受益者驱动总量为零则阻止。原配方来源kg在容器、污水、抹布、溢洒、未用和尚未关闭已用去向互斥记录；后续已用状态重分类替换同一来源kg。直接测实际完整容器及保留配方的终端载体净kg。演示来源原包处置按原asset版本比例一次并替换全部旧份额。按c_completion恢复原始分母后排重，逐相同交换属性单位加分子再除共同Q一次。| row-specific original units | 各模块分时、事件及修正 | 同声明服务池；完整资产寿命 | 全门店及实际关联供应方 | 每参考流 | 全部具名模块凭证、原始活动、边界核对及双语原子卡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_accept | retail_service |Q=count(修正截止时具有最终有效封闭包验收状态的不同original_item_id)。不再扣验收撤销。goods_closing_count=goods_opening_count+receipts_count+physical_returns_count-physical_handovers_count-supplier_goods_dispatch_count-goods_to_residue_count-demo_conversion_count+net_internal_transfers_count。商品转残余时按原ID件数立即从商品库存剔除，待运废物单独按载体kg盘点，发废物时不再次扣商品数。external_retention为早先交付子去向，不再扣库存。|cp_sale; original_item_id; final_acceptance_status; cutoff; goods_opening_count; receipts_count; physical_returns_count; physical_handovers_count; supplier_goods_dispatch_count; goods_to_residue_count; demo_conversion_count; net_internal_transfers_count| Q；独立物理库存核对 | ghg-product-standard-2011 |
| c_energy | bench_electricity | E_total=终止kWh-起始kWh+核实缺口kWh。E_p=direct_event_kWh_p+(E_total-sum_all_direct_event_kWh)*reserved_hours_p/sum_all_reserved_hours。E_bench=3.6*E_p MJ。保留实测失败测试和闭店闲置部分。归属后仅输出E_bench/Q；无证据缺口或驱动总量不为正则阻止。 |cp_bench; opening_kWh; closing_kWh; verified_gap_kWh; direct_event_kWh_all; reserved_hours_all; Q| 每参考流MJ | ghg-product-standard-2011 |
| c_assets | demo_lamp_input; demo_bulb_input | f_ap=e_ap/L_a，其中e_ap为池内受益者p实际已安装预留小时，L_a为有证据的预计全寿命已安装预留小时。跨全部期间受益者Sum f_ap<=1。新寿命版本替换每个既往f_ap，新减旧回记原池。实际退役采用L_a=sum_all_actual_lifetime_e并分配最终残余；采购量为实际整资产f_ap之和，再除Q。 |cp_assets; asset_id; e_ap_all; L_a; lifetime_version; previous_allocations; Q| 每参考流整灯或整灯泡Item(s) | ghg-product-standard-2011 |
| c_background | failed_background | 每个原始来源j满足B_j=B_sj+B_fj+B_oj+B_tj。B_fj为原始收货物品当量责任，非废弃kg或重复后代。投入=sum_j B_fj/Q，各采用一个原始整包收货门供应方；匹配下游商品另加入sum_j B_sj/Q。晚到修正替换分区及原池版本。 |cp_failure; original_background_id; B_j; B_sj; B_fj; B_oj; B_tj; owner_signoff; Q| 每参考流原始收货包Item(s)责任 | ghg-product-standard-2011 |
| c_transfers | supplier_sealed; supplier_opened; retained_sealed; retained_opened | N_state=具名状态中有日期及接收者证据的实际唯一实物交接数；每次早先交付仅进入一种最终去向。N_state/Q为物理输出；S/F/O/T仍为独立责任核对。 |cp_failure; original_item_id; physical_event_id; recipient; state; Q| 每参考流实物转移Item(s) | ghg-product-standard-2011 |
| c_waste | stock_lamp_waste; carton_waste |各实际互斥托运载体W=毛kg-皮kg，或直接净kg，两测量模式互斥。stock_lamp_waste=W_stock_lamp/Q。carton_waste=(W_stock_carton+Sum_a W_demo_carton,a*f_ap(version))/Q。演示纸箱保留原资产及包装事件ID，采用同资产寿命比例一次；每次寿命修订替换所有原池份额，退役改最终比例，不将全部演示纸箱kg压当期Q。普通库存纸箱按实际库存来源全责任。各去向期初+产生-发出=期末为独立废物kg检查，不再次修正实测发运；包装制造已在对应原供应方。|cp_failure; measurement_mode; consignment_id; source_kind; source_asset_id; packaging_source_id; W_stock_lamp; W_stock_carton; W_demo_carton_a; f_ap_version; lifetime_version; gross_kg; tare_kg; net_kg; carrier_state; Q| 每参考流发运载体净kg | jrc-retail-bemp-2013 |
| c_terminal | demo_lamp_waste; demo_bulb_waste |W_a为除独立灯泡外实际完整一体BOM终端载体净kg，直接净称或完整保留部件BOM重建两模式互斥；拆除其他一体部件时需具体剩余载体扩展，不能用完整整灯卡。灯泡不得扣两次。终端分子=sum_a W_a*f_ap(final)；输出分子/Q。不再乘制造比例，不重复供应方已含处置。|cp_retirement; measurement_mode; W_a; component_net_kg; final_f_ap; lifetime_version; Q| 每参考流寿命归属终端kg | ghg-product-standard-2011 |
| c_completion | all inventory rows | 各模块行r若已归一化，恢复R_r=normalized_value_r*original_denominator_r，否则R_r=raw_total_r。仅当尚未分配时，对R_r施加一次有证据的全池因果比例。只删除范围和版本相同的重复精确来源事件键；冲突则阻止。匹配交换身份、属性和单位，按行相加互斥兼容分子，再除共同修正Q一次。门店残余电力只扣所含演示台回路。所有模块寿命修订遵循a_lifetime。 |cp_completion; module_id; version; normalized_flag; normalized_value; original_denominator; raw_total; allocation_status; causal_fraction; source_event_keys; exchange_identity; property; unit; corrected_Q| 补全兼容行分子及仅归一化一次的服务清单 | ghg-product-standard-2011; jrc-retail-bemp-2013 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | 各未解决原子流仅在官方公开原记录与属性、单位、介质、类型、名称核实后绑定。整灯、灯泡、整包和纸箱候选不能继承单材料UUID。保留未知身份与匹配供应方补全条件。 | 官方原始记录、哈希完整性凭证及逐行语义比较 |
| q_measure | all inventory rows | 保留校准、原记录ID、完整分时覆盖与不确定性。不采用无依据范围、名义质量、额定活动或零默认。重要流范围证据待可比记录解决；本候选提供采集方法。 | 原始记录、秤记录、供应商完整BOM及明确证据缺口 |
| q_completion | all inventory rows | 在全部b_completion模块、实际原子扩展、S/F/O/T责任及条件true/false/unknown检查解决前，明确维持部分模块状态。消费者运行不是演示台能耗。不声称完整标准符合或科学批准。 | 具名补全矩阵、供应方重叠审查和双语业务数组审计 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_reference | retail_service | 拒绝混合SKU或单位、开封损坏服务验收、缺原始ID、缺截止日或Q<=0的归一化。不同最终有效ID须与物理保管库存独立核对。 | ikea-tertial-70355455; ghg-product-standard-2011 |
| v_balance | all inventory rows | 核对库存事件平衡、B_s+B_f+B_o+B_t=B、全部电表归属等于原总量及资产寿命比例<=1。外部保留失败具有接收者、状态和背景责任；供应商退回保留持续责任。不得重复原背景或发运载体。 | ghg-product-standard-2011 |
| v_completion | all inventory rows | 存在性、身份、电表包含关系、供应方覆盖、完整BOM、寿命驱动或外部模块边界未知均阻止完整声称。核实全部引用ID存在于实际生成业务数组，双语方向、类型、公式及限定信息一致，实际新增流有原子卡，且仅汇总兼容并恢复一次的分子。 | ghg-product-standard-2011; jrc-retail-bemp-2013 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量零售服务前景模块；仅按b_completion补全后完整。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同SKU配置和声明路线，采用实际数据及兼容补全模块。 |
| excluded_use | 整个CPC叶、灯泡制造、照明服务、消费者运行、其他SKU或未补全的比较总量。 |
| required_metadata | 门店及国家; SKU703.554.55 白色及供应商修订版; 完整灯具及原始包装 BOM; 原始物品 ID 及收货门背景 ID; 常温到店路线; 池时间范围及验收截止日; 最终有效 Q 及修正版; 演示灯具及透明灯泡805.914.47 身份与兼容性; 电表包含关系及所有受益者分配; 部分边界及补全模块版本; 失败且外部保留货物的接收者及背景责任; 供应方及终端处理边界 |
| required_quality_disclosure | 候选方法、部分边界、身份BOM供应方范围缺口、不确定性、晚到退货寿命替换及全部模块版本。 |
| update_trigger | SKU、供应商版本BOM、路线演示灯泡、电表、供应方、验收状态、资产寿命或补全范围改变。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ikea-tertial-70355455 | official_guidance | 宜家，TERTIAL 白色工作灯703.554.55，产品细节、材料及尺寸，https://www.ikea.com/nl/en/p/tertial-work-lamp-white-70355455/ ；检索于2026-10-28。 | 确切代表灯具及灯泡排除；仅定性部件与规格证据。非完整BOM、实测净质量、门店测试、寿命或清单。 |
| ikea-solhetta-80591447 | official_guidance | 宜家，SOLHETTA E27 LED470流明2700K805.914.47 透明，https://www.ikea.gr/en/products/solhetta-led-bulb-e27-470-lumen-2700-k/80591447/ ；检索于2026-10-28。 | 实际独立透明演示灯泡规格；2.2W及宣传25000h不是门店测量或默认寿命。玻璃材料条目不是完整灯泡BOM。 |
| ghg-product-standard-2011 | standard | WRI/WBCSD，产品生命周期核算与报告标准2011，第6、7、9章，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ；查阅于2026-10-28。 | 分析单位、明确边界与细分及物理分配概念；PCR方程、额外资产范围及前景协议为已声明方法设计，并非来源规定数值因子或完整符合。 |
| jrc-retail-bemp-2013 | official_guidance | 欧盟委员会JRC，零售业最佳环境管理实践，EUR25998EN2013，执行摘要投入产出图及照明2.1.6.7节，https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf ；查阅于2026-10-28。 | 零售公用工程、照明、包装、运输及废物相关性；未采用百分比、绩效基准或通用默认量。 |
