---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.calandering-or-other-rolling-machines-except-for-metals-or-glass
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 砑光机或其他滚压机器，但金属或玻璃用的除外

## 1. 范围与适用性

本 PCR 适用于完整砑光机、压延机或其他滚压机器的制造及出厂准备。这些机器通过材料在辊间通过，对纸、纺织品、皮革、橡胶、塑料或其他非金属且非玻璃的片材或连续料幅进行加工或表面处理。范围包括机械完整的机器及其驱动装置、压延辊总成、控制系统、初装润滑油、出厂验收试验和交付包装。

预定加工功能为轧制金属或玻璃的机器不在范围内。单独供应的滚筒、辊、备件，客户现场的基础和安装，出厂后的分销，使用阶段的电力和耗材，维护、翻新及寿命终止处理均不计入所声明的从摇篮到制造商工厂大门结果。研究若扩展边界，应单独报告这些阶段。

本类别需要单独的实质性方法规则，因为这类资本品可按项目配置，机架供应路线、辊体结构、驱动功率、控制系统及出厂试验均会实质影响物料清单和制造能耗。这些差异应作为限定信息和互斥路线条件处理，不应生成多个平行的规范 PCR 身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.calandering-or-other-rolling-machines-except-for-metals-or-glass |
| classification_refs | CPC 3.0：43933（精确分类语境） |
| covered_products | 用于非金属且非玻璃片材或连续料幅的完整砑光、压延、压花、平整、复合、压实或其他辊式加工机器 |
| excluded_products | 金属轧制机器；玻璃轧制机器；单独供应的滚筒或辊；单独供应的零件和附件；客户现场安装；主要功能属于其他专门机械类别的机器 |
| representative_product | 电力驱动的工业多辊压延机，含制造机架、压延辊总成、驱动电动机、电子控制单元、初装润滑油、出厂验收试验及运输包装 |
| production_route | 外购部件装配；主机架采用厂内钢板制造或外购涂装机架二者之一；机械/电气集成；出厂试验；包装 |
| market_state | 新制、完整、已通过出厂试验并在制造商工厂大门处具备交付条件的机器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并在工厂提供一台用于非金属且非玻璃片材或连续料幅的完整辊式加工机器 |
| How much | 净机器质量 1,000 kg，不含交付包装 |
| How well | 满足所声明采购技术规范及出厂验收准则，包括加工材料、工作宽度、辊数和辊材、辊径和表面状态、线压力、速度、温控能力、装机功率、控制架构、防护及附件 |
| How long or cycle | 一次工厂制造及交付准备周期；不含使用阶段使用寿命 |
| reference_flow_link | `reference_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 净机器质量 1,000 kg |
| 参考产品流 | 砑光机或其他滚压机器，但金属或玻璃用的除外（UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 加工材料类别；机器配置和商品名；工厂地点和报告期；净机器质量；工作宽度；辊数、辊材、辊径和表面状态；线压力；速度范围；辊温控制能力；装机功率；电动机额定值和能效等级；控制架构和电压；机架供应路线；所含附件；包装质量和材料；出厂验收试验边界 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明全部必需限定信息。1,000 kg 是归一化身份；还应披露实际机器质量和所代表的机器台数。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考机器及所有按质量归一化的材料和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在出厂验收之后、添加交付包装之前记录净机器质量；各数量均以批次数量乘以 1,000 kg 再除以验收合格机器的总净质量进行归一化。 |
| `packaging_separation` | 交付包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 包装应与净机器质量分别计量；包装生产计入从摇篮到工厂大门清单，但包装质量不得加到参考数量中。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 原始记录保留计量的 kWh，仅在归一化清单中按 1 kWh = 3.6 MJ 换算；披露电网地域、电压等级、供应商产品及损耗边界。 |
| `route_exclusivity` | 钢板和外购涂装机架 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明报告设施是以钢板制造主机架还是接收涂装机架；同一机架质量不得在两条路线重复计入。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_factory_gate` | 产品系统 | 纳入全部已报告材料、部件、电力、润滑油和包装的上游生产及入厂运输；纳入实际发生的厂内制造、装配、电气集成、初装加注、出厂验收试验、交付准备及制造废物进入所选处理过程之前的管理。除非另行报告，否则排除客户现场安装、使用、维护及寿命终止阶段。 | `epd-international-machine-tools-pcr-2012-02-v4` |
| `boundary_route_disclosure` | 机架供应 | 同一主机架采用厂内钢板制造路线或外购涂装结构件路线。混合供应应披露，并且仅将各路线实际计量的质量份额归入相应路线。 | `epd-international-machine-tools-pcr-2012-02-v4` |
| `boundary_capital_goods` | 制造设备和建筑物 | 前景清单默认排除一般生产资本设备和工厂基础设施；研究目标明确纳入时，应单独披露且不得改变产品参考流。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和部件进入制造商控制的供应链或报告设施时的状态 |
| starting_condition_role | 以供应商特定或具代表性的生产数据集表征上游产品输入，随后连接制造商控制的核心过程 |
| product_classification_scope | 上述语义边界内的完整机器；CPC 3.0 代码 43933 仅为分类语境，不单独定义规范身份 |
| recursive_input_rule | 仅作为制造设备使用的同类别完整机器属于资本设备，不递归记录为产品输入；购入后转售的同类别机器应予披露，并从制造产量中排除 |
| upstream_dataset_requirement | 主机架、辊总成、电动机、控制装置、润滑油和包装优先采用供应商特定数据集；否则采用地域和技术具有代表性的背景数据集并披露替代关系 |
| disclosure | 报告机架路线、部件供应商地域、再生含量声明、电力产品和地域、分配基础、排除的附件、包装组成及所有边界偏离 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `frame_fabrication` | 主机架制造 | conditional | 仅在报告制造商控制范围内对钢板进行切割、机加工、成形、焊接或表面处理时纳入；排除在 `machine_assembly_test` 中以外购涂装机架表征的质量。 | 前景部件制造 | 分配给参考机器的验收合格机架零件净质量 |
| `machine_assembly_test` | 机械/电气装配及出厂验收试验 | required | 完整制造机器始终纳入。 | 前景装配、加注、集成及试验 | 验收合格净机器质量 1,000 kg |
| `delivery_packaging` | 交付包装准备 | required | 纳入产品离开工厂大门之前施加的包装。 | 前景交付准备 | 验收合格净机器质量 1,000 kg 所对应的包装 |

