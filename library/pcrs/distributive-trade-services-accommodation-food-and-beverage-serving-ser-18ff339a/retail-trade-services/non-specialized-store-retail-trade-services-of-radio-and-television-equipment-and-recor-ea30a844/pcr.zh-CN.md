---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-radio-and-television-equipment-and-recor-ea30a844
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非专门店盒装飞利浦 TAR1506/00 收音机柜台自提零售服务

## 1. 范围与适用性

本PCR规定一个实际收音机SKU的狭义零售服务路线，包括部分增量前景及必须执行的补全。官方分类还包括发射/摄像设备、其他接收/音频设备、零件和录制媒体；本路线不构成整叶等同。厂家规格只识别型号；全部清单数量及存在/去向均需前景证据。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-radio-and-television-equipment-and-recor-ea30a844 |
| classification_refs | CPC 3.0 62142; narrower |
| covered_products | 非专门店柜台自提的同质 TAR1506/00 原厂盒装收音机，EAN 4895229116627；每池固定实际供应商包装版本 |
| excluded_products | 其他收音机型号、电视、发射及摄像设备、零件、录制媒体、网络或配送零售、安装、维修、单售电池及演示机销售 |
| representative_product | 飞利浦 TAR1506/00 模拟 FM/MW 单声道便携收音机；厂家 2024-10-14 v5.2.7 标明一件装盒、AAA LR3 供电及印刷指南/保修证；完整性以实际收货 BOM 为准 |
| production_route | 门店收货、常温盒装存放、可选长期留店电池演示机、结账及柜台实物交付；电子小票；不加购物袋；自然通风，门店服务边界内有证据不存在燃料燃烧及含制冷剂设备 |
| market_state | 全新完整原厂销售包装；对象为零售服务，而非收音机制造或收听服务 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 确切原厂盒装收音机的柜台自提服务 |
| How much | 1 Item(s) |
| How well | 正确完整包实物交顾客且最终验收有效；c_acceptance |
| How long or cycle | 一个事前声明相同配置服务池，含退货关闭及版本化后续修订 |
| reference_flow_link | service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 一台盒装飞利浦 TAR1506/00 收音机柜台自提零售服务 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | 型号、EAN及实际供应商包装/BOM版本; 非专门店柜台路线及收货/交付边界; 原件ID及最终验收状态版本/日期; 预先声明的配置池及全部零销量期间; 演示机是否存在及一次 LR03 电池制造商/型号; 部分边界及已完成模块来源覆盖; 原供应商背景责任S/F/T/O |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | service; failure_pack; supplier_return; demo_package; demo_cell | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计所定义完整服务/包/设备/电池物件；不能以件数代替未测质量、时间或物流活动。 |
| m_energy | metered_ac | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 采用实际kWh*3.6；无音频功率或电池能量重复。 |
| m_mass | radio_waste; spent_cell; box_waste; paper_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用实际载体净kg；1g=0.001kg。保留物态及确切皮重边界。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | service | 起点为入店运输后的已记录门店收货边界，终点为合格柜台实物交付。本方法为部分增量服务。顾客出行、交付后使用及产品终端归下游商品系统；须明确记录此交接。在声称完整服务前，必要门店及物流模块仍须按 c_modules 补全。 共用网络/IT、安保及行政明确为本部分边界排除的业务功能。完成当前模块矩阵只建立所声明路线模块的清单，不建立整店或全部业务零售覆盖；这些排除须持续披露并禁止任何此类全覆盖声称。 | `ghg-product-2011` |
| b_package | goods | 固定实际供应商、型号、EAN、包装版本及逐件收货证据。取得供应商完整产品和包装BOM，或签署确切覆盖范围的完整型号生命周期供应方。覆盖收音机电路/外壳/扬声器/天线、随附文件、实际原厂附件、如有的原厂电池、盒/内衬/标签/胶黏剂及入店边界。规格书本身既不证明含电池，也不证明不含。原包内物件只计一次；另购演示电池不重叠。成分或覆盖未知阻断完整性，不得视作零。 | `philips-tar1506-2024` |
| b_background | goods | 原包来源ID贯穿开封、退货、再售、失败及转移。相同收货边界的供应商生产加进货物流背景分为：S最终验收商品、F零售商负责的失败/损失、T明确持续具名内部演示或外部责任及O未决/在库。S仅一次交下游；服务加入F/Q；T保留实际接收方及签署的持续责任；O结转不得抹去。失败外部交付不自动成为废物。身份丢失或退供应商不消除生产。背景责任变化不创造实物交换或避免负荷信用。 商品转演示时，按真实事件日期把原来源交给具名内部T资产及电池ID；不是F，也不是新实物采购。原厂电池与无电池整机/盒/文件包分开前，须取得供应商可核实且收货边界覆盖相同的组件清单环境向量，使原包向量V_pack=V_battery_free_package+sum V_factory_cell+其他有据组件向量。组件覆盖未知阻断完整性。不能按任意质量、价格或件数份额拆环境向量。demo_package/demo_cell重用这些确切原组件来源ID/供应方，并移除旧商品分配；新购电池另有来源ID。 | `ghg-product-2011` |
| b_demo | demo | 长期演示机具有资产ID且不计入销售吞吐。其完整原包制造/安装与运行电池、事件维护及终端处理分开。本路线使用实际一次碱性LR03 AAA 1.5 V电池，无充电或收音机市电供电。记录开机、关机、装机闲置暴露及全部换电；不得由100 mW音频输出或标称寿命推定电耗。新增耳机、防盗标签、市电适配器、充电电池、袋、打印小票、维修或分离后的载体状态，必须先有具体双语卡/协议及去重供应方才能完整。 自然通风及所有燃料燃烧器/制冷剂回路不存在，须由带日期建筑设备检查、装置台账及业主/供应方边界声明证明。燃烧/制冷剂设备存在或未知则本路线不适用，不能视作零排放。 | `philips-tar1506-2024` |
| b_carriers | residual | 仅记录实际实物状态：完整无电池收音机、废LR03电池、完整废原厂盒组件及干燥印刷纸载体。各载体排除运输容器皮重及单独移交组件。盒组件须有实际完整盒/内衬/标签/胶黏剂BOM；不能假定纯纸板。若拆为分材质单独移交，应逐个扩展原子卡。处理供应方只有证据表明时才含收运及处理；不重复其中成分或排放。 | `ghg-product-2011` |

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 记录门店收货边界的实际完整原厂销售包 |
| starting_condition_role | 披露商品背景交接，而非免费生产 |
| product_classification_scope | 仅本非专门店收音机路线；比CPC3.0 62142窄 |
| recursive_input_rule | 输入同服务背景保留确切来源边界；用c_merge去除重叠，不递归复制零售阶段 |
| upstream_dataset_requirement | 完整型号/BOM收货边界供应方覆盖及明确S/F/T/O责任 |
| disclosure | 部分核心；必需模块、实际边界/日期、Q版本及全部剩余缺口 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| counter | 柜台保管及验收自提 | required | 始终；相同配置池 | 增量零售服务 | 1 Item(s) service |
| demo | 长期收音机演示 | conditional | 实际长期演示机及一次LR03电池；无则证实 | 全寿命设备及电池服务 | 1 Item(s) service |
| residual | 残余载体交接 | conditional | 实际载体移交；保留库存分记 | 终端载体责任 | 1 Item(s) service |

