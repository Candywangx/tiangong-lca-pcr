---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.track-suits-ski-suits-swimwear-and-other-garments-of-textile-fabric-not-knitted-or-croc-281e84cd
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非针织或钩编纺织面料制运动服、滑雪服、泳装及其他未另分类服装

## 1. 范围与适用性

本 PCR 规范非针织或钩编纺织面料制成的运动服、滑雪服、泳装及其他未另分类服装的前景数据生产。边界从购入机织外层面料、里料、填充材料、膜材和已声明服装组件开始，覆盖验布、排料、裁剪、缝制、辅料安装、条件性接缝压胶和成衣整理、检验、熨烫以及制造工厂门口包装。

具体数据包应声明服装类型、各纺织层的纤维组成与结构、生产路线、基准尺码或生产尺码组合、性能功能及试验规范、里料或保温层、膜材或涂层、辅料、销售包装配置、生产地域和报告期。运动服、滑雪服和泳装仅在其主要服装结构为非针织、非钩编纺织面料时纳入。针织或钩编服装、袜类、另行分类的服装类别、毛皮或皮革服装、上游纤维/纱线/织物生产、分销、零售、消费者使用和护理以及生命终期均不纳入，除非在另行声明的生命周期模型中增加。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.track-suits-ski-suits-swimwear-and-other-garments-of-textile-fabric-not-knitted-or-croc-281e84cd |
| classification_refs | CPC 3.0: 28236（精确范围参考） |
| covered_products | 主要服装结构采用非针织、非钩编纺织面料的成品运动服、滑雪服、泳装及其他未另分类服装。 |
| excluded_products | 针织或钩编服装；袜类；归入其他 CPC 服装子类的服装；另行分类的毛皮、皮革、纯塑料、毡制或无纺布服装；单独销售的纺织面料。 |
| representative_product | 按已声明技术规范以及基准尺码或有记录尺码组合生产并通过质量验收、完成销售包装的非针织、非钩编纺织面料制服装。 |
| production_route | 购入机织外层面料及已声明里料、填充、膜材和组件；验布、排料和裁剪；缝制和辅料安装；条件性接缝压胶、洗涤、印花、涂层或热处理；检验、熨烫和包装。 |
| market_state | 服装工厂门口供分销的已包装制造成品。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产符合已声明产品规范的非针织、非钩编纺织面料制成品运动服、滑雪服、泳装或其他范围内服装。 |
| How much | 1 kg 质量验收合格成衣的净质量，不含单独报告的运输包装。 |
| How well | 符合已声明服装类型、纤维组成和面料结构、基准尺码或尺码组合、性能功能及试验规范、里料或保温层、膜材或涂层、辅料、质量等级和包装配置。 |
| How long or cycle | 一个完整制造批次或报告期生产分配；消费者使用寿命不属于本前景参考流。 |
| reference_flow_link | 工厂门口 CPC 28236 成品输出的净质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Track suits, ski suits, swimwear and other garments, of textile fabric, not knitted or crocheted n.e.c. `686dfd81-1397-4b0b-b051-eedb1164e25d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装类型；各纺织层按质量计纤维组成；机织面料结构及单位面积质量；裁剪缝制路线；基准尺码或生产尺码组合；性能功能及试验规范；里料或保温层；膜材、涂层或拒水整理；辅料和闭合件；质量等级；销售包装配置；生产地域；报告期 |

构建前景数据包时，全部必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终调湿后且加入单独报告的运输包装前测量质量验收合格成衣净质量；全部前景交换归一化到 1 kg 参考输出。 |
| `material_mass` | 面料、裁片、辅料、化学品、包装、产品和固体废物 | Mass | kg | 使用经校准质量记录；计件或按长度记录须使用产品或批次特定的实测单位质量换算，并保留换算证据。 |
| `fabric_area_mass` | 外层面料、里料、膜材和裁剪记录 | Mass and area | kg and m2 | 面料或膜材按面积采购或控制时，记录面积和实际调湿单位面积质量；用面积乘以实测单位面积质量计算质量，并与发票或秤重质量核对。 |
| `energy_measurement` | 电力、燃料、蒸汽、热水和压缩空气 | 适用的能量、质量或体积 | kWh、MJ、kg 或 m3 | 优先使用分表消耗；否则按第 7 节分配有记录的报告期总量，并保留仪表、发票和换算因子证据。 |
| `moisture_condition` | 参考产品和纺织材料质量 | Mass | kg | 声明调湿状态和含湿基准；不得在无记录换算时混用调湿、湿态和干态质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景服装制造 | 从接收已声明机织面料、膜材、填充、辅料和组件开始，纳入全部适用场内验布、裁剪、组装、接缝压胶、整理、检验、熨烫和包装，以及直接公用工程、废物和基本流排放。 | af-pefcr-3-1-2025; jrc-textiles-bref-2023 |
| `boundary_rule_2` | 上游和下游阶段 | 纤维、纱线、织造、购入面料、辅料、化学品、燃料、电力、包装生产和废物处理采用可追溯上游数据集；本门到门数据包不含分销、零售、消费者护理和生命终期，除非下游 lifecyclemodel 明确增加且不重复计算。 | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `boundary_rule_3` | 完整性 | 不得因 UUID 未解决或假定贡献较小而遗漏适用材料、能源、废物或直接排放交换；须按原子流记录、保留身份缺口，并披露任何经论证排除。 | ec-pef-method-2021; af-pefcr-3-1-2025 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景从购入机织外层面料以及每项已声明里料、填充、膜材、辅料、组件和包装投入开始，须具备供应商、组成、整理和批次身份；识别已嵌入上游的染色、印花、涂层、层压或其他整理。 |
| starting_condition_role | 已声明起始条件决定哪些裁剪、组装、压胶和整理步骤属于前景，并避免重复计入供应商已嵌入的织物生产或处理。 |
| product_classification_scope | 非针织或钩编纺织面料制运动服、滑雪服、泳装及其他未另分类服装；CPC 3.0:28236 是精确外部范围参考，而不是规范 PCR 身份。 |
| recursive_input_rule | 若投入本身是本 PCR 类别的成品服装，将其作为可单独追溯的产品投入，并使用结束于其已声明门口的上游数据集；不得在同一前景过程内递归重用本 PCR。 |
| upstream_dataset_requirement | 每项购入面料、膜材、填充、辅料、化学品、公用工程、燃料、制冷剂和包装投入均应有地域与技术上有代表性的上游数据集，或披露数据缺口。 |
| disclosure | 披露服装类型、性能规范、起始条件、供应商已嵌入加工、场内和外包步骤、过程位置、排除项、分配、包装处理、废物去向，以及运输、使用或生命终期是否在本前景数据包外增加。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p2_cutting` | 验布、排料和裁剪 | required | 非针织、非钩编裁剪缝制路线始终纳入。 | 将已声明外层面料、里料和其他片材转化为已识别服装裁片，并量化排料与缺陷损失。 | kg 裁片 |
| `p3_assembly` | 缝制、辅料安装和压胶 | required | 纳入全部实际缝制和辅料安装；仅当已声明规范要求密封接缝时纳入压胶带和胶黏剂。 | 由裁片和各项辅料生产组装成衣。 | kg 组装成衣 |
| `p4_finishing` | 成衣洗涤、印花、涂层、热处理和整理 | conditional | 纳入组装后或裁片阶段的每项实际湿法或干法操作，包括由报告设施控制的性能整理。 | 施加已声明外观或性能整理，并记录水、化学品、能源、废水、废物和直接排放。 | kg 包装前整理成衣 |
| `p5_quality_packaging` | 检验、熨烫、返修、包装和内部搬运 | required | 纳入最终检验以及实际熨烫、返修、销售包装和场内燃料使用。 | 交付质量验收合格的工厂门口销售包装产品。 | 1 kg 参考产品 |

