---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.pallets-box-pallets-and-other-load-boards-of-wood-pallet-collars-of-wood
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 购入窑干针叶锯材的新制钉装木托盘

## 1. 范围与适用性

本制造PCR适用于中国大陆全电驱工厂中，将购入的窑干针叶实木锯材切料/开槽后用钢钉组装的新制、未涂漆、无包裹托盘。块和纵梁均须为实木锯材；声明实际设计，不假定欧标尺寸。订单要求热处理时，须在购入木料收货前完成，并在上游供给模型中可追溯。仅有窑干状态不能证明植物检疫处理。来源：`usda-pallet-2020`、`ippc-ispm15-2018`。

排除树脂胶结压制/模压木托盘、复合块、胶合板/定向刨花板托盘、阔叶或混合阔叶原料、旧托盘零件、维修/再制造、循环池管理、租赁、货物运输服务、托盘套环及箱式托盘。现场干燥、热处理室、熏蒸、涂漆和燃烧不属于所选路线，使用前须有另行完整方法。这些阶段的不存在须有证据，不能通过删去运行设备实现。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.pallets-box-pallets-and-other-load-boards-of-wood-pallet-collars-of-wood` |
| classification_refs | CPC 3.0 `31702`; narrower |
| covered_products | 新制钉装针叶实木锯材托盘；实木块式或纵梁式结构 |
| excluded_products | 压制木材；复合零件；维修；循环池服务；套环；箱式托盘；第1节其他排除路线 |
| representative_product | 实际订单配置的验收新托盘 |
| production_route | 购入窑干针叶锯材，按需供方热处理，电驱切料/开槽，钢钉装配，检验，电烙印，无包裹厂门交付 |
| market_state | 新制完整未涂漆托盘，空载，声明含水率及处理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造验收新托盘；这是声明产品单位，而非货物/重复使用服务 |
| How much | 1 kg |
| How well | 实际树种、等级、尺寸、实木块/纵梁结构、铺板/进叉配置、钢钉规格及有记录的订单验收；披露额定载荷测试基准 |
| How long or cycle | 一个制造至厂门报告期；不指定寿命、周转次数或吨公里 |
| reference_flow_link | `pallet` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际木种学名及混合份额；森林/供方来源；收货和厂门含水率及干/湿基；尺寸及公差；铺板数量/厚度；实木块或纵梁结构；进叉/开槽设计；钢钉类型、钢号、镀层、数量及质量；验收托盘净质量计量；生产日期及场址；声明干燥和热处理的供方、批次、过程边界及相应证明；实际额定载荷/测试基准或明确未核实；未涂漆/无包裹状态；不声明重复使用服务 |

在数据集元数据或过程/参考流备注中声明上述限定信息。一千克托盘不构成载荷或服务等效声明。下游按件展示须使用该确切配置的实测质量；不得假定千克/件。货物装载、损坏、回程运输、维修和完成的周转属于采用原始记录另行定义的服务模型，不嵌入替代或循环信用。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用1千克声明厂门含水状态的验收完整托盘净质量，含装入钢钉。采用cp_accept计量验收批次净质量Q；排除废品、包装和货物。不假定单件重量。 |
| moisture_basis | timber; pallet; sawdust_sale; offcut_sale; sawdust_waste; offcut_waste | 质量及干基含水率 | kg; kg/kg | 采用cp_material/cp_residue区分收到基与绝干木质量；应用第8节moisture_wood。装入钢材不是木材绝干质量。来源：usda-wood-handbook-2021。 |
| electric_unit | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计量电功；按3.6兆焦/千瓦时将千瓦时转换为兆焦。数据库属性名称是技术参考，不是燃料发热量或交付热量声明。 |

## 5. 系统边界

前景边界从接收已干燥、去皮针叶实木锯材及购入钢钉开始，到验收和无包裹厂门交付结束。将木料准备、装配和验收聚合为一个前景单元，同时保留独立阶段计量及质量记录。内部木料/零件交接不构成额外交换；若数据集拆分阶段，内部实物链接两端必须有相同数量及状态。返工保持在内部，直至验收或拆分为材料废物。来源：`usda-pallet-2020`。

通过关联上游供给模型计入林业、锯材制造、窑干、所声明的热处理、钢钉制造、电网电力、维护油和实际进厂运输。不得默认运输距离或车辆载荷。背景锯木厂门木料模型须另接有证据的进厂运输模型；已交付模型不得重复运输。仅在所选路线中前景现场热能不存在。上游燃烧排放，包括生物二氧化碳，仍保留在LCI中；气候报告口径不能删除这些排放。木材碳仅作为实测物料平衡记录，不作为假定的负基本流或重复使用收益。

声明热处理时，将供方处理批次、能源/排放边界及符合性记录与接收零件关联。ISPM 15附件1允许组装前处理；常规热处理声明要求木材整个断面（含芯部）达到至少56摄氏度并连续保持30分钟。此处理条件不提供能源数量或干燥终点。不得默认蒸汽供热：购热须有供方净交付焓证据及另行核实的交换。需要现场热处理或未处理生材的变更使本路线不适用。来源：`ippc-ispm15-2018`。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | received_kiln_dried_solid_coniferous_timber |
| starting_condition_role | 上游供给接口，不是无负荷起点 |
| product_classification_scope | CPC 3.0 `31702`; narrower |
| recursive_input_rule | 本新制路线不投入成品托盘或旧托盘零件 |
| upstream_dataset_requirement | 状态/数量兼容的木材/钢钉/能源/油供给；有证据的干燥和条件性热处理；实际进厂运输；废物运输/处理模型 |
| disclosure | 实际木种学名及混合份额；森林/供方来源；收货和厂门含水率及干/湿基；尺寸及公差；铺板数量/厚度；实木块或纵梁结构；进叉/开槽设计；钢钉类型、钢号、镀层、数量及质量；验收托盘净质量计量；生产日期及场址；声明干燥和热处理的供方、批次、过程边界及相应证明；实际额定载荷/测试基准或明确未核实；未涂漆/无包裹状态；不声明重复使用服务 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pallet_manufacture | 电驱锯切、钉装及厂门验收 | required | 仅所选购入窑干锯材路线 | 前景制造，保留阶段记录 | 1 kg |

### 过程：电驱锯切、钉装及厂门验收 (`pallet_manufacture`)

#### 输入

##### 产品流

###### 购入针叶锯材 (`timber`)

仅适用于实际树种和等级的窑干实木针叶锯材。供方记录须说明含水率及收货前完成的热处理。称量净投入；在关联供给模型中计入一次上游干燥/热处理及进厂运输。

- 选定流: 窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_material`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### 钢钉 (`nails`)

