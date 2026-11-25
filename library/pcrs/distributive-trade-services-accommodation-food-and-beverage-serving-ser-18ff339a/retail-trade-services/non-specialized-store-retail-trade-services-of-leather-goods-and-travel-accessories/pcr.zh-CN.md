---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-leather-goods-and-travel-accessories
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# Longchamp L1500987001 黑色牛皮手袋的柜台零售服务

## 1. 范围与适用性

本候选规则规定非专营店中同一原始 Longchamp Le Pliage Xtra XS 黑色手袋（型号 L1500987001）的部分增量、无现金、进店柜台零售服务。原始产品页列明牛皮、17 x 14 x 10 cm、暗银色五金、聚酰胺/聚酯再生提花内衬、拉链/按扣闭合及可拆可调肩带。该网页是规格证据，不是 LCI 或完整物料清单。供应商批次记录必须核实物种、鞣制/整理/涂层、内衬比例、线、胶、五金合金/镀层、肩带、标签/商标以及完整原始展示/运输包装 BOM；未知数量绝不能转为纯皮革质量。每个池必须事先固定一个经签认的包装配置。禁止用型号10291987001 或其他颜色/型号替代。实际门店商品组合及交易记录必须证明非专营渠道；制造商品牌网页不证明该渠道。暗银色表示颜色，不代表银材质；尺寸不能确定净重。

服务从店铺接收门有证据的实物保管开始，止于最终有效的顾客验收，并修正后续验收历史。排除店铺配送、礼品包装、打印票据、修理、养护膏、防水处理、重新包装、分离零件销售及永久展示品。展示使用照片；不得默默从存货提取实物资产。适用设施必须有所有固定燃料燃烧和制冷剂（包括房东系统）均不存在的证据，采用电阻加热/自然通风。不存在情况不明阻断完整性。排除 CPC2831、291 的商品、292 的其他商品及皮革批发；本规则是62156 下的较窄候选范围，不覆盖整个叶类。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-leather-goods-and-travel-accessories |
| classification_refs | CPC3.0:62156; narrower; Non-specialized store retail trade services, of leather goods and travel accessories |
| covered_products | Longchamp L1500987001 黑色牛皮手袋的柜台零售服务 |
| excluded_products | 服务从店铺接收门有证据的实物保管开始，止于最终有效的顾客验收，并修正后续验收历史。排除店铺配送、礼品包装、打印票据、修理、养护膏、防水处理、重新包装、分离零件销售及永久展示品。展示使用照片；不得默默从存货提取实物资产。适用设施必须有所有固定燃料燃烧和制冷剂（包括房东系统）均不存在的证据，采用电阻加热/自然通风。不存在情况不明阻断完整性。排除 CPC2831、291 的商品、292 的其他商品及皮革批发；本规则是62156 下的较窄候选范围，不覆盖整个叶类。 |
| representative_product | Longchamp L1500987001；黑色；牛皮；批次定义的完整原套包 |
| production_route | 常温柜台接收、无现金销售、有记录退回；部分增量服务 |
| market_state | 完整新品功能套包；受损完整退回单列 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | Longchamp L1500987001 黑色牛皮手袋的柜台零售服务 |
| How much | 1 Item(s)；Q 为最终有效不同原始 ID 数 |
| How well | 准确型号/BOM、完整性、顾客验收及事件可追溯 |
| How long or cycle | 一个固定12个月池加迟退替换历史；a_reference |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Longchamp L1500987001 黑色牛皮手袋的柜台零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 型号与完整批次 BOM; 包装配置; 池与修正版本; 验收及保管事件; SFOT 原源责任; 部分边界; 全店及房东不存在门槛; 支持模块分母与去重 |