### 过程：验布、排料和裁剪（`p2_cutting`）

#### 输入

##### 产品流

###### 机织外层纺织面料（`shell_fabric_input`）

各机织外层面料结构分别记录；汇总前保留纤维组成、克重、整理、供应商和批次身份。

- 选定流：Woven outer-shell textile fabric
- 流属性/单位：Mass / kg
- 数量规则：实测裁剪订单领用织物质量，并与面积和实际克重核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_cutting_records`

###### 机织里料（`lining_fabric_input`）

裁剪缝制路线使用里料时，各机织里料结构分别记录。

- 选定流：Woven lining textile fabric
- 流属性/单位：Mass / kg
- 数量规则：实测裁剪订单领用织物质量，并与面积和实际克重核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_cutting_records`

###### 中压电力（`cutting_electricity_input`）

记录铺布、数字排料、裁剪、真空和可直接归属验布设备的电力。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：分表消耗，或按第 7 节分配报告期消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_cutting_records`

###### 纸质唛架纸（`paper_marker_input`）

仅在使用实体唛架纸的路线中记录。

- 选定流：Paper marker sheet
- 流属性/单位：Mass / kg
- 数量规则：实测生产订单领用纸张质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_cutting_records`

#### 输出

##### 产品流

###### 机织服装裁片（`cut_panels_output`）

