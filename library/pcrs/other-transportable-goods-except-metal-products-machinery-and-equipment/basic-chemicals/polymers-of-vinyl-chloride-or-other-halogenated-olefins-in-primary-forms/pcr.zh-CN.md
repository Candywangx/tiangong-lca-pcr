---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-vinyl-chloride-or-other-halogenated-olefins-in-primary-forms
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 带单体回收的初级悬浮聚合聚氯乙烯树脂


## 1. 范围与适用性

仅适用于真实水相间歇悬浮法 PVC 均聚树脂，经脱单体回收、固液分离及间接蒸汽干燥后作为初级粉末散装交付。实际数据包须证明所选牌号、配方与设备；文中供货制剂是独立原件支持的代表投入，并非已验证的联合配方。其他氯化或含氟聚合物、糊树脂及配混成品不可互换。方法不预设工厂消耗率、转化率或残余单体为零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-vinyl-chloride-or-other-halogenated-olefins-in-primary-forms |
| classification_refs | CPC 3.0:34730，仅限较窄 S-PVC 范围；不产生已接受映射 |
| covered_products | 氯乙烯水相间歇悬浮聚合，经脱单体、单体回收、离心及干燥得到的初级 PVC 均聚树脂粉末；每个数据集仅建模一种实际牌号和配方。 |
| excluded_products | 乳液及微悬浮糊树脂、本体或溶液 PVC、PVDC、氯化 PVC、氟聚合物、共聚物、塑溶胶、增塑或填充配混料、再生 PVC、管材膜材等成品；本清单变体不代表直接燃烧干燥及现场焚烧。 |
| representative_product | 未配混的初级 S-PVC 粉末，须声明实际牌号；通用原生 S-PVC 流不是已核准 SKU |
| production_route | 间歇水相悬浮；代表投入为 EHP-W40S 冷冻乳液引发剂及部分醇解 PVA 细粒现场配制；不规定配方用量，其他实际助剂须在使用前逐项明确。 |
| market_state | 脱单体、干燥及牌号检测后在厂门验收的散装树脂粉末；净产品质量排除包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供下游相容加工使用的初级 S-PVC 树脂 |
| How much | 1 千克净验收交付树脂 |
| How well | 一种实际均聚物牌号，声明实测粉末状态、黏度K基准、粒径孔隙率、残余单体和水挥发分 |
| How long or cycle | 一个匹配生产验收群组的厂门供应，不声明使用寿命 |
| reference_flow_link | final_resin |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 聚氯乙烯树脂（S-PVC） `4f19f122-7b3b-11dd-ad8b-0800200c9a66` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | PVC 均聚物身份; 水相间歇悬浮路线; 初级粉末状态; 实际牌号及 K 值或黏度方法; 粒径及孔隙率基准; 含水和挥发分及检测方法; 残余氯乙烯及检测方法; 实际引发剂制剂和 PVA 牌号; 厂门交付状态; 场址及期间; 原料路线及上游边界; 原生身份限制 |

上述限定信息须在数据集元数据、产品说明、参考流备注或等效字段逐项声明。原生参考流仅证明宽泛 S-PVC/Product/Mass 身份：无 CAS、备注、供货地理、具体牌号形态或完整路线混合字段，原生合规 Not defined；不能据此认定某 SKU、供应商、中国或香港地理以及科学合规。所有缺省限制同时适用于 final_resin。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按验收交付净树脂实测质量，不含包装，声明残水和挥发分；干固体及纯聚合物量为独立子账，不替换供货质量分母。 |
| physical_conversion | all inventory rows | Mass; electricity | kg; kWh | 先换算真实原始量，体积使用实测状态及密度，气液积分体积不再乘时间；蒸汽及回水基准必须匹配；次级属性系数不是密度。 |
| water_species | all inventory rows | Mass | kg | 物理总水、相态、自由水及化学水生成消耗分别建立证据；加成聚合无必然水联产；不靠同一残差拟合未知水和产品。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已接收的单体及整份采购制剂、单独采购 PVA 细粒、工艺水及公用工程；既有在制品及回收单体携带结转库存和负荷 |
| starting_condition_role | 前景厂门到厂门的起始事实，不是上游截断 |
| product_classification_scope | 仅 CPC 34730 内水相间歇悬浮法初级树脂；宽分类不代表方法覆盖 |
| recursive_input_rule | 内部回用携带负荷且不重复采购上游；外部同类树脂输入按牌号状态和上游数据另识别，不得默认为新单体或新增验收产量。 |
| upstream_dataset_requirement | 匹配整份供货制剂、牌号、物理单位、真实单体生产路线、电力地理及蒸汽凝结水边界；即使单独在现场建模，单体合成仍为上游；供应者缺失作为数据包缺口披露。 |
| disclosure | 披露自有操作及外部处理、单元转移、冷藏、清洗、直接蒸汽与间接回水、排放控制、库存及在制品归属和未覆盖额外交换；场址和供应数据不构成方法证据。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | 所有相关操作 | 纳入接收、配方制备、冷却制冷、聚合、汽提、回收、离心、干燥、筛分、储存、清洗、逸散及实际废物处理接口；同一所属过程内的各单元操作仍分别计量。 | `jrc-polymers-2007` |
| boundary_formulation | 所有相关操作 | 每份供货制剂只采购一次；活性过氧化物、乳化剂及载水为组成子账，现场另购稀释水及 PVA 原料各有真实行和实际混合冷却损失；每种额外共同引发剂、涂层、阻聚剂、清洗剂、燃料、制冷剂及包装组件须在数据包使用前拆为原子交换。 | `jrc-polymers-2007`; `nouryon-ehp-w40s-2022`; `kuraray-spvc-poval-2025` |
| boundary_terminal | 所有相关操作 | 仅 final_resin 是被选终端 Product 输出；所有浆料、湿饼、回收单体和捕集粉尘均为配对内部转移或真实独立废物联产品输出；不得靠改名隐藏物理输出或重复选择同一 UUID。 | `jrc-polymers-2007` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| polymerise | 供料制备与间歇悬浮聚合 | required | 单体接收储存、引发剂冷藏稀释、PVA 配液、釜投料反应冷却、清釜及泄漏 | 前景操作所属过程 | 每 1 kg 参考流 |
| strip_recover | 浆料汽提、单体回收及水汽提 | required | 聚合物汽提、冷凝压缩回收及污染水汽提分别保留原始记录；外送废水处理接口 | 前景操作所属过程 | 每 1 kg 参考流 |
| dewater | 离心固液分离 | required | 干燥前分别计量湿饼及母液 | 前景操作所属过程 | 每 1 kg 参考流 |
| finish | 间接干燥、筛分及树脂散装交付 | required | 分别计量干燥、筛分、捕尘、筒仓及厂门验收 | 前景操作所属过程 | 每 1 kg 参考流 |