本广义身份在此限定为每个交换的一种购入钢钉规格。记录钉杆形式、长度、直径、钢号、镀层及留存质量。不同钢钉规格须在数据集中分别交换；不得使用螺钉/螺栓混合量或泛紧固件数量。

- 选定流: 钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_material`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### 低压电力 (`electricity`)

计量锯切/开槽、钉装压缩机、电驱搬运、除尘及验收用电。记录阶段小计及共用电表归属。仅在供电地域/电压及背景数量兼容时使用此中国用户侧低于1千伏身份；供给已包含的电网损耗不重复添加。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采用 cp_energy；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_energy`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### 石油基润滑油 (`oil`)

仅在实际使用石油馏分润滑油时纳入。按领用、退回和库存变化称量并归属本生产线。这是维护油而非燃料；数据库发热量描述不是PCR系数。其他配方须有其独立核实交换。

- 选定流: 润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_maintenance；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_maintenance`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

#### 输出

##### 产品流

###### 验收成品托盘 (`pallet`)

切料、按需开槽、钉装、检验及按需电烙印后的唯一最终输出。中间交接不使用成品托盘UUID。验收净质量包含木材水分及装入的钢钉，排除包裹和货物。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: fixed_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: method_formula
- 采集协议: `cp_accept`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### 售出未浸渍针叶材锯末 (`sawdust_sale`)

仅在实际单独售出针叶材锯末，且有合法产品/联产品状态、接收客户认可规格和持续实际用途的记录时纳入；仅有价款不足以证明。木质材料在此是广义物理定位流，不是锯末商品背景。分别限定本交换的实际树种、颗粒形态/粒径、未团聚及未化学处理状态、声明时另有证据的供方热处理、含水率、实测湿/干质量和接收方。排除边角料、树皮、粉碎混合燃料及已计为废物或内部退回的质量。数据集使用前仍须核实接收方/供应方参考数量、含水计量约定和下游边界兼容性。

- 选定流: 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_residue；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residue`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### 售出未浸渍针叶材实木边角料 (`offcut_sale`)