记录转入组装的质量验收合格裁片。

- 选定流：Cut woven garment panels
- 流属性/单位：Mass / kg
- 数量规则：实测转入组装的合格裁片质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_cutting_records`

##### 废物流

###### 废机织纺织边角料（`cutting_textile_offcuts_output`）

记录不可用裁剪边角料和有缺陷裁片，扣除内部直接回用。

- 选定流：Waste woven textile offcuts
- 流属性/单位：Mass / kg
- 数量规则：按材料类别和去向实测废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_cutting_records`

###### 废纸（`cutting_waste_paper_output`）

将废弃实体唛架纸与纺织边角料分开记录。

- 选定流：Waste paper
- 流属性/单位：Mass / kg
- 数量规则：实测转交废物管理的废纸质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_cutting_records`

### 过程：缝制、辅料安装和压胶（`p3_assembly`）

#### 输入

##### 产品流

###### 机织服装裁片（`cut_panels_input`）

记录裁剪缝制路线进入组装的裁片。

- 选定流：Cut woven garment panels
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 聚酯缝纫线（`sewing_thread_input`）

缝纫线与服装织物和其他辅料分开记录。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：由线筒领用、退回和库存记录计算净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 氨纶弹性带（`elastic_tape_input`）

腰部、袖口、裤脚或支撑结构使用氨纶弹性带时记录。

- 选定流：Elastane elastic tape
- 流属性/单位：Mass / kg
- 数量规则：件数或长度乘实测单位质量，并与领用记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 聚酰胺线圈拉链（`zipper_input`）

适用时将每条安装的聚酰胺线圈拉链作为单独辅料输入记录。

- 选定流：Polyamide coil zipper
- 流属性/单位：Mass / kg
- 数量规则：安装件数乘实测拉链质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 不锈钢按扣（`snap_fastener_input`）

适用时单独记录安装的不锈钢按扣。

- 选定流：Stainless-steel snap fastener
- 流属性/单位：Mass / kg
- 数量规则：安装件数乘实测按扣质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 聚酯服装标签（`garment_label_input`）

永久性聚酯服装标签与纸吊牌分开记录。

- 选定流：Polyester garment label
- 流属性/单位：Mass / kg
- 数量规则：安装标签数乘实测标签质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 聚氨酯压胶带（`seam_sealing_tape_input`）

防水或防护结构使用聚氨酯压胶带时记录。

- 选定流：Polyurethane seam-sealing tape
- 流属性/单位：Mass / kg
- 数量规则：施用长度乘经核实的单位长度胶带质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 水性聚氨酯接缝密封胶（`seam_sealing_adhesive_input`）

使用水性聚氨酯接缝密封胶时单独记录。

- 选定流：Aqueous polyurethane seam-sealing adhesive
- 流属性/单位：Mass / kg
- 数量规则：批次净领用质量，即领用减实测退回可用胶黏剂。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 中压电力（`assembly_electricity_input`）

记录缝制、套口、粘合、压胶、局部抽风和可直接归属辅助设备的电力。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：分表消耗，或按第 7 节分配报告期消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 700 kPa 压缩空气（`assembly_compressed_air_input`）

气动组装设备使用压缩空气时记录。

- 选定流：Compressed air, 700 kPa
- 流属性/单位：Volume / m3
- 数量规则：计量交付体积，或由已核运行时间和设备需求计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 矿物润滑油（`assembly_lubricating_oil_input`）

记录组装机械消耗的补充矿物润滑油。

- 选定流：Mineral lubricating oil
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入减期末库存和回收油。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_assembly_records`

#### 输出

##### 产品流

###### 组装机织成衣（`assembled_garment_output`）

记录转入整理或最终检验的质量验收合格组装成衣。

- 选定流：Assembled knitted garment
- 流属性/单位：Mass / kg
- 数量规则：实测转出组装的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

##### 废物流

###### 废缝纫线（`assembly_thread_waste_output`）

线头和废线与织物边角料分开记录。

- 选定流：Waste sewing thread
- 流属性/单位：Mass / kg
- 数量规则：实测或质量平衡得到的转交废物管理的线废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 不合格机织成衣（`defective_assembly_output`）

扣除返修后返回生产的成衣，记录不可修复组装次品。

- 选定流：Defective knitted garment
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向实测次品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 废聚氨酯胶黏剂（`waste_seam_adhesive_output`）