各卡的 A 是完整实际期间、归属同一验收群组的原始分子经真实单位换算后的量；Q 是该产品路线牌号状态的唯一新增验收净树脂千克数。采集只保留原始分子及库存在制结转负荷；第8节唯一归一化规则最后除一次。所有输入及输出使用同一报告基准，中间转移不形成额外产品负荷；内部成对交换在汇总模型中抵消但保留审计。

### 过程：供料制备与间歇悬浮聚合 (`polymerise`)

#### 输入

##### 产品流

###### 氯乙烯 (`fresh_vcm`)

仅为外部新购氯乙烯。原生 CAS 75-01-4，路线为氯乙烯的生产、生产混合在工厂、Product flow，仅有质量属性；地理为空，未规定纯度、加压交付状态、生产商路线或供应商。它只证明身份，不能证明中国或香港供货混合、配方数量或背景供应者；检验整批供货并核对储罐。

- 选定流：氯乙烯 `d9a7773b-72ce-4899-86c1-57e02a3f10cb`
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_material`
- 来源：`jrc-polymers-2007`

###### 氯乙烯 (`recycle_vcm_in`)

内部回收氯乙烯来自 recover_vcm_out，以同一转移键和杂质检测配对；保留 fresh_vcm 的全部原生限制。回收不产生新采购或负的新料抵扣；期初回收存量携带原有负荷。

- 选定流：氯乙烯 `d9a7773b-72ce-4899-86c1-57e02a3f10cb`
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_material`
- 来源：`jrc-polymers-2007`

###### 除盐水 (`poly_water`)

用于悬浮、PVA 配液、引发剂稀释和釜洗的外部水按用途分表计量；外购制剂载水是组成子账，不重复计为采购水；内部回用水另有转移账。

- 选定流：除盐水
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_material`
- 来源：`jrc-polymers-2007`

###### 过氧化二碳酸二(2-乙基己)酯冷冻水乳液 (`ehp_formulation`)

代表供货制剂是 EHP-W40S，名义 40% 水中冷冻乳液、白色薄片，活性物 CAS 16111-62-9。称量整份制剂，保留批次含量、乳化剂及载体组成、储存和稀释损失；名义含量不是本站测量，公布的堆积密度不是液体密度。冷藏、解冻稀释和搅拌均为前景操作；若另有共同引发剂，逐项新增具体卡片。

- 选定流：过氧化二碳酸二(2-乙基己)酯冷冻水乳液
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_material`
- 来源：`jrc-polymers-2007`; `nouryon-ehp-w40s-2022`

###### 部分醇解聚乙烯醇细粒 (`pva_granules`)

以生产商 L-10 牌号为代表的主悬浮剂细粒在现场配液。记录真实牌号、醇解度、黏度检测基准、挥发分和干固体；生产商供货为细粒，不能写成已采购的水溶液。配液水和能源分别计量，所配溶液为内部制剂，不重复采购；其他醇解度牌号不自动等效。

- 选定流：部分醇解聚乙烯醇细粒
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_material`
- 来源：`jrc-polymers-2007`; `kuraray-spvc-poval-2025`

###### 氮气 (`poly_nitrogen`)

仅纳入实际惰化和吹扫氮气；记录压力、温度及干湿体积基准。已积分的燃气表体积仅换算一次，不能再乘时间；氮气不是转化的氯乙烯，也不能用来补氧或排放残差。

- 选定流：氮气
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_util`
- 来源：`jrc-polymers-2007`

###### 电力 (`poly_electricity`)

分表计量供货引发剂和氯乙烯储存制冷、PVA 配液、搅拌、泵及冷却设备；保留实际电网供电条件以及待机和失败批次辅助负荷。

- 选定流：电力
- 流属性/单位：电能 / kWh
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_util`
- 来源：`jrc-polymers-2007`

###### 饱和蒸汽 (`poly_steam`)

计量配液及开车间接加热所用外部饱和蒸汽，记录压力、温度和干度，并与凝结水回流表配对；上游供应数据须匹配质量或服务及回水边界，不能再按 MJ 重购同一加热服务。

- 选定流：饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_util`
- 来源：`jrc-polymers-2007`

###### 循环冷却补水 (`cooling_makeup`)