### 过程：主机架制造（`frame_fabrication`）

#### 输入

##### 产品流

###### 厂内制造机架所用合金钢板（`steel_plate`）

记录进入制造商控制的机架制造过程的合金钢板。仅适用于厂内制造路线，并保留牌号、厚度、表面状态、再生含量声明、供应商和产地信息。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：发放至验收合格机架工单的实测钢板净领料量，减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 机架制造用电力（`fabrication_electricity`）

在机架制造过程纳入范围时，记录切割、成形、机加工、焊接、表面处理、抽排及直接辅助设备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：验收合格机架工单对应的分表电量或经分配的总表差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_factory_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分拣后的低合金钢制造废料（`low_alloy_steel_scrap`）

记录以废物形式离开报告设施的低合金钢边角料和切屑。前景记录应保留合金牌号、污染状态、质量和处理去向。

- 选定流：低合金钢废料 `afedcccd-b9f3-4941-8ba4-d3135b8abb67`
- 流属性/单位：Mass / kg
- 数量规则：归属于验收合格机架工单的实测出厂质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_scrap`
- 来源：

##### 基本流

### 过程：机械/电气装配及出厂验收试验（`machine_assembly_test`）

#### 输入

##### 产品流

###### 外购涂装主机架（`purchased_coated_machine_structure`）

仅在机架外部制造路线下记录外购涂装主结构。供应商边界应包括制造和涂装；其质量不得与 `steel_plate` 中同一机架质量合并计算。

- 选定流：涂装机架及结构件与部件 `b9bcd4e3-4971-448a-9077-1bc397c7c591`
- 流属性/单位：Mass / kg
- 数量规则：安装到参考机器中的验收合格供应商交付实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 压延辊总成（`calender_roll_assembly`）

将完整安装的辊总成作为一个外购或内部转移部件记录。应声明辊数、辊壳和辊芯材料、表面处理、尺寸、质量、供应商以及是否包含轴承；Tiangong UUID 尚未解决。

- 选定流：压延辊总成（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据机器物料清单记录验收合格的实测安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 主驱动电动机（`electric_motor`）

记录已安装的主工业交流驱动电动机。声明额定输出、电压、能效等级、质量、供应商以及本行是否包含辅助电动机。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：根据机器物料清单记录验收合格的实测安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 机器电子控制单元（`electronic_control_unit`）

按供应状态记录已安装的电子控制单元。声明控制架构、额定电压、质量、供应商，以及该单元与另行清查的驱动器或电动机之间的边界。

- 选定流：电子控制单元 `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- 流属性/单位：Mass / kg
- 数量规则：根据机器物料清单记录验收合格的实测安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 机器初装润滑油（`lubricating_oil`）