### 过程：柜台保管及验收自提 (`counter`)

#### 输入

##### 产品流

###### 交流电 (`metered_ac`)

实际柜台使用点交流电；流身份未特指电压/供应方；须另记实际供应方及电压

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 3.6 * E_attr_kWh / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_counter`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

###### 门店收货边界完整原厂盒装飞利浦 TAR1506/00 收音机包 (`failure_pack`)

F责任存在时；原包只计一次实际原厂附件/电池；须供应方完整覆盖

- 选定流: 门店收货边界完整原厂盒装飞利浦 TAR1506/00 收音机包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: B_F / Q；仅零售商负责的失败原包当量，此处无S/T/O负荷
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_counter`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

#### 输出

##### 产品流

###### 一台盒装飞利浦 TAR1506/00 收音机柜台自提零售服务 (`service`)

仅必需最终合格交付；Q>0

- 选定流: 一台盒装飞利浦 TAR1506/00 收音机柜台自提零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_counter`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

###### 实物退供应商的完整原厂盒装飞利浦 TAR1506/00 收音机包 (`supplier_return`)

仅完整原包退供应商时；开封、受损或不全包须先扩展不同状态卡才能完整

- 选定流: 实物退供应商的完整原厂盒装飞利浦 TAR1506/00 收音机包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_supplier_intact / Q；仅实际完整原包，无背景信用
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_counter`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

### 过程：长期收音机演示 (`demo`)

#### 输入

##### 产品流

###### 完整无电池飞利浦 TAR1506/00 收音机及原盒组件、随附文件制造安装包 (`demo_package`)

长期演示资产存在时；须签署型号供应方/BOM；若含原厂电池须从制造供应方明确剔除，并仅在电池账计一次

- 选定流: 完整无电池飞利浦 TAR1506/00 收音机及原盒组件、随附文件制造安装包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: sum_a(e_p_a / L_v_a) / Q；所定义完整无电池整机/盒/文件包，排除电池制造及全部运行、维护、处理
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_demo`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

###### 1.5 V LR03 碱性 AAA 一次电池 (`demo_cell`)

演示一次电池使用时；实际制造商/型号及来源ID须区分另购与原厂电池

- 选定流: 1.5 V LR03 碱性 AAA 一次电池
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: sum_c(e_p_c / L_v_c) / Q；实际型号完整电池，不重复DC电力交换
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_demo`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

### 过程：残余载体交接 (`residual`)

#### 输出

##### 废物流

###### 废完整无电池飞利浦 TAR1506/00 收音机 (`radio_waste`)

实际收音机移交；整机含外壳/电路/扬声器/天线，排除已拆电池和包装；缺件未知须另设状态卡

- 选定流: 废完整无电池飞利浦 TAR1506/00 收音机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_radio_attr_kg / Q；库存失败质量加演示终端质量乘最终寿命责任份额一次
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

###### 废1.5 V LR03碱性AAA一次电池 (`spent_cell`)

仅实际耗尽的完整LR03电池分类收集；原厂拆出电池保留实测剩余容量、使用/泄漏及化学状态。未用、半用或其他化学电池报废不能进入本耗尽电池卡：完整前须补实际状态卡。不得重复外壳/电解液成分；泄漏须扩展实测具体载体/排放