记录从设备清出或生产结束后废弃的不可用聚氨酯胶黏剂。

- 选定流：Waste polyurethane adhesive
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 废矿物润滑油（`assembly_waste_oil_output`）

记录转交废物管理的废矿物润滑油。

- 选定流：Waste mineral lubricating oil
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

##### 基本流

###### 排入空气的非甲烷挥发性有机物（`assembly_voc_air`）

胶黏、清洁或压胶作业排放时，记录直接非甲烷挥发性有机物释放。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或使用产品特定挥发分和已核捕集效率进行质量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_assembly_records`

### 过程：成衣洗涤、印花、涂层、热处理和整理（`p4_finishing`）

#### 输入

##### 产品流

###### 组装机织成衣（`assembled_garment_input`）

记录进入已声明整理序列的组装成衣。

- 选定流：Assembled knitted garment
- 流属性/单位：Mass / kg
- 数量规则：按批次实测输入质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 工艺水（`finishing_process_water_input`）

记录进入成衣洗涤、漂洗、化学品配制或印花的冷工艺水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：计量供应给适用整理批次的水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 热水（`finishing_hot_water_input`）

购入或单独产生的热水用于整理，且其上游热量未计入蒸汽或燃料输入时记录。

- 选定流：Hot water
- 流属性/单位：Mass / kg
- 数量规则：计量交付质量，并保留供回水温度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 蒸汽（`finishing_steam_input`）

购入或产生并交付整理的蒸汽与热水、天然气分开记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸汽质量，按有记录的压力、温度、冷凝水回收和焓基准换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 天然气（`finishing_natural_gas_input`）

记录为可直接归属整理热量而在场址内燃烧的天然气。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：计量燃气体积并按供应商低位热值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 中压电力（`finishing_electricity_input`）

记录洗衣机、烘干、固化、印花、涂层、抽风、泵和可直接归属辅助设备的电力。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：分表消耗，或按第 7 节分配报告期消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 氨基改性有机硅纺织柔软剂（`finishing_silicone_softener_input`）

施用氨基改性有机硅纺织柔软剂时单独记录。

- 选定流：Amino-functional silicone textile softener
- 流属性/单位：Mass / kg
- 数量规则：按配方和退料记录计算批次净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 无氟耐久拒水整理剂（`finishing_dwr_input`）

施用无氟耐久拒水整理配方时单独记录。

- 选定流：Non-fluorinated durable water-repellent finishing agent
- 流属性/单位：Mass / kg
- 数量规则：按配方和退料记录计算批次净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 非离子纺织洗涤剂（`finishing_detergent_input`）

进行成衣洗涤时单独记录非离子纺织洗涤剂。

- 选定流：Nonionic textile detergent
- 流属性/单位：Mass / kg
- 数量规则：按加料记录计算批次净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 水性聚氨酯纺织印花墨（`finishing_printing_ink_input`）

进行印花时单独记录水性聚氨酯纺织印花墨。

- 选定流：Aqueous polyurethane textile printing ink
- 流属性/单位：Mass / kg
- 数量规则：领用墨质量减退回可用墨质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### R-410A 制冷剂（`finishing_r410a_input`）

直接服务整理过程的冷水机发生可分配泄漏时，记录 R-410A 补充量。

- 选定流：Refrigerant R-410A
- 流属性/单位：Mass / kg
- 数量规则：根据维修记录和制冷剂库存核对分配补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

#### 输出

##### 产品流

###### 包装前整理机织成衣（`finished_garment_output`）

记录转入最终检验和包装的质量验收合格整理成衣。

- 选定流：Finished knitted garment before packaging
- 流属性/单位：Mass / kg
- 数量规则：实测转出整理的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

##### 废物流

###### 成衣洗涤废水（`finishing_wastewater_output`）

记录处理前从成衣洗涤和漂洗排出的废水。

- 选定流：Wastewater from garment washing
- 流属性/单位：Volume / m3
- 数量规则：计量排水量，或进水量减实测蒸发、产品带水和单独分流量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 废纺织整理液（`waste_finishing_liquor_output`）

将作为浓缩废物而非废水处置的未使用或废整理液单独记录。

- 选定流：Waste textile finishing liquor
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 废聚氨酯印花墨（`waste_printing_ink_output`）

记录转交废物管理的不可用聚氨酯印花墨。

- 选定流：Waste polyurethane printing ink
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

###### 不合格整理机织成衣（`finishing_reject_output`）

扣除返修后返回生产的成衣，记录不可修复整理次品。

- 选定流：Defective knitted garment
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向实测次品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_records`