记录出厂验收前加入交付机器的成品润滑油。声明润滑油牌号、黏度、供应商、体积转质量所用密度，以及试验用油是否留在产品内。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：留在验收合格机器中的实测润滑油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 装配及出厂验收试验用电力（`assembly_test_electricity`）

记录装配工具、搬运、控制系统调试、空载和带载验收试验及直接辅助设备消耗的外购电力。排除客户使用阶段电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：验收合格机器工单和试验对应的分表电量或经分配的总表差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_factory_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：交付包装准备（`delivery_packaging`）

#### 输入

##### 产品流

###### 交付托架或包装箱用针叶材锯材（`softwood_packaging_lumber`）

仅记录纳入交付托架、垫木或包装箱的针叶材锯材。应声明含水率、处理方式、木材树种组、质量及可重复使用包装状态；Tiangong UUID 尚未解决。

- 选定流：包装用针叶材锯材（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：施加到验收合格机器上的实测干基当量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格净机器质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 具备交付条件的砑光机或滚压机器（`reference_machine`）

记录完整机器通过出厂试验后、加入包装质量之前的验收合格净质量。机器产品流 UUID 尚未解决；不得以玻璃产品或金属/玻璃轧制机器替代。

- 选定流：砑光机或其他滚压机器，但金属或玻璃用的除外（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：验收合格净机器质量 1,000 kg 的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 采集协议：`cp_product_mass_acceptance`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共享制造过程 | 通过分表计量、按工单领料、直接人工或设备时间记录，以及参考机器废物单独称量来避免分配。 | `epd-international-machine-tools-pcr-2012-02-v4` |
| `allocation_physical` | 无法细分的共享负荷 | 无法细分时，制造用电按实测设备小时或能耗驱动因素分配，涂装负荷按涂装面积分配，装配负荷按记录的人工或工位时间分配，搬运负荷按搬运质量分配；披露所选因果关系。 | `epd-international-machine-tools-pcr-2012-02-v4` |
| `allocation_economic_fallback` | 无因果关系的剩余负荷 | 仅在不存在可辩护的物理关系时采用经济分配；报告价值基础、参考期间、受影响份额和敏感性结果。 | `epd-international-machine-tools-pcr-2012-02-v4` |
| `waste_burden` | 制造废物 | 在所选废物流达到有记录的废物终止点之前，将收集和处理负荷归属于产品系统；不得在未单独声明方法时计入回收信用。 | `epd-international-machine-tools-pcr-2012-02-v4` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `frame_fabrication`; `machine_assembly_test` | 已安装材料和部件输入 | ERP 收货记录、批准的物料清单、领退料记录、供应商质量声明和验收记录 | work_order; part_id; supplier; material_or_component; grade_or_model; gross_mass; returned_mass; installed_mass; geography; acceptance_status | 将验收合格 BOM 数量与称量值或供应商声明质量核对，并减去有记录的退料 | kg | 每台验收合格机器或同质生产批次 | 完整报告期，通常至少连续 12 个月；较短且已披露的生产活动应覆盖全部产品 | 制造所声明机器的全部制造商控制场址 | 按行汇总验收合格安装质量，除以验收合格净机器质量，再乘以 1,000 kg | 已批准 BOM 版本、收货记录、秤校准或供应商声明及工单核对 |
| `cp_factory_electricity` | `frame_fabrication`; `machine_assembly_test` | 外购电力 | 结算电表、分表、试验日志和生产工单记录 | meter_id; opening_reading; closing_reading; test_kWh; operating_hours; work_order; accepted_mass; grid_geography; voltage; supplier_product; losses_boundary | 优先采用专用分表；否则扣除排除负荷，并按有记录的设备功率小时分配剩余总表差额 | kWh | 每工单或试验，按月汇总 | 与验收合格生产相同期间；披露停产和异常试验 | 服务于纳入过程的全部报告设施电表 | 按 `calc_allocate_shared_electricity` 将 kWh 转为 MJ，并归一化到 1,000 kg 验收合格净机器质量 | 电表校准或电费单、分配工作表、试验记录及电表边界图 |
| `cp_fabrication_scrap` | `frame_fabrication` | 低合金钢废料输出 | 废物磅单、废料箱日志、领料记录和处理凭证 | alloy_grade; work_order; gross_bin_mass; tare_mass; contamination; destination; treatment; accepted_frame_mass | 称量分拣的低合金钢废料，并与钢材领料和验收合格机架质量核对 | kg | 每次发运并归属工单；按月汇总 | 与厂内机架制造相同期间 | 报告设施制造区和废物出厂边界 | 汇总可归属的废料净质量并归一化到 1,000 kg 验收合格净机器质量 | 经校准磅单、分拣检查、质量平衡核对和处理凭证 |
| `cp_packaging_bom` | `delivery_packaging` | 针叶材包装输入 | 包装 BOM、采购记录、含水率测量和装箱清单 | work_order; wood_type; treatment; wet_mass; moisture_content; dry_basis_mass; reusable_status; accepted_machine_mass | 称量锯材，或按构件尺寸和密度核算，并转换到所声明质量基准 | kg | 每台包装机器 | 完整报告期 | 最终包装区 | 汇总验收合格机器所用包装锯材并归一化到 1,000 kg 验收合格净机器质量 | 装箱清单、称量或尺寸记录、含水率记录和采购规范 |
| `cp_product_mass_acceptance` | `delivery_packaging` | 参考机器输出 | 最终验收证书、经校准的秤或经核对的工程质量声明及序列号登记 | serial_number; configuration; net_machine_mass; packaging_mass; acceptance_date; accepted_status | 将验收合格机器净质量与包装及不合格或返工产品分别确定 | kg | 每台验收合格机器 | 完整报告期 | 工厂大门产品输出边界 | 汇总验收合格净机器质量；全部报告流归一化到恰好 1,000 kg | 验收证书、序列号登记、称量证据和包装扣除记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 所有清单行 | 归一化数量 = 可归属批次数量 × 1,000 kg / 该批次所代表的验收合格净机器质量 | 可归属行数量；验收合格净机器质量 | 每 1,000 kg 参考机器的行数量 |  |
| `calc_allocate_shared_electricity` | `fabrication_electricity`; `assembly_test_electricity` | 纳入 kWh = 分表 kWh，或设施总表差额减去有记录的排除负荷后乘以因果设备功率小时份额；归一化 MJ = 纳入 kWh × 3.6 × 1,000 / 验收合格净机器质量 | 电表读数；排除负荷；设备功率和时间；验收合格净机器质量 | 每 1,000 kg 参考机器的 MJ |  |
| `calc_scrap_reconciliation` | `low_alloy_steel_scrap` | 可归属废料 = 经称量并分拣的低合金钢废料，与钢材领料减去退库及验收合格产品中钢材的差额进行核对 | 钢材领料；退库；验收合格产品所含钢材；称量废料 | 每 1,000 kg 参考机器的低合金钢废料 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考机器和部件 | 将序列号、配置、BOM 版本、供应商型号和全部必需限定信息与验收合格产品匹配；输出不得混入金属/玻璃轧制机器或单独零件。 | 验收证书、序列号登记、已批准 BOM、采购规范和供应商记录 |
| `dq_measurement` | 质量和电力 | 使用经校准的仪器或可审计的供应商声明；保留原始单位、换算因子、电表边界、皮重修正和包装扣除。 | 校准证书、发票、磅单、电表图和计算工作表 |
| `dq_temporal` | 前景活动数据 | 采用代表当前生产的期间，通常至少连续 12 个月；较短生产活动应覆盖全部验收合格产品，并披露其代表性理由。 | 带日期的生产登记、电表序列和完整性检查 |
| `dq_completeness` | 产品质量和纳入过程 | 核对 BOM 质量、已安装部件、初装润滑油、包装、制造废料和验收合格输出；说明每项排除的材料或活动，并量化已知质量份额。 | 质量平衡工作表、排除项登记和审核人签字 |
| `dq_background` | 上游数据集 | 选择与供应商地域、生产技术、合金或部件状态、电力产品和参考年份一致的数据集；披露代理数据及其贡献。 | 数据集映射表和代表性评价 |
| `dq_primary_data` | 核心过程 | 制造商控制的机架制造、装配、试验、包装和废物管理采用场址特定数据。 | 工单、BOM 记录、电表数据、包装记录和废物磅单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品身份 | 数据包缺失加工材料类别、机器配置、净质量、辊规格、装机功率、控制架构、机架路线、工厂地点、报告期或验收边界时，应判为不符合。 | `un-cpc-3-0-structure-2025` |
| `validate_reference` | 参考流 | 归一化后必须恰好为 1,000 kg 验收合格净机器质量；包装质量应从参考数量中排除并单独报告。 |  |
| `validate_route` | 机架供应 | 不得在 `steel_plate` 和 `purchased_coated_machine_structure` 中重复计算同一主机架质量；混合供应须有实测质量份额。 |  |
| `validate_energy` | 电力 | 必须提供原始 kWh、3.6 MJ/kWh 换算、电网地域、电压、供应商产品、分配基础和损耗边界；排除使用阶段电力。 | `epd-international-machine-tools-pcr-2012-02-v4` |
| `validate_mass_balance` | 材料和废物 | 将验收合格产品质量与已安装 BOM 质量核对，并解释差异，包括机加工移除质量、耗材、包装、废物、退料和测量不确定性。 |  |
| `validate_uuid_gaps` | 未解决身份 | 在直接核验到精确的公开 state-100 身份之前，产品流、压延辊总成和包装用针叶材锯材 UUID 必须保持空白；不得以玻璃产品、通用仪器、硬木或纤维板候选项替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明完整机器配置的前景从摇篮到制造商工厂大门生产数据集 |
| downstream_use | 用户确认配置、地域、时间和边界相容时，可作为购买所声明机器的系统中的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 机器制造的产品足迹建模；资本品情景；供应链筛查；在功能和边界限定信息等效时比较生产配置 |
| excluded_use | 直接比较金属/玻璃轧制机器；单独的辊或零件；未限定的机器变体；使用阶段性能比较；客户现场安装；维护；寿命终止声明；自动推断使用寿命或生产率 |
| required_metadata | PCR id 和版本；机器商品名和配置；全部必需限定信息；工厂地域；报告期；验收合格输出质量和台数；机架路线；供应商数据集映射；电力属性；包装；分配方法；未解决 UUID 状态 |
| required_quality_disclosure | 前景覆盖率；电表和质量平衡完整性；供应商特定数据与通用数据份额；代理数据集；排除项；分配份额；不确定性；校验结果；与本 PCR 的偏离 |
| update_trigger | 机器配置、辊结构、主要材料或供应路线、工厂过程、电力供应、控制或驱动架构、包装、分配方法、报告期发生变化，或任何当前空白 UUID 得到解决 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-06） | CPC 43933 的正式英文名称及分类语境 |
| `epd-international-machine-tools-pcr-2012-02-v4` | 标准（`standard`） | EPD International，PCR 2012:02，《Machine-tools for drilling, boring or milling metals and composite materials》，4.0.0 版，2024-02-27，https://api.prod.environdec.com/api/v2/EPDLibrary/Files/cfd6c3a3-b2ab-4705-5616-08dc2e3a662b/Data（检索日期：2026-09-06） | 类似工业机械的系统分解、核心过程覆盖、包装纳入、分配顺序、前景数据质量及电力披露 |
| `china-mof-2026-tariff-adjustment` | 官方指南（`official_guidance`） | 中华人民共和国财政部，《2026年关税调整方案》，https://m.mof.gov.cn/czxw/202603/P020260326610286964491.pdf（检索日期：2026-09-06） | 税则号列 84201000 的专业中文术语 |