本过程管理循环冷却回路的外部补水，并分别记录反应器和回收冷凝负荷；计量补水、排污及蒸发飘水，不以循环总流量重复采购。塔和泵电耗归本过程，回收制冷独立表计不得重合。

- 选定流：循环冷却补水
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_util`
- 来源：`jrc-polymers-2007`

###### 瓦楞纸板运输箱 (`initiator_carton`)

引发剂制剂实际到货外箱，与制剂质量分开称重；生产商标准包装只证明一种可能包装，不是本站包装数量；若制剂供应数据已含包装，其供应负荷仅连接一次。内衬或其他组件另列。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_material`
- 来源：`nouryon-ehp-w40s-2022`

#### 输出

##### 产品流

###### 未脱单体的悬浮法聚氯乙烯水浆料 (`unstripped_slurry`)

内部转入 strip_recover；分别测整份浆料、聚合物固体、自由水、残余氯乙烯及助剂；此中间物不属于验收干树脂，不进入 Q。

- 选定流：未脱单体的悬浮法聚氯乙烯水浆料
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_balance`
- 来源：`jrc-polymers-2007`

###### 蒸汽凝结水 (`poly_condensate`)

间接加热的公用工程回水，不是聚合工艺废水，不自动成为外售联产品或蒸汽替代抵扣。

- 选定流：蒸汽凝结水
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_util`
- 来源：`jrc-polymers-2007`

##### 废物流

###### 含氯乙烯的聚合釜清洗水 (`poly_cleaning_effluent`)

整股清洗水携带实测氯乙烯、PVC 及助剂，转入 strip_recover 的水汽提装置；这是内部转移，不是最终环境排放。若使用另购清洗药剂或防粘釜制剂，使用本方法前须逐项补齐原子输入行。

- 选定流：含氯乙烯的聚合釜清洗水
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_balance`
- 来源：`jrc-polymers-2007`

###### 含氯乙烯的聚氯乙烯釜垢 (`poly_scale`)

单独称量机械清理产生的湿釜垢残渣，检测水、聚合物及单体并记录实际去向；已溶入或洗入废水的固体不再计为釜垢。

- 选定流：含氯乙烯的聚氯乙烯釜垢
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_balance`
- 来源：`jrc-polymers-2007`

###### 外送处理的循环冷却排污水 (`cooling_blowdown`)

计量整股单独冷却排污及真实污染和处理去向；所有另购水处理药剂均为额外原子产品输入，不允许隐含未记药量。

- 选定流：外送处理的循环冷却排污水
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_balance`
- 来源：`jrc-polymers-2007`

###### 受过氧化物污染的纸板运输箱 (`initiator_carton_waste`)

仅为实际废弃制剂箱，定量保留其中制剂残留及真实类别去向；回用退回箱保留库存跟踪，不假定每次收货立即报废。

- 选定流：受过氧化物污染的纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_balance`
- 来源：`nouryon-ehp-w40s-2022`

##### 基本流

###### 氯乙烯向空气排放 (`poly_vcm_air`)

储存、装卸、采样、开釜和泄漏按回收或控制后的实际终端释放量计量；设备泄漏与导排废气分别留账，不叠加重合总量。

- 选定流：氯乙烯向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_air`
- 来源：`jrc-polymers-2007`; `epa-ap42-pvc-1995`

###### 二氧化碳向空气排放 (`poly_co2_air`)

有测量或可靠物种分析时，记录引发剂分解产生并最终入空气的 CO2。生产商仅列主要可能产物，未给实际收率，也不能证明全部引发剂碳在此排出；另行区分有独立证据的反应水。

- 选定流：二氧化碳向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_air`
- 来源：`nouryon-ehp-w40s-2022`

###### 2-乙基己醇向空气排放 (`poly_eh_air`)

仅计量此已知分解产物的实际终端蒸气损失；留在产品或水相中的质量保留在组成账；总 VOC 或 COD 不能证明本物种质量。

- 选定流：2-乙基己醇向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_air`
- 来源：`nouryon-ehp-w40s-2022`

###### 冷却水蒸发向空气排放 (`cooling_evaporation`)

按真实水气测量确定净冷却蒸发，存在液滴飘逸时作为额外独立交换留账；这是物理水相变，不是化学反应水。

- 选定流：冷却水蒸发向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_poly_air`
- 来源：`jrc-polymers-2007`

### 过程：浆料汽提、单体回收及水汽提 (`strip_recover`)

#### 输入

##### 产品流

###### 未脱单体的悬浮法聚氯乙烯水浆料 (`slurry_in`)

与 unstripped_slurry 使用同一转移键、质量和组成接收；转移不新增上游负荷。

- 选定流：未脱单体的悬浮法聚氯乙烯水浆料
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_balance`
- 来源：`jrc-polymers-2007`

###### 饱和蒸汽 (`strip_steam`)

实际直接汽提蒸汽作为含水的质量输入，记录品质、表计及供应边界；蒸汽能源子账不能成为第二笔交换。

- 选定流：饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_util`
- 来源：`jrc-polymers-2007`

###### 电力 (`strip_electricity`)

浆料汽提、水汽提、真空、气柜、压缩、冷凝制冷和终端气体回收设备分项留账，含开停机活动。

- 选定流：电力
- 流属性/单位：电能 / kWh
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_util`
- 来源：`jrc-polymers-2007`

##### 废物流

###### 含氯乙烯的聚合釜清洗水 (`wash_in`)

内部接收 poly_cleaning_effluent，并逐笔匹配转移。

- 选定流：含氯乙烯的聚合釜清洗水
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_balance`
- 来源：`jrc-polymers-2007`