##### 基本流

###### 排入空气的化石二氧化碳（`finishing_co2_air`）

记录分配给整理的场址内天然气燃烧直接化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测天然气消耗、供应商组成或热值和有记录燃烧因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_records`

###### 排入空气的氮氧化物（`finishing_nox_air`）

记录分配给整理的场址内天然气燃烧直接氮氧化物。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：使用实测烟气排放，或实测燃料乘有记录的设备特定因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_records`

###### 排入空气的一氧化碳（`finishing_co_air`）

记录分配给整理的场址内天然气燃烧直接一氧化碳。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：使用实测烟气排放，或实测燃料乘有记录的设备特定因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_records`

###### 排入水体的化学需氧量（`finishing_cod_water`）

记录在已声明场内处理边界之后排放的化学需氧量。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘流量加权实测浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_records`

###### 排入水体的悬浮固体（`finishing_suspended_solids_water`）

记录在已声明场内处理边界之后排放的悬浮固体。

- 选定流：Suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘流量加权实测浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_records`

###### 排入空气的 R-410A 制冷剂（`finishing_r410a_air`）

直接服务整理的冷水机发生可分配泄漏时记录 R-410A 排放。

- 选定流：Refrigerant R-410A to air
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补充量减期末充注量和回收量，再分配至整理服务。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前整理成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_records`

### 过程：检验、熨烫、返修、包装和内部搬运（`p5_quality_packaging`）

#### 输入

##### 产品流

###### 包装前整理机织成衣（`finished_garment_input`）

记录进入最终检验和包装的候验成衣。

- 选定流：Finished knitted garment before packaging
- 流属性/单位：Mass / kg
- 数量规则：实测输入质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 中压电力（`packaging_electricity_input`）

记录检验照明、熨烫、返修、吊牌、封装和包装设备的电力。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：分表消耗，或按第 7 节分配报告期消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 蒸汽（`packaging_steam_input`）

最终熨烫蒸汽与电力和整理蒸汽分开记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸汽质量，按有记录的压力、温度、冷凝水回收和焓基准换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 低硫柴油（`packaging_diesel_input`）

记录场内搬运设备燃烧并分配给最终包装和工厂门口搬运的低硫柴油。

- 选定流：Low-sulphur diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：燃料领用或油罐核对量按供应商低位热值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 低密度聚乙烯服装袋（`polyethylene_bag_input`）

使用初级聚乙烯服装袋时单独记录。

- 选定流：Low-density polyethylene garment bag
- 流属性/单位：Mass / kg
- 数量规则：袋数乘实测单袋质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 瓦楞纸板箱（`paperboard_carton_input`）

瓦楞纸板箱与初级包装袋和纸吊牌分开记录。

- 选定流：Corrugated paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：纸箱数乘实测纸箱质量，并按装箱产品质量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 纸吊牌（`paper_hangtag_input`）

纸吊牌与永久性服装标签分开记录。

- 选定流：Paper hangtag
- 流属性/单位：Mass / kg
- 数量规则：安装吊牌数乘实测吊牌质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 聚丙烯捆扎带（`polypropylene_strapping_input`）

使用聚丙烯纸箱捆扎带时单独记录。

- 选定流：Polypropylene strapping
- 流属性/单位：Mass / kg
- 数量规则：施用长度乘实测单位长度质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

#### 输出

##### 产品流

###### CPC 28236 非针织、非钩编纺织面料制成衣（`reference_finished_garment_output`）

本行为质量验收合格的工厂门口参考输出；运输包装在各自输入行单独盘查。

- 选定流：Track suits, ski suits, swimwear and other garments, of textile fabric, not knitted or crocheted n.e.c. `686dfd81-1397-4b0b-b051-eedb1164e25d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg in Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：质量验收合格成衣净质量恰为 1 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）

##### 废物流

###### 不合格成品机织成衣（`packaging_reject_output`）

扣除返修后返回生产的成衣，记录最终检验中不可修复次品。

- 选定流：Defective woven garment
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向实测次品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 废聚乙烯薄膜（`packaging_waste_polyethylene_output`）

废弃来料聚乙烯薄膜和破损包装袋与废纸板分开记录。

- 选定流：Waste polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 废瓦楞纸板（`packaging_waste_paperboard_output`）

废弃来料纸箱和破损纸箱与聚乙烯废物分开记录。

- 选定流：Waste corrugated paperboard
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_quality_packaging_records`

##### 基本流

###### 排入空气的化石二氧化碳（`packaging_co2_air`）