仅在实际单独售出针叶材实木边角料，且有合法产品/联产品状态、接收客户认可规格和持续实际用途的记录时纳入；仅有价款不足以证明。木质材料在此是广义物理定位流，不是通用废料商品背景。分别限定本独立交换的实际树种、实木形态/尺寸、未团聚及未化学处理状态、声明时另有证据的供方热处理、含水率、实测湿/干质量和接收方。排除木片、锯末及已计为废物或内部退回的质量。数据集使用前仍须核实接收方/供应方参考数量、含水计量约定和下游边界兼容性。

- 选定流: 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_residue；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residue`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

##### 废物流

###### 捕集废锯末 (`sawdust_waste`)

一个未浸渍捕集锯末流，送往有记录的场外处理；与排入空气的颗粒物及售出锯末分开。记录接收单位和实际处理；该身份不选择焚烧或回收。

- 选定流: 木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_residue；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residue`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### 废未浸渍针叶材实木边角料 (`offcut_waste`)

以废物离厂的实际未团聚针叶实木切割边角料及不合格托盘中分离的木料。记录树种、含水率、未浸渍/未涂层状态、无胶黏污染或实际污染程度及接收单位/处理。本广义物理身份为条件性采用：孤立的CPC团聚废木分类与名称及木工描述冲突，须供方/源数据澄清。排除拆出的钢钉及已计为销售或内部退回的物料。

- 选定流: 木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_residue；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residue`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### 废钢钉 (`steel_waste`)

称量跨越边界的报废或拆出钢钉。此中国装配废钢身份适用于装配废品而非机加工废料；记录镀层及接收方，不编造回收信用。

- 选定流: 废钢 `0e66603a-40d3-4c52-9223-4c18d32c11fd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_residue；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residue`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### 废润滑油 (`used_oil`)

仅在实际移出废油时纳入；称量收集废油，记录污染情况和合规去向。不得推定回收质量等于新油投入，也不得仅凭身份指定处理。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_maintenance；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_maintenance`
- 来源: `usda-pallet-2020`, `usda-wood-handbook-2021`

##### 基本流

###### 室外细木粉尘 (`pm25`)

经控制后释放到室外空气未特指子介质的PM2.5及以下颗粒物质量。采用实际采样或有记录的场址排放模型；捕集粉尘是废物而非空气排放。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_air；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_air`
- 来源: `epa-sawmill-dust-2014`

###### 室外中间粒径木粉尘 (`pm_coarse`)

经控制后释放到室外空气未特指子介质的大于PM2.5至PM10颗粒物质量。仅由同一源、时段及颗粒物定义的兼容嵌套测量计算。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_air；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_air`
- 来源: `epa-sawmill-dust-2014`

###### 室外大于PM10木粉尘 (`pm_over10`)