上述限定信息均须在数据包元数据中声明；缺失即不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | retail_service; failed_original; returned_intact; returned_damaged; handover_intact; handover_damaged; supplier_intact; supplier_damaged | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计完整原套包/服务件数；不得由件数推断 kg；cp_goods；c_service；c_goods。 |
| m_energy | counter_ac | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始 kWh，仅以3.6MJ/kWh 换算分子；cp_power；c_power。 |
| m_waste | discarded_pack | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 经校准完整货单净质量，件数和商品/组件质量分列；cp_goods。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 店铺接收门有记录的原始完整套包 |
| starting_condition_role | 零售服务前景门，原始背景责任分离 |
| product_classification_scope | CPC62156 较窄；仅指定完整牛皮手袋服务 |
| recursive_input_rule | 不递归同服务；failed_original 使用商品向量，不再次使用零售服务 |
| upstream_dataset_requirement | B_u 完整制造/包装/真实供应商到门向量；模块源分母及互斥范围 |
| disclosure | 部分增量边界；未绑定身份及缺少支持明确阻断完整结果 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_gate | all inventory rows | 记录原始套包 ID、接收批次、完整配置、供应商向量 ID/版本和声明门。向量 B_u 包含原商品制造、每项原包装及实际供应商至店铺各运输段，均仅一次。成功商品的顾客使用及末端处置在增量服务之外。不得假设未售商品负荷为零。 | longchamp-l1500987001; ghg-product-2011 |
| b_custody | returned_intact; returned_damaged; handover_intact; handover_damaged; supplier_intact; supplier_damaged; discarded_pack | 仅这七个具名实物保管/废物行是实物卫星记账，不再附加另一商品生产向量。必须保留真实接收方/状态及件数或实测完整载体质量。该例外不涵盖 failed_original、counter_ac、retail_service 或任何支持/处理输入。原始套包接收量是原始接收核对记录，不是另一可表征输入。重复保管不产生另一个原始 B_u。 | ghg-product-2011 |
| b_partial | all inventory rows | 本投影仅覆盖柜台电表运行、失败原商品责任及保管/发运。必须补齐的模块为场址电气服务及网络/支付、完整建筑/固定装置/柜台设备资本、仅用水的超细纤维布清洁以及完整废物载体运输/处理。规则 a_support、a_assets、a_clean、a_transport 固定其数量和组装方法；在补充明确原子卡并双语同步之前，这些模块仍不在本部分投影内。不得仅凭本投影宣称完整零售服务结果。 | jrc-retail-2013 |
| b_change | all inventory rows | 完整性成立前，每项实际新增交换或分离的包身/内衬/肩带/五金/包装后代均须有明确状态/材料卡及实际记录；保留同一原始 ID 和 B_u 归属。受损完整套包不代表不明确的散件或店铺混合废物。去向/丢失、源/BOM、不存在证据或供应商覆盖范围不明均须保持未解决，不能作零处理。 | longchamp-l1500987001; jrc-retail-2013 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 柜台零售 | required | 此指定配置的全部池活动 | reference_process | 1 Item(s) retail_service |

### 过程：柜台零售（`retail`）

#### 输入

##### 产品流

###### 店铺接收门的完整原始 L1500987001 零售套包（`failed_original`）

可表征的原始源等价输入，仅链接 F 归属 B_u 一次；实物接收仍为原始核对。

- 选定流：店铺接收门的完整原始 L1500987001 零售套包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_F / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

###### 交流电（`counter_ac`）