###### 含氯乙烯的聚氯乙烯离心母液 (`centrate_in`)

内部接收 centrate_out 进入水汽提；清洗水和离心母液保留独立账。

- 选定流：含氯乙烯的聚氯乙烯离心母液
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_balance`
- 来源：`jrc-polymers-2007`

#### 输出

##### 产品流

###### 已脱单体的悬浮法聚氯乙烯水浆料 (`stripped_slurry`)

测定残余氯乙烯、整份浆料及水和固体后转入 dewater；汽提不等于残余单体为零。

- 选定流：已脱单体的悬浮法聚氯乙烯水浆料
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_balance`
- 来源：`jrc-polymers-2007`

###### 氯乙烯 (`recover_vcm_out`)

回收单体内部转往 recycle_vcm_in，保留杂质检测及库存连续性。原生 CAS 75-01-4、氯乙烯生产工厂混合、Product 且仅质量属性、地理为空和纯度交付供应者未指定等限制完整保留；通用身份不证明回收品质，也不替代新购单体核算。

- 选定流：氯乙烯 `d9a7773b-72ce-4899-86c1-57e02a3f10cb`
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_balance`
- 来源：`jrc-polymers-2007`

##### 废物流

###### 脱单体后送外部处理的聚氯乙烯工艺废水 (`stripped_effluent`)

外送处理前跨越前景边界的整股水性废水；计量流量及具体残余氯乙烯、PVC、2-乙基己醇等检测组分。COD 仅作质量指标，不是物理碳量或物种质量；若处理供应数据已模拟这些组分，不再把它们报为终端入水排放。

- 选定流：脱单体后送外部处理的聚氯乙烯工艺废水
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_balance`
- 来源：`jrc-polymers-2007`

###### 聚氯乙烯污染的氯乙烯回收残渣 (`recovery_residue`)

计量实际单独收集的一股回收残渣，检测相态和单体并明确处置；若使用不同滤材或吸附剂，各自新增采购输入和废物行。

- 选定流：聚氯乙烯污染的氯乙烯回收残渣
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_balance`
- 来源：`jrc-polymers-2007`

##### 基本流

###### 氯乙烯向空气排放 (`strip_vcm_air`)

分别计量回收尾气及设备泄漏中终端氯乙烯，包括冷凝和缓冲容器；进入回收装置的物流是内部转移，不是排放。

- 选定流：氯乙烯向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_air`
- 来源：`jrc-polymers-2007`; `epa-ap42-pvc-1995`

###### 氮向空气排放 (`purge_nitrogen_air`)

跟踪由最终回收排口排出的实际吹扫氮气并与物理入口配对；其他单元排出的氮气分别计量并归属该处，不为补质量而重复计量。

- 选定流：氮向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_strip_air`
- 来源：`jrc-polymers-2007`

### 过程：离心固液分离 (`dewater`)

#### 输入

##### 产品流

###### 已脱单体的悬浮法聚氯乙烯水浆料 (`dewater_slurry`)

与 stripped_slurry 成对接收，转移处不归一化。

- 选定流：已脱单体的悬浮法聚氯乙烯水浆料
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dewater_balance`
- 来源：`jrc-polymers-2007`

###### 电力 (`dewater_electricity`)

离心机、泵和固体输送分表，包括报废和零产出运行。

- 选定流：电力
- 流属性/单位：电能 / kWh
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dewater_util`
- 来源：`jrc-polymers-2007`

#### 输出

##### 产品流

###### 脱水悬浮法聚氯乙烯湿滤饼 (`wet_cake`)

内部转入 finish；称量整份湿饼，独立检测水、树脂固体和残余单体；不得把湿质量当成厂门树脂 Q。

- 选定流：脱水悬浮法聚氯乙烯湿滤饼
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dewater_balance`
- 来源：`jrc-polymers-2007`

##### 废物流

###### 含氯乙烯的聚氯乙烯离心母液 (`centrate_out`)

转往 strip_recover 的 centrate_in；计量整份母液、悬浮聚合物及溶解单体，固体不再加入厂门产量。

- 选定流：含氯乙烯的聚氯乙烯离心母液
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dewater_balance`
- 来源：`jrc-polymers-2007`

###### 不合格悬浮法聚氯乙烯离心滤饼 (`dewater_reject`)

计量单独报废滤饼及实际回收处置；内部返工按转移及结转负荷留账，不新增产品验收。

- 选定流：不合格悬浮法聚氯乙烯离心滤饼
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dewater_balance`
- 来源：`jrc-polymers-2007`

##### 基本流

###### 氯乙烯向空气排放 (`dewater_vcm_air`)

离心和湿饼转移产生的实际终端逸散或导排氯乙烯；送回收的气体按匹配内部气体账记录，不能再计为释放。

- 选定流：氯乙烯向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dewater_air`
- 来源：`jrc-polymers-2007`; `epa-ap42-pvc-1995`

### 过程：间接干燥、筛分及树脂散装交付 (`finish`)

#### 输入

##### 产品流

###### 脱水悬浮法聚氯乙烯湿滤饼 (`finish_cake`)

与 wet_cake 配对接收，保留完整质量组成和结转负荷。

- 选定流：脱水悬浮法聚氯乙烯湿滤饼
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_balance`
- 来源：`jrc-polymers-2007`

###### 饱和蒸汽 (`finish_steam`)