经控制后释放到室外空气未特指子介质的大于PM10颗粒物质量。不得在三个互不重叠粒径段之外再次相加总颗粒物或PM10。室内暴露不是此流。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_air；实际归属数量除以来自 cp_accept 的验收批次净质量 Q。不设默认数量；不适用或零须有证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_air`
- 来源: `epa-sawmill-dust-2014`

## 7. 分配与共产品处理

维护未分配的木材湿/干质量、水、钢钉和实测碳实物账，包括收货、厂门产品、残余物去向及库存变化。另行维护环境负荷账。存在联产品销售时，细分并独立计量木料准备与钉装/验收。仅对共同木料准备负荷，按分流点托盘木零件及合格售出木联产品的实际绝干质量分配；废物排除在联产品分母之外。将托盘份额用于共同上游木材及准备负荷。钉装、检验及产品专用后续能源全部归属托盘。不得将联产品实物输出或内部链接数量乘以托盘分配份额。来源：`usda-pallet-2020`第1.4节（阶段区分）；`usda-wood-handbook-2021`（干基）。

销售、接收客户认可的产品规格、合法产品/联产品状态及持续实际用途证据区分联产品与废物；收入本身既不能确立产品状态，也不能构成向残余物分配负荷的依据。每份残余物质量只能走一条销售/废物路径。无联产品时托盘份额为一。未知质量、未解决的实际产品状态/用途、不兼容的接收方/供应方数量或含水基准，或无法分离的阶段电表须保留为生产数据集的明确缺口。将废物处理归属其产生活动并披露选定的场外背景边界。不默认计入燃料/材料避免负荷、回收信用、寿命延长或系统扩展。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_accept | pallet_manufacture | pallet | 验收及称量 | 批次；配置；树种；尺寸；块/纵梁；钢钉规格；验收数量；皮重；验收批次净质量Q；含水率；废品；厂门 | 采用经校准秤称量验收完整托盘，排除包裹及货物；核对订单和废品记录。实测单件重量仅保留为补充实际记录。 | kg | 每批 | 同一报告期及验收配置 | 实际生产线/场址及供方 | 每 1 kg 参考流 | 校准；可追溯原始记录；采样覆盖；核对 |
| cp_material | pallet_manufacture | timber; nails | 收货、库存及领用 | 供方；树种；等级；尺寸；木含水率；试样湿重和绝干重；钢钉类型/镀层/数量；质量；期初/期末库存；退回；供方窑干/热处理批次；进厂运输 | 分批称量材料净重，核对供方及库存记录。按有记录方法将代表树种/批次木试样烘至恒重；校准水分仪须有树种及温度修正证据。核实供方处理及交付边界。 | kg; kg/kg | 每批及期末 | 同一报告期及验收配置 | 实际生产线/场址及供方 | 每 1 kg 参考流 | 校准；可追溯原始记录；采样覆盖；核对 |
| cp_energy | pallet_manufacture | electricity | 阶段电表读数 | 电表；电压；供电地域；时间；读数；准备/钉装/除尘/搬运/烙印小计；归属依据；报告批次 | 使用校准分时电表；核对生产线总数和账单。分离准备与后续装配/验收；计量电驱压缩机和搬运，包括归属生产的空载需求。 | kWh; MJ | 连续，每报告期结算 | 同一报告期及验收配置 | 实际生产线/场址及供方 | 每 1 kg 参考流 | 校准；可追溯原始记录；采样覆盖；核对 |
| cp_residue | pallet_manufacture | sawdust_sale; offcut_sale; sawdust_waste; offcut_waste; steel_waste | 分类磅单及去向 | 产生阶段；残余物类型；湿/干质量；含水率；销售或废物；颗粒/实木形态及尺寸；处理状态；接收方；认可产品规格；合法状态/用途证据；供应方/下游参考数量及含水基准；发票/转移单；拆出钢钉；内部退回；库存；采用时的实测碳质量分数 | 分别称量容器并记录去向、销售/用途及处理。在把售出流作为产品前核实实际客户规格、合法产品/联产品状态及持续用途；独立于广义UUID核实接收方/供应方原生质量含水约定及边界兼容性。使用相同干基方法取样木含水率。分离废品木料与钢材；内部返工只计一次，分配负荷前核对未分配实物平衡。 | kg; kg/kg | 每容器/发运及期末 | 同一报告期及验收配置 | 实际生产线/场址及供方 | 每 1 kg 参考流 | 校准；可追溯原始记录；采样覆盖；核对 |
| cp_maintenance | pallet_manufacture | oil; used_oil | 维护领用及废物磅单 | 油配方；领用/退回质量；库存；机时；废油质量/污染；接收方；报告期 | 分别称量新油和废油；追踪维护间隔，采用有记录运行小时归属设备。未知未收集油保持为平衡缺口，不是假定排放。 | kg | 每次维护 | 同一报告期及验收配置 | 实际生产线/场址及供方 | 每 1 kg 参考流 | 校准；可追溯原始记录；采样覆盖；核对 |
| cp_air | pallet_manufacture | pm25; pm_coarse; pm_over10 | 控制后室外排放 | 源；子介质；采样方法；颗粒物定义；粒径截点；浓度；废气体积及状态；运行时长；控制效率；逸散路径；不确定性 | 对代表运行的控制后烟道及室外逸散质量进行测量，或采用有记录且输入经核实的场址工程模型。保持可过滤/可凝结定义一致；不自动采用EPA室内零排放或PTE系数。用记录识别确实不存在的路径。 | kg | 代表性测试及连续活动覆盖 | 同一报告期及验收配置 | 实际生产线/场址及供方 | 每 1 kg 参考流 | 校准；可追溯原始记录；采样覆盖；核对 |

### 计算规则

| rule_id | Applies to | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | 每行归一化数量 = 报告期归属交换数量 / 验收批次净质量 Q。产品输出 = Q / Q = 1 千克。Q须为正且来自cp_accept；保留各分子单位。 | period exchange; Q; cp_accept | 每 1 kg 参考流的行数量 |  |
| moisture_wood | timber; pallet; sawdust_sale; offcut_sale; sawdust_waste; offcut_waste | 干基含水率分数 u = (木湿质量 - 木绝干质量) / 木绝干质量；木干质量 = 木湿质量 / (1 + u)。托盘应用木含水率前扣除实测装入钢材质量。不设固定u或密度。 | wood mass; measured u; cp_material; cp_residue | 干木及留存水 | usda-wood-handbook-2021 |
| electric_conversion | electricity | 电功（兆焦）= 电表千瓦时 × 3.6；保留阶段总数，仅对共同准备负荷应用分配规则，再应用normalize_batch。 | metered kWh; cp_energy | 每参考流的归属兆焦 |  |
| joint_wood_share | timber; electricity; oil | 托盘份额 = 分流点托盘木零件绝干质量 / (该质量 + 分流点合格售出木联产品绝干质量)。仅用于共同准备及其上游负荷；专用后续负荷保持全额。实物流质量保持原量。 | stage meters; cp_residue; dry mass at split | 负荷分配份额 | usda-pallet-2020 |
| dust_partition | pm25; pm_coarse; pm_over10 | 仅对相同源、时段及测量定义：细 = PM2.5；中 = PM10 - PM2.5；粗 = 总颗粒物 - PM10。要求总颗粒物 ≥ PM10 ≥ PM2.5 ≥ 0。不兼容或缺失测量保持待定；不假定粒径份额。 | compatible nested emissions; cp_air | 三个互不重叠排放质量 | epa-sawmill-dust-2014 |

### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| config_trace | all inventory rows | 树种/配置、含水和处理状态、厂门及报告期相同；数据库流身份本身不是兼容背景数据集。 | 订单、供方及实测记录 |
| balance | all inventory rows | 核对未分配干木、留存水、装入/报废钢材及库存。采用碳核算时，测定树种/批次碳质量分数，追踪木碳进入产品、残余物及实际释放；披露残差与不确定性。不得通过编造排放补齐缺失水/碳。 | 实物账及独立负荷账 |
| coverage | all inventory rows | 分别记录适用、不存在及未知交换。未核实身份不填UUID；无活动数据不填默认量。数据集采用条件性售出残余物身份之前须核实实际物理限定、合法产品状态/用途及接收方/供应方数量含水兼容性。 | 逐行证据、电表、采样及废物去向 |

## 9. 校验规则

要求恰好一个最终托盘参考输出、正的验收批次质量及双语相同参考基准。对每行核对物理类型、实际材料状态、直读参考属性/单位和前景采集协议。将不同钢钉规格及额外实际耗材拆分为数据集原子交换；实质路线变化须方法审核。归一化前核对时段边界、库存/返工及内部链接两端。

本PCR拒绝压制木材、旧零件、维修/循环池数据集。拒绝遗漏上游干燥/所声明热处理/进厂运输、重复电网损耗或残余物去向、分配后的实物输出、嵌套粉尘重复计算，或编造质量、密度、额定载荷及周转信用。热处理声明须供方批次/符合性证据；其他树种/几何形状测量不能证明它。身份缺口及未知排放是未决而非零。本编写规则不声明TIDAS语义批准或方法已独立批准。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 本明确新托盘路线的千克基制造；作为另有证据服务模型的上游投入 |
| excluded_use | 未限定货物/载荷服务比较；维修、租赁或循环池服务；自动重复使用/替代信用 |
| required_metadata | 实际木种学名及混合份额；森林/供方来源；收货和厂门含水率及干/湿基；尺寸及公差；铺板数量/厚度；实木块或纵梁结构；进叉/开槽设计；钢钉类型、钢号、镀层、数量及质量；验收托盘净质量计量；生产日期及场址；声明干燥和热处理的供方、批次、过程边界及相应证明；实际额定载荷/测试基准或明确未核实；未涂漆/无包裹状态；不声明重复使用服务 |
| required_quality_disclosure | 原始采集覆盖、干/湿及库存平衡、阶段分配、上游供方兼容性、热处理证据、残余物去向、未决条件性身份和排放不确定性 |
| update_trigger | 树种、尺寸/结构、钢钉/镀层、干燥/热处理位置、电压/地域、现场热能/燃料设备或销售/处理路线变化 |

## 11. 数据源

| 来源ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| usda-pallet-2020 | literature | [USDA Forest Service, FPL-RP-707 (2020)](https://research.fs.usda.gov/download/treesearch/61866.pdf), §1.2.2, §1.4, §2.5; printed pp. 6, 8, 16–17 | 仅制造阶段及阶段分配区分；美国2016调查及服务假设不提供默认值 |
| ippc-ispm15-2018 | standard | [IPPC ISPM 15, 2018, published 2019](https://www.ippc.int/static/media/files/publication/en/2019/02/ISPM_15_2018_En_WoodPackaging_Post-CPM13_Rev_Annex1and2_Fixed_2019-02-01.pdf), §2.1, Annex 1; printed pp. 7, 12 | 加工木材区分及供方零件热处理边界/声明条件；无能源系数 |
| usda-wood-handbook-2021 | handbook | [USDA FPL-GTR-282 (2021)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf), Chapters 4, 13; printed pp. 4–1, 13–2 | 干基含水率及烘干取样；无通用密度或默认含水率 |
| epa-sawmill-dust-2014 | official_guidance | [EPA Region 10 sawmill PM PTE memorandum, 8 May 2014](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf), activity table and notes, printed pp. 1–2 | 仅嵌套粒径定义及粉尘筛查；太平洋西北印第安地区PTE系数排除锅炉，不是实际托盘排放默认值 |