记录场内搬运设备消耗柴油产生的直接化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测柴油消耗、供应商燃料性质和有记录燃烧因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 排入空气的氮氧化物（`packaging_nox_air`）

记录场内搬运设备消耗柴油产生的直接氮氧化物。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：使用实测尾气排放，或实测柴油乘有记录的设备特定因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_quality_packaging_records`

###### 排入空气的颗粒物（`packaging_pm_air`）

记录场内搬运设备消耗柴油产生的直接颗粒物。

- 选定流：Particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：使用实测尾气排放，或实测柴油乘有记录的设备特定因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_quality_packaging_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 全部前景过程 | 通过产品特定订单、仪表、机器运行时间和废物记录避免分配。无法细分时，记录共享过程、产品、报告期、分母和敏感性。 | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `allocation_rule_2` | 裁剪和整理 | 共享裁剪和整理材料与能源负荷按实测合格质量分配；无产品特定计量时，多场址电力采用生产质量加权平均。 | af-pefcr-3-1-2025 |
| `allocation_rule_3` | 组装和缝制 | 无法取得单位级运行或记录时，共享组装和缝制活动按质量验收合格服装件数分配，再用代表产品和尺码组合的实测质量换算至 1 kg 参考基准。 | af-pefcr-3-1-2025 |
| `allocation_rule_4` | 废物和回收材料 | 收集和处理负荷归属于产生废物的过程。除非单独记录的下游模型采用一致且不重复计算的循环方法，否则本前景数据集内不计入回收或能量回收抵扣。 | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `allocation_rule_5` | 共产品 | 通常不产生共产品。出现可销售副产品时优先细分过程；无法细分时采用反映因果的有记录物理关系，并与废物分开报告。 | ec-pef-method-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p2_cutting_records` | `p2_cutting` | 织物、纸、电力、裁片、纺织边角料、废纸 | 织物领退、排料报告、仪表、裁片转移、废物联单 | order_id; row_id; fabric_mass; fabric_area; grammage; marker_efficiency; paper_mass; electricity; accepted_panel_mass; waste_mass; destination | 经校准秤、裁剪软件、仪表和废物记录 | kg; m2; kWh | 每个裁剪订单 | 具有代表性的报告期，通常为连续 12 个月 | 各裁剪场址和产线 | 织物输入与合格裁片、退回可用织物和纺织废物核对；纸张平衡单独保留 | 排料文件；校准；仪表日志；转移和废物联单 |
| `cp_p3_assembly_records` | `p3_assembly` | 裁片和各项辅料、电力、压缩空气、油、组装产品、废物、VOC | 订单 BOM、材料领用、件数、仪表/运行时间、输出和废物记录、配方组成 | order_id; row_id; input_mass; count; unit_mass; length; mass_per_length; electricity; air_volume; accepted_mass; reject_mass; volatile_fraction; capture_efficiency | BOM 核对、经校准秤、计数器、仪表和已核计算输入 | kg; piece; m; kWh; m3 | 每生产订单并按月核对 | 具有代表性的报告期，通常为连续 12 个月 | 各组装场址和产线 | 各原子辅料分别计算；按合格组装质量归一化 | 技术包；BOM；秤和仪表校准；领退记录；废物联单 |
| `cp_p4_finishing_records` | `p4_finishing` | 成衣输入/输出、水、热水、蒸汽、燃气、电力、各化学品、制冷剂、废物和排放 | 批次配方、仪表、燃料发票、产品转移、废水实验室、废物和制冷剂维修记录 | batch_id; row_id; input_mass; accepted_mass; water_volume; hot_water_mass; temperatures; steam_mass; pressure; condensate_return; gas_volume; heating_value; electricity; chemical_issue; chemical_return; wastewater_volume; pollutant_concentration; refrigerant_opening; refrigerant_added; refrigerant_closing; refrigerant_recovered | 经校准仪表和秤、批次加料、实验室检测和维修记录核对 | kg; m3; kWh; MJ | 每批次或监测事件并按月核对 | 具有代表性的报告期，通常为连续 12 个月 | 各整理场址和产线 | 各原子交换按合格整理成衣质量归一化；废水浓度按流量加权 | 校准；配方；发票；实验室证书；废物联单；制冷剂维修日志 |
| `cp_p5_quality_packaging_records` | `p5_quality_packaging` | 成衣输入/输出、电力、蒸汽、柴油、各包装组件、次品、包装废物和燃烧排放 | 检验报告、仪表、燃料领用、包装 BOM、件数、秤和废物记录 | order_id; row_id; input_mass; accepted_mass; reject_mass; electricity; steam_mass; diesel_volume; heating_value; packaging_count; unit_mass; waste_mass; destination | 经校准秤和仪表、检验记录、包装计数和燃料核对 | kg; piece; kWh; MJ | 每订单并按月核对 | 具有代表性的报告期，通常为连续 12 个月 | 各最终检验和包装场址 | 各原子输入、废物和计算排放按 1 kg 合格参考输出归一化 | 检验报告；包装规范；校准；发票；燃料日志；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | 全部清单行 | 归一化数量 = 可归属交换净量 / 合格过程输出净质量；最终过程使用合格 CPC 28236 产品净质量。 | 原子行数量；合格输出质量 | 每 kg 过程或参考输出数量 | ec-pef-method-2021 |
| `calc_rule_2` | 材料质量平衡 | 纺织品和辅料输入质量 = 转移的合格产品质量 + 分别记录的废物质量 + 实测库存变化；发布前调查未解释残差。 | 材料领退；合格输出；废物；库存变化 | 质量平衡残差和核对状态 | af-pefcr-3-1-2025 |
| `calc_rule_3` | 织物换算 | 织物质量 = 实测织物面积 × 实际调湿克重；保留两个原始字段并与秤重或发票质量核对。 | 面积；克重；调湿状态 | 织物质量 | af-pefcr-3-1-2025 |
| `calc_rule_4` | 计件辅料和包装 | 质量 = 安装或使用件数 × 实测单件质量；按长度计的输入使用施用长度 × 实测单位长度质量。 | 件数或长度；实测单位质量 | 辅料或包装质量 | af-pefcr-3-1-2025 |
| `calc_rule_5` | 燃烧排放 | 排放质量 = 实测燃料能量或质量 × 有记录的燃料和设备特定排放因子；保留因子来源、热值、氧化基准和污染物种类。 | 燃料记录；热值；排放因子 | 各基本流排放行的独立质量 | ec-pef-method-2021 |
| `calc_rule_6` | 废水污染物负荷 | 污染物负荷 = 各排水时段体积 × 匹配的流量加权浓度之和；在已声明处理边界分别报告各污染物。 | 排水量；浓度；采样时间；处理边界 | 排放污染物 kg | jrc-textiles-bref-2023 |
| `calc_rule_7` | 制冷剂泄漏 | 分配泄漏量 = 期初充注量 + 补充量 − 期末充注量 − 回收量，并按冷水机对整理过程的实测服务量分配。 | 充注库存；维修补充；回收；服务分配 | 排入空气的 R-410A kg | ec-pef-method-2021 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 核实服装分类、机织面料结构、路线、纤维组成、基准尺码或尺码组合、整理、包装和三个参考 UUID。 | 技术包；BOM；标签规范；Tiangong state-code-100 直读 |
| `dq_bom` | 产品材料组成 | 至少 95% BOM 质量以及 100% 主面料、里料、填充、电子件和金属采用初级质量数据；识别剩余组成和方法。 | 产品特定 BOM、供应商记录和秤重记录；af-pefcr-3-1-2025 |
| `dq_technology` | 各过程 | 记录实际技术、位置、路线适用性、外包和供应商已嵌入加工；不得将路线行用于已证明不存在的操作。 | 过程图；设备清单；审计或技术包 |
| `dq_temporal` | 前景活动数据 | 使用同一具有代表性的时期，通常为连续 12 个月，并对齐输入、输出、库存变化、产量和废物记录。 | 带日期仪表、发票、生产报告和库存核对 |
| `dq_measurement` | 质量、能源、水、燃料、排放 | 保留校准、测量分辨率、换算因子、采样方法、检出限和缺失数据处理。 | 校准证书；仪表台账；实验室报告；计算工作簿 |
| `dq_completeness` | 清单覆盖 | 纳入全部适用原子产品流、废物流和基本流；记录并论证每个排除过程或交换，量化其潜在完整性影响。 | 签署的完整性清单、质量和能量平衡、废物登记；ec-pef-method-2021 |
| `dq_uuid` | 未解决非参考身份 | 在精确流、属性、单位和环境介质确认前保持 UUID 单元格为空；评审发布前解决 manifest 中各 row_id 缺口。 | state-code-100 直读和评审决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考流 | 要求 `686dfd81-1397-4b0b-b051-eedb1164e25d` 输出恰为 1 kg，属性为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，且具备全部必需限定信息。 | un-cpc-3-0-structure-2023 |
| `validation_rule_2` | 语义范围 | 确认产品属于非针织或钩编纺织面料制运动服、滑雪服、泳装或其他未另分类服装；拒绝针织或钩编服装和已明确归入其他服装类别的产品。 | un-cpc-3-0-structure-2023 |
| `validation_rule_3` | 路线覆盖 | 要求纳入全部实际前景步骤；要求覆盖已声明裁剪缝制路线中的全部实际里料、填充、膜材、辅料、压胶和整理操作。 | af-pefcr-3-1-2025 |
| `validation_rule_4` | 原子清单 | 要求每张卡解析为一个具体交换；拒绝集合标签以及合并的公用工程、化学品、包装或废物/排放行。 | ec-pef-method-2021 |
| `validation_rule_5` | 过程质量平衡 | 裁剪、组装、整理和最终检验均须核对输入、合格输出、废物、退回和库存变化；标记未解释残差。 | af-pefcr-3-1-2025 |
| `validation_rule_6` | 公用工程和排放 | 报告天然气或柴油时，要求分开的直接燃烧排放行，或有记录的受控设备边界；报告 R-410A 补充量时，要求核对泄漏或回收说明。 | ec-pef-method-2021; jrc-textiles-bref-2023 |
| `validation_rule_7` | BOM 和初级数据 | 要求满足 `dq_bom` 初级数据覆盖，并在适用时提供产品质量、组装损耗、制造技术和能源记录。 | af-pefcr-3-1-2025 |
| `validation_rule_8` | 证据和身份缺口 | 拒绝捏造数量和未核 UUID；数量缺失只可作为前景采集要求，并在 manifest 审查元数据中明确未解决非参考身份。 | ec-pef-method-2021 |
| `validation_rule_9` | 边界和重复计算 | 确认供应商已嵌入的织造、染色、涂层、整理、包装、运输和废物处理没有在前景清单或上游数据集中重复。 | af-pefcr-3-1-2025 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 本 PCR 范围内非针织、非钩编纺织面料制成衣的前景产品制造数据集。 |
| downstream_use | 通过身份、完整性、质量和评审门槛后，可在 process 和 lifecyclemodel 投影中用作 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 对已声明服装、路线、尺码基准、配方、整理、地域、技术、报告期和包装配置进行工厂门口建模；仅可对透明加权且相容的产品和路线汇总。 |
| excluded_use | 消费者使用服务声明、寿命或穿着次数比较、针织或钩编服装、其他服装类别、未披露的纤维/整理组合，或超出所代表产品、地域、技术和时期的比较性声明。 |
| required_metadata | PCR id 和版本；参考 UUID；服装类型；纤维组成；机织面料结构；路线；尺码基准；适用时的克重；整理；辅料；包装；位置；技术；报告期；系统边界；分配；上游数据集；废物去向；评审状态。 |
| required_quality_disclosure | 初级数据覆盖；BOM 覆盖；计量和分配比例；质量平衡残差；缺失数据；未解决 UUID；来源和数据集代表性；排除项；不确定性；核证状态。 |
| update_trigger | 产品范围、参考身份、BOM、结构、路线、整理化学品、场址技术、电力或燃料供应、包装、分配、法规、来源方法发生实质变化，或前景数据超过已声明代表性时期。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2023` | `official_guidance` | 联合国统计司，《产品总分类 3.0 版结构》，代码 28236，2023 年背景文件。https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf（检索于 2026-08-13）。 | 精确外部类别边界及与相邻服装子类的排除关系。 |
| `ec-pef-method-2021` | `official_guidance` | 欧盟委员会，委员会建议 (EU) 2021/2279，附件 I，产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-13）。 | 功能单位/参考流、前景数据、完整性、分配、电力、数据质量和校验原则。 |
| `af-pefcr-3-1-2025` | `standard` | 服装与鞋类技术秘书处，《服装与鞋类产品环境足迹类别规则》，3.1 版，2025-04-29。官方项目记录：https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/（检索于 2026-08-13）。 | 服装过程分解；裁剪、组装、性能整理、包装、BOM、制造损耗、初级数据、分配和质量规则。 |
| `jrc-textiles-bref-2023` | `official_guidance` | 欧盟委员会联合研究中心，《纺织工业最佳可行技术参考文件》，EUR 31392 EN，JRC131874，DOI:10.2760/355887，2023。https://publications.jrc.ec.europa.eu/repository/handle/JRC131874（检索于 2026-08-13）。 | 条件性湿法和干法整理、涂层、层压、印花、资源、废水和直接排放覆盖。 |