本变体使用蒸汽间接加热干燥；分别计量蒸汽和回流凝结水并匹配上游蒸汽服务边界，本变体无直接燃烧。若用燃气干燥，须增加燃料、空气及各项燃烧排放卡片，不能静默替换。

- 选定流：饱和蒸汽
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_util`
- 来源：`jrc-polymers-2007`

###### 电力 (`finish_electricity`)

干燥风机、筛分、除尘、输送、筒仓储存和散装装车分别留表，纳入细粉回收及失败干燥。

- 选定流：电力
- 流属性/单位：电能 / kWh
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_util`
- 来源：`jrc-polymers-2007`

##### 基本流

###### 树脂干燥用空气 (`drying_air_in`)

为完整水和碳平衡计量干燥进气及湿度和真实体积基准；进气水分不是反应水。空气背景组分在物理账中进出配对，不赋予虚构影响。

- 选定流：树脂干燥用空气
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_air`
- 来源：`jrc-polymers-2007`

#### 输出

##### 产品流

###### 聚氯乙烯树脂（S-PVC） (`final_resin`)

唯一终端参考行：散装厂门验收的初级悬浮 PVC 树脂，不含包装及纯转售外购存量。原生完整名称仅有该 basename，路线和混合组成为空；类型 Product flow，仅一个质量属性；CAS、备注、地理、供货地点、具体牌号形态和合规批准均未建立（原生合规为 Not defined）。它只支持宽泛 S-PVC 身份；实际均聚物牌号、粉末形貌、黏度或 K 值基准、水分挥发分、残余氯乙烯及验收记录须独立证明；不得替换为 E-PVC、B-PVC、PVDC、PTFE 或配混成品。

- 选定流：聚氯乙烯树脂（S-PVC） `4f19f122-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_accepted`
- 来源：`jrc-polymers-2007`

###### 蒸汽凝结水 (`finish_condensate`)

间接干燥加热的实测公用工程凝结回水，与湿饼蒸发水分开；同一热量不能按蒸汽质量及外购能源重复计算。

- 选定流：蒸汽凝结水
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_util`
- 来源：`jrc-polymers-2007`

##### 废物流

###### 不合格悬浮法聚氯乙烯干树脂 (`finish_reject`)

称量真正送废物的筛上粗粒和细粉，区分内部回用捕集粉尘、返工树脂及单独验收的降级联产品；均不默认扩大 Q。

- 选定流：不合格悬浮法聚氯乙烯干树脂
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_balance`
- 来源：`jrc-polymers-2007`

##### 基本流

###### 水蒸气向空气排放 (`drying_water_air`)

以排气湿度体积及独立树脂残水测量核算，扣除实测进气水分后报告工艺净蒸发水；不由此推定化学生成水，另保留完整空气总水进出账用于闭合。

- 选定流：水蒸气向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_air`
- 来源：`jrc-polymers-2007`

###### 氯乙烯向空气排放 (`finish_vcm_air`)

计量干燥器、筒仓及装车的终端氯乙烯，区别于树脂残余单体及汽提回收；控制装置效率不能套通用固定因子。

- 选定流：氯乙烯向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_air`
- 来源：`jrc-polymers-2007`; `epa-ap42-pvc-1995`

###### 悬浮法聚氯乙烯颗粒物向空气排放 (`finish_pvc_dust`)

控制后最终未捕集聚合物粉尘，按实际粒径和组成基准计量；捕集物按内部回用或废物另记。历史 AP-42 低评级未控因子不作为受控工厂默认排放率。

- 选定流：悬浮法聚氯乙烯颗粒物向空气排放
- 流属性/单位：质量 / kg
- 数量规则：A / Q，仅为一次最终报告；使用该卡采集协议的原始分子
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_air`
- 来源：`jrc-polymers-2007`; `epa-ap42-pvc-1995`


## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 所有相关操作 | 优先分开单元操作并计量真实负荷；剩余共享公用工程按完整期间有记录的因果表计或工程驱动量分配，披露驱动量单位及数值，不把价格当成未经说明的默认依据。 | `jrc-polymers-2007` |
| allocation_recycle | 所有相关操作 | 内部回用单体不产生可售联产品或新料替代抵扣；保留捕集压缩负荷及期初期末库存；只有有收货方和规格证据的实际独立外售产物才可触发有理由的联产品分配。 | `jrc-polymers-2007` |
| allocation_offgrade | 所有相关操作 | 实际降级树脂与废物分开计量；参考分母仅含声明产品路线状态的唯一新增验收产量；失败、零产出、退货和返工活动及继承负荷仍保留归属，返工不得重复验收计量。 | `jrc-polymers-2007` |

## 8. 前景数据采集、计算与质量规则