- 选定流: 废1.5 V LR03碱性AAA一次电池
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_cell_attr_kg / Q；最终整电池净移交kg乘其最终寿命责任份额一次
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

###### 废完整原厂TAR1506/00销售盒组件 (`box_waste`)

实际盒组件移交且有完整盒/内衬/标签/胶BOM及处理证据；不替换为纯聚合物或标称皮重

- 选定流: 废完整原厂TAR1506/00销售盒组件
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_box_attr_kg / Q；完整组件净质量排除收音机/电池/文件；库存来源按原池所有权，演示来源按具名来源资产最终全寿命f一次
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

###### TAR1506/00指南及保修证形成的废干燥印刷纸载体 (`paper_waste`)

实际混合印刷纸移交批；排除完整盒组件、塑料膜、电池外包装及运输容器；其他载体须扩展

- 选定流: TAR1506/00指南及保修证形成的废干燥印刷纸载体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_paper_attr_kg / Q；直接称量分类移交干燥印刷纸载体；库存来源与演示来源资产最终全寿命f分账，仅演示乘f一次
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `philips-tar1506-2024`; `ghg-product-2011`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_pool | all | 采集前声明固定门店/配置池日期及最新版本；纳入未成功尝试、退货、闭店/闲置日及零销量子组。只可事前扩展为已声明相同配置池，不能事后挑选成功日。全池Q=0时保留原始负荷且不可归一化。晚退货/撤销以真实日期替换原池分子、分母及去向账；再售不能重复计原生产。 | `ghg-product-2011` |
| a_direct | electricity | 优先不重叠直接计量。共享余量电表按有记录且与活动相关的结账就绪小时，覆盖闲置/失败服务及全部实际受益对象。仅在父表实测边界包含子表时扣除子表。份额须与池总量闭合；全受益驱动未知或为零阻断分配，不得默认权重。 | `ghg-product-2011` |
| a_assets | demo | 每件完整演示资产或一次电池保留采购/BOM/供应方、装机区间、全部受益对象及版本化预期总寿命暴露L_v。按c_exposure的e_p/L_v分配其隐含完整包，再归一化一次。不得在该份额之外再次输入全部采购量。报废或修订寿命时，替换全部历史受益对象版本，累计份额<=1，并按含闲置的实际全寿命暴露分配最终余量。维护按实际事件且供应方覆盖不重叠。终端载体质量仅乘自己的最终寿命责任份额一次，不再乘制造系数。 | `ghg-product-2011` |
| a_no_credit | residual | 不默认回收、退供应商或退款信用。验收仍有效的退款或折扣不改变Q。实际撤销验收即使无退回也移除原件ID；Q已经按最终有效ID去重，撤销不得再扣一次。 | `ghg-product-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_counter | counter | 柜台服务、保管、来源责任及交流电 | 原件事件账及电表记录 | pool_id; config_version; original_id; supplier_lot; EAN; BOM_revision; receipt_date; event_id; actual_date; gross_handover; return; revocation; acceptance_status_version; acceptance_evidence; final_recipient; physical_state; S_F_T_O; source_background_id; source_pack_quantity; responsibility_fraction; N_supplier_intact; opening; closing; demo_assignment; loss; meter_id; parent_boundary; start_kWh; end_kWh; disjoint_submeter_kWh; all_beneficiary_ready_hours; supplier_voltage; supplier_BOM; event_date; provider_version; included_disjoint_children; E_direct_disjoint; h_pool; provider_coverage; G_open; G_receipts; G_customer_returns; G_internal_in; G_close; G_gross_customer_handover; G_supplier_return; G_internal_out; G_to_D; G_to_H; G_loss; source_vector; supplier_component_vectors; component_source_id; internal_T_asset_cell_id; state_transfer_date; moisture_state; component_BOM; D_open; D_direct_acquisition; D_internal_in; D_close; D_to_H; D_external_transfer; D_loss; H_open; H_external_in; H_close; H_dispatch; H_loss; source_original_or_asset_id; carrier_state; source_vector_conservation | 收货及每次保管事件条码/序列号或持久内部原件ID；检验实包及供应商BOM；签署柜台交付/验收和退货登记；校准不重叠电表及电路图; 执行c_acceptance、c_background、c_transfer及c_electricity；实物总事件与Q分开；闭合全部供应方来源及全部电表受益对象 | Item(s); kWh; h | 每事件和电表区间；每日库存闭合 | 全部预声明池区间，含闭店、失败、零销量及后续修订 | 实际收货、常温门店及柜台；无配送/安装 | 每参考流 | 校准/量程检查、电路包含图、供应商签署覆盖、时间戳、不变事件ID及被替换版本审计链 |
| cp_demo | demo | 演示资产和LR03电池寿命分配 | 持久型号/BOM资产及电池账 | asset_or_cell_id; source_id; manufacturer; model; BOM; factory_inclusion; manufacture_provider_exclusions; acquisition; installation; e_p; all_beneficiary_exposure; L_v; lifetime_version; previous_allocation_versions; on_hours; off_installed_hours; removed_storage_hours; idle_beneficiary; replacement_date; maintenance_event; retirement; final_actual_exposure; final_residual; remaining_life_test; usage_state; model_specific_depletion_evidence; source_fate; D_open; D_direct_acquisition; G_to_D; D_internal_in; D_close; D_to_H; D_external_transfer; D_loss; internal_T_source_id; supplier_component_vectors; component_source_id; source_vector_conservation; source_vector | 观察长期演示机及每电池装拆；记录完整型号供应方/BOM；计时暴露含关机装机电池和待机，不使用标称音频功率换算；校准计时/日志设备; c_exposure；采购和报废库存仅校验份额，不是另一个整机输入；实际维护须先增补不重叠原子行才完整 | Item(s); h | 每状态变化并期末审计 | 跨全部池及零产出受益对象的完整资产/电池寿命 | 仅店内长期收音机及实际一次电池 | 每参考流 | 资产照片、电池标签、签署BOM及确切供应方边界、校准时长日志、全部历史版本更正 |
| cp_residual | residual | 实际载体移交及最终接收方 | 移交批称量及载体/来源账 | consignment_id; source_original_or_asset_id; carrier_state; gross_kg; transport_container_tare_kg; net_kg; weighing_mode; removed_parts; opening_carrier_stock; generated; closing_carrier_stock; dispatch_date; recipient; treatment_provider; transport_coverage; final_life_responsibility; source_background_owner; H_open; G_to_H; D_to_H; H_external_in; H_close; H_dispatch; H_loss; moisture_state; component_BOM; condemnation_date; remaining_capacity; actual_use_state; leakage_state; chemistry | 每实际分类移交批校准净称；拍完整载体及接收/处理回执；收音机拆电池后称重；直接净称与组件BOM重建互斥; c_dispatch；移交净kg不再按产生/期初/期末平衡修正；已拆电池不再扣；每来源组件只归一个实际载体/保留/顾客状态 | kg | 每次移交，每日在留库存检查 | 全部来源池载体去向，含保留及晚退状态 | 零售来源载体及演示终端归属载体，无顾客使用后回收 | 每参考流 | 秤证、皮重及物态证据、移交回执、组件划分及处理/运输边界 |
| cp_completion | counter | 必需缺失模块补全 | 不重叠外部模块账 | module_id; raw_source_id; source_version; original_denominator; original_unit; normalized_value; actual_raw_total; property_uuid; exchange_uuid; flow_type; direction; compartment; provider_boundary; all_beneficiary_driver; empty_trip; stationary_idle_hours; freight_capacity_occupied_hours; asset_e_p; asset_L_v; every_prior_version; area; reserved_hours; shelf_capacity; service_ready_hours; actual_meter_data; cleaner_mass; discharge_volume; density; trip_fuel; charging; source_background_owner; attribution_fraction; physical_event; opening_closing_stocks; uncertainty; Q_pool_version; natural_ventilation_evidence; no_combustion_evidence; no_refrigerant_evidence; no_purchased_heat_cooling_evidence; cleaning_event; cleaned_area; all_cleaned_area; water_import_kg; original_formulation_model; original_formulation_kg; supplier_composition; solution_kg; original_source_destination_kg; rinse_water_kg; dry_cloth_source; cloth_lifetime; cloth_net_wet_dispatch_kg; cleaner_container_BOM; whole_liquid_net_kg; discharge_volume; density; cleaner_retained_kg; carrier_provider_exclusions; component_source_id; supplier_component_vectors; original_source_final_partition; reclassification_event_id; previous_source_destination; replacement_source_destination; container_complete_BOM; container_retained_liquid_kg; container_net_dispatch_kg; e_area; L_area_v; all_beneficiary_cleaned_area; cloth_lifetime_version; every_prior_cloth_version; cloth_remaining_life_evidence; actual_cloth_laundry_event; cloth_laundry_provider_boundary; cloth_repair_event; cloth_terminal_carrier; final_actual_area; segment_id; capacity_kg; reserved_h; driver_unit; all_beneficiary_segment_drivers; provider_allocation_status; consignment_attributed_quantity; fixture_asset_id; fixture_complete_BOM; fixture_building_provider_coverage; fixture_reserved_zone_area_m2; fixture_reserved_h; fixture_all_beneficiary_area_hours; fixture_L_area_h_v; fixture_lifetime_version; fixture_previous_beneficiary_versions; fixture_final_actual_area_h; fixture_maintenance_event; fixture_provider_exclusions; partial_excluded_business_functions | 采集整店/模块原始数据、分包完整燃料/距离/闲置记录、电表图和资产暴露；汇总前绑定每个实际交换; c_modules及c_merge；存在/覆盖未知为阻断缺口；不存在须有带日期检查/供应方证明 | source-specific units; h; m2 | 每模块期间及修订 | 相同配置池及全寿命来源历史 | 建筑、货架、结账硬件、照明/HVAC、保洁及实际物流 | 每参考流 | 签署不重叠边界矩阵、原单位/分母、全受益驱动及确切来源ID去重 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_acceptance | service | Q = 原池版本中最终验收有效的distinct original_id数量。要求与实付/订单相联的确切完整包实物交付、顾客对正确型号/数量/状态验收及声明的退货评估关闭日。拒收、损失、演示、取消及撤销验收ID不计。相同原件退回再售至多一个最终有效服务。财务调整本身不撤销验收。更正原池，不二次扣撤销。未验收的最终外部保留属于独立实物保管及S/F/T/O去向，不是销售或自动废物。 实物状态互斥：G=可售商品，D=长期演示设备，H=留存判废设备。G_to_H和D_to_H为带日期内部判废转态，不是实物交运。G闭合：G_open+G_receipts+G_customer_returns+G_internal_in=G_close+G_gross_customer_handover+G_supplier_return+G_internal_out+G_to_D+G_to_H+G_loss。D闭合：D_open+D_direct_acquisition+G_to_D+D_internal_in=D_close+D_to_H+D_external_transfer+D_loss。H闭合：H_open+G_to_H+D_to_H+H_external_in=H_close+H_dispatch+H_loss。每原设备每转移计一次；电池单设账，不能把电池数加进设备数。纸/盒物态另有kg库存QA。只有H_dispatch移交批日期才发生实际废物交运；radio_waste此时用实测kg，不用判废件数。全部实物外部转移/保留须有具名接收方及物态具体卡才能完整。设备/电池/盒/纸kg按实测含水率/物态及实际组件BOM分别来源闭合，不能与件数平衡混算。 | original_id; event_id; actual_date; acceptance_evidence; acceptance_status_version; gross_handover; return; revocation; final_recipient; opening; receipt; closing; internal_transfer; demo_assignment; loss; waste; G_open; G_receipts; G_customer_returns; G_internal_in; G_close; G_gross_customer_handover; G_supplier_return; G_internal_out; G_to_D; G_to_H; G_loss; D_open; D_direct_acquisition; D_internal_in; D_close; D_to_H; D_external_transfer; D_loss; H_open; H_external_in; H_close; H_dispatch; H_loss; state_transfer_date; source_original_or_asset_id; component_source_id; carrier_state; moisture_state; component_BOM; internal_T_asset_cell_id | Q Item(s)及独立实物总事件平衡 | `ghg-product-2011` |
| c_background | failure_pack | 每个以Item(s)计的原供应方来源s满足B_R_s=B_S_s+B_F_s+B_T_s+B_O_s。B_x_s=原始source_pack_quantity_s*互斥responsibility_fraction_x_s，仅乘一次，份额和为1。sum B_F_s用于failure_pack的B_F/Q；相联同型号收货边界完整供应方。B_S/Q仅一次交下游商品模型。B_T保留指定内部资产/电池或外部保管方/持续背景；B_O阻断最终闭合。原来源当量不等于碎片数或质量；后代载体共享原来源划分，不能各得一包。原生产及入店运输所有权相同。去向变化时按事件日期及供应方版本替换原分子。 failure_pack仅允许收货边界完整环境向量整体归F的原来源；该整来源责任份额为0或1。若仅特定组件归F，整包卡不可用：先取得实际供应商组件向量，再加具名组件卡，不能用V_pack的标称质量/件数份额。转演示来源属内部T；确切分解原向量转给c_exposure，不能又进入B_F。 | source_background_id; source_pack_quantity; S_F_T_O; responsibility_fraction; supplier_BOM; provider_coverage; event_date; provider_version; component_source_id; supplier_component_vectors; internal_T_asset_cell_id; state_transfer_date; source_vector; source_vector_conservation | B_F Item(s)，原边界S/T/O独立背景 | `ghg-product-2011` |
| c_transfer | supplier_return | N_supplier_intact为供应商移交回执中实际去重完整未损原包数，再除Q。实物转移不能从B_T或财务贷项推导。开封/受损/外部保留商品须扩展物态/接收方具体卡，否则明确不完整。全部转移均保留相应背景责任。 | consignment_id; original_id; physical_state; recipient; actual_date; N_supplier_intact; source_background_owner | N_supplier_intact Item(s) | `ghg-product-2011` |
| c_electricity | metered_ac | E_attr_kWh=E_direct_disjoint+E_shared_residual*h_pool/sum_all_beneficiaries(h)。E_shared_residual=父表终读-初读-已包含的不重叠子表，仅限证明包含的子电路。独立直接表不作父表扣除。h为实际分配结账就绪小时，含闲置、失败及闭店待机责任。共享分母须已知正值并闭合含全部受益对象的总量；未知不等于零。1kWh=3.6MJ；量=3.6*E_attr_kWh/Q。演示一次电池能量已含于demo_cell，非AC。计量结账关闭/待机真实区间，不默认标称功率。 | meter_id; parent_boundary; start_kWh; end_kWh; included_disjoint_children; E_direct_disjoint; h_pool; all_beneficiary_ready_hours; Q | 每1 Item(s)服务的MJ | `ghg-product-2011` |
| c_exposure | demo_package; demo_cell | 每a的e_p_a为受益p实际装机责任小时h，含关闭/闲置预留暴露；L_v_a为有据的全部受益对象预期总寿命装机责任h，不能是音频功率或任意寿命。拆下存放的电池须保留保管责任，e和L一致加入实际预留存储暴露。L_v须有实际型号检查/剩余寿命证据及已观察使用状态支持，含电池耗尽及存储；不默认每次演示电池件数。要求L_v>=累计实际暴露；否则先修订全部历史分配。f_p_a=e_p_a/L_v_a；sum f<=1。L变化时替换而非叠加每个历史受益分配。报废时L_final=sum_all_actual e，替换全部旧分配使sum f_final=1；未解释余量/零寿命阻断闭合。设备包sum f/Q与电池sum f/Q为独立完整实物；设备供应方剔除实际原厂电池，并仅一次关联电池账。维护事件需实际替换物具体数量；采购库存是校验，不是额外输入。 从G转入设备的制造/安装分子来自交内部T的同一已核实无电池原组件向量及来源ID，不是新整包采购。实物独立原厂电池在各自电池ID下使用匹配原组件向量；另购替换电池用真实新来源供应方。本包为明确定型号的完整无电池收音机、原盒组件及随附文件实物包，排除电池制造、运行、维护及处理。如实际另有原厂附件，须取得确切组件覆盖并扩展具名包/卡后才能完整。 | asset_or_cell_id; e_p; all_beneficiary_exposure; L_v; lifetime_version; previous_allocation_versions; removed_storage_hours; idle_beneficiary; final_actual_exposure; final_residual; factory_inclusion; manufacture_provider_exclusions; Q; component_source_id; supplier_component_vectors; internal_T_source_id; source_vector; source_vector_conservation | 每服务可归属完整资产或电池Item(s) | `ghg-product-2011` |
| c_dispatch | radio_waste; spent_cell; box_waste; paper_waste | 每实际移交批k：W_net_k=gross_kg-实际transport_container_tare_kg，或互斥采用直接校准净称。拆电池后的收音机净称已排除电池，不再扣。售出库存来源载体W_attr=sum归该来源池的W_net；演示/电池载体W_attr_p=sum(W_net_k*f_final_p_k)，按c_exposure最终寿命责任仅乘一次，无第二制造份额。原包组件在实际载体移交、顾客交付、供应商转移及在留库存间不重叠。期初+产生=移交+期末为独立检查，不再从实际移交扣。处理和运输仅一次连接有据载体，无默认避免信用。 | consignment_id; carrier_state; source_original_or_asset_id; gross_kg; transport_container_tare_kg; net_kg; weighing_mode; removed_parts; final_life_responsibility; opening_carrier_stock; generated; closing_carrier_stock; recipient; provider_boundary; Q | 各载体实际归属kg / Q | `ghg-product-2011` |
| c_modules | cp_completion | 必需补全矩阵：(1)建筑主体制造/安装及终端处理，排除单列装置/HVAC，按已分配面积*预留小时/全部受益全寿命面积*小时；(2)货架制造/安装/终端，排除建筑及商品，按预留占用架容*小时/全部受益全寿命架容*小时；(3)完整结账硬件制造/安装/终端，排除AC、耗材及维护，按已分配服务就绪小时/全部受益全寿命就绪小时；(4)仅实际照明及通风扇AC，排除metered_ac电路：先不重叠计量再按全部受益实际照明/通风面积*预留小时，含闭店/闲置责任。本固定路线有据不存在燃烧、制冷剂设备或外购热/冷；设备未知或存在则不适用；(5)按c_cleaning计实际保洁及溢漏/失败清洁，按含全部受益对象的每事件直接清洁面积分配；(6)搬运/进货/退供应商/废物物流，按c_background来源所有权：已核实完整供应方含真实载货/空驶、装卸及静止闲置。否则按实际segment_id采燃料/充电及真实车辆运行。同段全部受益对象使用同一实物坐标：d_p_segment=实际预留载荷capacity_kg*reserved_h，单位kg*h。不能把体积、件数或其小时混入此驱动。按d_p_segment/sum_all_beneficiaries d_segment分配该段完整实测活动，含实际静止闲置时长及空返预留载荷容量。全部受益驱动须已知且同段总量为正；未知/零总量阻断分配，不能以空驶零t*km视为无活动。记录provider_allocation_status。若已签供应方已把真实量归属到本移交批，直接采用consignment_attributed_quantity；分段容量/时间仅作QA，不再乘驱动或归属份额。排除供应商收货边界或载体处理供应方已含物流。模块1–3按各自实测驱动采用c_exposure，并在实际报废/寿命修订时替换每个历史受益对象。每个实际维护/替换及新增载体须有事件具体双语原子行/协议及供应方。全部模块计量或证实不存在后才能声称完整服务。 实际完整灯具及通风扇实物硬件须有型号具体完整BOM的制造、安装、事件维护及终端责任。只有签署确切供应方覆盖证明全部适用阶段及排除时，才可在实际建筑供应方内计一次。否则必须独立补全fixture资产模块：受益p的e_fixture_p=实际reserved_zone_area_m2*reserved_h，L_fixture_v为全部受益对象有据预期全寿命面积小时，单位m2*h。制造/安装仅一次采用f_fixture_p=e_fixture_p/L_fixture_v，寿命/总暴露须已知正值且累计份额<=1；任何寿命修订均替换每个历史受益分配。实际退役时L_fixture_final=sum_all_actual e_fixture，替换全部旧版本并闭合最终余量。实际事件维护按该事件真实受益预留区域面积小时另计，排除供应方内含维护。模块4运行AC与硬件制造/安装、维护及终端互斥。实际完整终端硬件载体净质量及处理仅按其最终寿命责任份额连接一次，不再乘制造系数；排除建筑供应方已含终端载体/处理。完整BOM、阶段覆盖或供应方重叠未知阻断完整性，不能视作零。 | module_id; raw_source_id; source_version; provider_boundary; all_beneficiary_driver; area; reserved_hours; shelf_capacity; service_ready_hours; asset_e_p; asset_L_v; every_prior_version; actual_meter_data; cleaner_mass; discharge_volume; density; trip_fuel; charging; empty_trip; stationary_idle_hours; freight_capacity_occupied_hours; source_background_owner; Q_pool_version; segment_id; capacity_kg; reserved_h; driver_unit; all_beneficiary_segment_drivers; provider_allocation_status; consignment_attributed_quantity; fixture_asset_id; fixture_complete_BOM; fixture_building_provider_coverage; fixture_reserved_zone_area_m2; fixture_reserved_h; fixture_all_beneficiary_area_hours; fixture_L_area_h_v; fixture_lifetime_version; fixture_previous_beneficiary_versions; fixture_final_actual_area_h; fixture_maintenance_event; fixture_provider_exclusions; partial_excluded_business_functions | 不重叠原始来源/模块量，保留原单位及分母 | `ghg-product-2011` |
| c_merge | cp_completion | 每个外部归一交换n_i按有据原分母D_i、原池及替换版本还原原分子R_i=n_i*D_i；已提供实际原总量则直接采用，不二次乘。仅乘其一个有据归属份额。原分母未知、池/版本不相容或供应方边界重叠则拒绝。按确切source_id+版本+实物事件+供应方边界去重并替换旧量；再逐行仅相加相同交换UUID/类型/方向/区室、流属性及单位的分子；已知等效单位只转换一次。kg不能加MJ，原量不能加归一量。所有相容合并原始归属分子只除共同更正Q一次。S下游耦合与服务增量F分开；闭合来源并披露模块完整性。 | module_id; raw_source_id; source_version; original_denominator; original_unit; normalized_value; actual_raw_total; attribution_fraction; exchange_uuid; flow_type; direction; compartment; property_uuid; provider_boundary; physical_event; Q_pool_version | 按共同验收服务的一份归一清单，明确补全覆盖 | `ghg-product-2011` |
| c_cleaning | cp_completion | 逐实际清洁事件采集进口水kg（直接净称或供水体积乘实测密度）、实际购入原清洁制剂型号/kg、确切供应商成分、另加稀释/漂洗水、每个布及清洁剂容器来源/BOM及真实移交/保留状态。直接进口表已排除内部回用，不能再扣回用。完整液体排放仅互斥采用校准整液净kg或实际排放V*rho（实测密度/温度）；不按水量平衡重建，不再从实测移交扣蒸发/保留。原制剂来源kg在使用/溢漏/漂洗/保留/未用去向中为互斥最终来源责任份额，排除新增漂洗水/污物。已使用或溢漏的中间态后续漂洗或保留时，以相同来源kg及事件ID替换旧去向进行重分类，不能新增另一份来源量；最终份额须闭合至原制剂投入。成分只一次划分来源QA，不再次乘实测完整液体载体。外加布/容器质量是独立实际载体，不能作为原制剂出口。容器终端载体采用直接实测实际完整容器组件净量，包含实际本体/封盖/内衬/标签/胶黏剂组件及残留液，排除运输容器皮重。其残留液划归该容器载体，不能再进入液体排水或湿布移交；相同规则防止三种载体间任何残液重复。每块可重复用布采用独立面积方程：f_area_p=e_area_p/L_area_v，其中e_area_p为受益p实际清洁面积m2，L_area_v为全部受益对象有据预期全寿命清洁面积m2；不能对布套用收音机/电池以h定义的e_p/L_v。保留布型号/BOM、剩余寿命证据、每个历史受益对象/版本及全部失败/溢漏清洁面积；寿命或总驱动未知或非正阻断分配。寿命修订后替换全部历史布分配。实际报废时L_area_final=sum_all_actual e_area，替换全部旧版本，使最终份额和为1；披露并解决余量。完整布制造/安装仅按f_area_p分配一次并只除Q一次，不再加入全部采购。实际布洗涤及维修按事件采用不重叠来源包或水/电/清洁剂/材料原子行，以已知正总量下实际事件受益清洁面积分配，排除布生命周期供应方已含量。布终端处理及实际完整终端载体与制造/运行分开；实测终端载体仅乘最终f_area一次，并排除供应方内含重复。实测湿布移交批含保留液的真实全质量，该液体不能又作为排液。一次性布投入、实际容器生产、单独移交容器、液体处理及载体在完整前须有匹配真实成分/物态的具名双语原子卡/协议。已核实完整供应方事件包只有确切签署含这些量且水/电/化学品/布/容器/运输/处理范围不重叠时才可替代；按确切来源ID移除每个重复前景/供应方量，不能假定覆盖。先直接细分，否则逐原始事件交换仅按cleaned_area/sum_all_cleaned_area（已知正总量）归属一次，再c_merge并只除Q一次。 | cleaning_event; cleaned_area; all_cleaned_area; water_import_kg; original_formulation_model; original_formulation_kg; supplier_composition; solution_kg; original_source_destination_kg; rinse_water_kg; dry_cloth_source; cloth_lifetime; cloth_net_wet_dispatch_kg; cleaner_container_BOM; whole_liquid_net_kg; discharge_volume; density; cleaner_retained_kg; carrier_provider_exclusions; raw_source_id; provider_boundary; Q_pool_version; original_source_final_partition; reclassification_event_id; previous_source_destination; replacement_source_destination; container_complete_BOM; container_retained_liquid_kg; container_net_dispatch_kg; e_area; L_area_v; all_beneficiary_cleaned_area; cloth_lifetime_version; every_prior_cloth_version; cloth_remaining_life_evidence; actual_cloth_laundry_event; cloth_laundry_provider_boundary; cloth_repair_event; cloth_terminal_carrier; final_actual_area | c_merge前不重叠归属原始清洁交换及完整载体 | `ghg-product-2011` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all | 未绑定服务/产品/废物流仅为候选。数据集完整前逐行把实际型号/材料/物态绑定官方直读UUID/名称/类型/属性/单位及限定信息，保留原响应/完整性回执及公开状态观察；数量属性不是零售服务身份。AC UUID仅标识使用点电力，不表示供应方地域、组合、电压或环境性能。 | 逐行原始身份回执及供应方/物态覆盖矩阵 |
| q_quantity | all | 记录对象/地点/时间、实际原总量、校准、确切来源ID、一次归属和最终Q；保留不确定性及非零库存差异待查。厂家产品、净、毛和皮重是不同规格坐标，不是实测收货/电池/载体质量；不能互换，也不能把音频RMS功率当电力输入。 | 秤/电表日志、完整BOM、事件平衡及签署不确定性调查 |
| q_presence | cp_completion; demo | 每个条件活动须有带日期存在/不存在证据。演示、电池化学、泄漏、替换、新载体或供应方覆盖未知均阻断完整性。检查实际维护、溢漏及顾客退回状态；使用前新增具体原子卡、协议、计算及对齐中文。不能把选择式交换或泛化扩展承诺作为完整清单。 | 带日期现场检查、电池/型号照片、载体及供应方审计 |
| q_coverage | cp_completion | 部分核心数据集必须携带缺失模块状态。完整零售服务结果须完成c_modules及c_merge，并具备全部原始证据、相容Q版本及供应方S/F/T/O闭合。引用部分原则不代表符合完整GHG产品标准。 | 模块补全矩阵及逐来源去重汇总报告 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | all | 核对同质SKU/BOM、柜台路线、确切参考输出名及必需限定信息；其他分类产品仍排除。拒绝在本路线纳入配送/安装/维修或演示机销售。 要求自然通风及门店边界全部燃烧/制冷剂回路不存在的带日期证明；未知或存在设备不适用本固定路线。 | `philips-tar1506-2024`; `un-cpc3-62142` |
| v_ledgers | service; failure_pack; supplier_return | 要求Q>0及去重最终有效原件ID、独立闭合实物总库存、互斥S/F/T/O来源责任、实际供应商移交/保留状态及晚退/撤销后的原池版本替换。Q=0不可归一化。 | `ghg-product-2011` |
| v_providers | all | 全部供应商BOM及完整供应方须闭合至收货边界；全部实际附件及原厂电池仅计一次；演示电池、设备制造、维护、运行及终端覆盖不重叠。完整结果不得保留未绑定身份、未知分母或缺实际载体。 | `ghg-product-2011` |
| v_exposure | demo; residual | 检查全部历史资产/电池受益对象及寿命版本、实际正暴露、份额<=1、报废替换和最终余量闭合。终端载体仅承接一个最终责任份额；直接净称不能二次扣已拆部件。 | `ghg-product-2011` |
| v_completeness | cp_completion | 只有明确标注部分结果才可在c_modules全部模块取得不重叠原始覆盖或证实不存在、且c_merge还原实际分母/去重/一次归一化前使用。数量检查不建立方法批准或UUID核验。 | `ghg-product-2011` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 明确部分收音机柜台增量服务；只有通过全部c_modules/c_merge门才可完整所声明路线模块清单；共用网络/IT、安保及行政仍排除 |
| excluded_use | 收音机制造/使用足迹、整CPC叶、配送/安装/维修、科学批准或完整标准符合性声称 |
| required_metadata | 型号/EAN/BOM；收货/结束边界；来源ID及供应方覆盖；池/配置/日期/Q版本；条件存在；模块完整性；S/F/T/O账 |
| required_quality_disclosure | 未解决身份、缺失模块、供应方缺口、校准、不确定性、晚事件替换及寿命余量 |
| update_trigger | 任何BOM/路线/供应方/电池型号变化、退货/撤销、原总量更正、寿命修订或报废 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| philips-tar1506-2024 | standard | Philips TAR1506/00 Portable Radio, issue 2024-10-14, v5.2.7, pages 1–2; https://www.documents.philips.com/assets/20241014/1f55ad86fb9f4159af28b20900bb715c.pdf | 实际型号、盒/附件及供电规格身份；不推定消耗、BOM或电池包含情况 |
| ghg-product-2011 | official_guidance | GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–7 and 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 选用分析单位、边界透明及分配原则；本文可执行路线/账方法为声明的前景设计选择，无完整符合性声称 |
| un-cpc3-62142 | official_guidance | UNSD CPC Version 3.0, subclass 62142 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62142 | 仅分类范围，不是服务数量或整叶等同 |