专用柜台回路；仍须供应商背景及实际电压/地域。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6 * E_counter / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power`
- 来源：`jrc-retail-2013`

###### 顾客退回的完整且功能完好 L1500987001 零售套包（`returned_intact`）

按 b_custody 实测实物卫星；接收方/状态必填；不重复原始向量。

- 选定流：顾客退回的完整且功能完好 L1500987001 零售套包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：R_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

###### 顾客退回的完整但受损 L1500987001 零售套包（`returned_damaged`）

按 b_custody 实测实物卫星；接收方/状态必填；不重复原始向量。

- 选定流：顾客退回的完整但受损 L1500987001 零售套包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：R_d / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

#### 输出

##### 产品流

###### Longchamp L1500987001 黑色牛皮手袋的柜台零售服务（`retail_service`）

参考服务输出由最终有效性决定，不用毛交付量。

- 选定流：Longchamp L1500987001 黑色牛皮手袋的柜台零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

###### 交给顾客的完整且功能完好 L1500987001 零售套包（`handover_intact`）

按 b_custody 实测实物卫星；接收方/状态必填；不重复原始向量。

- 选定流：交给顾客的完整且功能完好 L1500987001 零售套包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：H_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

###### 由外部顾客持有的完整但受损 L1500987001 零售套包（`handover_damaged`）

按 b_custody 实测实物卫星；接收方/状态必填；不重复原始向量。

- 选定流：由外部顾客持有的完整但受损 L1500987001 零售套包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：H_d / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

###### 退回供应商的完整且功能完好 L1500987001 零售套包（`supplier_intact`）

按 b_custody 实测实物卫星；接收方/状态必填；不重复原始向量。

- 选定流：退回供应商的完整且功能完好 L1500987001 零售套包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：T_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

###### 退回供应商的完整但受损 L1500987001 零售套包（`supplier_damaged`）

按 b_custody 实测实物卫星；接收方/状态必填；不重复原始向量。

- 选定流：退回供应商的完整但受损 L1500987001 零售套包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：T_d / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

##### 废物流

###### 作为废物托运的完整报废 L1500987001 零售套包（`discarded_pack`）

按 b_custody 实测实物卫星；接收方/状态必填；不重复原始向量。

- 选定流：作为废物托运的完整报废 L1500987001 零售套包
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_dispatch / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_goods`
- 来源：`longchamp-l1500987001`; `ghg-product-2011`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_reference | all inventory rows | 活动前定义同配置12个月接收/服务池、结账日及退货观察窗口；保留所有失败及零销售时段。Q 为该池恰有一次最终有效合格顾客验收的不同原始 ID 数。后续撤销（含无实物退回）重分类该 ID，并用有日期的替换版本修订原分子、分母和去向。不再从最终有效集合重复扣除撤销数。验收仍有效的退款/折扣不改变 Q。退回原商品再次出售不产生第二个 ID 或服务。Q=0 时池不可归一化；将原始负荷带入事先声明的同配置延续池，不得删除或切换商品。 | ghg-product-2011 |
| a_original | failed_original | 每个接收原商品 u 的 S/F/O/T 互斥归属系数之和为1。S 为最终有效已售背景，F 为零售商负责的失败/丢失/未合格验收的外部持有，O 为仍开放存货/背景，T 为有证据转交供应商或具名内部资产。完整原套包使用一个0/1 所有者，不按零件质量分割环境向量。B_u_S 之和进入另行披露的成功商品模块；N_F 源等价套包投入 failed_original，每个仅链接实际匹配的 B_u_F 一次。该卡保留独立原始源分层及实际 N_F_source 件数；每个不同供应商向量仅连接匹配层，再求兼容表征分子之和。同一型号不使不同供应商向量相同。O 结转原版本；T 保留签认的接收方后续责任，不能消失。实物供应商交接与背景 T 是不同账本。丢失原商品即使没有废物载体也有 F 责任；实物去向不明阻断完成使用。修订每个历史归属版本；原始接收、保管输出和废物后代均不再次取得 B_u。 | ghg-product-2011 |
| a_support | all inventory rows | 完整支持组装从互斥原始源分子开始：场址暖通/照明/安防/插座电力、网络/支付供应商服务、清洁、资产和废物处理。优先直接电表/过程细分。只有柜台回路实际包含在母表时才可扣除；独立互斥电表不得扣除。拆分活动与固定/闲置源池，并以同单位实测量核对。每个源池使用一个同单位因果驱动分配给全店所有受益者：柜台活动秒、场址 area_m2*actual_h（平方米小时）、网络活动交易秒和固定 reserved_port_count*actual_h（端口小时）。每个互斥源池 m 使用 f_m=d_target_m/sum_all_b(d_b_m)，分母必须同单位、已知且为正，所有残余/未用份额归经营者；份额之和为1。活动池无驱动时保持未解决，不虚构份额。包括闭店/闲置/失败以及归经营者的未用容量；禁止相加异维驱动。每个外部模块保留源 ID/版本、原分母 d_m、未舍入的已归一化交换 x_mj 及受益份额 f_m。恢复兼容原始分子 n_mj=x_mj*d_m*f_m；如已归于受益者则 f_m=1，驱动记录仅作核对。每个相同交换/属性/单位的分子组装为 X_core_j+sum disjoint external_n_mj，并以源 ID/事件/组件精确去重；X_core_AC=3.6*E_counter，failed_original 的原始源分层已承载每个 F 归属 B_u 一次，因此不再另加 F 向量。实物保管卫星不是环境向量，绝不进入该和式。任何已归一化核心行先乘回其原始 Q；不得把已归一化行加到原始源上。仅请求商品经零售总结果时纳入独立归属的成功商品模块；仅最后除以共同最终 Q 一次。异单位数量保持分列。不得将任意方法选择留给数据生产者。 | jrc-retail-2013; ghg-product-2011 |
| a_assets | all inventory rows | 每个实际完整建筑/固定装置包、货架/柜、灯/风扇/加热器及柜台/扫码/支付/网络设备均固定有签认完整 BOM 的制造/安装向量，并明确包排除项。必要对象恰好纳入一个有证据包或独立模块。持久账本保存每个历史受益者暴露 e_b 和同单位预期寿命暴露 L：建筑/固定装置为预留平方米小时，单台设备为预留小时。制造/安装、运行、事件维护及末端处置为互斥源范围；含末端处置的包不得再取得另一末端处理向量。当前分配为 e_b/L；新寿命版本替换全部历史分配，不重启制造。全部历史受益者份额之和不得超过1。实际退役时用总实际暴露替换预期 L，并向全部历史受益者一次分配残额；完整末端实物载体 kg 仅乘该最终责任份额一次，不再乘制造份额。直接末端净称重与 BOM 重建互斥；拆下零件不能重复扣除。运行电力独立；除非签认含于完整包，实际更换/维修组件均按事件处理。 | ghg-product-2011 |
| a_clean | all inventory rows | 适用清洁仅为用实测水和可重复使用超细纤维布擦拭实际店铺表面，不使用清洁剂/溶剂/养护膏/抛光剂。场址/房东签认采购及清洁记录必须证明全池不存在这些制剂；如存在，使用本 PCR 前必须增加具体制剂/成分及载体卡。计量进口水 W_in，单位 kg；不从进口表读数扣除内部回用。完整擦布制造采用同 a_assets 的全部历史版本，以受益者清洁面积平方米 e_b/L 分配。将实际配水、完整湿废布、保留湿布和直接称量的完整收集清洁液记录为互斥最终载体。已使用布随后冲洗是替换状态，不是新增末端输出。对每个水源，保留布、发运布、收集液、蒸发及保留存量中的进口源水 kg 互斥且合计为该源 kg；不能将完整布/液 kg 当成源水 kg。另加的干布不是水输出。最终完整收集清洁液仅选一种直接计量模式：W_liquid=gross_liquid_kg-tare_container_kg，或 W_liquid=V_discharge*rho_measured（以该实际完整载体在记录温度下的密度采样测定）；两模式互斥，不使用水平衡重建，不从实测发运量再扣蒸发/存量。保留液/桶残液与发运液/容器残液分开；完整容器、湿布及液体末端载体使用互斥真实货单 ID，不能共享残液。根据各最终载体含水量测定及源关联期初/末存量独立确定源水 kg，而非使用完整载体 kg；其他水贡献不明阻断归属。去向不明或非水清洁阻断完整性。 | jrc-retail-2013 |
| a_transport | all inventory rows | 不含零售商配送。原始供应商至店运输属于 B_u；废物收运及实际供应商退运是有实测路段的独立支持源。每个实际段 s、受益者 b 的原始车辆活动 A_s 以 f_bs=(reserved_payload_kg_bs*actual_reserved_h_bs)/sum_b(reserved_payload_kg_bs*actual_reserved_h_bs) 分配。记录所有受益者、归经营者的未用容量及空驶/闲置实际预留小时；行驶用观测距离，按时间计闲置用观测静止小时，不以距离0 视作无活动。空驶须单列实测车辆公里，除非供应商服务已明确覆盖。供应商已按货单归属的活动保留原分配，本路段账本仅作核对。拒绝覆盖缺失及与 B_u 重复。 | jrc-retail-2013 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | 商品和服务 | 保管事件账本 | pool_id; original_id; SKU; supplier_lot; species; complete_BOM; package_configuration; original_vector_id; vector_version; receiving_gate; B_u; event_id; event_date; physical_state; recipient; acceptance_status; revocation_date; original_pool; C_open; I; R_i; R_d; H_i; H_d; T_i; T_d; D; L; C_close; Q; N_F; N_F_source; S; F; O; T; W_dispatch; gross_kg; tare_kg; uncertainty; correction_version | 在接收/柜台/退回/废物门按不可变原始/事件 ID 扫描每次移动和验收，包括拒收、再次销售及无实物退回撤销。经校准的件数核对及秤净货单称重；审核供应商完整组件/BOM 和到门原商品向量。调查差异，不以平衡倒算替换实测发运。 | Item(s); kg | 每事件及结账修正 | 固定12个月全池及后续全部修正版本 | 店铺及实际外部接收方 | 每参考流 | 签认供应商记录；验收日志；经校准秤；真实载体接收回执；源归属审核 |
| cp_power | retail | 柜台电力 | 专用电表 | meter_id; circuit_boundary; start_kWh; end_kWh; E_counter; read_dates; downtime; calibration; supply_location; voltage; provider; included_circuits; source_id; version; Q | 对专用柜台/扫码/支付回路计量，覆盖活动、闭店、失败及闲置时段。保留经校准起止 kWh 及停电缺口记录；不以铭牌能耗代替。排除独立计量设施回路；仅纳入有证据的柜台设备。 | kWh | 连续；每月核对 | 同一全池含闲置 | 声明柜台回路 | 每参考流 | 电表校准；回路图；供电账单 |
| cp_support | retail | 必要补齐模块 | 源模块账本 | source_id; version; component; d_m; x_mj; n_mj; external_n_mj; X_core_j; X_core_AC; E_counter; B_u; N_F_source; f_m; d_target_m; d_b_m; area_m2; actual_h; reserved_port_count; already_attributed; property; unit; beneficiary; active_pool; idle_pool; driver_unit; driver_value; all_beneficiaries; absence_evidence; asset_id; full_package_BOM; e_b; L; lifetime_version; all_historic_allocations; retirement_mass; direct_or_BOM_mode; W_in; final_water_origin_destinations; wet_cloth_mass; dry_cloth_mass; W_liquid; gross_liquid_kg; tare_container_kg; V_discharge; rho_measured; density_temperature; direct_mode; water_content_assay; source_water_origin_kg; opening_liquid; closing_liquid; retained_bucket_residue; dispatched_container_residue; carrier_consignment_id; segment_id; A_s; reserved_payload_kg_bs; actual_reserved_h_bs; empty_km; stationary_h; provider_boundary; Q | 按 a_support/a_assets/a_clean/a_transport 采集真实电表/供应商/清洁/称重/资产/路段证据。证明全店及房东不存在燃料/制冷剂和非水清洁剂。一个源不得进入两个模块；不存在证据不明、历史不全、供应商范围或载体身份不明均阻断完成。 | source-specific kg; MJ; h; m2; vehicle-km | 每事件；连续电表；每月池核对 | 全池及全部资产历史 | 全部实际受益者及经营者未用容量 | 每参考流 | 供应商原分母；完整账单/电表平衡；签认包边界；寿命版本；不重叠登记 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_service | retail_service | Q=count(distinct final-valid original_id)；按修正版本保留最终有效性，不用毛销售再重复减撤销；每参考流输出1。 | original_id; acceptance_status; correction_version; Q; cp_goods | 1 Item(s) | ghg-product-2011 |
| c_goods | failed_original; returned_intact; returned_damaged; handover_intact; handover_damaged; supplier_intact; supplier_damaged; discarded_pack | 每张卡的明确分子仅除 Q 一次；N_F 是具有 F 归属且匹配 B_u 的完整原套包数，不是全部接收数。W_dispatch=gross_kg-tare_kg 为直接实测完整废物货单净 kg；不再加产生量或库存修正。SFOT 与保管核对采用 a_original、v_conserve，不虚构实物交换。 | N_F; N_F_source; B_u; R_i; R_d; H_i; H_d; T_i; T_d; W_dispatch; gross_kg; tare_kg; Q; cp_goods | 归一化卡数量 | ghg-product-2011 |
| c_power | counter_ac | E_counter=end_kWh-start_kWh；electricity_MJ=3.6*E_counter/Q。3.6MJ/kWh 换算仅改变分子单位；后续 Q 修正仍保留全部原期间电量。 | E_counter; start_kWh; end_kWh; Q; cp_power | electricity_MJ |  |
| c_completion | all inventory rows | 应用固定 a_support/a_assets/a_clean/a_transport 方法：n_mj=x_mj*d_m*f_m；互斥外部模块的 external_n_mj=n_mj；final_exchange_j=(X_core_j+sum compatible disjoint external_n_mj)/Q。X_core_AC=3.6*E_counter；failed_original 已链接每个实际 F 归属 B_u 一次，不再加另一 F 向量；环境向量聚合排除实物保管卫星。已归属的 f_m=1；求和前恢复原分母并替换历史版本。仅明确声明相同交换/属性/单位的记录可合并。 | X_core_j; X_core_AC; E_counter; B_u; N_F_source; x_mj; d_m; f_m; d_target_m; d_b_m; n_mj; external_n_mj; Q; cp_support | final_exchange_j | ghg-product-2011; jrc-retail-2013 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_product | failed_original | 核实准确型号及实际批次完整 BOM/套包配置，不采用营销组成或另一国家/型号。记录缺失值及每个原商品的供应商门等价清单源。 | 签认供应商 BOM 及原向量边界 |
| q_history | all inventory rows | 保存不可变事件和替换计算、实测不确定性、校准、零产出池、迟退、全部受益者及供应商背景延续；不得删除不利时段。 | 有日期账本及平衡异常 |
| q_partial | all inventory rows | 强制未绑定行的数量/身份及支持补齐不能从有限候选计量检查推断。披露每项限制、不存在门槛及未完成模块。 | 流回执；模块分母/去重登记；签认不存在证据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | 每个未绑定行在完成使用前必须独立解析为匹配实际类型、完整对象/状态和属性/单位的官方记录，保留原字节和完整性绑定回执。经核实的历史属性/单位支持不证明具体服务、商品、废物或供应商流存在。交流电仅表示使用点能量；使用前采集实际供电地域/电压/供应商及背景。 | ghg-product-2011 |
| v_conserve | all inventory rows | 核对总保管件数：C_close=C_open+I+R_i+R_d-H_i-H_d-T_i-T_d-D-L。H_i 与 H_d 划分全部顾客毛实物离库，包括从未验收的离库；不再重叠扣除拒收离库。D 为实际作为废物发运的原套包件数；报废只是商品转为保留废物的状态变化，不是另一次离库。L 为经调查但接收方/状态不明的实物丢失；不得虚构废物发运。货币调整及无退回的验收撤销均不产生实物离库。独立保留商品和保留废物子库存及实测套包/包质量核对。 | ghg-product-2011 |
| v_complete | all inventory rows | 仅当 Q>0、完整有日期的保管/SFOT 与原向量核对、每张实际卡有数量/绑定/供应商证据、零产出时段保留、必要支持模块及不存在门槛均核实、兼容分子/分母去重时才通过。部分/不确定必须明确保留，不能支撑完整经营、标准符合或比较营销声称。不得从候选检查推断物种/BOM、零排放或方法学批准。 | jrc-retail-2013; ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量前景服务 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 明确强制支持组装的合格部分服务 |
| excluded_use | 整个62156；皮革批发；替代商品生产；无依据完整经营/比较声称 |
| required_metadata | 全部参考限定信息、原始源 ID、供应商门、Q 和原始事件/池版本 |
| required_quality_disclosure | 身份缺口；部分支持；不存在及源/BOM 缺口；校准及不确定性 |
| update_trigger | 迟发验收变化；原商品/包装/BOM/供应商变化；资产寿命/退役；实测记录修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62156 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62156 | CPC3.0 说明的2831、291、292 边界；仅分类用途 |
| longchamp-l1500987001 | handbook | https://www.longchamp.com/en/en/products/handbag-xs-L1500987001.html | 制造商 L1500987001 产品详情；仅配置筛选，不是完整 BOM/LCI 或通用手袋身份 |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector,2013, EUR25998EN; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售电力、物流、水/清洁及废物筛查，执行摘要概览；不引入基准数值 |
| ghg-product-2011 | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard,2011, chapter9 p63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅一般细分/物理分配和一致边界；本 PCR 自定事先方法公式，不声称符合标准 |