collection_method 只采集未除的完整实际期间分子和库存在制结转负荷。aggregation_rule 仅标记最终报告基准；与卡片公式和 normalise_period 是同一次计算，不执行第二次除法。每个协议的 process_id 是唯一所属过程，不能把其他过程表计混入。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_poly_material | polymerise | fresh_vcm; recycle_vcm_in; poly_water; ehp_formulation; pva_granules; initiator_carton | 原始表计、批次和检测凭据 | 批次供应商；整份供货投料千克；库存变化；含量载水；PVA牌号固体；各用途稀释清洗水；回收单体转移键杂质；储存加料损失；失败批次；在制质量负荷 | 采集完整实际期间整批采购投料检测及水表原件，含失败及库存在制结转负荷；保留组分子账和内部回用键；不归一化，不重复采购。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_poly_util | polymerise | poly_nitrogen; poly_electricity; poly_steam; poly_condensate; cooling_makeup | 原始表计、批次和检测凭据 | 单元操作分表；时间戳；kWh；蒸汽千克压力温度干度；凝结水千克；气体体积速率时间基准；氮气状态；制冷待机开车失败负荷；分配驱动量；库存在制负荷结转 | 按物理单元操作采集完整实际运行期间独立原始表计，含待机失败零产出；保留原始单位状态和共享驱动量及期初期末在制负荷转移，不除以产量。 | kWh；kg；m3及所记录状态 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_poly_balance | polymerise | unstripped_slurry; poly_cleaning_effluent; poly_scale; cooling_blowdown; initiator_carton_waste | 原始表计、批次和检测凭据 | 配对转移键及去向；整份湿质量；独立树脂固体水残余单体助剂检测；存在时CO2和2-乙基己醇具体去向；库存在制期初期末；返工失败；继承转出负荷 | 对每份物理转移或废物独立称量采样并配对收发；保留实际期间原始质量相态物种、期初期末库存在制及结转负荷，含失败返工物料；不得由残差同时求未知产品和水，此处不除。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_poly_air | polymerise | poly_vcm_air; poly_co2_air; poly_eh_air; cooling_evaporation | 原始表计、批次和检测凭据 | 每个终端出口和泄漏源；配对进出体积湿度；具体物种浓度单位；积分量或速率；时长；压力温度干基；控制捕集；检出限；采样日期；失败运行；在制负荷 | 按各物种和终端介质采集校准监测及泄漏原始测量，进气湿度和排气状态体积逐次对应；保留真实积分量或速率时长、检出限和完整期间失败在制负荷，不归一化，不用COD替物种。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_strip_balance | strip_recover | slurry_in; wash_in; centrate_in; stripped_slurry; recover_vcm_out; stripped_effluent; recovery_residue | 原始表计、批次和检测凭据 | 配对转移键及去向；整份湿质量；独立树脂固体水残余单体助剂检测；存在时CO2和2-乙基己醇具体去向；库存在制期初期末；返工失败；继承转出负荷 | 对每份物理转移或废物独立称量采样并配对收发；保留实际期间原始质量相态物种、期初期末库存在制及结转负荷，含失败返工物料；不得由残差同时求未知产品和水，此处不除。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_strip_util | strip_recover | strip_steam; strip_electricity | 原始表计、批次和检测凭据 | 单元操作分表；时间戳；kWh；蒸汽千克压力温度干度；凝结水千克；气体体积速率时间基准；氮气状态；制冷待机开车失败负荷；分配驱动量；库存在制负荷结转 | 按物理单元操作采集完整实际运行期间独立原始表计，含待机失败零产出；保留原始单位状态和共享驱动量及期初期末在制负荷转移，不除以产量。 | kWh；kg；m3及所记录状态 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_strip_air | strip_recover | strip_vcm_air; purge_nitrogen_air | 原始表计、批次和检测凭据 | 每个终端出口和泄漏源；配对进出体积湿度；具体物种浓度单位；积分量或速率；时长；压力温度干基；控制捕集；检出限；采样日期；失败运行；在制负荷 | 按各物种和终端介质采集校准监测及泄漏原始测量，进气湿度和排气状态体积逐次对应；保留真实积分量或速率时长、检出限和完整期间失败在制负荷，不归一化，不用COD替物种。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_dewater_balance | dewater | dewater_slurry; wet_cake; centrate_out; dewater_reject | 原始表计、批次和检测凭据 | 配对转移键及去向；整份湿质量；独立树脂固体水残余单体助剂检测；存在时CO2和2-乙基己醇具体去向；库存在制期初期末；返工失败；继承转出负荷 | 对每份物理转移或废物独立称量采样并配对收发；保留实际期间原始质量相态物种、期初期末库存在制及结转负荷，含失败返工物料；不得由残差同时求未知产品和水，此处不除。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_dewater_util | dewater | dewater_electricity | 原始表计、批次和检测凭据 | 单元操作分表；时间戳；kWh；蒸汽千克压力温度干度；凝结水千克；气体体积速率时间基准；氮气状态；制冷待机开车失败负荷；分配驱动量；库存在制负荷结转 | 按物理单元操作采集完整实际运行期间独立原始表计，含待机失败零产出；保留原始单位状态和共享驱动量及期初期末在制负荷转移，不除以产量。 | kWh；kg；m3及所记录状态 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_dewater_air | dewater | dewater_vcm_air | 原始表计、批次和检测凭据 | 每个终端出口和泄漏源；配对进出体积湿度；具体物种浓度单位；积分量或速率；时长；压力温度干基；控制捕集；检出限；采样日期；失败运行；在制负荷 | 按各物种和终端介质采集校准监测及泄漏原始测量，进气湿度和排气状态体积逐次对应；保留真实积分量或速率时长、检出限和完整期间失败在制负荷，不归一化，不用COD替物种。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_finish_balance | finish | finish_cake; finish_reject | 原始表计、批次和检测凭据 | 配对转移键及去向；整份湿质量；独立树脂固体水残余单体助剂检测；存在时CO2和2-乙基己醇具体去向；库存在制期初期末；返工失败；继承转出负荷 | 对每份物理转移或废物独立称量采样并配对收发；保留实际期间原始质量相态物种、期初期末库存在制及结转负荷，含失败返工物料；不得由残差同时求未知产品和水，此处不除。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_finish_util | finish | finish_steam; finish_electricity; finish_condensate | 原始表计、批次和检测凭据 | 单元操作分表；时间戳；kWh；蒸汽千克压力温度干度；凝结水千克；气体体积速率时间基准；氮气状态；制冷待机开车失败负荷；分配驱动量；库存在制负荷结转 | 按物理单元操作采集完整实际运行期间独立原始表计，含待机失败零产出；保留原始单位状态和共享驱动量及期初期末在制负荷转移，不除以产量。 | kWh；kg；m3及所记录状态 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_finish_air | finish | drying_air_in; drying_water_air; finish_vcm_air; finish_pvc_dust | 原始表计、批次和检测凭据 | 每个终端出口和泄漏源；配对进出体积湿度；具体物种浓度单位；积分量或速率；时长；压力温度干基；控制捕集；检出限；采样日期；失败运行；在制负荷 | 按各物种和终端介质采集校准监测及泄漏原始测量，进气湿度和排气状态体积逐次对应；保留真实积分量或速率时长、检出限和完整期间失败在制负荷，不归一化，不用COD替物种。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |
| cp_accepted | finish | final_resin | 原始表计、批次和检测凭据 | 批次牌号路线状态；校准毛重皮重千克；净交付树脂千克；验收日期键；含水挥发分方法；残余单体检测；期初期末验收库存；退货返工；继承负荷；Q | 称量并唯一核对真实新增验收交付净树脂和完整库存在制群组；保留原始 Q 及批次账；所有退货返工验收连接原身份；此处不除任何负荷。 | kg；适用时含实测状态检测的m3 | 逐批逐表及逐次转移 | 同一完整实际生产验收期间，含失败零产出及期初期末结转 | 所属过程及明确匹配群组，披露共享驱动量 | 每 1 kg 参考流 | 校准和样品链、原始账签署及库存负荷配对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_attribution | all inventory rows | 保留完整期间原始总量、全部开车失败零产出返工活动以及期初期末在制树脂回收单体库存和结转负荷；每笔唯一负荷只归属一个产出群组，扣除真正结转到其他群组的负荷并加入本群组实际释放的继承负荷；不得扣除失败活动或重复计算退货验收。Q 为独立称重的本产品牌号路线状态唯一新增验收交付净树脂，不含外购转售、浆水或中间湿饼。 | raw_activity; stock_ledger; wip_ledger; accepted_lot_ledger | A; Q | `jrc-polymers-2007` |
| convert_raw | all inventory rows | 在归一化前把原始数量换算到各行单位；实测速率按真实时间积分，已积分气液体积只按实际压力温度组成密度及干湿基准换算一次；电力保留 kWh；蒸汽按真实千克及状态回水边界，不为同一服务另购 MJ；次级流属性系数不是密度测量。 | raw_meters; calibration; state_assay; supplier_basis | converted raw totals | `jrc-polymers-2007` |
| formulation_subledger | ehp_formulation; pva_granules; poly_water | 整份供货质量为商业输入；组分质量等于供货质量乘独立证明的批次质量分数，区分活性过氧化物、稳定乳化剂、载水及其他真实组分。现场 PVA 配液等于实际细粒加实测水减实测损失；组成和溶液账不新增重复采购交换。 | supplied_lot_mass; lot_mass_fractions; measured_dilution_water; measured_losses | constituent ledger | `nouryon-ehp-w40s-2022`; `kuraray-spvc-poval-2025` |
| normalise_period | all inventory rows | 原始换算及群组归属后，所有非参考交换仅一次报告 q = A / Q；A 为该交换声明单位的分子，Q 为正的验收净树脂千克数；final_resin 为 1 千克。卡片公式和协议汇总列指同一次最终报告操作，不是顺序除法；collection_method 不执行 A/Q；Q 为零时保留绝对清单待审。 | A; Q; cp_accepted | q per 1 kg reference flow | `jrc-polymers-2007` |
| independent_species_balance | all inventory rows | 独立测产品数量、残余氯乙烯、水挥发分及真实物种；跨成对转移核对完整物理及元素账。理想氯乙烯重复单元加成保持 C2H3Cl 且无水联产。EHP 原件列 CO2 和 2-乙基己醇为分解产物，但未给本站收率或去向；不得由闭合同时推定化学水和未知输出，也不得由 COD 推物种；相态及自由水变化另记。 | measured_species; measured_product; phase_water; paired_transfers; stock_ledger | physical and species reconciliation | `jrc-polymers-2007`; `nouryon-ehp-w40s-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_grade | reference product | 独立验收及留样：实际均聚物牌号、悬浮粉末形貌、黏度或K检测方法、粒径孔隙率证据、残余单体与水挥发分方法；通用原生 UUID 不能替代。 | 含检出限及采样日期的证书和原始检测 |
| quality_period | all inventory rows | 使用统一产品牌号路线状态期间、唯一验收及全部失败活动；期初期末在制及回收库存同时有质量和继承负荷凭据；未知结转阻止群组计算。 | 经签署的生产库存在制核对及分配证据 |
| quality_identity | UUID-bearing rows | 原生 S-PVC 仅有宽泛名称、Product/Mass及分类；具体牌号形态、CAS、备注、地理和路线混合均缺，合规为 Not defined。原生氯乙烯 CAS75-01-4规定工厂生产混合和单体生产，无地理纯度供应者。保留限制，证据使用精确参考属性单位版本，并独立核验实际供应相容。 | 完整原生名称介质属性审计及真实供应资料 |
| quality_species | physical inventory | 独立检测的物种相态账和实测产品质量；量化不确定性及检出限；禁止 COD 或总VOC代替物种，禁止拟合未知反应水与产品残差。 | 校准、样品链及质量元素相态核对 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | 所有相关操作 | 核验完整原生身份及实际牌号形态路线证据；近似 CAS 不能把 PVC 替换为 PVDC、PTFE 或配混料；原生未指定字段保持未指定，身份相容不证明供应数量或背景适用性。 | `jrc-polymers-2007` |
| validate_denominator | 所有相关操作 | 要求 Q > 0，所有分子对应相同产品、路线、牌号、状态及验收群组；验收去重，保留报废零产出及期间库存在制负荷转移；若无正的匹配产出，只保留绝对负荷，不虚构归一化数据集。 | `jrc-polymers-2007` |
| validate_closure | 所有相关操作 | 用实测进出及库存核对过程和公用工程完整物理质量、C、H、Cl 及水；理想氯乙烯加成聚合不净生成水。引发剂分解、任何副反应、溶解物种、残余单体、水相变化及化学水生成消耗须有独立证据，不得用同一残差同时拟合未知反应水与未知树脂产量；COD 不是碳或物种质量平衡。 | `jrc-polymers-2007`; `nouryon-ehp-w40s-2022` |
| validate_emissions | 所有相关操作 | 回收回用单体、树脂残余单体、汽提后废水负荷、终端有组织入空气及设备泄漏分开，所有终端物种连接介质和实际控制边界；不得把总 VOC、历史未控 AP-42 因子或表面闭合当成物种去除测量。 | `jrc-polymers-2007`; `epa-ap42-pvc-1995`; `nouryon-ehp-w40s-2022` |
| validate_limits | 所有相关操作 | 记录校准、分析检出限、缺测期间和方法不确定性；未检出不是实测零。对全部额外实际交换扩展记录，不得静默漏项；普通辅助 UUID 或供应匹配缺口为明确的数据包后续工作，而真正缺失的参考或反应换算方法阻止使用。 | `jrc-polymers-2007` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；background_dataset，须有真实证据及独立方法审查 |
| downstream_use | 作为声明相容的 PVC 制品制造的树脂输入 |
| allowed_use | 相同聚合物、牌号族、粉末状态、悬浮路线和声明厂门边界，且上游链接透明 |
| excluded_use | 不得由通用身份推及 PVDC、PTFE等氟聚合物、E-PVC糊料、B-PVC、配混料、再生料、成品或已核验供应商专属 SKU |
| required_metadata | PVC 均聚物身份; 水相间歇悬浮路线; 初级粉末状态; 实际牌号及 K 值或黏度方法; 粒径及孔隙率基准; 含水和挥发分及检测方法; 残余氯乙烯及检测方法; 实际引发剂制剂和 PVA 牌号; 厂门交付状态; 场址及期间; 原料路线及上游边界; 原生身份限制 |
| required_quality_disclosure | 来源地理年代、实际前景期间、完整性及库存负荷、受限排放数据、整份制剂、原生缺字段及全部待配供应者UUID；不得推定科学批准或分类映射 |
| update_trigger | 牌号配方、原料引发剂形态、反应路线、回收控制、干燥热源、处理边界、供应地理、实测分母或库存归属改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-polymers-2007 | official_guidance | 欧盟委员会《聚合物生产 BAT 参考文件》，2007年8月，第2章2.3.1节23–24页及第5章5.2.1–5.2.8节，94–100页，图5.1及5.3节。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | 支持双键链增长加成、引发剂残留去向、悬浮路线、汽提、固液分离、干燥、单体水回收及排放接口。理想重复单元无水计量是原子守恒推断，不是副反应水实测。历史欧洲行业工厂观察，不采用为通用转化率、配方、能耗范围、现行法律限值或本站排放因子；清单归属和归一是本 PCR 操作方法，不冒作 BREF 规定的 LCA 分配。 |
| nouryon-ehp-w40s-2022 | literature | Nouryon，Trigonox EHP-W40S 产品数据表，2022-6-30，1–4页。https://www.nouryon.com/globalassets/inriver/resources/pds-trigonox-ehp-w40s-polymer-production-glo-en.pdf | 生产商原件支持一种冷冻水乳液供货引发剂、CAS、悬浮用途、储存稀释及所列分解产物；名义40%是制剂身份，不是实际批次检测，堆积密度不是液体密度。未提供配方剂量、本站反应收率、冷藏电耗或排放比例。适用性须生产商用户测试，不是完整配方或安全操作规程。 |
| kuraray-spvc-poval-2025 | literature | Kuraray，《KURARAY POVAL for Suspension PVC 技术数据表》，2025/04/15，1–4页。https://www.kuraray-poval.com/fileadmin/user_upload/KURARAY_POVAL/technical_information/grades_by_region/grades_for_s_pvc/TDS_KURARAY_POVAL_grades_for_S-PVC_English.pdf | 支持细粒供货、主副 PVA 牌号及依牌号而异的现场溶解分散。L-10 是代表身份，不证明未来供应商、配方剂量、通用醇解牌号、本站温度能耗或与 EHP 联合配方；仍须批次及真实配方相容证据。 |
| epa-ap42-pvc-1995 | official_guidance | 美国 EPA，AP-42 6.6.1《聚氯乙烯》，1991年9月，1995年1月重排，1–2页。https://www.epa.gov/sites/default/files/2020-10/documents/c06s06-1.pdf | 独立历史资料支持单体颗粒释放与回收控制的区分。正文泛论塑料，未控因子评级 E、证据来自1969–1970年；不以其醇酸示例或旧数值规定 S-PVC 化学、受控排放或现代合规。 |
